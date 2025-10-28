export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'code' | 'article';
  contentType: string;
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
        title: 'HTML Structure and Semantics',
        description: 'Building accessible web pages',
        type: 'pdf',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: '/resources/html-structure.pdf',
        size: '2.5 MB'
      },
      {
        id: 'web-2',
        title: 'CSS Layouts and Flexbox',
        description: 'Modern layout techniques',
        type: 'pdf',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: '/resources/css-layouts.pdf',
        size: '3.2 MB'
      },
      {
        id: 'web-3',
        title: 'Responsive Design',
        description: 'Media queries and mobile-first approach',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: '/resources/responsive-design.pdf',
        size: '2.1 MB'
      },
      {
        id: 'web-4',
        title: 'JavaScript Variables and Data Types',
        description: 'Understanding primitive and reference types',
        type: 'pdf',
        contentType: 'JavaScript Essentials',
        fileUrl: '/resources/js-variables.pdf',
        size: '2.8 MB'
      },
      {
        id: 'web-5',
        title: 'Functions and Scope',
        description: 'Arrow functions and closures',
        type: 'video',
        contentType: 'JavaScript Essentials',
        fileUrl: '/resources/js-functions.mp4',
        size: '350 MB'
      },
      {
        id: 'web-6',
        title: 'DOM Manipulation',
        description: 'Interacting with web pages dynamically',
        type: 'code',
        contentType: 'JavaScript Essentials',
        fileUrl: '/resources/dom-manipulation.zip',
        size: '1.4 MB'
      },
      {
        id: 'web-7',
        title: 'React Components',
        description: 'Building reusable UI components',
        type: 'video',
        contentType: 'Modern Frameworks',
        fileUrl: '/resources/react-components.mp4',
        size: '420 MB'
      },
      {
        id: 'web-8',
        title: 'React Hooks',
        description: 'State management with hooks',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: '/resources/react-hooks.pdf',
        size: '3.5 MB'
      },
      {
        id: 'web-9',
        title: 'Vue.js Basics',
        description: 'Getting started with Vue framework',
        type: 'video',
        contentType: 'Modern Frameworks',
        fileUrl: '/resources/vue-basics.mp4',
        size: '380 MB'
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
        title: 'Python Basics',
        description: 'Variables, data types, and control structures',
        type: 'pdf',
        contentType: 'Python for Data Science',
        fileUrl: '/resources/python-basics.pdf',
        size: '4.2 MB'
      },
      {
        id: 'ds-2',
        title: 'Python Functions and Modules',
        description: 'Creating reusable code components',
        type: 'pdf',
        contentType: 'Python for Data Science',
        fileUrl: '/resources/python-functions.pdf',
        size: '3.1 MB'
      },
      {
        id: 'ds-3',
        title: 'Object-Oriented Programming',
        description: 'Classes, inheritance, and polymorphism',
        type: 'article',
        contentType: 'Python for Data Science',
        fileUrl: '/resources/python-oop.pdf',
        size: '2.8 MB'
      },
      {
        id: 'ds-4',
        title: 'NumPy Fundamentals',
        description: 'Array operations and mathematical computing',
        type: 'video',
        contentType: 'Data Analysis Libraries',
        fileUrl: '/resources/numpy-fundamentals.mp4',
        size: '320 MB'
      },
      {
        id: 'ds-5',
        title: 'Pandas DataFrames',
        description: 'Data manipulation and analysis',
        type: 'video',
        contentType: 'Data Analysis Libraries',
        fileUrl: '/resources/pandas-dataframes.mp4',
        size: '380 MB'
      },
      {
        id: 'ds-6',
        title: 'Data Cleaning Techniques',
        description: 'Handling missing data and outliers',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: '/resources/data-cleaning.pdf',
        size: '2.3 MB'
      },
      {
        id: 'ds-7',
        title: 'Matplotlib Visualization',
        description: 'Creating plots and charts',
        type: 'code',
        contentType: 'Data Visualization',
        fileUrl: '/resources/matplotlib-viz.zip',
        size: '1.5 MB'
      },
      {
        id: 'ds-8',
        title: 'Seaborn Advanced Plots',
        description: 'Statistical data visualization',
        type: 'code',
        contentType: 'Data Visualization',
        fileUrl: '/resources/seaborn-plots.zip',
        size: '2.1 MB'
      },
      {
        id: 'ds-9',
        title: 'Interactive Dashboards',
        description: 'Building with Plotly and Dash',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: '/resources/interactive-dashboards.pdf',
        size: '3.4 MB'
      },
      {
        id: 'ds-10',
        title: 'Supervised Learning Algorithms',
        description: 'Regression and classification',
        type: 'pdf',
        contentType: 'Machine Learning',
        fileUrl: '/resources/supervised-learning.pdf',
        size: '4.6 MB'
      },
      {
        id: 'ds-11',
        title: 'Unsupervised Learning',
        description: 'Clustering and dimensionality reduction',
        type: 'pdf',
        contentType: 'Machine Learning',
        fileUrl: '/resources/unsupervised-learning.pdf',
        size: '3.9 MB'
      },
      {
        id: 'ds-12',
        title: 'Model Evaluation',
        description: 'Metrics and cross-validation techniques',
        type: 'video',
        contentType: 'Machine Learning',
        fileUrl: '/resources/model-evaluation.mp4',
        size: '410 MB'
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
        contentType: 'Design Fundamentals',
        fileUrl: '/resources/design-principles.pdf',
        size: '3.5 MB'
      },
      {
        id: 'ux-2',
        title: 'Figma Masterclass',
        description: 'Complete Figma design tutorial',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: '/resources/figma-masterclass.mp4',
        size: '520 MB'
      },
      {
        id: 'ux-3',
        title: 'Color Theory Handbook',
        description: 'Master color in design',
        type: 'pdf',
        contentType: 'Design Fundamentals',
        fileUrl: '/resources/color-theory.pdf',
        size: '2.8 MB'
      },
      {
        id: 'ux-4',
        title: 'UI Component Library',
        description: 'Reusable design components',
        type: 'code',
        contentType: 'Design Systems',
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
        contentType: 'Cross-Platform Development',
        fileUrl: '/resources/react-native-guide.pdf',
        size: '3.3 MB'
      },
      {
        id: 'mob-2',
        title: 'Flutter Basics',
        description: 'Getting started with Flutter',
        type: 'video',
        contentType: 'Cross-Platform Development',
        fileUrl: '/resources/flutter-basics.mp4',
        size: '420 MB'
      },
      {
        id: 'mob-3',
        title: 'Mobile UI Patterns',
        description: 'Common mobile interface patterns',
        type: 'article',
        contentType: 'Mobile Design',
        fileUrl: '/resources/mobile-ui-patterns.pdf',
        size: '2.2 MB'
      },
      {
        id: 'mob-4',
        title: 'Sample Mobile Apps',
        description: 'Complete app source code',
        type: 'code',
        contentType: 'Mobile Projects',
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
        contentType: 'Cloud Platforms',
        fileUrl: '/resources/aws-fundamentals.pdf',
        size: '3.8 MB'
      },
      {
        id: 'cloud-2',
        title: 'Docker & Kubernetes',
        description: 'Container orchestration guide',
        type: 'video',
        contentType: 'Containerization',
        fileUrl: '/resources/docker-kubernetes.mp4',
        size: '480 MB'
      },
      {
        id: 'cloud-3',
        title: 'Serverless Architecture',
        description: 'Build scalable serverless apps',
        type: 'article',
        contentType: 'Cloud Architecture',
        fileUrl: '/resources/serverless-guide.pdf',
        size: '2.5 MB'
      },
      {
        id: 'cloud-4',
        title: 'Cloud Infrastructure Code',
        description: 'Terraform and CloudFormation templates',
        type: 'code',
        contentType: 'Infrastructure as Code',
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
        contentType: 'Security Basics',
        fileUrl: '/resources/security-fundamentals.pdf',
        size: '3.2 MB'
      },
      {
        id: 'sec-2',
        title: 'Ethical Hacking Course',
        description: 'Penetration testing techniques',
        type: 'video',
        contentType: 'Penetration Testing',
        fileUrl: '/resources/ethical-hacking.mp4',
        size: '550 MB'
      },
      {
        id: 'sec-3',
        title: 'Network Security Guide',
        description: 'Protect your network infrastructure',
        type: 'pdf',
        contentType: 'Network Security',
        fileUrl: '/resources/network-security.pdf',
        size: '2.9 MB'
      },
      {
        id: 'sec-4',
        title: 'Security Tools & Scripts',
        description: 'Practical security tools',
        type: 'code',
        contentType: 'Security Tools',
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
        contentType: 'DevOps Practices',
        fileUrl: '/resources/devops-fundamentals.pdf',
        size: '3.4 MB'
      },
      {
        id: 'devops-2',
        title: 'CI/CD Pipeline Tutorial',
        description: 'Build automated deployment pipelines',
        type: 'video',
        contentType: 'CI/CD Pipelines',
        fileUrl: '/resources/cicd-tutorial.mp4',
        size: '410 MB'
      },
      {
        id: 'devops-3',
        title: 'Jenkins & GitHub Actions',
        description: 'Automation tools guide',
        type: 'article',
        contentType: 'Automation Tools',
        fileUrl: '/resources/automation-tools.pdf',
        size: '2.1 MB'
      },
      {
        id: 'devops-4',
        title: 'Infrastructure as Code',
        description: 'Ansible, Terraform templates',
        type: 'code',
        contentType: 'Infrastructure Automation',
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
        contentType: 'Blockchain Fundamentals',
        fileUrl: '/resources/blockchain-basics.pdf',
        size: '3.6 MB'
      },
      {
        id: 'blockchain-2',
        title: 'Smart Contracts with Solidity',
        description: 'Ethereum development tutorial',
        type: 'video',
        contentType: 'Smart Contracts',
        fileUrl: '/resources/solidity-tutorial.mp4',
        size: '520 MB'
      },
      {
        id: 'blockchain-3',
        title: 'Web3 Development Guide',
        description: 'Build dApps with Web3.js',
        type: 'article',
        contentType: 'Web3 Development',
        fileUrl: '/resources/web3-guide.pdf',
        size: '2.4 MB'
      },
      {
        id: 'blockchain-4',
        title: 'Smart Contract Examples',
        description: 'Sample contracts and dApps',
        type: 'code',
        contentType: 'dApp Projects',
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
        contentType: 'Deep Learning',
        fileUrl: '/resources/deep-learning.pdf',
        size: '4.5 MB'
      },
      {
        id: 'aiml-2',
        title: 'TensorFlow & PyTorch',
        description: 'Complete ML framework guide',
        type: 'video',
        contentType: 'ML Frameworks',
        fileUrl: '/resources/ml-frameworks.mp4',
        size: '580 MB'
      },
      {
        id: 'aiml-3',
        title: 'Natural Language Processing',
        description: 'NLP techniques and transformers',
        type: 'article',
        contentType: 'Natural Language Processing',
        fileUrl: '/resources/nlp-guide.pdf',
        size: '3.3 MB'
      },
      {
        id: 'aiml-4',
        title: 'ML Model Examples',
        description: 'Pre-trained models and notebooks',
        type: 'code',
        contentType: 'ML Projects',
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
        contentType: 'Game Design',
        fileUrl: '/resources/game-design.pdf',
        size: '3.7 MB'
      },
      {
        id: 'game-2',
        title: 'Unity Complete Course',
        description: '2D and 3D game development',
        type: 'video',
        contentType: 'Game Engines',
        fileUrl: '/resources/unity-course.mp4',
        size: '620 MB'
      },
      {
        id: 'game-3',
        title: 'Game Physics & Math',
        description: 'Mathematics for game developers',
        type: 'article',
        contentType: 'Game Mathematics',
        fileUrl: '/resources/game-math.pdf',
        size: '2.6 MB'
      },
      {
        id: 'game-4',
        title: 'Sample Game Projects',
        description: 'Complete game source code',
        type: 'code',
        contentType: 'Game Projects',
        fileUrl: '/resources/game-projects.zip',
        size: '8.4 MB'
      }
    ]
  }
];
