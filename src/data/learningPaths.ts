export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'code' | 'article';
  fileUrl: string;
  size: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  resources: Resource[];
}

export const learningPaths: LearningPath[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    resources: [
      {
        id: 'web-1',
        title: 'HTML & CSS Fundamentals',
        description: 'Complete guide to HTML5 and CSS3',
        type: 'pdf',
        fileUrl: '/resources/html-css-guide.pdf',
        size: '2.5 MB'
      },
      {
        id: 'web-2',
        title: 'JavaScript Essentials',
        description: 'Modern JavaScript ES6+ features',
        type: 'pdf',
        fileUrl: '/resources/javascript-essentials.pdf',
        size: '3.1 MB'
      },
      {
        id: 'web-3',
        title: 'React Masterclass',
        description: 'Build modern web apps with React',
        type: 'video',
        fileUrl: '/resources/react-masterclass.mp4',
        size: '450 MB'
      },
      {
        id: 'web-4',
        title: 'Responsive Design Patterns',
        description: 'Code samples for responsive layouts',
        type: 'code',
        fileUrl: '/resources/responsive-patterns.zip',
        size: '1.2 MB'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Learn Python, data analysis, and machine learning',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
    resources: [
      {
        id: 'ds-1',
        title: 'Python for Data Science',
        description: 'Comprehensive Python programming guide',
        type: 'pdf',
        fileUrl: '/resources/python-data-science.pdf',
        size: '4.2 MB'
      },
      {
        id: 'ds-2',
        title: 'Pandas & NumPy Tutorial',
        description: 'Data manipulation with Python libraries',
        type: 'article',
        fileUrl: '/resources/pandas-numpy.pdf',
        size: '1.8 MB'
      },
      {
        id: 'ds-3',
        title: 'Machine Learning Basics',
        description: 'Introduction to ML algorithms',
        type: 'video',
        fileUrl: '/resources/ml-basics.mp4',
        size: '380 MB'
      },
      {
        id: 'ds-4',
        title: 'Data Visualization Projects',
        description: 'Sample projects and code',
        type: 'code',
        fileUrl: '/resources/data-viz-projects.zip',
        size: '2.1 MB'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Create beautiful and user-friendly interfaces',
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
    resources: [
      {
        id: 'ux-1',
        title: 'Design Principles Guide',
        description: 'Fundamental principles of good design',
        type: 'pdf',
        fileUrl: '/resources/design-principles.pdf',
        size: '3.5 MB'
      },
      {
        id: 'ux-2',
        title: 'Figma Masterclass',
        description: 'Complete Figma design tutorial',
        type: 'video',
        fileUrl: '/resources/figma-masterclass.mp4',
        size: '520 MB'
      },
      {
        id: 'ux-3',
        title: 'Color Theory Handbook',
        description: 'Master color in design',
        type: 'pdf',
        fileUrl: '/resources/color-theory.pdf',
        size: '2.8 MB'
      },
      {
        id: 'ux-4',
        title: 'UI Component Library',
        description: 'Reusable design components',
        type: 'code',
        fileUrl: '/resources/ui-components.zip',
        size: '1.5 MB'
      }
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile apps',
    icon: '📱',
    color: 'from-green-500 to-emerald-500',
    resources: [
      {
        id: 'mob-1',
        title: 'React Native Guide',
        description: 'Cross-platform mobile development',
        type: 'pdf',
        fileUrl: '/resources/react-native-guide.pdf',
        size: '3.3 MB'
      },
      {
        id: 'mob-2',
        title: 'Flutter Basics',
        description: 'Getting started with Flutter',
        type: 'video',
        fileUrl: '/resources/flutter-basics.mp4',
        size: '420 MB'
      },
      {
        id: 'mob-3',
        title: 'Mobile UI Patterns',
        description: 'Common mobile interface patterns',
        type: 'article',
        fileUrl: '/resources/mobile-ui-patterns.pdf',
        size: '2.2 MB'
      },
      {
        id: 'mob-4',
        title: 'Sample Mobile Apps',
        description: 'Complete app source code',
        type: 'code',
        fileUrl: '/resources/sample-apps.zip',
        size: '5.8 MB'
      }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Master AWS, Azure, and cloud architecture',
    icon: '☁️',
    color: 'from-indigo-500 to-blue-500',
    resources: [
      {
        id: 'cloud-1',
        title: 'AWS Fundamentals',
        description: 'Introduction to Amazon Web Services',
        type: 'pdf',
        fileUrl: '/resources/aws-fundamentals.pdf',
        size: '3.8 MB'
      },
      {
        id: 'cloud-2',
        title: 'Docker & Kubernetes',
        description: 'Container orchestration guide',
        type: 'video',
        fileUrl: '/resources/docker-kubernetes.mp4',
        size: '480 MB'
      },
      {
        id: 'cloud-3',
        title: 'Serverless Architecture',
        description: 'Build scalable serverless apps',
        type: 'article',
        fileUrl: '/resources/serverless-guide.pdf',
        size: '2.5 MB'
      },
      {
        id: 'cloud-4',
        title: 'Cloud Infrastructure Code',
        description: 'Terraform and CloudFormation templates',
        type: 'code',
        fileUrl: '/resources/infrastructure-code.zip',
        size: '1.9 MB'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn security best practices and ethical hacking',
    icon: '🔒',
    color: 'from-red-500 to-rose-500',
    resources: [
      {
        id: 'sec-1',
        title: 'Security Fundamentals',
        description: 'Core concepts in cybersecurity',
        type: 'pdf',
        fileUrl: '/resources/security-fundamentals.pdf',
        size: '3.2 MB'
      },
      {
        id: 'sec-2',
        title: 'Ethical Hacking Course',
        description: 'Penetration testing techniques',
        type: 'video',
        fileUrl: '/resources/ethical-hacking.mp4',
        size: '550 MB'
      },
      {
        id: 'sec-3',
        title: 'Network Security Guide',
        description: 'Protect your network infrastructure',
        type: 'pdf',
        fileUrl: '/resources/network-security.pdf',
        size: '2.9 MB'
      },
      {
        id: 'sec-4',
        title: 'Security Tools & Scripts',
        description: 'Practical security tools',
        type: 'code',
        fileUrl: '/resources/security-tools.zip',
        size: '2.3 MB'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Master deployment, automation, and infrastructure',
    icon: '⚙️',
    color: 'from-yellow-500 to-orange-500',
    resources: [
      {
        id: 'devops-1',
        title: 'DevOps Fundamentals',
        description: 'Introduction to DevOps culture and practices',
        type: 'pdf',
        fileUrl: '/resources/devops-fundamentals.pdf',
        size: '3.4 MB'
      },
      {
        id: 'devops-2',
        title: 'CI/CD Pipeline Tutorial',
        description: 'Build automated deployment pipelines',
        type: 'video',
        fileUrl: '/resources/cicd-tutorial.mp4',
        size: '410 MB'
      },
      {
        id: 'devops-3',
        title: 'Jenkins & GitHub Actions',
        description: 'Automation tools guide',
        type: 'article',
        fileUrl: '/resources/automation-tools.pdf',
        size: '2.1 MB'
      },
      {
        id: 'devops-4',
        title: 'Infrastructure as Code',
        description: 'Ansible, Terraform templates',
        type: 'code',
        fileUrl: '/resources/iac-templates.zip',
        size: '1.7 MB'
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'Build decentralized applications and smart contracts',
    icon: '⛓️',
    color: 'from-cyan-500 to-blue-500',
    resources: [
      {
        id: 'blockchain-1',
        title: 'Blockchain Basics',
        description: 'Understanding distributed ledger technology',
        type: 'pdf',
        fileUrl: '/resources/blockchain-basics.pdf',
        size: '3.6 MB'
      },
      {
        id: 'blockchain-2',
        title: 'Smart Contracts with Solidity',
        description: 'Ethereum development tutorial',
        type: 'video',
        fileUrl: '/resources/solidity-tutorial.mp4',
        size: '520 MB'
      },
      {
        id: 'blockchain-3',
        title: 'Web3 Development Guide',
        description: 'Build dApps with Web3.js',
        type: 'article',
        fileUrl: '/resources/web3-guide.pdf',
        size: '2.4 MB'
      },
      {
        id: 'blockchain-4',
        title: 'Smart Contract Examples',
        description: 'Sample contracts and dApps',
        type: 'code',
        fileUrl: '/resources/smart-contracts.zip',
        size: '2.8 MB'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Deep learning, neural networks, and AI applications',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500',
    resources: [
      {
        id: 'aiml-1',
        title: 'Deep Learning Foundations',
        description: 'Neural networks and architectures',
        type: 'pdf',
        fileUrl: '/resources/deep-learning.pdf',
        size: '4.5 MB'
      },
      {
        id: 'aiml-2',
        title: 'TensorFlow & PyTorch',
        description: 'Complete ML framework guide',
        type: 'video',
        fileUrl: '/resources/ml-frameworks.mp4',
        size: '580 MB'
      },
      {
        id: 'aiml-3',
        title: 'Natural Language Processing',
        description: 'NLP techniques and transformers',
        type: 'article',
        fileUrl: '/resources/nlp-guide.pdf',
        size: '3.3 MB'
      },
      {
        id: 'aiml-4',
        title: 'ML Model Examples',
        description: 'Pre-trained models and notebooks',
        type: 'code',
        fileUrl: '/resources/ml-models.zip',
        size: '6.2 MB'
      }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Create immersive games with Unity and Unreal Engine',
    icon: '🎮',
    color: 'from-pink-500 to-red-500',
    resources: [
      {
        id: 'game-1',
        title: 'Game Design Principles',
        description: 'Core concepts of game development',
        type: 'pdf',
        fileUrl: '/resources/game-design.pdf',
        size: '3.7 MB'
      },
      {
        id: 'game-2',
        title: 'Unity Complete Course',
        description: '2D and 3D game development',
        type: 'video',
        fileUrl: '/resources/unity-course.mp4',
        size: '620 MB'
      },
      {
        id: 'game-3',
        title: 'Game Physics & Math',
        description: 'Mathematics for game developers',
        type: 'article',
        fileUrl: '/resources/game-math.pdf',
        size: '2.6 MB'
      },
      {
        id: 'game-4',
        title: 'Sample Game Projects',
        description: 'Complete game source code',
        type: 'code',
        fileUrl: '/resources/game-projects.zip',
        size: '8.4 MB'
      }
    ]
  }
];
