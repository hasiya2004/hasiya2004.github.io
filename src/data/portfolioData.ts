export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string; tag: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI/ML" | "Data Science" | "Cyber Security" | "Full Stack" | "Mobile";
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface WikiArticle {
  id: string;
  title: string;
  slug: string;
  category: "AI Research" | "Cybersecurity" | "Data Engineering" | "Systems & Rust" | "Nukebird Org";
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
  views: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  skills: string[];
  badgeColor: string;
  verificationUrl?: string;
  summary: string;
}

export const PERSONAL_INFO = {
  name: "Hasindu Senarathna",
  title: "Data Scientist & AI Engineer",
  institution: "SLTC (Sri Lanka Technological Campus)",
  organization: "Nukebird",
  email: "hasindusenarathna2004@gmail.com",
  phone: "0705245564",
  formattedPhone: "+94 70 524 5564",
  address: "F/6 Madurupitiya Waththa Algama, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/hasindu-senarathna-929243252/",
  github: "https://github.com/hasiya2004",
  bio: "Passionate Data Scientist, AI Engineer, and Cybersecurity Researcher at SLTC. Founder of Nukebird Org. Specialized in building autonomous AI architectures, high-performance data processing pipelines, and resilient system software.",
  stats: [
    { label: "Connections", value: "500+" },
    { label: "Core Technologies", value: "18+" },
    { label: "Nukebird Projects", value: "12+" },
    { label: "Research Articles", value: "5+" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Science & Artificial Intelligence",
    skills: [
      { name: "Python", level: 96, icon: "Terminal", tag: "Core Language" },
      { name: "Pandas & NumPy", level: 94, icon: "Database", tag: "Data Analysis" },
      { name: "PyTorch & TensorFlow", level: 90, icon: "Cpu", tag: "Deep Learning" },
      { name: "Scikit-Learn", level: 92, icon: "Activity", tag: "Machine Learning" },
      { name: "OpenCV", level: 85, icon: "Eye", tag: "Computer Vision" },
      { name: "Data Visualization", level: 90, icon: "BarChart3", tag: "Analytics" }
    ]
  },
  {
    title: "Cyber Security & Systems Engineering",
    skills: [
      { name: "Linux System Administration", level: 95, icon: "Server", tag: "OS & Kernel" },
      { name: "Ethical Hacking Tools (Nmap, Metasploit, Wireshark)", level: 88, icon: "ShieldAlert", tag: "Penetration Testing" },
      { name: "Rust", level: 84, icon: "Zap", tag: "Systems Language" },
      { name: "Network Security & Analysis", level: 86, icon: "Wifi", tag: "SecOps" }
    ]
  },
  {
    title: "Enterprise & Backend Software",
    skills: [
      { name: "Java", level: 90, icon: "Code2", tag: "Enterprise" },
      { name: "Spring Boot", level: 88, icon: "Layers", tag: "Microservices" },
      { name: "C# & .NET / .NET Core", level: 85, icon: "FileCode", tag: "Backend Framework" },
      { name: "SQL & Relational Databases", level: 88, icon: "Database", tag: "Data Storage" },
      { name: "Docker & Containers", level: 82, icon: "Box", tag: "DevOps" }
    ]
  },
  {
    title: "Modern Web & Mobile Frameworks",
    skills: [
      { name: "React & React Native", level: 92, icon: "Globe", tag: "Frontend & Mobile" },
      { name: "TypeScript / JavaScript", level: 90, icon: "FileText", tag: "Web Language" },
      { name: "Flutter", level: 82, icon: "Smartphone", tag: "Cross-Platform Mobile" },
      { name: "HTML5 & Tailwind CSS", level: 95, icon: "Layout", tag: "UI Styling" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nuke-ai-sentinel",
    title: "Nukebird AI Sentinel: Cyber Anomaly Engine",
    subtitle: "Real-time network intrusion detection using Deep Perceptron Networks",
    description: "An open-source cyber threat intelligence engine developed under Nukebird Org. Combines eBPF packet capture with PyTorch autoencoders to detect zero-day anomaly patterns in network traffic with low overhead.",
    category: "AI/ML",
    tags: ["Python", "PyTorch", "Rust", "Linux", "eBPF", "Wireshark Protocol"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/hasiya2004",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "99.4%" },
      { label: "Throughput", value: "10 Gbps" }
    ]
  },
  {
    id: "sltc-genomics-pipeline",
    title: "High-Dimensional Gene Data Analytics",
    subtitle: "Distributed Pandas & Scikit-learn genomic sequence clustering",
    description: "A data science toolkit built for high-throughput gene expression analysis. Features custom PCA dimensionality reduction, interactive t-SNE visualizer, and automated biological report generation.",
    category: "Data Science",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "React", "Spring Boot"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/hasiya2004",
    featured: true,
    metrics: [
      { label: "Data Scalability", value: "50M+ rows" },
      { label: "Speedup", value: "4.2x" }
    ]
  },
  {
    id: "spring-nuke-vault",
    title: "NukeVault Microservices API",
    subtitle: "Secure enterprise REST backend with Spring Boot & Docker",
    description: "Enterprise grade backend platform featuring OAuth2 authentication, microservice mesh, SQL query optimization, and resilient rate-limiting middleware designed for large-scale enterprise data streaming.",
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "SQL", "Docker", "C# .NET", "Security"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/hasiya2004",
    featured: false
  },
  {
    id: "nuke-mobile-scanner",
    title: "NukeMobile Security & Diagnostics",
    subtitle: "Cross-platform vulnerability diagnostic app in React Native & Flutter",
    description: "Mobile utility application providing real-time device posture auditing, network connection inspection, and security benchmark scores on Android and iOS devices.",
    category: "Mobile",
    tags: ["React Native", "Flutter", "TypeScript", "Android/iOS"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/hasiya2004",
    featured: false
  }
];

export const WIKI_ARTICLES: WikiArticle[] = [
  {
    id: "wiki-1",
    title: "Anomalous Matter & Deep Shader Mathematics in WebGL",
    slug: "anomalous-matter-webgl-shaders",
    category: "AI Research",
    author: "Hasindu Senarathna",
    date: "July 2026",
    readTime: "6 min read",
    summary: "Exploring GLSL Perlin noise algorithms, 3D vertex displacement, and Fresnel specular glow effects inside Three.js generative visual environments.",
    content: `
# Generative 3D Shaders & Perlin Noise Dynamics

Modern interactive web applications leverage GPU-accelerated WebGL shaders to simulate complex physical phenomena and biological anomalies in real-time.

## The Mathematical Foundation

In our **Anomalous Matter Scene**, we use 3D Simplex Perlin Noise to deform an icosahedron geometry dynamically on every animation frame.

\`\`\`glsl
// Perlin Noise function snippet
float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    // ... Permutation and gradient calculations ...
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
\`\`\`

## Vertex Displacement & Lighting Vectors

The vertex shader modulates surface normal vectors along the displacement gradient:

\`\`\`glsl
void main() {
    vNormal = normal;
    vPosition = position;
    float displacement = snoise(position * 2.0 + time * 0.5) * 0.2;
    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
\`\`\`

### Key Takeaways
1. **Perlin Noise** creates organic, fluid-like movement rather than mechanical sine-wave oscillations.
2. **Fresnel Effect** adds a glowing edge halo around the object boundary based on the dot product of the normal and view direction.
    `,
    tags: ["Three.js", "GLSL", "WebGL", "Mathematics", "AI Generative Visuals"],
    views: 412
  },
  {
    id: "wiki-2",
    title: "High-Throughput Feature Extraction with Pandas & PyTorch",
    slug: "pandas-pytorch-feature-extraction",
    category: "Data Engineering",
    author: "Hasindu Senarathna",
    date: "June 2026",
    readTime: "8 min read",
    summary: "A comprehensive guide on optimizing memory efficiency when passing multi-gigabyte pandas DataFrames into PyTorch DataLoader tensors.",
    content: `
# High-Performance Data Processing Pipelines

Data Scientists frequently encounter memory bottlenecks when transitioning raw tabular datasets into deep neural network training loops.

## Pipeline Optimization Techniques

### 1. Zero-Copy NumPy Memory Mapping
By converting pandas structures directly into C-contiguous NumPy arrays, we prevent unnecessary heap allocation overhead:

\`\`\`python
import pandas as pd
import torch
from torch.utils.data import TensorDataset, DataLoader

def load_optimized_dataset(csv_path: str, batch_size: int = 512):
    # Read with explicit downcasted dtypes
    df = pd.read_csv(csv_path, dtype={'feature_col': 'float32'})
    
    # Zero-copy memory view into Tensor
    features = torch.from_numpy(df.values)
    dataset = TensorDataset(features)
    return DataLoader(dataset, batch_size=batch_size, shuffle=True, pin_memory=True)
\`\`\`

## Benchmarks at SLTC Lab
- **Baseline Pandas to Tensor**: 14.2 seconds / epoch
- **Optimized Zero-Copy Pipeline**: 2.8 seconds / epoch (5.07x Speedup)
    `,
    tags: ["Python", "Pandas", "PyTorch", "Data Science", "SLTC"],
    views: 620
  },
  {
    id: "wiki-3",
    title: "Offensive Cyber Security: Penetration Testing & Ethical Hacking Tooling",
    slug: "offensive-cyber-security-tools",
    category: "Cybersecurity",
    author: "Hasindu Senarathna",
    date: "May 2026",
    readTime: "10 min read",
    summary: "Architecting ethical hacking workflows using Nmap, Wireshark, Metasploit, and custom Linux shell scripts for vulnerability analysis.",
    content: `
# Modern Cybersecurity Protocols & Penetration Testing

System security demands proactive vulnerability assessments to defend against modern threat vectors.

## Core Toolkit Architecture

### 1. Network Reconnaissance (Nmap)
Understanding host exposure before deploying security policies:

\`\`\`bash
# Comprehensive service version detection & script scan
nmap -sV -sC -O -p- --min-rate 5000 192.168.1.0/24 -oA network_audit
\`\`\`

### 2. Deep Packet Inspection (Wireshark & tshark)
Automating packet capture triage using TShark terminal scripts:

\`\`\`bash
tshark -i eth0 -Y "http.request.method == POST || tls.handshake" -T fields -e frame.time -e ip.src -e ip.dst
\`\`\`

### 3. Exploitation Defense Framework (Metasploit)
Validating patch management by simulating controlled penetration tests in isolated laboratory environments.
    `,
    tags: ["Cybersecurity", "Linux", "Nmap", "Wireshark", "Ethical Hacking", "Nukebird"],
    views: 890
  },
  {
    id: "wiki-4",
    title: "Nukebird Organization Mission: Autonomous AI Systems",
    slug: "nukebird-organization-mission",
    category: "Nukebird Org",
    author: "Hasindu Senarathna",
    date: "April 2026",
    readTime: "4 min read",
    summary: "The founding vision of Nukebird Org — advancing open research at the intersection of Artificial Intelligence, Data Science, and Systems Security.",
    content: `
# The Nukebird Manifesto

Founded by **Hasindu Senarathna**, Nukebird Org is a dedicated research laboratory and software initiative centered on:

1. **Autonomous Intelligence**: Developing machine learning algorithms capable of self-healing and automated decision-making.
2. **Resilient Cyber Systems**: Blending Linux system security with proactive threat monitoring.
3. **Open Knowledge**: Sharing scientific findings, tutorials, and codebase blueprints through public Wiki articles and repositories.

Join our community on GitHub: [hasiya2004](https://github.com/hasiya2004)
    `,
    tags: ["Nukebird", "AI", "Open Source", "SLTC", "Vision"],
    views: 1105
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-ai-deep-learning",
    title: "Deep Learning & Neural Networks Specialist",
    issuer: "DeepLearning.AI / SLTC Advanced AI Lab",
    date: "2025",
    credentialId: "DL-AI-994821",
    category: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "CNN", "Transformer Models", "Python"],
    badgeColor: "from-sky-500 to-blue-600",
    verificationUrl: "https://www.linkedin.com/in/hasindu-senarathna-929243252/",
    summary: "Certified proficiency in designing deep neural network architectures, hyperparameter tuning, model optimization, and deployment."
  },
  {
    id: "cert-data-science",
    title: "Advanced Data Science & Analytics",
    issuer: "Sri Lanka Technological Campus (SLTC)",
    date: "2025",
    credentialId: "SLTC-DS-2025-08",
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Data Mining", "Statistics"],
    badgeColor: "from-cyan-500 to-teal-600",
    verificationUrl: "https://www.linkedin.com/in/hasindu-senarathna-929243252/",
    summary: "Academic certification covering statistical modelling, data pipeline engineering, predictive analytics, and big data handling."
  },
  {
    id: "cert-cyber-security",
    title: "Ethical Hacking & Network Defense Specialist",
    issuer: "Offensive Cyber Security Guild",
    date: "2024",
    credentialId: "CYBER-SEC-7731",
    category: "Cybersecurity",
    skills: ["Linux", "Nmap", "Wireshark", "Metasploit", "Penetration Testing"],
    badgeColor: "from-emerald-500 to-green-600",
    verificationUrl: "https://github.com/hasiya2004",
    summary: "Hands-on certification in vulnerability discovery, packet analysis, wireless network auditing, and Linux hardiness testing."
  },
  {
    id: "cert-spring-java",
    title: "Enterprise Application Architecture (Spring Boot & Java)",
    issuer: "Enterprise Software Institute",
    date: "2024",
    credentialId: "JAVA-SPRING-4402",
    category: "Software Engineering",
    skills: ["Java", "Spring Boot", "SQL", "Microservices", "REST APIs"],
    badgeColor: "from-purple-500 to-indigo-600",
    verificationUrl: "https://github.com/hasiya2004",
    summary: "Comprehensive mastery over enterprise Java, Spring Boot microservices, ORM database connectivity, and backend security."
  }
];
