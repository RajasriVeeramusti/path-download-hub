export interface Milestone {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  skills: string[];
  completed?: boolean;
}

export interface StudyTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Prerequisite {
  id: string;
  name: string;
  importance: 'required' | 'recommended' | 'optional';
  description: string;
}

export interface CareerPath {
  title: string;
  salary: string;
  demand: 'High' | 'Medium' | 'Low';
  description: string;
}

export interface DomainGuidance {
  pathId: string;
  overview: string;
  totalDuration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: Prerequisite[];
  milestones: Milestone[];
  studyTips: StudyTip[];
  careerPaths: CareerPath[];
  weeklyCommitment: string;
  projectIdeas: string[];
}

export const domainGuidance: DomainGuidance[] = [
  {
    pathId: 'web-dev',
    overview: 'Web Development is one of the most in-demand skills in the tech industry. This path takes you from HTML basics to building full-stack applications with modern frameworks like React and Next.js.',
    totalDuration: '4-6 months',
    difficulty: 'Beginner',
    weeklyCommitment: '15-20 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Basic Computer Skills', importance: 'required', description: 'Comfortable with file management and using a web browser' },
      { id: 'pre-2', name: 'Problem-Solving Mindset', importance: 'required', description: 'Ability to break down problems into smaller steps' },
      { id: 'pre-3', name: 'Text Editor Familiarity', importance: 'recommended', description: 'Basic experience with VS Code or similar editor' },
      { id: 'pre-4', name: 'Basic Math', importance: 'optional', description: 'Understanding of basic algebra helps with programming logic' }
    ],
    milestones: [
      { id: 'm1', title: 'HTML & CSS Foundations', description: 'Master semantic HTML and modern CSS layouts', estimatedTime: '2-3 weeks', skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'] },
      { id: 'm2', title: 'JavaScript Essentials', description: 'Learn core JavaScript concepts and DOM manipulation', estimatedTime: '3-4 weeks', skills: ['Variables', 'Functions', 'Arrays', 'Objects', 'ES6+', 'DOM API'] },
      { id: 'm3', title: 'React Fundamentals', description: 'Build interactive UIs with React components', estimatedTime: '3-4 weeks', skills: ['Components', 'Props', 'State', 'Hooks', 'JSX'] },
      { id: 'm4', title: 'Advanced React & State Management', description: 'Master complex state and side effects', estimatedTime: '2-3 weeks', skills: ['Context API', 'Custom Hooks', 'React Query', 'Redux'] },
      { id: 'm5', title: 'Full-Stack Development', description: 'Connect frontend to backend services', estimatedTime: '3-4 weeks', skills: ['APIs', 'REST', 'Authentication', 'Database Integration'] },
      { id: 'm6', title: 'Portfolio & Deployment', description: 'Build projects and deploy to production', estimatedTime: '2-3 weeks', skills: ['Git', 'Vercel', 'Portfolio Projects', 'Performance'] }
    ],
    studyTips: [
      { id: 't1', title: 'Code Every Day', description: 'Even 30 minutes of daily coding builds muscle memory and keeps concepts fresh.', icon: '💪' },
      { id: 't2', title: 'Build Real Projects', description: 'Apply what you learn by building actual websites. Start simple and increase complexity.', icon: '🏗️' },
      { id: 't3', title: 'Read Documentation', description: 'MDN and official docs are your best friends. Learn to navigate them efficiently.', icon: '📚' },
      { id: 't4', title: 'Join Communities', description: 'Engage with Discord servers, Reddit, and Twitter to learn from others.', icon: '👥' },
      { id: 't5', title: 'Debug Actively', description: 'When stuck, use browser dev tools. Understanding errors makes you a better developer.', icon: '🔍' },
      { id: 't6', title: 'Version Control Early', description: 'Start using Git from day one. It\'s essential for collaboration and tracking progress.', icon: '🌿' }
    ],
    careerPaths: [
      { title: 'Frontend Developer', salary: '$60,000 - $120,000', demand: 'High', description: 'Build user interfaces and client-side applications' },
      { title: 'Full-Stack Developer', salary: '$80,000 - $150,000', demand: 'High', description: 'Work on both frontend and backend systems' },
      { title: 'React Developer', salary: '$70,000 - $140,000', demand: 'High', description: 'Specialize in React ecosystem and modern web apps' },
      { title: 'UI Engineer', salary: '$75,000 - $130,000', demand: 'Medium', description: 'Focus on design implementation and component libraries' }
    ],
    projectIdeas: [
      'Personal portfolio website',
      'Todo app with local storage',
      'Weather dashboard with API integration',
      'E-commerce product page',
      'Blog with CMS integration',
      'Real-time chat application'
    ]
  },
  {
    pathId: 'data-science',
    overview: 'Data Science combines statistics, programming, and domain knowledge to extract insights from data. This path covers Python, data analysis, visualization, and machine learning fundamentals.',
    totalDuration: '6-8 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '20-25 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Basic Statistics', importance: 'required', description: 'Understanding of mean, median, standard deviation, and probability' },
      { id: 'pre-2', name: 'Linear Algebra Basics', importance: 'recommended', description: 'Vectors, matrices, and basic operations' },
      { id: 'pre-3', name: 'Programming Fundamentals', importance: 'recommended', description: 'Basic experience with any programming language' },
      { id: 'pre-4', name: 'Excel/Spreadsheets', importance: 'optional', description: 'Familiarity with data manipulation in spreadsheets' }
    ],
    milestones: [
      { id: 'm1', title: 'Python Programming', description: 'Master Python syntax, functions, and OOP', estimatedTime: '3-4 weeks', skills: ['Python Basics', 'Functions', 'Classes', 'Error Handling', 'Modules'] },
      { id: 'm2', title: 'Data Manipulation', description: 'Learn NumPy and Pandas for data wrangling', estimatedTime: '3-4 weeks', skills: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Data Transformation'] },
      { id: 'm3', title: 'Data Visualization', description: 'Create compelling visualizations', estimatedTime: '2-3 weeks', skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Design'] },
      { id: 'm4', title: 'Statistical Analysis', description: 'Apply statistical methods to data', estimatedTime: '3-4 weeks', skills: ['Hypothesis Testing', 'Regression', 'Correlation', 'A/B Testing'] },
      { id: 'm5', title: 'Machine Learning', description: 'Build predictive models with scikit-learn', estimatedTime: '4-5 weeks', skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'] },
      { id: 'm6', title: 'Capstone Project', description: 'End-to-end data science project', estimatedTime: '3-4 weeks', skills: ['Problem Framing', 'Data Pipeline', 'Model Deployment', 'Presentation'] }
    ],
    studyTips: [
      { id: 't1', title: 'Practice with Real Data', description: 'Use Kaggle datasets to work on real-world problems and learn from community solutions.', icon: '📊' },
      { id: 't2', title: 'Document Your Work', description: 'Use Jupyter notebooks to document your analysis process and findings.', icon: '📝' },
      { id: 't3', title: 'Learn the Math', description: 'Understanding the math behind algorithms helps you apply them correctly.', icon: '🧮' },
      { id: 't4', title: 'Start Simple', description: 'Begin with simple models and add complexity only when needed.', icon: '🎯' },
      { id: 't5', title: 'Communicate Findings', description: 'Practice explaining technical results to non-technical audiences.', icon: '🎤' },
      { id: 't6', title: 'Stay Updated', description: 'Follow data science blogs, papers, and conferences to learn new techniques.', icon: '📰' }
    ],
    careerPaths: [
      { title: 'Data Analyst', salary: '$55,000 - $95,000', demand: 'High', description: 'Analyze data and create reports for business insights' },
      { title: 'Data Scientist', salary: '$90,000 - $160,000', demand: 'High', description: 'Build predictive models and extract insights from data' },
      { title: 'Machine Learning Engineer', salary: '$100,000 - $180,000', demand: 'High', description: 'Deploy and maintain ML models in production' },
      { title: 'Business Intelligence Analyst', salary: '$65,000 - $110,000', demand: 'Medium', description: 'Create dashboards and business reports' }
    ],
    projectIdeas: [
      'Exploratory data analysis on a public dataset',
      'Customer segmentation using clustering',
      'Sales prediction model',
      'Sentiment analysis on social media',
      'Recommendation system',
      'Time series forecasting'
    ]
  },
  {
    pathId: 'ui-ux',
    overview: 'UI/UX Design focuses on creating intuitive, beautiful, and user-centered digital experiences. This path covers design principles, tools, research methods, and modern design systems.',
    totalDuration: '3-5 months',
    difficulty: 'Beginner',
    weeklyCommitment: '12-18 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Visual Awareness', importance: 'required', description: 'Appreciation for good design and attention to detail' },
      { id: 'pre-2', name: 'Empathy', importance: 'required', description: 'Ability to understand user needs and perspectives' },
      { id: 'pre-3', name: 'Basic Computer Skills', importance: 'required', description: 'Comfortable with digital tools and software' },
      { id: 'pre-4', name: 'Creativity', importance: 'recommended', description: 'Willingness to explore different solutions' }
    ],
    milestones: [
      { id: 'm1', title: 'Design Fundamentals', description: 'Learn color theory, typography, and visual hierarchy', estimatedTime: '2-3 weeks', skills: ['Color Theory', 'Typography', 'Layout', 'Visual Hierarchy'] },
      { id: 'm2', title: 'UI Design Principles', description: 'Master interface design patterns and best practices', estimatedTime: '2-3 weeks', skills: ['Design Patterns', 'Consistency', 'Affordance', 'Feedback'] },
      { id: 'm3', title: 'Design Tools', description: 'Become proficient in Figma and prototyping', estimatedTime: '3-4 weeks', skills: ['Figma', 'Components', 'Auto Layout', 'Prototyping'] },
      { id: 'm4', title: 'UX Research', description: 'Conduct user research and usability testing', estimatedTime: '2-3 weeks', skills: ['User Interviews', 'Personas', 'Journey Maps', 'Usability Testing'] },
      { id: 'm5', title: 'Design Systems', description: 'Create scalable and consistent design systems', estimatedTime: '2-3 weeks', skills: ['Component Libraries', 'Documentation', 'Design Tokens', 'Accessibility'] },
      { id: 'm6', title: 'Portfolio Development', description: 'Document case studies and build your portfolio', estimatedTime: '2-3 weeks', skills: ['Case Studies', 'Storytelling', 'Presentation', 'Portfolio'] }
    ],
    studyTips: [
      { id: 't1', title: 'Study Great Design', description: 'Analyze apps and websites you love. Understand why they work well.', icon: '👀' },
      { id: 't2', title: 'Recreate Designs', description: 'Practice by recreating existing designs pixel-perfect in Figma.', icon: '🎨' },
      { id: 't3', title: 'Seek Feedback', description: 'Share your work and get constructive criticism from other designers.', icon: '💬' },
      { id: 't4', title: 'Understand Users', description: 'Talk to real users whenever possible. Their insights are invaluable.', icon: '🎯' },
      { id: 't5', title: 'Learn Basic Code', description: 'Understanding HTML/CSS helps you design implementable solutions.', icon: '💻' },
      { id: 't6', title: 'Build a Network', description: 'Connect with other designers on LinkedIn, Dribbble, and Behance.', icon: '🤝' }
    ],
    careerPaths: [
      { title: 'UI Designer', salary: '$55,000 - $100,000', demand: 'High', description: 'Design beautiful and functional user interfaces' },
      { title: 'UX Designer', salary: '$70,000 - $120,000', demand: 'High', description: 'Research and design user-centered experiences' },
      { title: 'Product Designer', salary: '$80,000 - $150,000', demand: 'High', description: 'Own end-to-end product design from research to delivery' },
      { title: 'Design System Lead', salary: '$100,000 - $160,000', demand: 'Medium', description: 'Build and maintain design systems for organizations' }
    ],
    projectIdeas: [
      'Redesign an existing app',
      'Design a mobile banking app',
      'Create a design system',
      'E-commerce checkout flow',
      'Health and fitness app',
      'SaaS dashboard design'
    ]
  },
  {
    pathId: 'mobile-dev',
    overview: 'Mobile Development enables you to build applications for iOS and Android devices. This path covers both cross-platform (React Native, Flutter) and native development approaches.',
    totalDuration: '5-7 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '18-22 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Programming Fundamentals', importance: 'required', description: 'Experience with at least one programming language' },
      { id: 'pre-2', name: 'JavaScript Knowledge', importance: 'recommended', description: 'Helpful for React Native development' },
      { id: 'pre-3', name: 'Mobile Device Familiarity', importance: 'required', description: 'Regular user of iOS or Android devices' },
      { id: 'pre-4', name: 'Web Development Basics', importance: 'optional', description: 'HTML, CSS, and JS knowledge speeds up learning' }
    ],
    milestones: [
      { id: 'm1', title: 'Mobile Design Principles', description: 'Understand platform-specific design guidelines', estimatedTime: '1-2 weeks', skills: ['iOS HIG', 'Material Design', 'Mobile UX', 'Touch Interactions'] },
      { id: 'm2', title: 'React Native Basics', description: 'Build cross-platform apps with JavaScript', estimatedTime: '3-4 weeks', skills: ['Components', 'Styling', 'Navigation', 'Native Modules'] },
      { id: 'm3', title: 'State Management', description: 'Manage complex app state effectively', estimatedTime: '2-3 weeks', skills: ['Redux', 'Context API', 'Zustand', 'AsyncStorage'] },
      { id: 'm4', title: 'Native Features', description: 'Integrate device capabilities', estimatedTime: '3-4 weeks', skills: ['Camera', 'Geolocation', 'Push Notifications', 'Offline Storage'] },
      { id: 'm5', title: 'Testing & Debugging', description: 'Write tests and debug mobile apps', estimatedTime: '2-3 weeks', skills: ['Jest', 'Detox', 'Debugging', 'Performance Profiling'] },
      { id: 'm6', title: 'App Store Publishing', description: 'Deploy apps to app stores', estimatedTime: '2 weeks', skills: ['App Store Connect', 'Google Play Console', 'App Signing', 'Store Optimization'] }
    ],
    studyTips: [
      { id: 't1', title: 'Test on Real Devices', description: 'Emulators are helpful, but always test on actual phones and tablets.', icon: '📱' },
      { id: 't2', title: 'Focus on Performance', description: 'Mobile users expect fast, smooth experiences. Optimize early and often.', icon: '⚡' },
      { id: 't3', title: 'Learn Platform Guidelines', description: 'iOS and Android have different UX patterns. Respect platform conventions.', icon: '📐' },
      { id: 't4', title: 'Handle Offline States', description: 'Mobile apps need to work with intermittent connectivity.', icon: '📡' },
      { id: 't5', title: 'Start with Cross-Platform', description: 'React Native or Flutter lets you ship to both platforms faster.', icon: '🔀' },
      { id: 't6', title: 'Join Developer Programs', description: 'Sign up for Apple and Google developer programs early.', icon: '🎫' }
    ],
    careerPaths: [
      { title: 'React Native Developer', salary: '$70,000 - $130,000', demand: 'High', description: 'Build cross-platform mobile apps with JavaScript' },
      { title: 'iOS Developer', salary: '$80,000 - $150,000', demand: 'High', description: 'Create native iOS applications with Swift' },
      { title: 'Android Developer', salary: '$75,000 - $140,000', demand: 'High', description: 'Build native Android apps with Kotlin' },
      { title: 'Flutter Developer', salary: '$70,000 - $130,000', demand: 'Medium', description: 'Create beautiful cross-platform apps with Dart' }
    ],
    projectIdeas: [
      'Simple todo list app',
      'Weather app with location',
      'Expense tracker',
      'Recipe app with favorites',
      'Fitness tracking app',
      'Social media clone'
    ]
  },
  {
    pathId: 'cloud-computing',
    overview: 'Cloud Computing is the backbone of modern infrastructure. This path covers major cloud platforms (AWS, Azure, GCP), containerization, and infrastructure as code.',
    totalDuration: '4-6 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '15-20 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Linux Basics', importance: 'required', description: 'Command line navigation and basic shell commands' },
      { id: 'pre-2', name: 'Networking Fundamentals', importance: 'required', description: 'Understanding of IP addresses, DNS, HTTP' },
      { id: 'pre-3', name: 'Programming Knowledge', importance: 'recommended', description: 'Experience with Python or similar language' },
      { id: 'pre-4', name: 'System Administration', importance: 'optional', description: 'Basic server management experience' }
    ],
    milestones: [
      { id: 'm1', title: 'Cloud Fundamentals', description: 'Understand cloud models and core services', estimatedTime: '2-3 weeks', skills: ['IaaS', 'PaaS', 'SaaS', 'Cloud Economics'] },
      { id: 'm2', title: 'AWS Core Services', description: 'Master essential AWS services', estimatedTime: '4-5 weeks', skills: ['EC2', 'S3', 'RDS', 'Lambda', 'VPC', 'IAM'] },
      { id: 'm3', title: 'Containerization', description: 'Learn Docker and container orchestration', estimatedTime: '3-4 weeks', skills: ['Docker', 'Docker Compose', 'Container Registry', 'Kubernetes Basics'] },
      { id: 'm4', title: 'Infrastructure as Code', description: 'Automate infrastructure with Terraform', estimatedTime: '2-3 weeks', skills: ['Terraform', 'CloudFormation', 'State Management', 'Modules'] },
      { id: 'm5', title: 'Multi-Cloud & Advanced', description: 'Explore Azure, GCP, and advanced patterns', estimatedTime: '3-4 weeks', skills: ['Azure', 'GCP', 'Multi-Cloud', 'Serverless Architecture'] },
      { id: 'm6', title: 'Certification Prep', description: 'Prepare for AWS Solutions Architect certification', estimatedTime: '3-4 weeks', skills: ['Exam Practice', 'Architecture Patterns', 'Best Practices'] }
    ],
    studyTips: [
      { id: 't1', title: 'Use Free Tiers', description: 'AWS, Azure, and GCP offer free tiers. Use them extensively for practice.', icon: '💰' },
      { id: 't2', title: 'Get Certified', description: 'Cloud certifications validate your skills and boost your resume.', icon: '🏆' },
      { id: 't3', title: 'Build Real Projects', description: 'Deploy actual applications to understand real-world challenges.', icon: '🏗️' },
      { id: 't4', title: 'Learn Security First', description: 'Cloud security is critical. Never skip security best practices.', icon: '🔒' },
      { id: 't5', title: 'Automate Everything', description: 'Practice infrastructure as code from the start. Avoid manual setup.', icon: '🤖' },
      { id: 't6', title: 'Monitor Costs', description: 'Set up billing alerts. Cloud costs can escalate quickly.', icon: '📊' }
    ],
    careerPaths: [
      { title: 'Cloud Engineer', salary: '$80,000 - $140,000', demand: 'High', description: 'Design and manage cloud infrastructure' },
      { title: 'Cloud Architect', salary: '$120,000 - $200,000', demand: 'High', description: 'Design large-scale cloud solutions' },
      { title: 'DevOps Engineer', salary: '$90,000 - $160,000', demand: 'High', description: 'Automate deployment and infrastructure' },
      { title: 'Site Reliability Engineer', salary: '$110,000 - $180,000', demand: 'High', description: 'Ensure system reliability and performance' }
    ],
    projectIdeas: [
      'Deploy a static website on S3',
      'Set up a CI/CD pipeline',
      'Create a serverless API',
      'Containerize an application',
      'Multi-region deployment',
      'Kubernetes cluster setup'
    ]
  },
  {
    pathId: 'cybersecurity',
    overview: 'Cybersecurity protects systems, networks, and data from digital attacks. This path covers security fundamentals, ethical hacking, and security operations.',
    totalDuration: '6-9 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '18-24 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Networking Knowledge', importance: 'required', description: 'Understanding of TCP/IP, DNS, firewalls' },
      { id: 'pre-2', name: 'Linux Proficiency', importance: 'required', description: 'Command line skills and system administration' },
      { id: 'pre-3', name: 'Programming Basics', importance: 'recommended', description: 'Python or scripting language experience' },
      { id: 'pre-4', name: 'Operating Systems', importance: 'recommended', description: 'Understanding of Windows and Linux internals' }
    ],
    milestones: [
      { id: 'm1', title: 'Security Fundamentals', description: 'Learn core security concepts and principles', estimatedTime: '2-3 weeks', skills: ['CIA Triad', 'Risk Management', 'Security Policies', 'Compliance'] },
      { id: 'm2', title: 'Network Security', description: 'Secure networks and understand attacks', estimatedTime: '3-4 weeks', skills: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Monitoring'] },
      { id: 'm3', title: 'Web Security', description: 'Understand and prevent web vulnerabilities', estimatedTime: '3-4 weeks', skills: ['OWASP Top 10', 'XSS', 'SQL Injection', 'CSRF'] },
      { id: 'm4', title: 'Cryptography', description: 'Implement encryption and secure communications', estimatedTime: '2-3 weeks', skills: ['Encryption', 'Hashing', 'PKI', 'Digital Signatures'] },
      { id: 'm5', title: 'Ethical Hacking', description: 'Learn penetration testing techniques', estimatedTime: '4-5 weeks', skills: ['Reconnaissance', 'Exploitation', 'Post-Exploitation', 'Reporting'] },
      { id: 'm6', title: 'Incident Response', description: 'Handle and investigate security incidents', estimatedTime: '2-3 weeks', skills: ['Incident Handling', 'Forensics', 'Malware Analysis', 'Recovery'] }
    ],
    studyTips: [
      { id: 't1', title: 'Practice in Labs', description: 'Use platforms like TryHackMe and HackTheBox for hands-on practice.', icon: '🧪' },
      { id: 't2', title: 'Stay Ethical', description: 'Only practice on systems you own or have explicit permission to test.', icon: '⚖️' },
      { id: 't3', title: 'Keep Learning', description: 'Security threats evolve daily. Subscribe to security news and blogs.', icon: '📰' },
      { id: 't4', title: 'Get Certified', description: 'Certifications like Security+, CEH, OSCP are valued in the industry.', icon: '🏆' },
      { id: 't5', title: 'Build a Home Lab', description: 'Set up virtual machines to safely practice attacks and defenses.', icon: '🏠' },
      { id: 't6', title: 'Network with Peers', description: 'Join security communities and attend CTF competitions.', icon: '🤝' }
    ],
    careerPaths: [
      { title: 'Security Analyst', salary: '$65,000 - $110,000', demand: 'High', description: 'Monitor and respond to security threats' },
      { title: 'Penetration Tester', salary: '$80,000 - $140,000', demand: 'High', description: 'Test systems for vulnerabilities' },
      { title: 'Security Engineer', salary: '$100,000 - $170,000', demand: 'High', description: 'Design and implement security solutions' },
      { title: 'Security Architect', salary: '$130,000 - $200,000', demand: 'Medium', description: 'Design enterprise security architecture' }
    ],
    projectIdeas: [
      'Set up a home security lab',
      'Complete CTF challenges',
      'Build a password manager',
      'Create a security scanner',
      'Analyze malware samples',
      'Security audit a web app'
    ]
  },
  {
    pathId: 'devops',
    overview: 'DevOps bridges development and operations, enabling faster and more reliable software delivery. This path covers CI/CD, automation, monitoring, and infrastructure management.',
    totalDuration: '4-6 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '15-20 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Git Version Control', importance: 'required', description: 'Branching, merging, and collaboration workflows' },
      { id: 'pre-2', name: 'Linux Administration', importance: 'required', description: 'Command line and system management' },
      { id: 'pre-3', name: 'Programming Skills', importance: 'recommended', description: 'Python, Bash, or similar scripting language' },
      { id: 'pre-4', name: 'Networking Basics', importance: 'recommended', description: 'Understanding of HTTP, DNS, and networking' }
    ],
    milestones: [
      { id: 'm1', title: 'DevOps Culture', description: 'Understand DevOps principles and practices', estimatedTime: '1-2 weeks', skills: ['Agile', 'Collaboration', 'Continuous Improvement', 'Automation Mindset'] },
      { id: 'm2', title: 'Version Control & Git', description: 'Master Git workflows and collaboration', estimatedTime: '2 weeks', skills: ['Git Flow', 'Pull Requests', 'Code Review', 'Branch Strategies'] },
      { id: 'm3', title: 'CI/CD Pipelines', description: 'Build automated testing and deployment pipelines', estimatedTime: '3-4 weeks', skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Automated Testing'] },
      { id: 'm4', title: 'Containerization', description: 'Package and deploy applications with Docker', estimatedTime: '2-3 weeks', skills: ['Docker', 'Docker Compose', 'Container Registries', 'Multi-stage Builds'] },
      { id: 'm5', title: 'Orchestration & IaC', description: 'Manage infrastructure at scale', estimatedTime: '3-4 weeks', skills: ['Kubernetes', 'Terraform', 'Ansible', 'Configuration Management'] },
      { id: 'm6', title: 'Monitoring & Observability', description: 'Monitor systems and respond to incidents', estimatedTime: '2-3 weeks', skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerting'] }
    ],
    studyTips: [
      { id: 't1', title: 'Automate Repetitive Tasks', description: 'If you do something more than twice, write a script for it.', icon: '🤖' },
      { id: 't2', title: 'Fail Fast, Learn Fast', description: 'Build systems that fail safely and provide quick feedback.', icon: '⚡' },
      { id: 't3', title: 'Document Everything', description: 'Good documentation prevents future headaches for you and your team.', icon: '📝' },
      { id: 't4', title: 'Practice Infrastructure as Code', description: 'Treat infrastructure like application code with version control.', icon: '📦' },
      { id: 't5', title: 'Monitor Proactively', description: 'Set up dashboards and alerts before problems occur.', icon: '📊' },
      { id: 't6', title: 'Embrace Containers', description: 'Containerization solves many deployment consistency issues.', icon: '🐳' }
    ],
    careerPaths: [
      { title: 'DevOps Engineer', salary: '$90,000 - $160,000', demand: 'High', description: 'Automate development and operations processes' },
      { title: 'Platform Engineer', salary: '$100,000 - $170,000', demand: 'High', description: 'Build internal developer platforms' },
      { title: 'Release Engineer', salary: '$85,000 - $140,000', demand: 'Medium', description: 'Manage software release processes' },
      { title: 'SRE', salary: '$110,000 - $180,000', demand: 'High', description: 'Ensure reliability and performance of systems' }
    ],
    projectIdeas: [
      'Set up a CI/CD pipeline for a personal project',
      'Containerize a multi-service application',
      'Create a monitoring dashboard',
      'Automate server provisioning',
      'Build a deployment bot',
      'Set up blue-green deployments'
    ]
  },
  {
    pathId: 'blockchain',
    overview: 'Blockchain technology enables decentralized applications and digital assets. This path covers blockchain fundamentals, smart contracts, and Web3 development.',
    totalDuration: '5-7 months',
    difficulty: 'Advanced',
    weeklyCommitment: '18-22 hours',
    prerequisites: [
      { id: 'pre-1', name: 'JavaScript Proficiency', importance: 'required', description: 'Strong JS skills including async programming' },
      { id: 'pre-2', name: 'Web Development', importance: 'required', description: 'Experience building web applications' },
      { id: 'pre-3', name: 'Cryptography Basics', importance: 'recommended', description: 'Understanding of hashing and encryption' },
      { id: 'pre-4', name: 'Economics Basics', importance: 'optional', description: 'Understanding of incentive mechanisms' }
    ],
    milestones: [
      { id: 'm1', title: 'Blockchain Fundamentals', description: 'Understand distributed ledgers and consensus', estimatedTime: '2-3 weeks', skills: ['Distributed Systems', 'Consensus', 'Cryptography', 'Mining'] },
      { id: 'm2', title: 'Ethereum & EVM', description: 'Learn Ethereum architecture and ecosystem', estimatedTime: '2-3 weeks', skills: ['Ethereum', 'EVM', 'Gas', 'Wallets', 'Transactions'] },
      { id: 'm3', title: 'Solidity Programming', description: 'Write and deploy smart contracts', estimatedTime: '4-5 weeks', skills: ['Solidity', 'Smart Contracts', 'Testing', 'Security Patterns'] },
      { id: 'm4', title: 'Web3 Development', description: 'Build decentralized applications', estimatedTime: '3-4 weeks', skills: ['Web3.js', 'Ethers.js', 'MetaMask', 'IPFS'] },
      { id: 'm5', title: 'DeFi & NFTs', description: 'Explore decentralized finance and NFTs', estimatedTime: '3-4 weeks', skills: ['DeFi Protocols', 'Token Standards', 'NFT Creation', 'Marketplaces'] },
      { id: 'm6', title: 'Advanced Topics', description: 'Explore L2, cross-chain, and security', estimatedTime: '2-3 weeks', skills: ['Layer 2', 'Bridges', 'Security Audits', 'Governance'] }
    ],
    studyTips: [
      { id: 't1', title: 'Use Testnets', description: 'Practice on testnets like Sepolia before deploying to mainnet.', icon: '🧪' },
      { id: 't2', title: 'Security First', description: 'Smart contract bugs can be catastrophic. Learn security patterns early.', icon: '🔒' },
      { id: 't3', title: 'Stay Updated', description: 'Blockchain space moves fast. Follow key developers and protocols.', icon: '📰' },
      { id: 't4', title: 'Join DAOs', description: 'Participate in DAOs to understand governance and community.', icon: '🏛️' },
      { id: 't5', title: 'Read Audits', description: 'Study security audit reports to learn common vulnerabilities.', icon: '📋' },
      { id: 't6', title: 'Build in Public', description: 'Share your projects on Twitter and Discord for feedback.', icon: '🌐' }
    ],
    careerPaths: [
      { title: 'Blockchain Developer', salary: '$90,000 - $160,000', demand: 'High', description: 'Build decentralized applications and protocols' },
      { title: 'Smart Contract Developer', salary: '$100,000 - $180,000', demand: 'High', description: 'Write and audit smart contracts' },
      { title: 'Web3 Frontend Developer', salary: '$80,000 - $140,000', demand: 'Medium', description: 'Build user interfaces for dApps' },
      { title: 'Protocol Engineer', salary: '$120,000 - $200,000', demand: 'Medium', description: 'Design and build blockchain protocols' }
    ],
    projectIdeas: [
      'Create an ERC-20 token',
      'Build an NFT minting dApp',
      'Develop a simple DEX',
      'Create a DAO governance system',
      'Build a decentralized storage app',
      'Launch a crowdfunding platform'
    ]
  },
  {
    pathId: 'ai-ml',
    overview: 'Artificial Intelligence and Machine Learning are transforming every industry. This path covers ML fundamentals, deep learning, and practical AI application development.',
    totalDuration: '8-12 months',
    difficulty: 'Advanced',
    weeklyCommitment: '20-25 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Python Programming', importance: 'required', description: 'Strong Python skills including OOP and libraries' },
      { id: 'pre-2', name: 'Mathematics', importance: 'required', description: 'Linear algebra, calculus, probability, and statistics' },
      { id: 'pre-3', name: 'Data Science Basics', importance: 'recommended', description: 'Experience with pandas, numpy, and data analysis' },
      { id: 'pre-4', name: 'Computer Science', importance: 'recommended', description: 'Algorithms and data structures knowledge' }
    ],
    milestones: [
      { id: 'm1', title: 'ML Foundations', description: 'Understand core ML concepts and mathematics', estimatedTime: '3-4 weeks', skills: ['Linear Algebra', 'Calculus', 'Probability', 'Optimization'] },
      { id: 'm2', title: 'Classical ML', description: 'Master traditional ML algorithms', estimatedTime: '4-5 weeks', skills: ['Regression', 'Classification', 'Clustering', 'Ensemble Methods'] },
      { id: 'm3', title: 'Deep Learning Basics', description: 'Build neural networks with PyTorch/TensorFlow', estimatedTime: '4-5 weeks', skills: ['Neural Networks', 'CNNs', 'RNNs', 'Training Techniques'] },
      { id: 'm4', title: 'NLP & Computer Vision', description: 'Work with text and image data', estimatedTime: '4-5 weeks', skills: ['Transformers', 'BERT', 'Image Classification', 'Object Detection'] },
      { id: 'm5', title: 'LLMs & GenAI', description: 'Understand and work with large language models', estimatedTime: '3-4 weeks', skills: ['GPT', 'Prompt Engineering', 'Fine-tuning', 'RAG'] },
      { id: 'm6', title: 'MLOps & Deployment', description: 'Deploy and maintain ML models in production', estimatedTime: '3-4 weeks', skills: ['MLflow', 'Docker', 'Model Serving', 'Monitoring'] }
    ],
    studyTips: [
      { id: 't1', title: 'Master the Math', description: 'Strong mathematical foundations are essential for understanding ML deeply.', icon: '🧮' },
      { id: 't2', title: 'Implement from Scratch', description: 'Build algorithms from scratch before using libraries.', icon: '⚙️' },
      { id: 't3', title: 'Read Papers', description: 'Learn to read research papers. Start with seminal works.', icon: '📄' },
      { id: 't4', title: 'Kaggle Competitions', description: 'Participate in competitions to learn from the community.', icon: '🏆' },
      { id: 't5', title: 'Focus on Data', description: 'Good data often matters more than complex models.', icon: '📊' },
      { id: 't6', title: 'Stay Current', description: 'AI moves fast. Follow conferences like NeurIPS, ICML, and ICLR.', icon: '🚀' }
    ],
    careerPaths: [
      { title: 'ML Engineer', salary: '$110,000 - $180,000', demand: 'High', description: 'Build and deploy machine learning systems' },
      { title: 'AI Research Scientist', salary: '$130,000 - $250,000', demand: 'Medium', description: 'Develop new AI algorithms and methods' },
      { title: 'NLP Engineer', salary: '$100,000 - $170,000', demand: 'High', description: 'Specialize in natural language processing' },
      { title: 'Computer Vision Engineer', salary: '$100,000 - $170,000', demand: 'High', description: 'Work with image and video analysis' }
    ],
    projectIdeas: [
      'Build a recommendation system',
      'Create an image classifier',
      'Develop a chatbot',
      'Sentiment analysis tool',
      'Object detection system',
      'Fine-tune an LLM for specific tasks'
    ]
  },
  {
    pathId: 'game-dev',
    overview: 'Game Development combines art, programming, and design to create interactive experiences. This path covers game engines, programming, and game design principles.',
    totalDuration: '6-9 months',
    difficulty: 'Intermediate',
    weeklyCommitment: '18-24 hours',
    prerequisites: [
      { id: 'pre-1', name: 'Programming Basics', importance: 'required', description: 'Experience with at least one programming language' },
      { id: 'pre-2', name: 'Mathematics', importance: 'required', description: 'Algebra, geometry, and basic physics' },
      { id: 'pre-3', name: 'Passion for Games', importance: 'required', description: 'Play and analyze various games critically' },
      { id: 'pre-4', name: 'Creative Skills', importance: 'optional', description: 'Basic art or music skills are helpful' }
    ],
    milestones: [
      { id: 'm1', title: 'Game Design Fundamentals', description: 'Learn core game design principles', estimatedTime: '2-3 weeks', skills: ['Game Mechanics', 'Player Experience', 'Level Design', 'Balancing'] },
      { id: 'm2', title: 'Game Engine Basics', description: 'Get started with Unity or Unreal', estimatedTime: '3-4 weeks', skills: ['Unity/Unreal', 'Scene Setup', 'Asset Management', 'Editor Tools'] },
      { id: 'm3', title: 'Game Programming', description: 'Implement game mechanics and systems', estimatedTime: '4-5 weeks', skills: ['Player Movement', 'Physics', 'Input Handling', 'AI Basics'] },
      { id: 'm4', title: '2D/3D Graphics', description: 'Work with graphics and animations', estimatedTime: '3-4 weeks', skills: ['Sprites', '3D Models', 'Animation', 'Shaders'] },
      { id: 'm5', title: 'Audio & Polish', description: 'Add sound and polish your game', estimatedTime: '2-3 weeks', skills: ['Sound Effects', 'Music', 'Particle Effects', 'UI Polish'] },
      { id: 'm6', title: 'Publishing & Marketing', description: 'Release and market your game', estimatedTime: '2-3 weeks', skills: ['Steam', 'Itch.io', 'Marketing', 'Community Building'] }
    ],
    studyTips: [
      { id: 't1', title: 'Start Small', description: 'Complete small games before attempting large projects.', icon: '🎯' },
      { id: 't2', title: 'Game Jams', description: 'Participate in game jams to learn under constraints.', icon: '⏰' },
      { id: 't3', title: 'Study Game Design', description: 'Analyze why games you love work so well.', icon: '🎮' },
      { id: 't4', title: 'Get Feedback Early', description: 'Playtest your games with real players frequently.', icon: '👥' },
      { id: 't5', title: 'Finish Projects', description: 'A finished small game teaches more than an unfinished big one.', icon: '✅' },
      { id: 't6', title: 'Learn Version Control', description: 'Use Git to manage your game projects and collaborate.', icon: '🌿' }
    ],
    careerPaths: [
      { title: 'Game Developer', salary: '$60,000 - $120,000', demand: 'Medium', description: 'Build games for various platforms' },
      { title: 'Game Designer', salary: '$55,000 - $110,000', demand: 'Medium', description: 'Design game mechanics and systems' },
      { title: 'Unity Developer', salary: '$70,000 - $130,000', demand: 'High', description: 'Specialize in Unity game development' },
      { title: 'Technical Artist', salary: '$75,000 - $140,000', demand: 'Medium', description: 'Bridge art and programming' }
    ],
    projectIdeas: [
      'Classic game clone (Pong, Snake)',
      'Platformer game',
      '2D puzzle game',
      'Tower defense game',
      'RPG with inventory system',
      '3D exploration game'
    ]
  }
];

export const getGuidanceForPath = (pathId: string): DomainGuidance | undefined => {
  return domainGuidance.find(g => g.pathId === pathId);
};
