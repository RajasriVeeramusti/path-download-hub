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
        title: 'HTML5 Semantic Elements',
        description: 'Learn semantic HTML tags for better accessibility and SEO',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        size: '2.5 MB'
      },
      {
        id: 'web-2',
        title: 'CSS Grid and Flexbox',
        description: 'Master modern CSS layout systems',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        size: '3.2 MB'
      },
      {
        id: 'web-3',
        title: 'CSS Animations and Transitions',
        description: 'Create smooth animations and interactive effects',
        type: 'video',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=zHUpx90NerM',
        size: '450 MB'
      },
      {
        id: 'web-4',
        title: 'Responsive Web Design',
        description: 'Build mobile-first responsive websites',
        type: 'article',
        contentType: 'HTML & CSS Fundamentals',
        fileUrl: 'https://web.dev/responsive-web-design-basics/',
        size: '2.1 MB'
      },
      {
        id: 'web-5',
        title: 'JavaScript ES6+ Features',
        description: 'Modern JavaScript syntax and features',
        type: 'article',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://javascript.info/intro',
        size: '2.8 MB'
      },
      {
        id: 'web-6',
        title: 'Asynchronous JavaScript',
        description: 'Promises, async/await, and callbacks',
        type: 'video',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
        size: '380 MB'
      },
      {
        id: 'web-7',
        title: 'DOM Manipulation',
        description: 'Interact with web pages dynamically using JavaScript',
        type: 'article',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
        size: '1.4 MB'
      },
      {
        id: 'web-8',
        title: 'JavaScript Design Patterns',
        description: 'Common patterns for organizing code',
        type: 'article',
        contentType: 'JavaScript Essentials',
        fileUrl: 'https://www.patterns.dev/posts/classic-design-patterns',
        size: '3.1 MB'
      },
      {
        id: 'web-9',
        title: 'React Fundamentals',
        description: 'Components, props, and state management',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://react.dev/learn',
        size: '2.7 MB'
      },
      {
        id: 'web-10',
        title: 'React Hooks Deep Dive',
        description: 'useState, useEffect, useContext, and custom hooks',
        type: 'video',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
        size: '520 MB'
      },
      {
        id: 'web-11',
        title: 'Next.js Full Course',
        description: 'Server-side rendering and static site generation',
        type: 'video',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://www.youtube.com/watch?v=mTz0GXj8NN0',
        size: '680 MB'
      },
      {
        id: 'web-12',
        title: 'Vue.js Complete Guide',
        description: 'Progressive framework for building UIs',
        type: 'article',
        contentType: 'Modern Frameworks',
        fileUrl: 'https://vuejs.org/guide/introduction.html',
        size: '3.3 MB'
      },
      {
        id: 'web-13',
        title: 'TypeScript for React',
        description: 'Type-safe React development',
        type: 'article',
        contentType: 'Advanced Topics',
        fileUrl: 'https://www.typescriptlang.org/docs/handbook/react.html',
        size: '2.4 MB'
      },
      {
        id: 'web-14',
        title: 'Web Performance Optimization',
        description: 'Speed up your websites and applications',
        type: 'article',
        contentType: 'Advanced Topics',
        fileUrl: 'https://web.dev/fast/',
        size: '3.6 MB'
      },
      {
        id: 'web-15',
        title: 'Progressive Web Apps',
        description: 'Build app-like experiences on the web',
        type: 'video',
        contentType: 'Advanced Topics',
        fileUrl: 'https://www.youtube.com/watch?v=sFsRylCQblw',
        size: '410 MB'
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
        title: 'Python Programming Basics',
        description: 'Variables, data types, and control flow',
        type: 'article',
        contentType: 'Python Fundamentals',
        fileUrl: 'https://docs.python.org/3/tutorial/introduction.html',
        size: '4.2 MB'
      },
      {
        id: 'ds-2',
        title: 'Python Functions and Modules',
        description: 'Organizing code with functions and modules',
        type: 'video',
        contentType: 'Python Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
        size: '380 MB'
      },
      {
        id: 'ds-3',
        title: 'Object-Oriented Programming in Python',
        description: 'Classes, inheritance, and polymorphism',
        type: 'article',
        contentType: 'Python Fundamentals',
        fileUrl: 'https://realpython.com/python3-object-oriented-programming/',
        size: '2.8 MB'
      },
      {
        id: 'ds-4',
        title: 'Python Error Handling',
        description: 'Exception handling and debugging techniques',
        type: 'article',
        contentType: 'Python Fundamentals',
        fileUrl: 'https://realpython.com/python-exceptions/',
        size: '2.3 MB'
      },
      {
        id: 'ds-5',
        title: 'NumPy Array Operations',
        description: 'Mathematical computing with arrays',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://numpy.org/doc/stable/user/quickstart.html',
        size: '3.5 MB'
      },
      {
        id: 'ds-6',
        title: 'Pandas DataFrames Mastery',
        description: 'Data manipulation and analysis with Pandas',
        type: 'video',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://www.youtube.com/watch?v=vmEHCJofslg',
        size: '520 MB'
      },
      {
        id: 'ds-7',
        title: 'Data Cleaning with Python',
        description: 'Handle missing data, outliers, and duplicates',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://realpython.com/python-data-cleaning-numpy-pandas/',
        size: '2.9 MB'
      },
      {
        id: 'ds-8',
        title: 'SQL for Data Analysis',
        description: 'Query databases efficiently',
        type: 'article',
        contentType: 'Data Analysis Libraries',
        fileUrl: 'https://mode.com/sql-tutorial/',
        size: '3.1 MB'
      },
      {
        id: 'ds-9',
        title: 'Matplotlib Visualization',
        description: 'Create static, animated, and interactive plots',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: 'https://matplotlib.org/stable/tutorials/index.html',
        size: '3.4 MB'
      },
      {
        id: 'ds-10',
        title: 'Seaborn Statistical Plots',
        description: 'Beautiful statistical visualizations',
        type: 'video',
        contentType: 'Data Visualization',
        fileUrl: 'https://www.youtube.com/watch?v=6GUZXDef2U0',
        size: '410 MB'
      },
      {
        id: 'ds-11',
        title: 'Plotly Interactive Dashboards',
        description: 'Build interactive web-based visualizations',
        type: 'article',
        contentType: 'Data Visualization',
        fileUrl: 'https://plotly.com/python/getting-started/',
        size: '2.7 MB'
      },
      {
        id: 'ds-12',
        title: 'Supervised Learning Algorithms',
        description: 'Linear regression, decision trees, and more',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://scikit-learn.org/stable/supervised_learning.html',
        size: '4.6 MB'
      },
      {
        id: 'ds-13',
        title: 'Unsupervised Learning',
        description: 'Clustering, PCA, and dimensionality reduction',
        type: 'video',
        contentType: 'Machine Learning',
        fileUrl: 'https://www.youtube.com/watch?v=IUK8NMmD1AA',
        size: '550 MB'
      },
      {
        id: 'ds-14',
        title: 'Model Evaluation and Validation',
        description: 'Cross-validation, metrics, and hyperparameter tuning',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://scikit-learn.org/stable/modules/model_evaluation.html',
        size: '3.8 MB'
      },
      {
        id: 'ds-15',
        title: 'Feature Engineering',
        description: 'Create and select powerful features',
        type: 'article',
        contentType: 'Machine Learning',
        fileUrl: 'https://www.kaggle.com/learn/feature-engineering',
        size: '2.5 MB'
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
        title: 'Design Thinking Process',
        description: 'Human-centered approach to problem solving',
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.interaction-design.org/literature/topics/design-thinking',
        size: '3.5 MB'
      },
      {
        id: 'ux-2',
        title: 'UI Design Principles',
        description: 'Visual hierarchy, balance, and contrast',
        type: 'video',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=ZK86XQ1iFVs',
        size: '420 MB'
      },
      {
        id: 'ux-3',
        title: 'Color Theory for Designers',
        description: 'Psychology and application of color',
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.interaction-design.org/literature/topics/color-theory',
        size: '2.8 MB'
      },
      {
        id: 'ux-4',
        title: 'Typography Best Practices',
        description: 'Font selection, hierarchy, and readability',
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.typewolf.com/resources',
        size: '2.1 MB'
      },
      {
        id: 'ux-5',
        title: 'Figma Complete Course',
        description: 'Master the leading design tool',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
        size: '680 MB'
      },
      {
        id: 'ux-6',
        title: 'Adobe XD Essentials',
        description: 'Prototyping and wireframing',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: 'https://www.youtube.com/watch?v=68w2VwalD5w',
        size: '490 MB'
      },
      {
        id: 'ux-7',
        title: 'Sketch for UI Design',
        description: 'Vector-based design for interfaces',
        type: 'article',
        contentType: 'Design Tools',
        fileUrl: 'https://www.sketch.com/docs/',
        size: '2.3 MB'
      },
      {
        id: 'ux-8',
        title: 'User Research Methods',
        description: 'Interviews, surveys, and usability testing',
        type: 'article',
        contentType: 'UX Research',
        fileUrl: 'https://www.nngroup.com/articles/which-ux-research-methods/',
        size: '3.1 MB'
      },
      {
        id: 'ux-9',
        title: 'Creating User Personas',
        description: 'Define your target audience',
        type: 'video',
        contentType: 'UX Research',
        fileUrl: 'https://www.youtube.com/watch?v=XnG4c4gXaQY',
        size: '320 MB'
      },
      {
        id: 'ux-10',
        title: 'Wireframing and Prototyping',
        description: 'From low-fidelity to high-fidelity prototypes',
        type: 'article',
        contentType: 'UX Research',
        fileUrl: 'https://www.usability.gov/how-to-and-tools/methods/wireframing.html',
        size: '2.6 MB'
      },
      {
        id: 'ux-11',
        title: 'Design Systems',
        description: 'Build scalable and consistent UI components',
        type: 'article',
        contentType: 'Advanced Design',
        fileUrl: 'https://www.designsystems.com/',
        size: '3.4 MB'
      },
      {
        id: 'ux-12',
        title: 'Accessibility in Design',
        description: 'Create inclusive experiences for all users',
        type: 'article',
        contentType: 'Advanced Design',
        fileUrl: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
        size: '2.9 MB'
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
        title: 'Mobile App Design Principles',
        description: 'UI patterns for iOS and Android',
        type: 'article',
        contentType: 'Mobile Fundamentals',
        fileUrl: 'https://developer.apple.com/design/human-interface-guidelines/',
        size: '3.2 MB'
      },
      {
        id: 'mob-2',
        title: 'React Native Basics',
        description: 'Build cross-platform apps with JavaScript',
        type: 'video',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
        size: '580 MB'
      },
      {
        id: 'mob-3',
        title: 'React Native Navigation',
        description: 'Screen navigation and routing',
        type: 'article',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://reactnavigation.org/docs/getting-started',
        size: '2.4 MB'
      },
      {
        id: 'mob-4',
        title: 'React Native State Management',
        description: 'Redux, Context API, and Zustand',
        type: 'video',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://www.youtube.com/watch?v=fiesH6WU63I',
        size: '450 MB'
      },
      {
        id: 'mob-5',
        title: 'Flutter Complete Guide',
        description: 'Google\'s UI toolkit for mobile',
        type: 'video',
        contentType: 'Cross-Platform Development',
        fileUrl: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
        size: '720 MB'
      },
      {
        id: 'mob-6',
        title: 'Swift for iOS Development',
        description: 'Native iOS app development',
        type: 'article',
        contentType: 'Native Development',
        fileUrl: 'https://developer.apple.com/swift/resources/',
        size: '4.1 MB'
      },
      {
        id: 'mob-7',
        title: 'Kotlin for Android',
        description: 'Modern Android development',
        type: 'article',
        contentType: 'Native Development',
        fileUrl: 'https://developer.android.com/kotlin',
        size: '3.7 MB'
      },
      {
        id: 'mob-8',
        title: 'Mobile App Testing',
        description: 'Unit, integration, and E2E testing',
        type: 'article',
        contentType: 'Testing & Deployment',
        fileUrl: 'https://www.browserstack.com/guide/mobile-app-testing',
        size: '2.8 MB'
      },
      {
        id: 'mob-9',
        title: 'Publishing to App Stores',
        description: 'Deploy to Google Play and App Store',
        type: 'video',
        contentType: 'Testing & Deployment',
        fileUrl: 'https://www.youtube.com/watch?v=LE4Mgkrf7Sk',
        size: '380 MB'
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
        title: 'Cloud Computing Fundamentals',
        description: 'IaaS, PaaS, and SaaS explained',
        type: 'article',
        contentType: 'Cloud Basics',
        fileUrl: 'https://aws.amazon.com/what-is-cloud-computing/',
        size: '2.9 MB'
      },
      {
        id: 'cloud-2',
        title: 'AWS Core Services',
        description: 'EC2, S3, RDS, and Lambda',
        type: 'video',
        contentType: 'AWS Platform',
        fileUrl: 'https://www.youtube.com/watch?v=ulprqHHWlng',
        size: '620 MB'
      },
      {
        id: 'cloud-3',
        title: 'AWS Serverless Architecture',
        description: 'Build scalable apps without servers',
        type: 'article',
        contentType: 'AWS Platform',
        fileUrl: 'https://aws.amazon.com/serverless/',
        size: '3.4 MB'
      },
      {
        id: 'cloud-4',
        title: 'AWS Security Best Practices',
        description: 'IAM, VPC, and security groups',
        type: 'article',
        contentType: 'AWS Platform',
        fileUrl: 'https://docs.aws.amazon.com/security/',
        size: '4.1 MB'
      },
      {
        id: 'cloud-5',
        title: 'Azure Fundamentals',
        description: 'Microsoft cloud platform overview',
        type: 'video',
        contentType: 'Azure Platform',
        fileUrl: 'https://www.youtube.com/watch?v=3mnHHHXiNIg',
        size: '510 MB'
      },
      {
        id: 'cloud-6',
        title: 'Google Cloud Platform',
        description: 'GCP services and architecture',
        type: 'article',
        contentType: 'GCP Platform',
        fileUrl: 'https://cloud.google.com/docs',
        size: '3.6 MB'
      },
      {
        id: 'cloud-7',
        title: 'Docker Fundamentals',
        description: 'Containerization and Docker basics',
        type: 'video',
        contentType: 'Containerization',
        fileUrl: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        size: '480 MB'
      },
      {
        id: 'cloud-8',
        title: 'Kubernetes Deep Dive',
        description: 'Container orchestration at scale',
        type: 'article',
        contentType: 'Containerization',
        fileUrl: 'https://kubernetes.io/docs/tutorials/',
        size: '5.2 MB'
      },
      {
        id: 'cloud-9',
        title: 'Terraform Infrastructure as Code',
        description: 'Automate cloud infrastructure',
        type: 'article',
        contentType: 'Infrastructure as Code',
        fileUrl: 'https://developer.hashicorp.com/terraform/tutorials',
        size: '3.8 MB'
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
        title: 'Cybersecurity Fundamentals',
        description: 'CIA triad and security principles',
        type: 'article',
        contentType: 'Security Basics',
        fileUrl: 'https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html',
        size: '2.7 MB'
      },
      {
        id: 'sec-2',
        title: 'Network Security',
        description: 'Firewalls, VPNs, and intrusion detection',
        type: 'video',
        contentType: 'Security Basics',
        fileUrl: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        size: '540 MB'
      },
      {
        id: 'sec-3',
        title: 'OWASP Top 10',
        description: 'Critical web application security risks',
        type: 'article',
        contentType: 'Web Security',
        fileUrl: 'https://owasp.org/www-project-top-ten/',
        size: '3.2 MB'
      },
      {
        id: 'sec-4',
        title: 'Cryptography Essentials',
        description: 'Encryption, hashing, and digital signatures',
        type: 'article',
        contentType: 'Cryptography',
        fileUrl: 'https://www.coursera.org/learn/crypto',
        size: '4.5 MB'
      },
      {
        id: 'sec-5',
        title: 'Ethical Hacking Course',
        description: 'Penetration testing techniques',
        type: 'video',
        contentType: 'Ethical Hacking',
        fileUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        size: '680 MB'
      },
      {
        id: 'sec-6',
        title: 'Security Tools and Scripts',
        description: 'Nmap, Metasploit, Wireshark',
        type: 'code',
        contentType: 'Security Tools',
        fileUrl: 'https://github.com/topics/security-tools',
        size: '2.9 MB'
      },
      {
        id: 'sec-7',
        title: 'Incident Response',
        description: 'Handle and recover from security breaches',
        type: 'article',
        contentType: 'Security Operations',
        fileUrl: 'https://www.sans.org/incident-response/',
        size: '3.4 MB'
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
        title: 'DevOps Culture and Practices',
        description: 'Collaboration between development and operations',
        type: 'article',
        contentType: 'DevOps Fundamentals',
        fileUrl: 'https://www.atlassian.com/devops',
        size: '3.1 MB'
      },
      {
        id: 'devops-2',
        title: 'Git Version Control',
        description: 'Branching strategies and workflows',
        type: 'video',
        contentType: 'DevOps Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        size: '420 MB'
      },
      {
        id: 'devops-3',
        title: 'CI/CD Pipeline Design',
        description: 'Automated testing and deployment',
        type: 'article',
        contentType: 'CI/CD',
        fileUrl: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd',
        size: '2.8 MB'
      },
      {
        id: 'devops-4',
        title: 'GitHub Actions',
        description: 'Automate workflows with GitHub',
        type: 'video',
        contentType: 'CI/CD',
        fileUrl: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        size: '380 MB'
      },
      {
        id: 'devops-5',
        title: 'Jenkins Pipeline Tutorial',
        description: 'Build automated CI/CD pipelines',
        type: 'article',
        contentType: 'CI/CD',
        fileUrl: 'https://www.jenkins.io/doc/book/pipeline/',
        size: '3.6 MB'
      },
      {
        id: 'devops-6',
        title: 'Monitoring and Logging',
        description: 'Prometheus, Grafana, and ELK stack',
        type: 'article',
        contentType: 'Monitoring',
        fileUrl: 'https://prometheus.io/docs/introduction/overview/',
        size: '4.2 MB'
      },
      {
        id: 'devops-7',
        title: 'Infrastructure as Code with Ansible',
        description: 'Configuration management automation',
        type: 'video',
        contentType: 'Automation',
        fileUrl: 'https://www.youtube.com/watch?v=goclfp6a2IQ',
        size: '490 MB'
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
        title: 'Blockchain Technology Basics',
        description: 'Distributed ledger and consensus mechanisms',
        type: 'article',
        contentType: 'Blockchain Fundamentals',
        fileUrl: 'https://ethereum.org/en/developers/docs/intro-to-ethereum/',
        size: '3.4 MB'
      },
      {
        id: 'blockchain-2',
        title: 'Cryptocurrency Economics',
        description: 'Bitcoin, Ethereum, and tokenomics',
        type: 'video',
        contentType: 'Blockchain Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
        size: '510 MB'
      },
      {
        id: 'blockchain-3',
        title: 'Solidity Programming',
        description: 'Write smart contracts for Ethereum',
        type: 'article',
        contentType: 'Smart Contracts',
        fileUrl: 'https://docs.soliditylang.org/en/latest/',
        size: '4.8 MB'
      },
      {
        id: 'blockchain-4',
        title: 'Smart Contract Security',
        description: 'Common vulnerabilities and best practices',
        type: 'article',
        contentType: 'Smart Contracts',
        fileUrl: 'https://consensys.github.io/smart-contract-best-practices/',
        size: '3.1 MB'
      },
      {
        id: 'blockchain-5',
        title: 'Web3.js Development',
        description: 'Build dApps with JavaScript',
        type: 'video',
        contentType: 'Web3 Development',
        fileUrl: 'https://www.youtube.com/watch?v=t3wM5903ty0',
        size: '580 MB'
      },
      {
        id: 'blockchain-6',
        title: 'NFT Development',
        description: 'Create and deploy NFT collections',
        type: 'article',
        contentType: 'Web3 Development',
        fileUrl: 'https://docs.openzeppelin.com/contracts/4.x/erc721',
        size: '2.7 MB'
      },
      {
        id: 'blockchain-7',
        title: 'DeFi Protocols',
        description: 'Decentralized finance applications',
        type: 'article',
        contentType: 'DeFi',
        fileUrl: 'https://chain.link/education/defi',
        size: '3.9 MB'
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
        title: 'Machine Learning Fundamentals',
        description: 'Supervised, unsupervised, and reinforcement learning',
        type: 'article',
        contentType: 'ML Basics',
        fileUrl: 'https://developers.google.com/machine-learning/crash-course',
        size: '4.2 MB'
      },
      {
        id: 'aiml-2',
        title: 'Neural Networks Deep Dive',
        description: 'Architecture and training of neural networks',
        type: 'video',
        contentType: 'Deep Learning',
        fileUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
        size: '620 MB'
      },
      {
        id: 'aiml-3',
        title: 'TensorFlow Complete Guide',
        description: 'Build and train ML models',
        type: 'article',
        contentType: 'ML Frameworks',
        fileUrl: 'https://www.tensorflow.org/tutorials',
        size: '5.1 MB'
      },
      {
        id: 'aiml-4',
        title: 'PyTorch for Deep Learning',
        description: 'Dynamic neural networks with PyTorch',
        type: 'video',
        contentType: 'ML Frameworks',
        fileUrl: 'https://www.youtube.com/watch?v=c36lUUr864M',
        size: '710 MB'
      },
      {
        id: 'aiml-5',
        title: 'Computer Vision with OpenCV',
        description: 'Image processing and recognition',
        type: 'article',
        contentType: 'Computer Vision',
        fileUrl: 'https://opencv.org/university/',
        size: '4.5 MB'
      },
      {
        id: 'aiml-6',
        title: 'Natural Language Processing',
        description: 'Text analysis and language models',
        type: 'article',
        contentType: 'NLP',
        fileUrl: 'https://huggingface.co/learn/nlp-course/chapter1/1',
        size: '3.8 MB'
      },
      {
        id: 'aiml-7',
        title: 'Large Language Models',
        description: 'GPT, BERT, and transformer architectures',
        type: 'video',
        contentType: 'NLP',
        fileUrl: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
        size: '640 MB'
      },
      {
        id: 'aiml-8',
        title: 'Generative AI Applications',
        description: 'Text generation, image synthesis, and more',
        type: 'article',
        contentType: 'Generative AI',
        fileUrl: 'https://www.deeplearning.ai/courses/generative-ai-for-everyone/',
        size: '3.3 MB'
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
        description: 'Mechanics, dynamics, and aesthetics',
        type: 'article',
        contentType: 'Game Design',
        fileUrl: 'https://www.gamedeveloper.com/design/game-design-theory',
        size: '3.5 MB'
      },
      {
        id: 'game-2',
        title: 'Unity 3D Complete Course',
        description: 'Build 2D and 3D games',
        type: 'video',
        contentType: 'Unity Engine',
        fileUrl: 'https://www.youtube.com/watch?v=pwZpJzpE2lQ',
        size: '780 MB'
      },
      {
        id: 'game-3',
        title: 'C# for Unity',
        description: 'Programming games with C#',
        type: 'article',
        contentType: 'Unity Engine',
        fileUrl: 'https://learn.unity.com/tutorial/introduction-to-c-sharp',
        size: '3.2 MB'
      },
      {
        id: 'game-4',
        title: 'Unity Physics and Animation',
        description: 'Rigidbody, colliders, and animator',
        type: 'video',
        contentType: 'Unity Engine',
        fileUrl: 'https://www.youtube.com/watch?v=bpB4BApnKhM',
        size: '520 MB'
      },
      {
        id: 'game-5',
        title: 'Unreal Engine Basics',
        description: 'Introduction to Unreal Engine 5',
        type: 'video',
        contentType: 'Unreal Engine',
        fileUrl: 'https://www.youtube.com/watch?v=gQmiqmxJMtA',
        size: '690 MB'
      },
      {
        id: 'game-6',
        title: 'Blueprint Visual Scripting',
        description: 'Code games without programming',
        type: 'article',
        contentType: 'Unreal Engine',
        fileUrl: 'https://docs.unrealengine.com/5.0/en-US/blueprints-visual-scripting-in-unreal-engine/',
        size: '4.1 MB'
      },
      {
        id: 'game-7',
        title: '3D Modeling for Games',
        description: 'Blender for game assets',
        type: 'video',
        contentType: 'Game Art',
        fileUrl: 'https://www.youtube.com/watch?v=NyJWoyVx_XI',
        size: '610 MB'
      },
      {
        id: 'game-8',
        title: 'Game Audio Design',
        description: 'Sound effects and music integration',
        type: 'article',
        contentType: 'Game Audio',
        fileUrl: 'https://www.soundsnap.com/blog/game-audio-guide',
        size: '2.4 MB'
      }
    ]
  },
  {
    id: 'software-eng',
    title: 'Software Engineering',
    description: 'Learn software architecture, design patterns, and best practices',
    icon: '🏗️',
    color: 'from-slate-500 to-gray-500',
    resources: [
      {
        id: 'se-1',
        title: 'Software Development Life Cycle',
        description: 'Waterfall, Agile, and DevOps methodologies',
        type: 'article',
        contentType: 'Software Engineering Fundamentals',
        fileUrl: 'https://www.atlassian.com/agile/project-management/project-management-intro',
        size: '2.9 MB'
      },
      {
        id: 'se-2',
        title: 'Design Patterns',
        description: 'Singleton, Factory, Observer, and more',
        type: 'article',
        contentType: 'Software Engineering Fundamentals',
        fileUrl: 'https://refactoring.guru/design-patterns',
        size: '4.3 MB'
      },
      {
        id: 'se-3',
        title: 'Clean Code Principles',
        description: 'Write maintainable and readable code',
        type: 'video',
        contentType: 'Best Practices',
        fileUrl: 'https://www.youtube.com/watch?v=7EmboKQH8lM',
        size: '480 MB'
      },
      {
        id: 'se-4',
        title: 'SOLID Principles',
        description: 'Object-oriented design principles',
        type: 'article',
        contentType: 'Best Practices',
        fileUrl: 'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/',
        size: '2.7 MB'
      },
      {
        id: 'se-5',
        title: 'Microservices Architecture',
        description: 'Design scalable distributed systems',
        type: 'video',
        contentType: 'System Design',
        fileUrl: 'https://www.youtube.com/watch?v=rv4LlmLmVWk',
        size: '540 MB'
      },
      {
        id: 'se-6',
        title: 'System Design Interview Prep',
        description: 'Design large-scale systems',
        type: 'article',
        contentType: 'System Design',
        fileUrl: 'https://github.com/donnemartin/system-design-primer',
        size: '5.6 MB'
      },
      {
        id: 'se-7',
        title: 'API Design Best Practices',
        description: 'RESTful and GraphQL APIs',
        type: 'article',
        contentType: 'API Development',
        fileUrl: 'https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/',
        size: '3.1 MB'
      },
      {
        id: 'se-8',
        title: 'Unit Testing and TDD',
        description: 'Test-driven development practices',
        type: 'video',
        contentType: 'Testing',
        fileUrl: 'https://www.youtube.com/watch?v=Jv2uxzhPFl4',
        size: '420 MB'
      }
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Master SQL, NoSQL, and database design',
    icon: '🗄️',
    color: 'from-teal-500 to-cyan-500',
    resources: [
      {
        id: 'db-1',
        title: 'Database Fundamentals',
        description: 'DBMS concepts and data modeling',
        type: 'article',
        contentType: 'Database Basics',
        fileUrl: 'https://www.oracle.com/database/what-is-database/',
        size: '2.8 MB'
      },
      {
        id: 'db-2',
        title: 'SQL Complete Course',
        description: 'Queries, joins, and subqueries',
        type: 'video',
        contentType: 'SQL',
        fileUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        size: '620 MB'
      },
      {
        id: 'db-3',
        title: 'Advanced SQL Techniques',
        description: 'Window functions, CTEs, and optimization',
        type: 'article',
        contentType: 'SQL',
        fileUrl: 'https://mode.com/sql-tutorial/intro-to-advanced-sql/',
        size: '3.4 MB'
      },
      {
        id: 'db-4',
        title: 'PostgreSQL Mastery',
        description: 'Advanced features and performance tuning',
        type: 'article',
        contentType: 'SQL',
        fileUrl: 'https://www.postgresql.org/docs/current/tutorial.html',
        size: '4.2 MB'
      },
      {
        id: 'db-5',
        title: 'MongoDB Complete Guide',
        description: 'NoSQL document database',
        type: 'video',
        contentType: 'NoSQL',
        fileUrl: 'https://www.youtube.com/watch?v=-56x56UppqQ',
        size: '580 MB'
      },
      {
        id: 'db-6',
        title: 'Redis for Caching',
        description: 'In-memory data structure store',
        type: 'article',
        contentType: 'NoSQL',
        fileUrl: 'https://redis.io/docs/getting-started/',
        size: '2.5 MB'
      },
      {
        id: 'db-7',
        title: 'Database Design and Normalization',
        description: 'ER diagrams and normal forms',
        type: 'article',
        contentType: 'Database Design',
        fileUrl: 'https://www.guru99.com/database-normalization.html',
        size: '3.1 MB'
      },
      {
        id: 'db-8',
        title: 'Database Performance Optimization',
        description: 'Indexing, query optimization, and scaling',
        type: 'video',
        contentType: 'Performance',
        fileUrl: 'https://www.youtube.com/watch?v=HubezKbFL7E',
        size: '450 MB'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master SEO, content marketing, and social media',
    icon: '📈',
    color: 'from-emerald-500 to-green-500',
    resources: [
      {
        id: 'dm-1',
        title: 'Digital Marketing Fundamentals',
        description: 'Marketing strategy and customer journey',
        type: 'article',
        contentType: 'Marketing Basics',
        fileUrl: 'https://www.hubspot.com/marketing',
        size: '2.6 MB'
      },
      {
        id: 'dm-2',
        title: 'SEO Complete Guide',
        description: 'On-page, off-page, and technical SEO',
        type: 'video',
        contentType: 'SEO',
        fileUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
        size: '520 MB'
      },
      {
        id: 'dm-3',
        title: 'Keyword Research and Analysis',
        description: 'Find and target the right keywords',
        type: 'article',
        contentType: 'SEO',
        fileUrl: 'https://ahrefs.com/blog/keyword-research/',
        size: '3.2 MB'
      },
      {
        id: 'dm-4',
        title: 'Content Marketing Strategy',
        description: 'Create valuable content that attracts customers',
        type: 'article',
        contentType: 'Content Marketing',
        fileUrl: 'https://contentmarketinginstitute.com/what-is-content-marketing/',
        size: '2.9 MB'
      },
      {
        id: 'dm-5',
        title: 'Social Media Marketing',
        description: 'Facebook, Instagram, Twitter, LinkedIn strategies',
        type: 'video',
        contentType: 'Social Media',
        fileUrl: 'https://www.youtube.com/watch?v=YS-BqvdxwNU',
        size: '480 MB'
      },
      {
        id: 'dm-6',
        title: 'Email Marketing Best Practices',
        description: 'Build lists and create engaging campaigns',
        type: 'article',
        contentType: 'Email Marketing',
        fileUrl: 'https://mailchimp.com/email-marketing/',
        size: '2.4 MB'
      },
      {
        id: 'dm-7',
        title: 'Google Analytics Mastery',
        description: 'Track and analyze website traffic',
        type: 'video',
        contentType: 'Analytics',
        fileUrl: 'https://www.youtube.com/watch?v=gBeMELnxdIg',
        size: '420 MB'
      },
      {
        id: 'dm-8',
        title: 'PPC Advertising',
        description: 'Google Ads and Facebook Ads campaigns',
        type: 'article',
        contentType: 'Paid Advertising',
        fileUrl: 'https://support.google.com/google-ads/answer/6146252',
        size: '3.5 MB'
      }
    ]
  },
  {
    id: 'product-management',
    title: 'Product Management',
    description: 'Learn product strategy, roadmaps, and user research',
    icon: '📋',
    color: 'from-amber-500 to-yellow-500',
    resources: [
      {
        id: 'pm-1',
        title: 'Product Management Fundamentals',
        description: 'Role, responsibilities, and skills',
        type: 'article',
        contentType: 'PM Basics',
        fileUrl: 'https://www.productplan.com/learn/what-is-product-management/',
        size: '2.7 MB'
      },
      {
        id: 'pm-2',
        title: 'Product Strategy and Vision',
        description: 'Define product goals and strategy',
        type: 'video',
        contentType: 'Strategy',
        fileUrl: 'https://www.youtube.com/watch?v=nq0EqgsoptI',
        size: '380 MB'
      },
      {
        id: 'pm-3',
        title: 'User Research Methods',
        description: 'Interviews, surveys, and usability testing',
        type: 'article',
        contentType: 'User Research',
        fileUrl: 'https://www.nngroup.com/articles/which-ux-research-methods/',
        size: '3.1 MB'
      },
      {
        id: 'pm-4',
        title: 'Product Roadmapping',
        description: 'Plan and communicate product direction',
        type: 'article',
        contentType: 'Planning',
        fileUrl: 'https://www.productplan.com/learn/what-is-a-product-roadmap/',
        size: '2.5 MB'
      },
      {
        id: 'pm-5',
        title: 'Agile and Scrum for PMs',
        description: 'Work effectively with development teams',
        type: 'video',
        contentType: 'Agile',
        fileUrl: 'https://www.youtube.com/watch?v=2A9rkiIcnVI',
        size: '450 MB'
      },
      {
        id: 'pm-6',
        title: 'Product Metrics and Analytics',
        description: 'Measure product success and user behavior',
        type: 'article',
        contentType: 'Analytics',
        fileUrl: 'https://mixpanel.com/blog/product-analytics-101/',
        size: '2.9 MB'
      },
      {
        id: 'pm-7',
        title: 'Product Launch Strategy',
        description: 'Go-to-market planning and execution',
        type: 'article',
        contentType: 'Launch',
        fileUrl: 'https://www.productplan.com/glossary/go-to-market-strategy/',
        size: '2.3 MB'
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Master visual design, branding, and creative tools',
    icon: '🎭',
    color: 'from-fuchsia-500 to-pink-500',
    resources: [
      {
        id: 'gd-1',
        title: 'Graphic Design Principles',
        description: 'Composition, balance, and visual hierarchy',
        type: 'article',
        contentType: 'Design Fundamentals',
        fileUrl: 'https://www.canva.com/learn/design-elements-principles/',
        size: '2.8 MB'
      },
      {
        id: 'gd-2',
        title: 'Adobe Photoshop Mastery',
        description: 'Photo editing and digital art',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: 'https://www.youtube.com/watch?v=IyR_uYsRdPs',
        size: '640 MB'
      },
      {
        id: 'gd-3',
        title: 'Adobe Illustrator Complete Course',
        description: 'Vector graphics and logo design',
        type: 'video',
        contentType: 'Design Tools',
        fileUrl: 'https://www.youtube.com/watch?v=Ib8UBwu3yGA',
        size: '580 MB'
      },
      {
        id: 'gd-4',
        title: 'Brand Identity Design',
        description: 'Create cohesive brand systems',
        type: 'article',
        contentType: 'Branding',
        fileUrl: 'https://99designs.com/blog/tips/how-to-create-a-brand-identity/',
        size: '3.2 MB'
      },
      {
        id: 'gd-5',
        title: 'Logo Design Process',
        description: 'From concept to final design',
        type: 'video',
        contentType: 'Branding',
        fileUrl: 'https://www.youtube.com/watch?v=SZI_XJYtI6Q',
        size: '420 MB'
      },
      {
        id: 'gd-6',
        title: 'Print Design Essentials',
        description: 'Brochures, posters, and packaging',
        type: 'article',
        contentType: 'Print Design',
        fileUrl: 'https://www.creativebloq.com/print-design',
        size: '2.6 MB'
      },
      {
        id: 'gd-7',
        title: 'Motion Graphics with After Effects',
        description: 'Animate designs and create video content',
        type: 'video',
        contentType: 'Motion Design',
        fileUrl: 'https://www.youtube.com/watch?v=Wqz5MXhbZLE',
        size: '720 MB'
      }
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Learn professional video editing and post-production',
    icon: '🎬',
    color: 'from-rose-500 to-red-500',
    resources: [
      {
        id: 've-1',
        title: 'Video Editing Fundamentals',
        description: 'Cuts, transitions, and storytelling',
        type: 'article',
        contentType: 'Editing Basics',
        fileUrl: 'https://www.adobe.com/creativecloud/video/discover/video-editing.html',
        size: '2.9 MB'
      },
      {
        id: 've-2',
        title: 'Adobe Premiere Pro Complete Course',
        description: 'Professional video editing software',
        type: 'video',
        contentType: 'Editing Software',
        fileUrl: 'https://www.youtube.com/watch?v=Hls3Tp7JS8E',
        size: '780 MB'
      },
      {
        id: 've-3',
        title: 'Final Cut Pro X Tutorial',
        description: 'Mac-based professional editing',
        type: 'video',
        contentType: 'Editing Software',
        fileUrl: 'https://www.youtube.com/watch?v=LbNb-IoKn5I',
        size: '620 MB'
      },
      {
        id: 've-4',
        title: 'DaVinci Resolve Color Grading',
        description: 'Professional color correction',
        type: 'video',
        contentType: 'Color Grading',
        fileUrl: 'https://www.youtube.com/watch?v=AiF3aMlR0vw',
        size: '540 MB'
      },
      {
        id: 've-5',
        title: 'Audio Editing and Mixing',
        description: 'Clean audio and sound design',
        type: 'article',
        contentType: 'Audio Production',
        fileUrl: 'https://www.premiumbeat.com/blog/audio-editing-tips-for-video/',
        size: '2.5 MB'
      },
      {
        id: 've-6',
        title: 'Video Effects and VFX',
        description: 'Add special effects to videos',
        type: 'video',
        contentType: 'Visual Effects',
        fileUrl: 'https://www.youtube.com/watch?v=yD32xqq1MqM',
        size: '680 MB'
      },
      {
        id: 've-7',
        title: 'YouTube Content Creation',
        description: 'Filming, editing, and publishing',
        type: 'article',
        contentType: 'Content Creation',
        fileUrl: 'https://creatoracademy.youtube.com/page/education',
        size: '3.1 MB'
      }
    ]
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    description: 'Data analysis, visualization, and business intelligence',
    icon: '📊',
    color: 'from-sky-500 to-blue-500',
    resources: [
      {
        id: 'ba-1',
        title: 'Business Analytics Fundamentals',
        description: 'Data-driven decision making',
        type: 'article',
        contentType: 'Analytics Basics',
        fileUrl: 'https://www.ibm.com/topics/business-analytics',
        size: '2.7 MB'
      },
      {
        id: 'ba-2',
        title: 'Excel for Business Analytics',
        description: 'Advanced formulas, pivot tables, and charts',
        type: 'video',
        contentType: 'Excel & Spreadsheets',
        fileUrl: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
        size: '520 MB'
      },
      {
        id: 'ba-3',
        title: 'Tableau Data Visualization',
        description: 'Create interactive dashboards',
        type: 'video',
        contentType: 'BI Tools',
        fileUrl: 'https://www.youtube.com/watch?v=jEgVto5QME8',
        size: '480 MB'
      },
      {
        id: 'ba-4',
        title: 'Power BI Complete Guide',
        description: 'Microsoft\'s business intelligence platform',
        type: 'article',
        contentType: 'BI Tools',
        fileUrl: 'https://learn.microsoft.com/en-us/power-bi/',
        size: '3.8 MB'
      },
      {
        id: 'ba-5',
        title: 'SQL for Data Analysis',
        description: 'Extract insights from databases',
        type: 'article',
        contentType: 'Data Analysis',
        fileUrl: 'https://mode.com/sql-tutorial/intro-to-intermediate-sql/',
        size: '3.2 MB'
      },
      {
        id: 'ba-6',
        title: 'Statistical Analysis Methods',
        description: 'Hypothesis testing and regression',
        type: 'article',
        contentType: 'Statistics',
        fileUrl: 'https://www.khanacademy.org/math/statistics-probability',
        size: '4.1 MB'
      },
      {
        id: 'ba-7',
        title: 'Predictive Analytics',
        description: 'Forecasting and trend analysis',
        type: 'video',
        contentType: 'Advanced Analytics',
        fileUrl: 'https://www.youtube.com/watch?v=KLGHxXSKqiE',
        size: '440 MB'
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Lead teams and deliver projects successfully',
    icon: '📅',
    color: 'from-lime-500 to-green-500',
    resources: [
      {
        id: 'proj-1',
        title: 'Project Management Fundamentals',
        description: 'Planning, execution, and delivery',
        type: 'article',
        contentType: 'PM Basics',
        fileUrl: 'https://www.pmi.org/about/learn-about-pmi/what-is-project-management',
        size: '2.8 MB'
      },
      {
        id: 'proj-2',
        title: 'Agile Project Management',
        description: 'Scrum, Kanban, and agile principles',
        type: 'video',
        contentType: 'Agile Methods',
        fileUrl: 'https://www.youtube.com/watch?v=Z9QbYZh1YXY',
        size: '420 MB'
      },
      {
        id: 'proj-3',
        title: 'Scrum Master Certification Prep',
        description: 'Become a certified Scrum Master',
        type: 'article',
        contentType: 'Agile Methods',
        fileUrl: 'https://www.scrum.org/resources/what-is-scrum',
        size: '3.4 MB'
      },
      {
        id: 'proj-4',
        title: 'Project Planning and Scheduling',
        description: 'Gantt charts, milestones, and dependencies',
        type: 'article',
        contentType: 'Planning',
        fileUrl: 'https://www.teamgantt.com/guide-to-project-management',
        size: '2.9 MB'
      },
      {
        id: 'proj-5',
        title: 'Risk Management',
        description: 'Identify and mitigate project risks',
        type: 'video',
        contentType: 'Risk Management',
        fileUrl: 'https://www.youtube.com/watch?v=0hRmh-BjcLc',
        size: '380 MB'
      },
      {
        id: 'proj-6',
        title: 'Stakeholder Communication',
        description: 'Manage expectations and report progress',
        type: 'article',
        contentType: 'Communication',
        fileUrl: 'https://asana.com/resources/stakeholder-management',
        size: '2.5 MB'
      },
      {
        id: 'proj-7',
        title: 'Jira for Project Management',
        description: 'Track issues and manage workflows',
        type: 'video',
        contentType: 'PM Tools',
        fileUrl: 'https://www.youtube.com/watch?v=TsG3OWTDAFY',
        size: '340 MB'
      },
      {
        id: 'proj-8',
        title: 'Project Budget Management',
        description: 'Cost estimation and budget tracking',
        type: 'article',
        contentType: 'Financial Management',
        fileUrl: 'https://www.projectmanager.com/blog/project-budget',
        size: '2.6 MB'
      }
    ]
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    description: 'Build connected devices and smart systems',
    icon: '🔌',
    color: 'from-orange-500 to-amber-500',
    resources: [
      {
        id: 'iot-1',
        title: 'IoT Fundamentals',
        description: 'Introduction to Internet of Things concepts',
        type: 'article',
        contentType: 'IoT Basics',
        fileUrl: 'https://www.ibm.com/topics/internet-of-things',
        size: '2.8 MB'
      },
      {
        id: 'iot-2',
        title: 'Arduino Programming',
        description: 'Build projects with Arduino microcontrollers',
        type: 'video',
        contentType: 'Microcontrollers',
        fileUrl: 'https://www.youtube.com/watch?v=fJWR7dBuc18',
        size: '580 MB'
      },
      {
        id: 'iot-3',
        title: 'Raspberry Pi Projects',
        description: 'Create IoT solutions with Raspberry Pi',
        type: 'video',
        contentType: 'Microcontrollers',
        fileUrl: 'https://www.youtube.com/watch?v=BpJCAafw2qE',
        size: '620 MB'
      },
      {
        id: 'iot-4',
        title: 'MQTT Protocol',
        description: 'Lightweight messaging for IoT devices',
        type: 'article',
        contentType: 'IoT Protocols',
        fileUrl: 'https://mqtt.org/getting-started/',
        size: '2.4 MB'
      },
      {
        id: 'iot-5',
        title: 'Sensor Integration',
        description: 'Connect and read data from various sensors',
        type: 'video',
        contentType: 'Hardware',
        fileUrl: 'https://www.youtube.com/watch?v=wLT5EOhKzxY',
        size: '450 MB'
      },
      {
        id: 'iot-6',
        title: 'IoT Security Best Practices',
        description: 'Secure your connected devices',
        type: 'article',
        contentType: 'Security',
        fileUrl: 'https://owasp.org/www-project-internet-of-things/',
        size: '3.2 MB'
      },
      {
        id: 'iot-7',
        title: 'Smart Home Automation',
        description: 'Build home automation systems',
        type: 'video',
        contentType: 'Projects',
        fileUrl: 'https://www.youtube.com/watch?v=3QRlvDvNa1c',
        size: '520 MB'
      }
    ]
  },
  {
    id: 'ar-vr',
    title: 'AR/VR Development',
    description: 'Create immersive augmented and virtual reality experiences',
    icon: '🥽',
    color: 'from-indigo-500 to-violet-500',
    resources: [
      {
        id: 'arvr-1',
        title: 'AR/VR Fundamentals',
        description: 'Introduction to immersive technologies',
        type: 'article',
        contentType: 'XR Basics',
        fileUrl: 'https://learn.unity.com/pathway/vr-development',
        size: '3.1 MB'
      },
      {
        id: 'arvr-2',
        title: 'Unity VR Development',
        description: 'Build VR experiences with Unity',
        type: 'video',
        contentType: 'VR Development',
        fileUrl: 'https://www.youtube.com/watch?v=HhtTtvBF5bI',
        size: '720 MB'
      },
      {
        id: 'arvr-3',
        title: 'ARCore for Android',
        description: 'Build AR apps for Android devices',
        type: 'article',
        contentType: 'AR Development',
        fileUrl: 'https://developers.google.com/ar/develop',
        size: '2.9 MB'
      },
      {
        id: 'arvr-4',
        title: 'ARKit for iOS',
        description: 'Create AR experiences for Apple devices',
        type: 'video',
        contentType: 'AR Development',
        fileUrl: 'https://www.youtube.com/watch?v=7t2KWFEJ3Eg',
        size: '580 MB'
      },
      {
        id: 'arvr-5',
        title: '3D Modeling for XR',
        description: 'Create 3D assets for immersive experiences',
        type: 'video',
        contentType: 'Asset Creation',
        fileUrl: 'https://www.youtube.com/watch?v=JYj6e-72RDs',
        size: '640 MB'
      },
      {
        id: 'arvr-6',
        title: 'WebXR Development',
        description: 'Build XR experiences for the web',
        type: 'article',
        contentType: 'Web XR',
        fileUrl: 'https://immersiveweb.dev/',
        size: '2.5 MB'
      }
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    description: 'Design and program robots and automated systems',
    icon: '🤖',
    color: 'from-zinc-500 to-slate-600',
    resources: [
      {
        id: 'robot-1',
        title: 'Robotics Fundamentals',
        description: 'Introduction to robotics principles',
        type: 'article',
        contentType: 'Robotics Basics',
        fileUrl: 'https://robotics.mit.edu/',
        size: '3.4 MB'
      },
      {
        id: 'robot-2',
        title: 'ROS (Robot Operating System)',
        description: 'Learn the standard robotics framework',
        type: 'video',
        contentType: 'ROS',
        fileUrl: 'https://www.youtube.com/watch?v=9U6GDonGFHw',
        size: '680 MB'
      },
      {
        id: 'robot-3',
        title: 'Computer Vision for Robots',
        description: 'Enable robots to see and understand',
        type: 'video',
        contentType: 'Perception',
        fileUrl: 'https://www.youtube.com/watch?v=oXlwWbU8l2o',
        size: '590 MB'
      },
      {
        id: 'robot-4',
        title: 'Motion Planning and Control',
        description: 'Program robot movements and paths',
        type: 'article',
        contentType: 'Control Systems',
        fileUrl: 'https://motion.cs.illinois.edu/RoboticSystems/',
        size: '4.1 MB'
      },
      {
        id: 'robot-5',
        title: 'Industrial Automation',
        description: 'Manufacturing and process automation',
        type: 'video',
        contentType: 'Industrial',
        fileUrl: 'https://www.youtube.com/watch?v=Oo3mYKu9MBI',
        size: '520 MB'
      },
      {
        id: 'robot-6',
        title: 'Drone Programming',
        description: 'Build and program autonomous drones',
        type: 'video',
        contentType: 'Aerial Robotics',
        fileUrl: 'https://www.youtube.com/watch?v=b0qGrLd-xh4',
        size: '610 MB'
      }
    ]
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Explore quantum algorithms and quantum programming',
    icon: '⚛️',
    color: 'from-purple-600 to-blue-600',
    resources: [
      {
        id: 'qc-1',
        title: 'Quantum Computing Basics',
        description: 'Introduction to quantum mechanics for computing',
        type: 'article',
        contentType: 'Quantum Fundamentals',
        fileUrl: 'https://quantum-computing.ibm.com/composer/docs/iqx/guide/',
        size: '3.8 MB'
      },
      {
        id: 'qc-2',
        title: 'Qiskit Programming',
        description: 'Program quantum computers with IBM Qiskit',
        type: 'video',
        contentType: 'Quantum Programming',
        fileUrl: 'https://www.youtube.com/watch?v=L4jYKGrxKRE',
        size: '580 MB'
      },
      {
        id: 'qc-3',
        title: 'Quantum Algorithms',
        description: 'Learn Shors, Grovers, and other algorithms',
        type: 'article',
        contentType: 'Algorithms',
        fileUrl: 'https://qiskit.org/textbook/ch-algorithms/index.html',
        size: '4.2 MB'
      },
      {
        id: 'qc-4',
        title: 'Quantum Machine Learning',
        description: 'Combine quantum computing with ML',
        type: 'video',
        contentType: 'Quantum ML',
        fileUrl: 'https://www.youtube.com/watch?v=jQB4g93EqbI',
        size: '640 MB'
      },
      {
        id: 'qc-5',
        title: 'Quantum Cryptography',
        description: 'Secure communications using quantum principles',
        type: 'article',
        contentType: 'Quantum Security',
        fileUrl: 'https://www.nature.com/subjects/quantum-cryptography',
        size: '3.1 MB'
      }
    ]
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    description: 'Create clear documentation and technical content',
    icon: '📝',
    color: 'from-teal-500 to-emerald-500',
    resources: [
      {
        id: 'tw-1',
        title: 'Technical Writing Fundamentals',
        description: 'Principles of effective technical communication',
        type: 'article',
        contentType: 'Writing Basics',
        fileUrl: 'https://developers.google.com/tech-writing',
        size: '2.6 MB'
      },
      {
        id: 'tw-2',
        title: 'API Documentation',
        description: 'Write clear API docs and references',
        type: 'video',
        contentType: 'API Docs',
        fileUrl: 'https://www.youtube.com/watch?v=3oLN4E5hb7s',
        size: '420 MB'
      },
      {
        id: 'tw-3',
        title: 'Documentation Tools',
        description: 'Learn tools like GitBook, ReadTheDocs, and MkDocs',
        type: 'article',
        contentType: 'Tools',
        fileUrl: 'https://www.writethedocs.org/guide/tools/',
        size: '2.3 MB'
      },
      {
        id: 'tw-4',
        title: 'Style Guides for Tech Writers',
        description: 'Follow industry-standard writing guidelines',
        type: 'article',
        contentType: 'Style Guidelines',
        fileUrl: 'https://developers.google.com/style',
        size: '3.4 MB'
      },
      {
        id: 'tw-5',
        title: 'Creating User Manuals',
        description: 'Write user-friendly product documentation',
        type: 'video',
        contentType: 'User Documentation',
        fileUrl: 'https://www.youtube.com/watch?v=X4tmG6pxJxQ',
        size: '380 MB'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Master CI/CD, containerization, and cloud infrastructure',
    icon: '☁️',
    color: 'from-sky-500 to-blue-600',
    resources: [
      {
        id: 'devops-1',
        title: 'Introduction to DevOps',
        description: 'Understanding DevOps culture and practices',
        type: 'article',
        contentType: 'DevOps Fundamentals',
        fileUrl: 'https://www.atlassian.com/devops',
        size: '2.8 MB'
      },
      {
        id: 'devops-2',
        title: 'Docker Complete Guide',
        description: 'Containerization from basics to advanced',
        type: 'video',
        contentType: 'Containers',
        fileUrl: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
        size: '680 MB'
      },
      {
        id: 'devops-3',
        title: 'Kubernetes Fundamentals',
        description: 'Container orchestration at scale',
        type: 'video',
        contentType: 'Containers',
        fileUrl: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        size: '720 MB'
      },
      {
        id: 'devops-4',
        title: 'AWS Cloud Practitioner',
        description: 'Amazon Web Services fundamentals',
        type: 'article',
        contentType: 'Cloud Platforms',
        fileUrl: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
        size: '4.2 MB'
      },
      {
        id: 'devops-5',
        title: 'Azure Fundamentals',
        description: 'Microsoft Azure cloud services',
        type: 'video',
        contentType: 'Cloud Platforms',
        fileUrl: 'https://www.youtube.com/watch?v=NKEFWyqJ5XA',
        size: '580 MB'
      },
      {
        id: 'devops-6',
        title: 'CI/CD with GitHub Actions',
        description: 'Automate your deployment pipeline',
        type: 'video',
        contentType: 'CI/CD',
        fileUrl: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        size: '450 MB'
      },
      {
        id: 'devops-7',
        title: 'Infrastructure as Code with Terraform',
        description: 'Manage cloud resources with code',
        type: 'article',
        contentType: 'IaC',
        fileUrl: 'https://developer.hashicorp.com/terraform/tutorials',
        size: '3.6 MB'
      },
      {
        id: 'devops-8',
        title: 'Linux System Administration',
        description: 'Essential Linux skills for DevOps',
        type: 'video',
        contentType: 'Linux',
        fileUrl: 'https://www.youtube.com/watch?v=wBp0Rb-ZJak',
        size: '620 MB'
      }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Create 2D and 3D games with popular engines',
    icon: '🎮',
    color: 'from-red-500 to-orange-500',
    resources: [
      {
        id: 'game-1',
        title: 'Game Design Fundamentals',
        description: 'Core principles of game design',
        type: 'article',
        contentType: 'Game Design',
        fileUrl: 'https://www.gamedeveloper.com/design',
        size: '3.1 MB'
      },
      {
        id: 'game-2',
        title: 'Unity Complete Course',
        description: 'Build games with Unity engine',
        type: 'video',
        contentType: 'Unity',
        fileUrl: 'https://www.youtube.com/watch?v=gB1F9G0JXOo',
        size: '850 MB'
      },
      {
        id: 'game-3',
        title: 'C# for Game Development',
        description: 'Programming fundamentals for Unity',
        type: 'video',
        contentType: 'Unity',
        fileUrl: 'https://www.youtube.com/watch?v=pSiIHe2uZ2w',
        size: '620 MB'
      },
      {
        id: 'game-4',
        title: 'Unreal Engine Basics',
        description: 'AAA game development with Unreal',
        type: 'video',
        contentType: 'Unreal Engine',
        fileUrl: 'https://www.youtube.com/watch?v=gQmiqmxJMtA',
        size: '780 MB'
      },
      {
        id: 'game-5',
        title: 'Blueprints Visual Scripting',
        description: 'Program games without code in Unreal',
        type: 'article',
        contentType: 'Unreal Engine',
        fileUrl: 'https://docs.unrealengine.com/5.0/en-US/blueprints-visual-scripting-in-unreal-engine/',
        size: '4.3 MB'
      },
      {
        id: 'game-6',
        title: 'Godot Game Engine',
        description: 'Open-source game development',
        type: 'video',
        contentType: 'Godot',
        fileUrl: 'https://www.youtube.com/watch?v=LOhfqjmasi0',
        size: '580 MB'
      },
      {
        id: 'game-7',
        title: 'Game Physics and Mathematics',
        description: 'Math concepts for game developers',
        type: 'article',
        contentType: 'Game Math',
        fileUrl: 'https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics',
        size: '2.9 MB'
      },
      {
        id: 'game-8',
        title: '2D Game Art and Animation',
        description: 'Create sprites and animations',
        type: 'video',
        contentType: 'Game Art',
        fileUrl: 'https://www.youtube.com/watch?v=6WiPGSGRnKY',
        size: '490 MB'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Deep Learning',
    description: 'Build neural networks and AI applications',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    resources: [
      {
        id: 'ai-1',
        title: 'Introduction to AI',
        description: 'Understanding artificial intelligence concepts',
        type: 'article',
        contentType: 'AI Fundamentals',
        fileUrl: 'https://www.elementsofai.com/',
        size: '3.2 MB'
      },
      {
        id: 'ai-2',
        title: 'Neural Networks Explained',
        description: 'How neural networks learn and work',
        type: 'video',
        contentType: 'Deep Learning',
        fileUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
        size: '480 MB'
      },
      {
        id: 'ai-3',
        title: 'TensorFlow Complete Guide',
        description: 'Build ML models with TensorFlow',
        type: 'video',
        contentType: 'Deep Learning',
        fileUrl: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
        size: '720 MB'
      },
      {
        id: 'ai-4',
        title: 'PyTorch for Deep Learning',
        description: 'Dynamic neural networks with PyTorch',
        type: 'video',
        contentType: 'Deep Learning',
        fileUrl: 'https://www.youtube.com/watch?v=V_xro1bcAuA',
        size: '680 MB'
      },
      {
        id: 'ai-5',
        title: 'Natural Language Processing',
        description: 'Text analysis and language models',
        type: 'article',
        contentType: 'NLP',
        fileUrl: 'https://huggingface.co/learn/nlp-course/chapter1/1',
        size: '4.1 MB'
      },
      {
        id: 'ai-6',
        title: 'Computer Vision with OpenCV',
        description: 'Image processing and recognition',
        type: 'video',
        contentType: 'Computer Vision',
        fileUrl: 'https://www.youtube.com/watch?v=oXlwWbU8l2o',
        size: '590 MB'
      },
      {
        id: 'ai-7',
        title: 'Building LLM Applications',
        description: 'Work with large language models',
        type: 'article',
        contentType: 'LLMs',
        fileUrl: 'https://www.langchain.com/docs',
        size: '3.8 MB'
      },
      {
        id: 'ai-8',
        title: 'AI Ethics and Responsible AI',
        description: 'Ethical considerations in AI development',
        type: 'article',
        contentType: 'AI Ethics',
        fileUrl: 'https://www.microsoft.com/en-us/ai/responsible-ai',
        size: '2.4 MB'
      }
    ]
  },
  {
    id: 'finance-tech',
    title: 'FinTech & Trading',
    description: 'Learn algorithmic trading and financial technology',
    icon: '💹',
    color: 'from-emerald-500 to-green-600',
    resources: [
      {
        id: 'fin-1',
        title: 'Financial Markets Overview',
        description: 'Understanding stocks, bonds, and derivatives',
        type: 'article',
        contentType: 'Finance Basics',
        fileUrl: 'https://www.investopedia.com/financial-term-dictionary-4769738',
        size: '3.5 MB'
      },
      {
        id: 'fin-2',
        title: 'Python for Finance',
        description: 'Quantitative analysis with Python',
        type: 'video',
        contentType: 'Quantitative Finance',
        fileUrl: 'https://www.youtube.com/watch?v=xfzGZB4HhEE',
        size: '620 MB'
      },
      {
        id: 'fin-3',
        title: 'Algorithmic Trading Basics',
        description: 'Build trading bots and strategies',
        type: 'video',
        contentType: 'Algo Trading',
        fileUrl: 'https://www.youtube.com/watch?v=SEQbb8w7VTw',
        size: '580 MB'
      },
      {
        id: 'fin-4',
        title: 'Blockchain and Cryptocurrency',
        description: 'Understanding crypto and DeFi',
        type: 'article',
        contentType: 'Blockchain',
        fileUrl: 'https://ethereum.org/en/learn/',
        size: '4.2 MB'
      },
      {
        id: 'fin-5',
        title: 'Smart Contract Development',
        description: 'Build dApps with Solidity',
        type: 'video',
        contentType: 'Blockchain',
        fileUrl: 'https://www.youtube.com/watch?v=M576WGiDBdQ',
        size: '720 MB'
      },
      {
        id: 'fin-6',
        title: 'Risk Management Models',
        description: 'Financial risk assessment techniques',
        type: 'article',
        contentType: 'Risk Management',
        fileUrl: 'https://www.cfa.institute/en/membership/professional-development/refresher-readings/risk-management',
        size: '3.1 MB'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master SEO, social media, and growth strategies',
    icon: '📢',
    color: 'from-pink-500 to-rose-500',
    resources: [
      {
        id: 'dm-1',
        title: 'Digital Marketing Fundamentals',
        description: 'Core concepts and strategies',
        type: 'article',
        contentType: 'Marketing Basics',
        fileUrl: 'https://www.hubspot.com/marketing-statistics',
        size: '2.9 MB'
      },
      {
        id: 'dm-2',
        title: 'SEO Complete Guide',
        description: 'Search engine optimization mastery',
        type: 'video',
        contentType: 'SEO',
        fileUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
        size: '540 MB'
      },
      {
        id: 'dm-3',
        title: 'Google Analytics Mastery',
        description: 'Track and analyze web traffic',
        type: 'video',
        contentType: 'Analytics',
        fileUrl: 'https://www.youtube.com/watch?v=5fVXQ_0P3dw',
        size: '480 MB'
      },
      {
        id: 'dm-4',
        title: 'Social Media Marketing',
        description: 'Grow audiences on social platforms',
        type: 'article',
        contentType: 'Social Media',
        fileUrl: 'https://buffer.com/library/social-media-marketing/',
        size: '3.2 MB'
      },
      {
        id: 'dm-5',
        title: 'Content Marketing Strategy',
        description: 'Create content that converts',
        type: 'video',
        contentType: 'Content Marketing',
        fileUrl: 'https://www.youtube.com/watch?v=9Z84WJVTbkE',
        size: '420 MB'
      },
      {
        id: 'dm-6',
        title: 'Email Marketing Automation',
        description: 'Build effective email campaigns',
        type: 'article',
        contentType: 'Email Marketing',
        fileUrl: 'https://mailchimp.com/resources/email-marketing-field-guide/',
        size: '2.7 MB'
      },
      {
        id: 'dm-7',
        title: 'Google Ads Certification',
        description: 'Master paid advertising on Google',
        type: 'video',
        contentType: 'Paid Ads',
        fileUrl: 'https://www.youtube.com/watch?v=J5UhsLJqWFU',
        size: '560 MB'
      }
    ]
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    description: 'Learn penetration testing and security auditing',
    icon: '🔓',
    color: 'from-gray-600 to-zinc-700',
    resources: [
      {
        id: 'hack-1',
        title: 'Introduction to Ethical Hacking',
        description: 'Fundamentals of penetration testing',
        type: 'article',
        contentType: 'Hacking Basics',
        fileUrl: 'https://www.eccouncil.org/cybersecurity/what-is-ethical-hacking/',
        size: '3.1 MB'
      },
      {
        id: 'hack-2',
        title: 'Kali Linux Tutorial',
        description: 'Set up your hacking environment',
        type: 'video',
        contentType: 'Tools',
        fileUrl: 'https://www.youtube.com/watch?v=lZAoFs75_cs',
        size: '620 MB'
      },
      {
        id: 'hack-3',
        title: 'Network Penetration Testing',
        description: 'Exploit network vulnerabilities',
        type: 'video',
        contentType: 'Network Security',
        fileUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        size: '680 MB'
      },
      {
        id: 'hack-4',
        title: 'Web Application Security',
        description: 'Find and exploit web vulnerabilities',
        type: 'article',
        contentType: 'Web Security',
        fileUrl: 'https://owasp.org/www-project-web-security-testing-guide/',
        size: '4.5 MB'
      },
      {
        id: 'hack-5',
        title: 'Bug Bounty Hunting',
        description: 'Earn money finding security bugs',
        type: 'video',
        contentType: 'Bug Bounty',
        fileUrl: 'https://www.youtube.com/watch?v=mZOh6VlGBYQ',
        size: '540 MB'
      },
      {
        id: 'hack-6',
        title: 'Social Engineering Attacks',
        description: 'Understanding human-based vulnerabilities',
        type: 'article',
        contentType: 'Social Engineering',
        fileUrl: 'https://www.kaspersky.com/resource-center/definitions/what-is-social-engineering',
        size: '2.6 MB'
      }
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Build data pipelines and warehouses',
    icon: '🔧',
    color: 'from-amber-500 to-orange-600',
    resources: [
      {
        id: 'de-1',
        title: 'Data Engineering Fundamentals',
        description: 'Introduction to data infrastructure',
        type: 'article',
        contentType: 'DE Basics',
        fileUrl: 'https://www.datacamp.com/blog/what-is-data-engineering',
        size: '2.8 MB'
      },
      {
        id: 'de-2',
        title: 'SQL Advanced Techniques',
        description: 'Complex queries and optimization',
        type: 'video',
        contentType: 'SQL',
        fileUrl: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
        size: '520 MB'
      },
      {
        id: 'de-3',
        title: 'Apache Spark Complete Guide',
        description: 'Big data processing at scale',
        type: 'video',
        contentType: 'Big Data',
        fileUrl: 'https://www.youtube.com/watch?v=_C8kWso4ne4',
        size: '720 MB'
      },
      {
        id: 'de-4',
        title: 'Apache Kafka Streaming',
        description: 'Real-time data streaming',
        type: 'video',
        contentType: 'Streaming',
        fileUrl: 'https://www.youtube.com/watch?v=qu96DFXtbG4',
        size: '580 MB'
      },
      {
        id: 'de-5',
        title: 'ETL Pipeline Design',
        description: 'Extract, transform, load patterns',
        type: 'article',
        contentType: 'ETL',
        fileUrl: 'https://www.databricks.com/glossary/etl-pipeline',
        size: '3.4 MB'
      },
      {
        id: 'de-6',
        title: 'Data Warehouse Design',
        description: 'Build scalable data warehouses',
        type: 'article',
        contentType: 'Data Warehouse',
        fileUrl: 'https://www.snowflake.com/guides/data-warehouse-design',
        size: '3.9 MB'
      },
      {
        id: 'de-7',
        title: 'Apache Airflow for Orchestration',
        description: 'Automate data workflows',
        type: 'video',
        contentType: 'Orchestration',
        fileUrl: 'https://www.youtube.com/watch?v=AHMm1wfGuHE',
        size: '490 MB'
      }
    ]
  },
  {
    id: 'communication',
    title: 'Communication Skills',
    description: 'Master public speaking and professional communication',
    icon: '🎤',
    color: 'from-cyan-500 to-teal-500',
    resources: [
      {
        id: 'comm-1',
        title: 'Public Speaking Fundamentals',
        description: 'Overcome fear and speak confidently',
        type: 'video',
        contentType: 'Public Speaking',
        fileUrl: 'https://www.youtube.com/watch?v=tShavGuo0_E',
        size: '380 MB'
      },
      {
        id: 'comm-2',
        title: 'Business Writing Skills',
        description: 'Write clear professional documents',
        type: 'article',
        contentType: 'Writing',
        fileUrl: 'https://www.grammarly.com/business/learn/business-writing/',
        size: '2.4 MB'
      },
      {
        id: 'comm-3',
        title: 'Presentation Design',
        description: 'Create impactful presentations',
        type: 'video',
        contentType: 'Presentations',
        fileUrl: 'https://www.youtube.com/watch?v=Iwpi1Lm6dFo',
        size: '420 MB'
      },
      {
        id: 'comm-4',
        title: 'Active Listening Skills',
        description: 'Improve understanding and empathy',
        type: 'article',
        contentType: 'Interpersonal',
        fileUrl: 'https://www.mindtools.com/az4wxv7/active-listening',
        size: '1.8 MB'
      },
      {
        id: 'comm-5',
        title: 'Negotiation Techniques',
        description: 'Win-win negotiation strategies',
        type: 'video',
        contentType: 'Negotiation',
        fileUrl: 'https://www.youtube.com/watch?v=guZa7mQV1l0',
        size: '450 MB'
      },
      {
        id: 'comm-6',
        title: 'Email Etiquette',
        description: 'Professional email communication',
        type: 'article',
        contentType: 'Email',
        fileUrl: 'https://www.indeed.com/career-advice/career-development/email-etiquette',
        size: '1.6 MB'
      }
    ]
  },
  {
    id: 'computer-architecture',
    title: 'Computer Architecture',
    description: 'Learn CPU design, memory hierarchy, and processor organization',
    icon: '🖥️',
    color: 'from-slate-500 to-zinc-600',
    resources: [
      {
        id: 'ca-1',
        title: 'Computer Organization Basics',
        description: 'Understanding computer hardware organization',
        type: 'video',
        contentType: 'Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=L1ung0wil9Y',
        size: '580 MB'
      },
      {
        id: 'ca-2',
        title: 'CPU Architecture and Design',
        description: 'How processors execute instructions',
        type: 'article',
        contentType: 'CPU Design',
        fileUrl: 'https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/',
        size: '3.2 MB'
      },
      {
        id: 'ca-3',
        title: 'Memory Hierarchy and Cache',
        description: 'Cache memory, virtual memory concepts',
        type: 'video',
        contentType: 'Memory Systems',
        fileUrl: 'https://www.youtube.com/watch?v=p3q5zWCw8J4',
        size: '620 MB'
      },
      {
        id: 'ca-4',
        title: 'Pipelining and Parallel Processing',
        description: 'Instruction pipelining and hazards',
        type: 'video',
        contentType: 'Advanced Topics',
        fileUrl: 'https://www.youtube.com/watch?v=fzZOyGP0N0M',
        size: '540 MB'
      },
      {
        id: 'ca-5',
        title: 'RISC vs CISC Architecture',
        description: 'Compare instruction set architectures',
        type: 'article',
        contentType: 'ISA',
        fileUrl: 'https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/',
        size: '2.8 MB'
      },
      {
        id: 'ca-6',
        title: 'ARM Architecture Deep Dive',
        description: 'Modern ARM processor architecture',
        type: 'video',
        contentType: 'ARM',
        fileUrl: 'https://www.youtube.com/watch?v=7LqPJGnBPMM',
        size: '480 MB'
      }
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    description: 'Master process management, memory, file systems, and OS concepts',
    icon: '⚙️',
    color: 'from-emerald-600 to-green-700',
    resources: [
      {
        id: 'os-1',
        title: 'Operating Systems Introduction',
        description: 'Core concepts of operating systems',
        type: 'video',
        contentType: 'OS Basics',
        fileUrl: 'https://www.youtube.com/watch?v=vBURTt97EkA',
        size: '720 MB'
      },
      {
        id: 'os-2',
        title: 'Process Management',
        description: 'Process scheduling, creation, and synchronization',
        type: 'article',
        contentType: 'Processes',
        fileUrl: 'https://www.geeksforgeeks.org/introduction-of-process-management/',
        size: '3.5 MB'
      },
      {
        id: 'os-3',
        title: 'Memory Management Techniques',
        description: 'Paging, segmentation, and virtual memory',
        type: 'video',
        contentType: 'Memory',
        fileUrl: 'https://www.youtube.com/watch?v=qdkxXygc3rE',
        size: '580 MB'
      },
      {
        id: 'os-4',
        title: 'File Systems and Storage',
        description: 'File system implementation and disk scheduling',
        type: 'article',
        contentType: 'File Systems',
        fileUrl: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/',
        size: '2.9 MB'
      },
      {
        id: 'os-5',
        title: 'Deadlock Detection and Prevention',
        description: 'Handle deadlocks in multi-process systems',
        type: 'video',
        contentType: 'Deadlocks',
        fileUrl: 'https://www.youtube.com/watch?v=UVo9mGARkhQ',
        size: '420 MB'
      },
      {
        id: 'os-6',
        title: 'Linux Kernel Internals',
        description: 'Deep dive into Linux kernel',
        type: 'video',
        contentType: 'Linux',
        fileUrl: 'https://www.youtube.com/watch?v=WiZ05pnHZqM',
        size: '680 MB'
      },
      {
        id: 'os-7',
        title: 'Inter-Process Communication',
        description: 'Pipes, shared memory, and message passing',
        type: 'article',
        contentType: 'IPC',
        fileUrl: 'https://www.geeksforgeeks.org/inter-process-communication-ipc/',
        size: '2.4 MB'
      }
    ]
  },
  {
    id: 'database-systems',
    title: 'Database Management Systems',
    description: 'Learn RDBMS concepts, SQL, normalization, and database design',
    icon: '🗄️',
    color: 'from-blue-600 to-indigo-700',
    resources: [
      {
        id: 'dbms-1',
        title: 'DBMS Complete Course',
        description: 'Comprehensive database management concepts',
        type: 'video',
        contentType: 'DBMS Basics',
        fileUrl: 'https://www.youtube.com/watch?v=kBdlM6hNDAE',
        size: '820 MB'
      },
      {
        id: 'dbms-2',
        title: 'SQL Masterclass',
        description: 'Complete SQL from beginner to advanced',
        type: 'video',
        contentType: 'SQL',
        fileUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        size: '740 MB'
      },
      {
        id: 'dbms-3',
        title: 'Database Normalization',
        description: '1NF, 2NF, 3NF, BCNF explained',
        type: 'article',
        contentType: 'Normalization',
        fileUrl: 'https://www.geeksforgeeks.org/normal-forms-in-dbms/',
        size: '2.6 MB'
      },
      {
        id: 'dbms-4',
        title: 'Transaction Management',
        description: 'ACID properties and concurrency control',
        type: 'video',
        contentType: 'Transactions',
        fileUrl: 'https://www.youtube.com/watch?v=P80Js_qClUE',
        size: '480 MB'
      },
      {
        id: 'dbms-5',
        title: 'Indexing and Query Optimization',
        description: 'B-trees, hashing, and performance tuning',
        type: 'article',
        contentType: 'Optimization',
        fileUrl: 'https://use-the-index-luke.com/',
        size: '3.8 MB'
      },
      {
        id: 'dbms-6',
        title: 'ER Diagrams and Schema Design',
        description: 'Entity-relationship modeling',
        type: 'article',
        contentType: 'Design',
        fileUrl: 'https://www.lucidchart.com/pages/er-diagrams',
        size: '2.2 MB'
      },
      {
        id: 'dbms-7',
        title: 'NoSQL Databases Overview',
        description: 'MongoDB, Redis, Cassandra concepts',
        type: 'video',
        contentType: 'NoSQL',
        fileUrl: 'https://www.youtube.com/watch?v=xQnIN9bW0og',
        size: '560 MB'
      }
    ]
  },
  {
    id: 'compiler-design',
    title: 'Compiler Design',
    description: 'Build compilers: lexical analysis, parsing, code generation',
    icon: '🔄',
    color: 'from-purple-600 to-violet-700',
    resources: [
      {
        id: 'cd-1',
        title: 'Compiler Design Introduction',
        description: 'Phases of compilation process',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=Qkwj65l_96I',
        size: '620 MB'
      },
      {
        id: 'cd-2',
        title: 'Lexical Analysis',
        description: 'Tokenization and regular expressions',
        type: 'article',
        contentType: 'Lexer',
        fileUrl: 'https://www.geeksforgeeks.org/introduction-of-lexical-analysis/',
        size: '2.8 MB'
      },
      {
        id: 'cd-3',
        title: 'Syntax Analysis and Parsing',
        description: 'Top-down and bottom-up parsing',
        type: 'video',
        contentType: 'Parsing',
        fileUrl: 'https://www.youtube.com/watch?v=SH5F-rwWEog',
        size: '540 MB'
      },
      {
        id: 'cd-4',
        title: 'Semantic Analysis',
        description: 'Type checking and symbol tables',
        type: 'article',
        contentType: 'Semantics',
        fileUrl: 'https://www.geeksforgeeks.org/semantic-analysis-in-compiler-design/',
        size: '2.4 MB'
      },
      {
        id: 'cd-5',
        title: 'Intermediate Code Generation',
        description: 'Three-address code and DAGs',
        type: 'video',
        contentType: 'Code Gen',
        fileUrl: 'https://www.youtube.com/watch?v=Ck3PyeFNlV4',
        size: '480 MB'
      },
      {
        id: 'cd-6',
        title: 'Code Optimization Techniques',
        description: 'Loop optimization, dead code elimination',
        type: 'article',
        contentType: 'Optimization',
        fileUrl: 'https://www.geeksforgeeks.org/code-optimization-in-compiler-design/',
        size: '3.1 MB'
      }
    ]
  },
  {
    id: 'digital-electronics',
    title: 'Digital Electronics',
    description: 'Logic gates, flip-flops, counters, and digital circuit design',
    icon: '🔌',
    color: 'from-yellow-500 to-amber-600',
    resources: [
      {
        id: 'de-1',
        title: 'Digital Logic Fundamentals',
        description: 'Boolean algebra and logic gates',
        type: 'video',
        contentType: 'Logic Gates',
        fileUrl: 'https://www.youtube.com/watch?v=M0mx8S05v60',
        size: '580 MB'
      },
      {
        id: 'de-2',
        title: 'Combinational Circuits',
        description: 'Multiplexers, decoders, and adders',
        type: 'article',
        contentType: 'Combinational',
        fileUrl: 'https://www.geeksforgeeks.org/combinational-circuits/',
        size: '2.9 MB'
      },
      {
        id: 'de-3',
        title: 'Sequential Circuits',
        description: 'Flip-flops, registers, and counters',
        type: 'video',
        contentType: 'Sequential',
        fileUrl: 'https://www.youtube.com/watch?v=YW-_GkUguMM',
        size: '620 MB'
      },
      {
        id: 'de-4',
        title: 'K-Map Simplification',
        description: 'Karnaugh maps for Boolean minimization',
        type: 'article',
        contentType: 'Minimization',
        fileUrl: 'https://www.geeksforgeeks.org/introduction-of-k-map/',
        size: '2.2 MB'
      },
      {
        id: 'de-5',
        title: 'FPGA and Verilog Basics',
        description: 'Hardware description languages',
        type: 'video',
        contentType: 'HDL',
        fileUrl: 'https://www.youtube.com/watch?v=Vpd5s-O8ZJk',
        size: '540 MB'
      },
      {
        id: 'de-6',
        title: 'Microprocessor 8085 Architecture',
        description: 'Classic microprocessor programming',
        type: 'video',
        contentType: 'Microprocessor',
        fileUrl: 'https://www.youtube.com/watch?v=uLY5E1jv4sU',
        size: '680 MB'
      }
    ]
  },
  {
    id: 'control-systems',
    title: 'Control Systems',
    description: 'Learn feedback systems, stability analysis, and controllers',
    icon: '🎛️',
    color: 'from-red-500 to-rose-600',
    resources: [
      {
        id: 'cs-1',
        title: 'Control Systems Introduction',
        description: 'Open and closed loop systems',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=oBc_BHxw78s',
        size: '520 MB'
      },
      {
        id: 'cs-2',
        title: 'Transfer Functions',
        description: 'Laplace transforms in control systems',
        type: 'article',
        contentType: 'Math',
        fileUrl: 'https://www.electrical4u.com/transfer-function/',
        size: '2.8 MB'
      },
      {
        id: 'cs-3',
        title: 'Stability Analysis',
        description: 'Routh-Hurwitz and Nyquist criteria',
        type: 'video',
        contentType: 'Stability',
        fileUrl: 'https://www.youtube.com/watch?v=WBCZBOB3LCA',
        size: '580 MB'
      },
      {
        id: 'cs-4',
        title: 'PID Controller Design',
        description: 'Proportional-Integral-Derivative controllers',
        type: 'video',
        contentType: 'Controllers',
        fileUrl: 'https://www.youtube.com/watch?v=wkfEZmsQqiA',
        size: '460 MB'
      },
      {
        id: 'cs-5',
        title: 'Root Locus Method',
        description: 'Graphical analysis of system stability',
        type: 'article',
        contentType: 'Analysis',
        fileUrl: 'https://www.geeksforgeeks.org/root-locus-in-control-system/',
        size: '2.4 MB'
      },
      {
        id: 'cs-6',
        title: 'State Space Analysis',
        description: 'Modern control system representation',
        type: 'video',
        contentType: 'State Space',
        fileUrl: 'https://www.youtube.com/watch?v=hpeKrMG-WP0',
        size: '620 MB'
      }
    ]
  },
  {
    id: 'signals-systems',
    title: 'Signals and Systems',
    description: 'Signal processing, Fourier transforms, and system analysis',
    icon: '📶',
    color: 'from-teal-500 to-cyan-600',
    resources: [
      {
        id: 'ss-1',
        title: 'Signals and Systems Basics',
        description: 'Types of signals and systems',
        type: 'video',
        contentType: 'Fundamentals',
        fileUrl: 'https://www.youtube.com/watch?v=s8rsR_TStaA',
        size: '680 MB'
      },
      {
        id: 'ss-2',
        title: 'Fourier Series and Transform',
        description: 'Frequency domain analysis',
        type: 'video',
        contentType: 'Fourier',
        fileUrl: 'https://www.youtube.com/watch?v=spUNpyF58BY',
        size: '720 MB'
      },
      {
        id: 'ss-3',
        title: 'Laplace Transform',
        description: 'S-domain analysis techniques',
        type: 'article',
        contentType: 'Laplace',
        fileUrl: 'https://www.geeksforgeeks.org/laplace-transform/',
        size: '3.2 MB'
      },
      {
        id: 'ss-4',
        title: 'Z-Transform',
        description: 'Discrete-time signal analysis',
        type: 'video',
        contentType: 'Z-Transform',
        fileUrl: 'https://www.youtube.com/watch?v=XJRW6jamUHk',
        size: '540 MB'
      },
      {
        id: 'ss-5',
        title: 'Convolution and Correlation',
        description: 'Signal operations and filtering',
        type: 'article',
        contentType: 'Operations',
        fileUrl: 'https://www.geeksforgeeks.org/convolution-and-correlation/',
        size: '2.6 MB'
      },
      {
        id: 'ss-6',
        title: 'Sampling and Aliasing',
        description: 'Nyquist theorem and reconstruction',
        type: 'video',
        contentType: 'Sampling',
        fileUrl: 'https://www.youtube.com/watch?v=yWqrx08UeUs',
        size: '480 MB'
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Master arrays, trees, graphs, sorting, and algorithm design',
    icon: '🌲',
    color: 'from-green-500 to-emerald-600',
    resources: [
      {
        id: 'dsa-1',
        title: 'DSA Complete Course',
        description: 'Comprehensive data structures course',
        type: 'video',
        contentType: 'Complete Course',
        fileUrl: 'https://www.youtube.com/watch?v=8hly31xKli0',
        size: '1200 MB'
      },
      {
        id: 'dsa-2',
        title: 'Arrays and Linked Lists',
        description: 'Linear data structures fundamentals',
        type: 'article',
        contentType: 'Linear DS',
        fileUrl: 'https://www.geeksforgeeks.org/data-structures/',
        size: '3.8 MB'
      },
      {
        id: 'dsa-3',
        title: 'Trees and Binary Search Trees',
        description: 'Hierarchical data structures',
        type: 'video',
        contentType: 'Trees',
        fileUrl: 'https://www.youtube.com/watch?v=fAAZixBzIAI',
        size: '580 MB'
      },
      {
        id: 'dsa-4',
        title: 'Graph Algorithms',
        description: 'BFS, DFS, shortest path algorithms',
        type: 'video',
        contentType: 'Graphs',
        fileUrl: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU',
        size: '720 MB'
      },
      {
        id: 'dsa-5',
        title: 'Sorting and Searching',
        description: 'Quick sort, merge sort, binary search',
        type: 'article',
        contentType: 'Algorithms',
        fileUrl: 'https://www.geeksforgeeks.org/sorting-algorithms/',
        size: '2.9 MB'
      },
      {
        id: 'dsa-6',
        title: 'Dynamic Programming',
        description: 'Optimization techniques and patterns',
        type: 'video',
        contentType: 'DP',
        fileUrl: 'https://www.youtube.com/watch?v=oBt53YbR9Kk',
        size: '850 MB'
      },
      {
        id: 'dsa-7',
        title: 'Competitive Programming Guide',
        description: 'Problem solving strategies',
        type: 'article',
        contentType: 'CP',
        fileUrl: 'https://cp-algorithms.com/',
        size: '4.2 MB'
      }
    ]
  },
  {
    id: 'computer-networks',
    title: 'Computer Networks',
    description: 'Learn OSI model, TCP/IP, routing, and network protocols',
    icon: '🌐',
    color: 'from-sky-500 to-blue-600',
    resources: [
      {
        id: 'cn-1',
        title: 'Computer Networks Full Course',
        description: 'Complete networking fundamentals',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=IPvYjXCsTg8',
        size: '780 MB'
      },
      {
        id: 'cn-2',
        title: 'OSI Model Explained',
        description: 'Seven layers of networking',
        type: 'article',
        contentType: 'OSI Model',
        fileUrl: 'https://www.geeksforgeeks.org/osi-model/',
        size: '2.8 MB'
      },
      {
        id: 'cn-3',
        title: 'TCP/IP Protocol Suite',
        description: 'Internet protocol stack',
        type: 'video',
        contentType: 'TCP/IP',
        fileUrl: 'https://www.youtube.com/watch?v=2QGgEk20RXM',
        size: '620 MB'
      },
      {
        id: 'cn-4',
        title: 'IP Addressing and Subnetting',
        description: 'IPv4, IPv6, and subnet calculations',
        type: 'video',
        contentType: 'IP Addressing',
        fileUrl: 'https://www.youtube.com/watch?v=ecCuyq-Wprc',
        size: '540 MB'
      },
      {
        id: 'cn-5',
        title: 'Routing Algorithms',
        description: 'Distance vector and link state routing',
        type: 'article',
        contentType: 'Routing',
        fileUrl: 'https://www.geeksforgeeks.org/routing-algorithms-in-computer-network/',
        size: '3.1 MB'
      },
      {
        id: 'cn-6',
        title: 'Network Security Basics',
        description: 'Firewalls, encryption, and VPN',
        type: 'video',
        contentType: 'Security',
        fileUrl: 'https://www.youtube.com/watch?v=JIhZWgJA-9o',
        size: '480 MB'
      },
      {
        id: 'cn-7',
        title: 'Socket Programming',
        description: 'Network programming with sockets',
        type: 'article',
        contentType: 'Programming',
        fileUrl: 'https://www.geeksforgeeks.org/socket-programming-cc/',
        size: '2.4 MB'
      }
    ]
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'SDLC, design patterns, testing, and project management',
    icon: '📐',
    color: 'from-indigo-500 to-purple-600',
    resources: [
      {
        id: 'se-1',
        title: 'Software Engineering Complete',
        description: 'SDLC models and methodologies',
        type: 'video',
        contentType: 'SDLC',
        fileUrl: 'https://www.youtube.com/watch?v=uJpQXnMJVRM',
        size: '680 MB'
      },
      {
        id: 'se-2',
        title: 'Agile and Scrum Guide',
        description: 'Modern project management',
        type: 'article',
        contentType: 'Agile',
        fileUrl: 'https://www.atlassian.com/agile',
        size: '3.4 MB'
      },
      {
        id: 'se-3',
        title: 'Design Patterns in Practice',
        description: 'Gang of Four patterns explained',
        type: 'video',
        contentType: 'Design Patterns',
        fileUrl: 'https://www.youtube.com/watch?v=tv-_1er1mWI',
        size: '720 MB'
      },
      {
        id: 'se-4',
        title: 'UML Diagrams Tutorial',
        description: 'Class, sequence, and use case diagrams',
        type: 'article',
        contentType: 'UML',
        fileUrl: 'https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/',
        size: '2.8 MB'
      },
      {
        id: 'se-5',
        title: 'Software Testing Fundamentals',
        description: 'Unit, integration, and system testing',
        type: 'video',
        contentType: 'Testing',
        fileUrl: 'https://www.youtube.com/watch?v=u6QfIXgjwGQ',
        size: '540 MB'
      },
      {
        id: 'se-6',
        title: 'Clean Code Principles',
        description: 'Write maintainable software',
        type: 'article',
        contentType: 'Best Practices',
        fileUrl: 'https://www.freecodecamp.org/news/clean-coding-for-beginners/',
        size: '2.6 MB'
      },
      {
        id: 'se-7',
        title: 'Git Version Control',
        description: 'Master Git and GitHub workflows',
        type: 'video',
        contentType: 'Version Control',
        fileUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        size: '480 MB'
      }
    ]
  },
  {
    id: 'theory-computation',
    title: 'Theory of Computation',
    description: 'Automata theory, formal languages, and computability',
    icon: '🔢',
    color: 'from-fuchsia-500 to-pink-600',
    resources: [
      {
        id: 'toc-1',
        title: 'Theory of Computation Full Course',
        description: 'Complete TOC for GATE/interviews',
        type: 'video',
        contentType: 'Complete Course',
        fileUrl: 'https://www.youtube.com/watch?v=58N2N7zJGrQ',
        size: '920 MB'
      },
      {
        id: 'toc-2',
        title: 'Finite Automata',
        description: 'DFA, NFA, and equivalence',
        type: 'article',
        contentType: 'Automata',
        fileUrl: 'https://www.geeksforgeeks.org/introduction-of-finite-automata/',
        size: '2.8 MB'
      },
      {
        id: 'toc-3',
        title: 'Regular Expressions',
        description: 'Patterns and regex operations',
        type: 'video',
        contentType: 'Regex',
        fileUrl: 'https://www.youtube.com/watch?v=rhzKDrUiJVk',
        size: '420 MB'
      },
      {
        id: 'toc-4',
        title: 'Context-Free Grammars',
        description: 'CFG, parse trees, and ambiguity',
        type: 'article',
        contentType: 'CFG',
        fileUrl: 'https://www.geeksforgeeks.org/introduction-to-context-free-grammar/',
        size: '2.4 MB'
      },
      {
        id: 'toc-5',
        title: 'Pushdown Automata',
        description: 'Stack-based automata theory',
        type: 'video',
        contentType: 'PDA',
        fileUrl: 'https://www.youtube.com/watch?v=eY7fwj5jvC4',
        size: '480 MB'
      },
      {
        id: 'toc-6',
        title: 'Turing Machines',
        description: 'Universal computation model',
        type: 'article',
        contentType: 'Turing Machine',
        fileUrl: 'https://www.geeksforgeeks.org/turing-machine/',
        size: '3.2 MB'
      },
      {
        id: 'toc-7',
        title: 'Decidability and Halting Problem',
        description: 'Limits of computation',
        type: 'video',
        contentType: 'Decidability',
        fileUrl: 'https://www.youtube.com/watch?v=92WHN-pAFCs',
        size: '380 MB'
      }
    ]
  },
  {
    id: 'discrete-mathematics',
    title: 'Discrete Mathematics',
    description: 'Set theory, logic, combinatorics, and graph theory',
    icon: '🔣',
    color: 'from-orange-500 to-red-500',
    resources: [
      {
        id: 'dm-1',
        title: 'Discrete Math Full Course',
        description: 'Complete discrete mathematics',
        type: 'video',
        contentType: 'Complete Course',
        fileUrl: 'https://www.youtube.com/watch?v=rdXw7Ps9vxc',
        size: '880 MB'
      },
      {
        id: 'dm-2',
        title: 'Set Theory and Logic',
        description: 'Propositional and predicate logic',
        type: 'article',
        contentType: 'Logic',
        fileUrl: 'https://www.geeksforgeeks.org/set-theory/',
        size: '3.1 MB'
      },
      {
        id: 'dm-3',
        title: 'Combinatorics and Counting',
        description: 'Permutations and combinations',
        type: 'video',
        contentType: 'Combinatorics',
        fileUrl: 'https://www.youtube.com/watch?v=8RRo6Ti9d0U',
        size: '520 MB'
      },
      {
        id: 'dm-4',
        title: 'Graph Theory Basics',
        description: 'Graphs, trees, and connectivity',
        type: 'article',
        contentType: 'Graphs',
        fileUrl: 'https://www.geeksforgeeks.org/graph-and-its-representations/',
        size: '2.6 MB'
      },
      {
        id: 'dm-5',
        title: 'Relations and Functions',
        description: 'Equivalence and partial orders',
        type: 'video',
        contentType: 'Relations',
        fileUrl: 'https://www.youtube.com/watch?v=ouipbDkwHWA',
        size: '480 MB'
      },
      {
        id: 'dm-6',
        title: 'Mathematical Induction',
        description: 'Proof techniques',
        type: 'article',
        contentType: 'Proofs',
        fileUrl: 'https://www.mathsisfun.com/algebra/mathematical-induction.html',
        size: '1.8 MB'
      }
    ]
  },
  {
    id: 'engineering-mathematics',
    title: 'Engineering Mathematics',
    description: 'Calculus, linear algebra, differential equations, and probability',
    icon: '📊',
    color: 'from-lime-500 to-green-600',
    resources: [
      {
        id: 'em-1',
        title: 'Engineering Math Complete',
        description: 'All math topics for engineers',
        type: 'video',
        contentType: 'Complete Course',
        fileUrl: 'https://www.youtube.com/watch?v=WUvTyaaNkzM',
        size: '980 MB'
      },
      {
        id: 'em-2',
        title: 'Linear Algebra Essentials',
        description: 'Matrices, vectors, and eigenvalues',
        type: 'video',
        contentType: 'Linear Algebra',
        fileUrl: 'https://www.youtube.com/watch?v=fNk_zzaMoSs',
        size: '720 MB'
      },
      {
        id: 'em-3',
        title: 'Differential Equations',
        description: 'ODEs and PDEs for engineers',
        type: 'article',
        contentType: 'Diff Equations',
        fileUrl: 'https://www.mathsisfun.com/calculus/differential-equations.html',
        size: '3.4 MB'
      },
      {
        id: 'em-4',
        title: 'Probability and Statistics',
        description: 'Random variables and distributions',
        type: 'video',
        contentType: 'Probability',
        fileUrl: 'https://www.youtube.com/watch?v=xxpc-HPKN28',
        size: '640 MB'
      },
      {
        id: 'em-5',
        title: 'Multivariable Calculus',
        description: 'Partial derivatives and integrals',
        type: 'video',
        contentType: 'Calculus',
        fileUrl: 'https://www.youtube.com/watch?v=TrcCbdWwCBc',
        size: '580 MB'
      },
      {
        id: 'em-6',
        title: 'Complex Analysis',
        description: 'Complex numbers and functions',
        type: 'article',
        contentType: 'Complex',
        fileUrl: 'https://www.geeksforgeeks.org/complex-analysis/',
        size: '2.8 MB'
      },
      {
        id: 'em-7',
        title: 'Numerical Methods',
        description: 'Computational techniques',
        type: 'video',
        contentType: 'Numerical',
        fileUrl: 'https://www.youtube.com/watch?v=656jLdFOaOI',
        size: '520 MB'
      }
    ]
  },
  {
    id: 'embedded-programming',
    title: 'Embedded C Programming',
    description: 'Microcontroller programming, Arduino, and embedded systems',
    icon: '🔧',
    color: 'from-zinc-500 to-slate-600',
    resources: [
      {
        id: 'ec-1',
        title: 'Embedded C Complete Course',
        description: 'Programming for microcontrollers',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=Hffw-m9fuxc',
        size: '720 MB'
      },
      {
        id: 'ec-2',
        title: 'Arduino Programming',
        description: 'Get started with Arduino',
        type: 'video',
        contentType: 'Arduino',
        fileUrl: 'https://www.youtube.com/watch?v=fJWR7dBuc18',
        size: '580 MB'
      },
      {
        id: 'ec-3',
        title: 'STM32 Microcontroller',
        description: 'ARM Cortex programming',
        type: 'article',
        contentType: 'STM32',
        fileUrl: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html',
        size: '4.2 MB'
      },
      {
        id: 'ec-4',
        title: 'Raspberry Pi Projects',
        description: 'IoT and embedded Linux',
        type: 'video',
        contentType: 'Raspberry Pi',
        fileUrl: 'https://www.youtube.com/watch?v=eZ74x6dVYes',
        size: '640 MB'
      },
      {
        id: 'ec-5',
        title: 'Real-Time Operating Systems',
        description: 'FreeRTOS and RTOS concepts',
        type: 'video',
        contentType: 'RTOS',
        fileUrl: 'https://www.youtube.com/watch?v=F321087yYy4',
        size: '520 MB'
      },
      {
        id: 'ec-6',
        title: 'I2C, SPI, UART Protocols',
        description: 'Communication protocols',
        type: 'article',
        contentType: 'Protocols',
        fileUrl: 'https://www.geeksforgeeks.org/i2c-communication-protocol/',
        size: '2.6 MB'
      }
    ]
  },
  {
    id: 'vlsi-design',
    title: 'VLSI Design',
    description: 'Integrated circuit design, CMOS, and chip fabrication',
    icon: '🔬',
    color: 'from-violet-500 to-purple-600',
    resources: [
      {
        id: 'vlsi-1',
        title: 'VLSI Design Fundamentals',
        description: 'Introduction to IC design',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=Hi7rK0hZnfc',
        size: '680 MB'
      },
      {
        id: 'vlsi-2',
        title: 'CMOS Technology',
        description: 'CMOS transistors and logic',
        type: 'article',
        contentType: 'CMOS',
        fileUrl: 'https://www.geeksforgeeks.org/cmos-logic-gate/',
        size: '3.2 MB'
      },
      {
        id: 'vlsi-3',
        title: 'Verilog HDL Programming',
        description: 'Hardware description language',
        type: 'video',
        contentType: 'Verilog',
        fileUrl: 'https://www.youtube.com/watch?v=Vpd5s-O8ZJk',
        size: '620 MB'
      },
      {
        id: 'vlsi-4',
        title: 'VHDL Essentials',
        description: 'Another HDL for IC design',
        type: 'article',
        contentType: 'VHDL',
        fileUrl: 'https://www.nandland.com/vhdl/tutorials/index.html',
        size: '2.8 MB'
      },
      {
        id: 'vlsi-5',
        title: 'ASIC Design Flow',
        description: 'RTL to GDSII process',
        type: 'video',
        contentType: 'ASIC',
        fileUrl: 'https://www.youtube.com/watch?v=0Aw_d7HAhxM',
        size: '540 MB'
      },
      {
        id: 'vlsi-6',
        title: 'Physical Design Concepts',
        description: 'Placement, routing, and timing',
        type: 'article',
        contentType: 'Physical Design',
        fileUrl: 'https://www.vlsi-expert.com/p/physical-design.html',
        size: '3.6 MB'
      }
    ]
  },
  {
    id: 'power-electronics',
    title: 'Power Electronics',
    description: 'Converters, inverters, and power semiconductor devices',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    resources: [
      {
        id: 'pe-1',
        title: 'Power Electronics Basics',
        description: 'Introduction to power conversion',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=lqPeIK8C2Ow',
        size: '580 MB'
      },
      {
        id: 'pe-2',
        title: 'Power Semiconductor Devices',
        description: 'Thyristors, MOSFETs, and IGBTs',
        type: 'article',
        contentType: 'Devices',
        fileUrl: 'https://www.electronics-tutorials.ws/power/power_1.html',
        size: '2.9 MB'
      },
      {
        id: 'pe-3',
        title: 'DC-DC Converters',
        description: 'Buck, boost, and buck-boost',
        type: 'video',
        contentType: 'DC-DC',
        fileUrl: 'https://www.youtube.com/watch?v=wI-KYRdmx-E',
        size: '620 MB'
      },
      {
        id: 'pe-4',
        title: 'AC-DC Rectifiers',
        description: 'Controlled and uncontrolled rectifiers',
        type: 'article',
        contentType: 'Rectifiers',
        fileUrl: 'https://www.electrical4u.com/rectifier/',
        size: '2.4 MB'
      },
      {
        id: 'pe-5',
        title: 'Inverters and PWM',
        description: 'DC to AC conversion',
        type: 'video',
        contentType: 'Inverters',
        fileUrl: 'https://www.youtube.com/watch?v=fwk1qULBvGE',
        size: '540 MB'
      },
      {
        id: 'pe-6',
        title: 'Electric Vehicle Power Systems',
        description: 'Power electronics in EVs',
        type: 'video',
        contentType: 'EV',
        fileUrl: 'https://www.youtube.com/watch?v=3SAxXUIre28',
        size: '680 MB'
      }
    ]
  },
  {
    id: 'mechanics-materials',
    title: 'Mechanics of Materials',
    description: 'Stress, strain, and structural analysis for mechanical engineers',
    icon: '🏗️',
    color: 'from-stone-500 to-neutral-600',
    resources: [
      {
        id: 'mom-1',
        title: 'Strength of Materials',
        description: 'Stress and strain fundamentals',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=RfBzHO2RC3g',
        size: '720 MB'
      },
      {
        id: 'mom-2',
        title: 'Bending and Shear',
        description: 'Beam analysis and diagrams',
        type: 'article',
        contentType: 'Beams',
        fileUrl: 'https://www.engineeringtoolbox.com/beam-stress-deflection-d_1312.html',
        size: '2.8 MB'
      },
      {
        id: 'mom-3',
        title: 'Torsion in Shafts',
        description: 'Circular shaft analysis',
        type: 'video',
        contentType: 'Torsion',
        fileUrl: 'https://www.youtube.com/watch?v=1YTKedLQOa0',
        size: '480 MB'
      },
      {
        id: 'mom-4',
        title: 'Column Buckling',
        description: "Euler's formula and critical loads",
        type: 'article',
        contentType: 'Buckling',
        fileUrl: 'https://www.efunda.com/formulae/solid_mechanics/columns/intro.cfm',
        size: '2.2 MB'
      },
      {
        id: 'mom-5',
        title: "Mohr's Circle",
        description: 'Principal stresses and planes',
        type: 'video',
        contentType: 'Stress Analysis',
        fileUrl: 'https://www.youtube.com/watch?v=lHN8d6xMsHM',
        size: '420 MB'
      },
      {
        id: 'mom-6',
        title: 'Finite Element Analysis Intro',
        description: 'FEA basics for structural analysis',
        type: 'video',
        contentType: 'FEA',
        fileUrl: 'https://www.youtube.com/watch?v=GHjopp47vvQ',
        size: '580 MB'
      }
    ]
  },
  {
    id: 'thermodynamics',
    title: 'Thermodynamics',
    description: 'Heat transfer, thermodynamic cycles, and energy systems',
    icon: '🌡️',
    color: 'from-red-500 to-orange-500',
    resources: [
      {
        id: 'thermo-1',
        title: 'Thermodynamics Complete Course',
        description: 'Laws of thermodynamics',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=VEfLz7K0zzo',
        size: '780 MB'
      },
      {
        id: 'thermo-2',
        title: 'Heat Transfer Modes',
        description: 'Conduction, convection, radiation',
        type: 'article',
        contentType: 'Heat Transfer',
        fileUrl: 'https://www.engineeringtoolbox.com/heat-transfer-d_431.html',
        size: '2.6 MB'
      },
      {
        id: 'thermo-3',
        title: 'Carnot and Otto Cycles',
        description: 'Thermodynamic cycles explained',
        type: 'video',
        contentType: 'Cycles',
        fileUrl: 'https://www.youtube.com/watch?v=p4xNo0L72Yg',
        size: '520 MB'
      },
      {
        id: 'thermo-4',
        title: 'Refrigeration Cycles',
        description: 'HVAC and cooling systems',
        type: 'article',
        contentType: 'Refrigeration',
        fileUrl: 'https://www.swtc.edu/ag_power/air_conditioning/lecture/refrigeration_cycle.htm',
        size: '2.4 MB'
      },
      {
        id: 'thermo-5',
        title: 'Steam Tables and Properties',
        description: 'Water and steam thermodynamics',
        type: 'video',
        contentType: 'Steam',
        fileUrl: 'https://www.youtube.com/watch?v=pKvo0XWZtjo',
        size: '480 MB'
      },
      {
        id: 'thermo-6',
        title: 'Entropy and Second Law',
        description: 'Understanding entropy',
        type: 'article',
        contentType: 'Entropy',
        fileUrl: 'https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/a/what-is-entropy',
        size: '2.1 MB'
      }
    ]
  },
  {
    id: 'fluid-mechanics',
    title: 'Fluid Mechanics',
    description: 'Fluid statics, dynamics, and hydraulic systems',
    icon: '💧',
    color: 'from-blue-400 to-cyan-500',
    resources: [
      {
        id: 'fm-1',
        title: 'Fluid Mechanics Fundamentals',
        description: 'Properties and behavior of fluids',
        type: 'video',
        contentType: 'Basics',
        fileUrl: 'https://www.youtube.com/watch?v=PNqM1bF1Q6Q',
        size: '680 MB'
      },
      {
        id: 'fm-2',
        title: "Bernoulli's Equation",
        description: 'Energy in fluid flow',
        type: 'article',
        contentType: 'Bernoulli',
        fileUrl: 'https://www.grc.nasa.gov/www/k-12/airplane/bern.html',
        size: '2.4 MB'
      },
      {
        id: 'fm-3',
        title: 'Pipe Flow and Losses',
        description: 'Friction and minor losses',
        type: 'video',
        contentType: 'Pipe Flow',
        fileUrl: 'https://www.youtube.com/watch?v=dYofq5VEUzU',
        size: '540 MB'
      },
      {
        id: 'fm-4',
        title: 'Dimensional Analysis',
        description: 'Buckingham Pi theorem',
        type: 'article',
        contentType: 'Dimensional',
        fileUrl: 'https://www.efunda.com/formulae/fluids/dimensional.cfm',
        size: '2.2 MB'
      },
      {
        id: 'fm-5',
        title: 'CFD Introduction',
        description: 'Computational fluid dynamics basics',
        type: 'video',
        contentType: 'CFD',
        fileUrl: 'https://www.youtube.com/watch?v=x5_fgKDLLNo',
        size: '620 MB'
      },
      {
        id: 'fm-6',
        title: 'Pumps and Turbines',
        description: 'Hydraulic machinery',
        type: 'video',
        contentType: 'Machinery',
        fileUrl: 'https://www.youtube.com/watch?v=HWt3hFJH5hU',
        size: '520 MB'
      }
    ]
  }
];
