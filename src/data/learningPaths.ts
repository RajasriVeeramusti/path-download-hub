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
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        size: '2.5 MB'
      },
      {
        id: 'web-2',
        title: 'CSS Layouts and Flexbox',
        description: 'Modern layout techniques',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        size: '3.2 MB'
      },
      {
        id: 'web-3',
        title: 'Responsive Design',
        description: 'Media queries and mobile-first approach',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://web.dev/responsive-web-design-basics/',
        size: '2.1 MB'
      },
      {
        id: 'web-4',
        title: 'JavaScript Variables and Data Types',
        description: 'Understanding primitive and reference types',
        type: 'article',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://javascript.info/variables',
        size: '2.8 MB'
      },
      {
        id: 'web-5',
        title: 'Functions and Scope',
        description: 'Arrow functions and closures',
        type: 'video',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
        size: '350 MB'
      },
      {
        id: 'web-6',
        title: 'DOM Manipulation',
        description: 'Interacting with web pages dynamically',
        type: 'article',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
        size: '1.4 MB'
      },
      {
        id: 'web-7',
        title: 'React Components',
        description: 'Building reusable UI components',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://react.dev/learn/your-first-component',
        size: '420 MB'
      },
      {
        id: 'web-8',
        title: 'React Hooks',
        description: 'State management with hooks',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://react.dev/reference/react/hooks',
        size: '3.5 MB'
      },
      {
        id: 'web-9',
        title: 'Vue.js Basics',
        description: 'Getting started with Vue framework',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://vuejs.org/guide/introduction.html',
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
        type: 'article',
        contentType: 'Python for Data Science',
        fileUrl: 'https://docs.python.org/3/tutorial/introduction.html',
        size: '4.2 MB'
      },
      {
        id: 'ds-2',
        title: 'Python Functions and Modules',
        description: 'Creating reusable code components',
        type: 'article',
        contentType: 'Python for Data Science',
        fileUrl: 'https://docs.python.org/3/tutorial/modules.html',
        size: '3.1 MB'
      },
      {
        id: 'ds-3',
        title: 'Object-Oriented Programming',
        description: 'Classes, inheritance, and polymorphism',
        type: 'article',
        contentType: 'Python for Data Science',
        fileUrl: 'https://realpython.com/python3-object-oriented-programming/',
        size: '2.8 MB'
      },
      {
        id: 'ds-4',
        title: 'NumPy Fundamentals',
        description: 'Array operations and mathematical computing',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://numpy.org/doc/stable/user/quickstart.html',
        size: '320 MB'
      },
      {
        id: 'ds-5',
        title: 'Pandas DataFrames',
        description: 'Data manipulation and analysis',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://pandas.pydata.org/docs/user_guide/10min.html',
        size: '380 MB'
      },
      {
        id: 'ds-6',
        title: 'Data Cleaning Techniques',
        description: 'Handling missing data and outliers',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://realpython.com/python-data-cleaning-numpy-pandas/',
        size: '2.3 MB'
      },
      {
        id: 'ds-7',
        title: 'Matplotlib Visualization',
        description: 'Creating plots and charts',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: 'https://matplotlib.org/stable/tutorials/index.html',
        size: '1.5 MB'
      },
      {
        id: 'ds-8',
        title: 'Seaborn Advanced Plots',
        description: 'Statistical data visualization',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: 'https://seaborn.pydata.org/tutorial.html',
        size: '2.1 MB'
      },
      {
        id: 'ds-9',
        title: 'Interactive Dashboards',
        description: 'Building with Plotly and Dash',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: 'https://plotly.com/python/getting-started/',
        size: '3.4 MB'
      },
      {
        id: 'ds-10',
        title: 'Supervised Learning Algorithms',
        description: 'Regression and classification',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://scikit-learn.org/stable/supervised_learning.html',
        size: '4.6 MB'
      },
      {
        id: 'ds-11',
        title: 'Unsupervised Learning',
        description: 'Clustering and dimensionality reduction',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://scikit-learn.org/stable/unsupervised_learning.html',
        size: '3.9 MB'
      },
      {
        id: 'ds-12',
        title: 'Model Evaluation',
        description: 'Metrics and cross-validation techniques',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://scikit-learn.org/stable/modules/model_evaluation.html',
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
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
        size: '3.5 MB'
      },
      {
        id: 'ux-2',
        title: 'Figma Masterclass',
        description: 'Complete Figma design tutorial',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
        size: '520 MB'
      },
      {
        id: 'ux-3',
        title: 'Color Theory Handbook',
        description: 'Master color in design',
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.interaction-design.org/literature/topics/color-theory',
        size: '2.8 MB'
      },
      {
        id: 'ux-4',
        title: 'UI Component Library',
        description: 'Reusable design components',
        type: 'article',
        contentType: 'Design Systems',
        fileUrl: 'https://www.figma.com/community/file/903830135544956919',
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
        type: 'article',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://reactnative.dev/docs/getting-started',
        size: '3.3 MB'
      },
      {
        id: 'mob-2',
        title: 'Flutter Basics',
        description: 'Getting started with Flutter',
        type: 'article',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://docs.flutter.dev/get-started/codelab',
        size: '420 MB'
      },
      {
        id: 'mob-3',
        title: 'Mobile UI Patterns',
        description: 'Common mobile interface patterns',
        type: 'article',
        contentType: 'Mobile Design',
        fileUrl: 'https://www.mobile-patterns.com/',
        size: '2.2 MB'
      },
      {
        id: 'mob-4',
        title: 'Sample Mobile Apps',
        description: 'Complete app source code',
        type: 'code',
        contentType: 'Mobile Projects',
        fileUrl: 'https://github.com/ReactNativeNews/React-Native-Apps',
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
        type: 'article',
        contentType: 'Cloud Platforms',
        fileUrl: 'https://aws.amazon.com/getting-started/',
        size: '3.8 MB'
      },
      {
        id: 'cloud-2',
        title: 'Docker & Kubernetes',
        description: 'Container orchestration guide',
        type: 'article',
        contentType: 'Containerization',
        fileUrl: 'https://kubernetes.io/docs/tutorials/',
        size: '480 MB'
      },
      {
        id: 'cloud-3',
        title: 'Serverless Architecture',
        description: 'Build scalable serverless apps',
        type: 'article',
        contentType: 'Cloud Architecture',
        fileUrl: 'https://aws.amazon.com/serverless/',
        size: '2.5 MB'
      },
      {
        id: 'cloud-4',
        title: 'Cloud Infrastructure Code',
        description: 'Terraform and CloudFormation templates',
        type: 'code',
        contentType: 'Infrastructure as Code',
        fileUrl: 'https://github.com/terraform-aws-modules',
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
        type: 'article',
        contentType: 'Security Basics',
        fileUrl: 'https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project',
        size: '3.2 MB'
      },
      {
        id: 'sec-2',
        title: 'Ethical Hacking Course',
        description: 'Penetration testing techniques',
        type: 'video',
        contentType: 'Penetration Testing',
        fileUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        size: '550 MB'
      },
      {
        id: 'sec-3',
        title: 'Network Security Guide',
        description: 'Protect your network infrastructure',
        type: 'article',
        contentType: 'Network Security',
        fileUrl: 'https://www.sans.org/cyber-security-courses/',
        size: '2.9 MB'
      },
      {
        id: 'sec-4',
        title: 'Security Tools & Scripts',
        description: 'Practical security tools',
        type: 'code',
        contentType: 'Security Tools',
        fileUrl: 'https://github.com/topics/security-tools',
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
        type: 'article',
        contentType: 'DevOps Practices',
        fileUrl: 'https://www.atlassian.com/devops',
        size: '3.4 MB'
      },
      {
        id: 'devops-2',
        title: 'CI/CD Pipeline Tutorial',
        description: 'Build automated deployment pipelines',
        type: 'article',
        contentType: 'CI/CD Pipelines',
        fileUrl: 'https://docs.github.com/en/actions/guides',
        size: '410 MB'
      },
      {
        id: 'devops-3',
        title: 'Jenkins & GitHub Actions',
        description: 'Automation tools guide',
        type: 'article',
        contentType: 'Automation Tools',
        fileUrl: 'https://www.jenkins.io/doc/tutorials/',
        size: '2.1 MB'
      },
      {
        id: 'devops-4',
        title: 'Infrastructure as Code',
        description: 'Ansible, Terraform templates',
        type: 'code',
        contentType: 'Infrastructure Automation',
        fileUrl: 'https://github.com/ansible/ansible-examples',
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
        type: 'article',
        contentType: 'Blockchain Fundamentals',
        fileUrl: 'https://ethereum.org/en/developers/docs/intro-to-ethereum/',
        size: '3.6 MB'
      },
      {
        id: 'blockchain-2',
        title: 'Smart Contracts with Solidity',
        description: 'Ethereum development tutorial',
        type: 'article',
        contentType: 'Smart Contracts',
        fileUrl: 'https://docs.soliditylang.org/en/latest/',
        size: '520 MB'
      },
      {
        id: 'blockchain-3',
        title: 'Web3 Development Guide',
        description: 'Build dApps with Web3.js',
        type: 'article',
        contentType: 'Web3 Development',
        fileUrl: 'https://web3js.readthedocs.io/en/v1.8.1/',
        size: '2.4 MB'
      },
      {
        id: 'blockchain-4',
        title: 'Smart Contract Examples',
        description: 'Sample contracts and dApps',
        type: 'code',
        contentType: 'dApp Projects',
        fileUrl: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
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
        type: 'article',
        contentType: 'Deep Learning',
        fileUrl: 'https://www.deeplearning.ai/resources/',
        size: '4.5 MB'
      },
      {
        id: 'aiml-2',
        title: 'TensorFlow & PyTorch',
        description: 'Complete ML framework guide',
        type: 'article',
        contentType: 'ML Frameworks',
        fileUrl: 'https://www.tensorflow.org/tutorials',
        size: '580 MB'
      },
      {
        id: 'aiml-3',
        title: 'Natural Language Processing',
        description: 'NLP techniques and transformers',
        type: 'article',
        contentType: 'Natural Language Processing',
        fileUrl: 'https://huggingface.co/learn/nlp-course/chapter1/1',
        size: '3.3 MB'
      },
      {
        id: 'aiml-4',
        title: 'ML Model Examples',
        description: 'Pre-trained models and notebooks',
        type: 'code',
        contentType: 'ML Projects',
        fileUrl: 'https://github.com/tensorflow/models',
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
        type: 'article',
        contentType: 'Game Design',
        fileUrl: 'https://www.gamedeveloper.com/design/game-design-theory',
        size: '3.7 MB'
      },
      {
        id: 'game-2',
        title: 'Unity Complete Course',
        description: '2D and 3D game development',
        type: 'article',
        contentType: 'Game Engines',
        fileUrl: 'https://learn.unity.com/',
        size: '620 MB'
      },
      {
        id: 'game-3',
        title: 'Game Physics & Math',
        description: 'Mathematics for game developers',
        type: 'article',
        contentType: 'Game Mathematics',
        fileUrl: 'https://www.gamedev.net/tutorials/_/technical/math-and-physics/',
        size: '2.6 MB'
      },
      {
        id: 'game-4',
        title: 'Sample Game Projects',
        description: 'Complete game source code',
        type: 'code',
        contentType: 'Game Projects',
        fileUrl: 'https://github.com/topics/game-development',
        size: '8.4 MB'
      }
    ]
  }
];
