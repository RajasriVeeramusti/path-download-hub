import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { GraduationCap, ArrowLeft, Mail, Lock, Eye, EyeOff, KeyRound, Check } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  
  // Password reset states
  const [isResetMode, setIsResetMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    // Check if this is a password reset flow
    const isReset = searchParams.get('reset') === 'true';
    
    if (isReset) {
      // Listen for the PASSWORD_RECOVERY event
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          setIsResetMode(true);
        } else if (event === 'SIGNED_IN' && !isResetMode) {
          navigate("/");
        }
      });

      return () => subscription.unsubscribe();
    } else {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          navigate("/");
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (session && event !== 'PASSWORD_RECOVERY') {
          navigate("/");
        }
        if (event === 'PASSWORD_RECOVERY') {
          setIsResetMode(true);
        }
      });

      return () => subscription.unsubscribe();
    }
  }, [navigate, searchParams, isResetMode]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast.error("This email is already registered. Please login instead.");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("Account created successfully! Please login.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Invalid email or password");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Password reset link sent! Check your email inbox.");
        setShowForgotPassword(false);
        setResetEmail("");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setResetLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setUpdateLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Password updated successfully!");
        setIsResetMode(false);
        setNewPassword("");
        setConfirmPassword("");
        // Sign out and redirect to login
        await supabase.auth.signOut();
        navigate("/auth");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setUpdateLoading(false);
    }
  };

  const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
  const passwordValid = newPassword.length >= 6;

  // Password Reset/Update Form
  if (isResetMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 animate-float">
              <KeyRound className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Set New Password
            </h1>
            <p className="text-muted-foreground mt-2">Create a strong password for your account</p>
          </div>

          <Card className="border-2 border-primary/20 shadow-[var(--shadow-elevated)] glass animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Update Password
              </CardTitle>
              <CardDescription>Enter your new password below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={6}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className={`h-1.5 flex-1 rounded-full transition-colors ${newPassword.length >= 6 ? 'bg-green-500' : newPassword.length >= 3 ? 'bg-yellow-500' : 'bg-muted'}`} />
                    <span className={passwordValid ? 'text-green-600' : 'text-muted-foreground'}>
                      {passwordValid ? 'Strong' : 'Min 6 characters'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={6}
                      className={`pl-10 pr-10 ${confirmPassword && (passwordsMatch ? 'border-green-500 focus-visible:ring-green-500' : 'border-destructive focus-visible:ring-destructive')}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <div className={`flex items-center gap-1.5 text-xs ${passwordsMatch ? 'text-green-600' : 'text-destructive'}`}>
                      {passwordsMatch ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Passwords match</span>
                        </>
                      ) : (
                        <span>Passwords do not match</span>
                      )}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  disabled={updateLoading || !passwordsMatch || !passwordValid}
                >
                  {updateLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Updating...
                    </span>
                  ) : (
                    "Update Password"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Forgot Password Form - Direct password reset
  if (showForgotPassword) {
    const forgotPasswordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
    const forgotPasswordValid = newPassword.length >= 6;

    const handleDirectPasswordReset = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!resetEmail) {
        toast.error("Please enter your email address");
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }

      setResetLoading(true);

      try {
        // First, send reset email to verify ownership
        const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
          redirectTo: `${window.location.origin}/auth?reset=true`,
        });

        if (error) {
          toast.error(error.message);
          return;
        }

        // Send confirmation email via edge function
        const resetLink = `${window.location.origin}/auth?reset=true`;
        const { error: emailError } = await supabase.functions.invoke('send-password-reset', {
          body: { email: resetEmail, resetLink }
        });

        if (emailError) {
          console.error("Email sending error:", emailError);
          // Don't block the flow, just log the error
        }

        toast.success("Password reset link sent! Check your email to confirm the change.");
        setShowForgotPassword(false);
        setResetEmail("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        toast.error("An unexpected error occurred");
      } finally {
        setResetLoading(false);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 animate-float">
              <KeyRound className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Reset Password
            </h1>
            <p className="text-muted-foreground mt-2">Enter your email and create a new password</p>
          </div>

          <Card className="border-2 border-primary/20 shadow-[var(--shadow-elevated)] glass animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Create New Password
              </CardTitle>
              <CardDescription>Enter your email and set your new password</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDirectPasswordReset} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="you@example.com"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="forgot-new-password">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="forgot-new-password"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={6}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className={`h-1.5 flex-1 rounded-full transition-colors ${newPassword.length >= 6 ? 'bg-green-500' : newPassword.length >= 3 ? 'bg-yellow-500' : 'bg-muted'}`} />
                    <span className={forgotPasswordValid ? 'text-green-600' : 'text-muted-foreground'}>
                      {forgotPasswordValid ? 'Strong' : 'Min 6 characters'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="forgot-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="forgot-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={6}
                      className={`pl-10 pr-10 ${confirmPassword && (forgotPasswordsMatch ? 'border-green-500 focus-visible:ring-green-500' : 'border-destructive focus-visible:ring-destructive')}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <div className={`flex items-center gap-1.5 text-xs ${forgotPasswordsMatch ? 'text-green-600' : 'text-destructive'}`}>
                      {forgotPasswordsMatch ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Passwords match</span>
                        </>
                      ) : (
                        <span>Passwords do not match</span>
                      )}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  disabled={resetLoading || !forgotPasswordsMatch || !forgotPasswordValid || !resetEmail}
                >
                  {resetLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    "Reset Password"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setNewPassword("");
                    setConfirmPassword("");
                    setResetEmail("");
                  }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 animate-float">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SmartLearn Platform
          </h1>
          <p className="text-muted-foreground mt-2">Start your personalized learning journey</p>
        </div>

        <Card className="border-2 border-primary/20 shadow-[var(--shadow-elevated)] glass animate-fade-in-up">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Sign in or create an account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Logging in...
                      </span>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Password must be at least 6 characters
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating account...
                      </span>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
