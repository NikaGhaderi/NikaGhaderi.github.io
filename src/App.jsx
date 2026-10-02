import { useState, useEffect, useRef } from 'react';

const navItems = [
  { id: 'home', label: 'About' },
  { id: 'experience', label: 'Experience & Teaching' },
  { id: 'projects', label: 'Projects & Honors' }
];

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

const ExternalIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const researchItems = [
  {
    title: 'Undergraduate Researcher (B.Sc. Thesis)',
    org: 'DAISY Lab | Sharif University of Technology',
    subtitle: 'Learning Query Cost Models that Extrapolate Across Data Scale · Supervisor: Dr. Maryam Ramezani',
    date: 'March 2026 – Present',
    current: true,
    points: [
      'Predicting the latency and I/O of Spark SQL queries from their compile-time query plans, to support cost-based optimization and resource planning.',
      'Designing graph-transformer models over query-plan graphs; in a 10× scale-up pilot on real Spark traces, the models achieved ~37% lower latency error than the best template-level analytic cost model.'
    ]
  },
  {
    title: 'AI Research Assistant (Online Learning Project)',
    org: "Dr. Rohban’s AI & Robotics Lab | Sharif University of Technology",
    date: 'January – March 2025',
    current: false,
    link: { label: 'Read the survey (PDF)', url: '/Nika_Ghaderi_Online_Learning_Survey.pdf' },
    points: [
      'Wrote a technical survey of online learning methods (SGD variants, multi-armed bandits, online k-means, online meta-learning), with applications to precision agriculture and computer vision.'
    ]
  }
];

const engineeringItems = [
  {
    title: 'C/C++ Software Engineer',
    org: 'Sharif HPC Center | Sharif University of Technology',
    subtitle: 'GPU-accelerated packet processing for real-time analysis of high-throughput VoIP traffic',
    date: 'February 2026 – Present',
    current: true,
    points: [
      'Designed a CUDA multi-pattern matching engine for SIP/RTP traffic detection, replacing a production Intel Hyperscan CPU implementation: 100 Gbps end-to-end vs. 10–20 Gbps on an 8-thread CPU baseline.',
      'Built lock-free data paths for line-rate ingestion: a ring buffer supporting out-of-order packet placement under burst traffic, and a multi-threaded C++17 pipeline for call-detail-record correlation (zero per-message heap allocation, Kafka integration, deterministic replay).',
      'Developed a heuristic protocol-layer scan for tunneled traffic, reducing the false-positive rate from ~25% to zero on observed traces.'
    ]
  },
  {
    title: 'Software Engineering Intern (OpenAirInterface 5G)',
    org: 'EURECOM | Sophia Antipolis, France',
    date: 'July – September 2025',
    current: false,
    points: [
      'Accelerated 5G NR channel simulations on the GPU, offloading multipath convolution and noise generation to CUDA: over 400× speedup vs. a single-threaded scalar C baseline.',
      'Optimized kernels (shared-memory tiling, cuRAND); benchmarked three CUDA memory models: unified memory trailed, while explicit copy and ATS each led in different configurations.',
      'Built a CI-integrated CTest benchmark suite for numerical correctness and regression testing.'
    ]
  }
];

// Course name and number of semesters as a TA (Fa23 – Fa26)
const taCourses = [
  { name: 'Linear Algebra', count: 6 },
  { name: 'Artificial Intelligence', count: 3 },
  { name: 'Logic Circuits', count: 3 },
  { name: 'Compiler Design', count: 2 },
  { name: 'Scientific & Technical Presentation', count: 2 },
  { name: 'Database Design', count: 2 },
  { name: 'Formal Languages & Automata', count: 2 },
  { name: 'Computer Networks', count: 1 },
  { name: 'Game Theory', count: 1 },
  { name: 'Computer Architecture', count: 1 },
  { name: 'Fundamentals of Programming in C', count: 1 }
];

const taOfferings = taCourses.reduce((sum, c) => sum + c.count, 0);

const trainings = [
  {
    title: 'Winter University in Engineering Science',
    org: 'SPbPU (Peter the Great St. Petersburg Polytechnic University), Russia',
    date: '2025',
    desc: '“Innovator” track; completed program modules in Artificial Intelligence and Digital Technologies. Fully funded; selected to represent Sharif University of Technology under a bilateral inter-university agreement.'
  },
  {
    title: 'Neural Networks and Deep Learning',
    org: 'Coursera (DeepLearning.AI) – Credential',
    link: 'https://coursera.org/share/4f51e07732beffbe8636d3dcb8ddda90',
    date: '2025',
    desc: null
  },
  {
    title: 'Front-End Training Course',
    org: 'Quera College – Perfect Score',
    date: '2023',
    desc: null
  }
];

const projects = [
  {
    title: 'Unsupervised Anomaly Detection on MVTec AD',
    year: '2026',
    desc: 'Course project (2 members). Implemented PaDiM and STFPM in PyTorch for defect detection and localization, trained only on defect-free images; PaDiM reached 0.93 macro image AUROC across 15 categories.',
    repo: 'https://github.com/NikaGhaderi/Unsupervised-Anomaly-Detection-MVTec',
    video: null
  },
  {
    title: 'Linux Container Runtime',
    year: '2025',
    desc: 'Built a lightweight, daemonless container runtime from scratch in C: filesystem isolation via chroot, process and mount isolation via Linux namespaces (PID, mount), CPU and memory limits enforced with cgroups v2, and a custom CLI with an automated setup script.',
    repo: 'https://github.com/NikaGhaderi/Container-Runtime-System',
    video: null
  },
  {
    title: '64B/66B to 8B/10B Encoding Converter with Error Correction',
    year: '2025',
    desc: 'Team project (3 members). Built a real-time Arduino-based converter from 64B/66B to 8B/10B encoding, with Hamming-code error detection/correction and simulated fault injection for resilience testing.',
    repo: 'https://github.com/Sharif-University-ICD/Project8-64B-66B-to-8B-10B-Encoding-Converter',
    video: { id: '_R66I7SySxg', note: 'Persian narration, English subtitles', captions: true }
  },
  {
    title: 'Strategy Game (Stronghold Crusader–inspired)',
    year: '2023',
    desc: 'Team project (3 members) in Java/JavaFX with an MVC architecture. Implemented A* pathfinding for units, a tile-based map with building, resource, and trade systems, JSON persistence and JUnit tests.',
    repo: 'https://github.com/advanced-programming-sut-2023/project-group-58',
    video: { id: '9Eo-i1BA07w' }
  },
  {
    title: 'Vim-Inspired Text Editor',
    year: '2022',
    desc: 'Implemented a command-line text editor in C with insert/cut/copy/paste, find and replace, grep, undo, auto-indent, file comparison (diff), directory tree view, and piping of command output between commands.',
    repo: 'https://github.com/FundamentalOfProgramming-SUT-2022/project-DivalDotNet',
    video: null
  }
];

const skills = [
  { label: 'Languages', items: ['C', 'C++17', 'CUDA', 'Python', 'SQL (PostgreSQL)', 'Java'] },
  { label: 'Systems & Tools', items: ['Linux (namespaces, cgroups v2)', 'Git', 'CMake/CTest', 'Nsight Compute', 'cuda-gdb', 'cuRAND', 'Kafka (librdkafka)', 'Apache Spark (Spark SQL)', 'LaTeX'] },
  { label: 'ML & Data', items: ['PyTorch', 'PyTorch Lightning', 'DGL', 'scikit-learn', 'Optuna', 'pandas/NumPy'] },
  { label: 'Hardware & Low-Level', items: ['Verilog', 'Quartus', 'MIPS and x86 (8086) assembly', 'Ghidra'] }
];

const honors = [
  {
    title: 'Iranian Nationwide University Entrance Exam (Concours)',
    date: '2022',
    desc: 'Ranked 78th of 145,747 candidates nationally (top 0.06%) and 23rd of 52,009 in Region 2, Mathematics track.'
  },
  {
    title: 'Tehran Math House Competition',
    date: '2020',
    desc: 'Awarded a gold medal in the 11th-grade competition.'
  },
  {
    title: 'Cayley Contest',
    date: '2020',
    desc: 'Placed among Iran’s top 5 in the contest organized by CEMC, University of Waterloo, Canada.'
  },
  {
    title: 'Top Scholar Plaque',
    date: '2017',
    desc: 'Awarded by the Association of Young Mathematicians, Iran.'
  }
];

const tabFromHash = () => {
  const id = window.location.hash.replace('#', '');
  return navItems.some((item) => item.id === id) ? id : 'home';
};

const SectionHeading = ({ children, delay }) => (
  <h2
    className="reveal text-3xl font-bold text-gray-900 border-b-2 border-green-100 inline-block pb-2"
    style={delay ? { animationDelay: delay } : undefined}
  >
    {children}
  </h2>
);

// Timeline with a dot that glides to the hovered item
function Timeline({ items, delay = 0 }) {
  const [dotTop, setDotTop] = useState(20);
  const firstItem = useRef(null);

  useEffect(() => {
    if (firstItem.current) setDotTop(firstItem.current.offsetTop + 20);
  }, []);

  return (
    <div className="reveal relative pl-6" style={{ animationDelay: `${delay}ms` }}>
      {/* Single timeline line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-green-500 via-green-300 to-green-100" />
      {/* Gliding dot */}
      <div
        className="absolute left-0 z-10 h-3 w-3 rounded-full bg-green-600 ring-4 ring-green-100 shadow-md"
        style={{ top: dotTop, transition: 'top 0.55s cubic-bezier(0.22, 1, 0.36, 1)' }}
      />

      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={i === 0 ? firstItem : undefined}
            onMouseEnter={(e) => setDotTop(e.currentTarget.offsetTop + 20)}
            className="reveal rounded-xl px-4 py-3 transition-all duration-300 hover:bg-green-50/15 hover:shadow-sm"
            style={{ animationDelay: `${delay + 60 + i * 90}ms` }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              {item.current && (
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-white">Current</span>
              )}
            </div>
            <p className="mt-1 font-medium text-green-700">{item.org}</p>
            {item.subtitle && (
              <p className="mt-1 text-sm italic text-gray-500">{item.subtitle}</p>
            )}
            <p className="mb-2 mt-1 text-sm text-gray-500">{item.date}</p>
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noreferrer"
                className="mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-green-700 hover:underline transition-colors duration-200"
              >
                <ExternalIcon className="h-3.5 w-3.5" /> {item.link.label}
              </a>
            )}
            <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-green-700">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const SocialLinks = () => (
  <>
    <a
      href="https://www.linkedin.com/in/nika-ghaderi"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 transition-colors duration-200"
    >
      <LinkedInIcon className="h-[18px] w-[18px]" />
    </a>
    <a
      href="https://github.com/NikaGhaderi"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 transition-colors duration-200"
    >
      <GitHubIcon className="h-[18px] w-[18px]" />
    </a>
  </>
);

const linkClass = 'inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-green-700 hover:underline transition-colors duration-200';

// Project card; a demo video opens inside the card (loaded only on click)
function ProjectCard({ project: p, delay }) {
  const [showVideo, setShowVideo] = useState(false);
  const captions = p.video?.captions ? '&cc_load_policy=1&cc_lang_pref=en' : '';

  return (
    <div className={`reveal ${showVideo ? 'md:col-span-2' : ''}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="h-full flex flex-col bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-900/5 hover:border-green-200">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
          <span className="mt-1 text-xs font-semibold text-white bg-green-50 rounded-full px-2.5 py-0.5">{p.year}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.desc}</p>

        {showVideo && p.video && (
          <div className="mt-4 aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-gray-100">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${p.video.id}?autoplay=1&rel=0${captions}`}
              title={`${p.title} – demo video`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {(p.repo || p.video) && (
          <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-5 gap-y-1">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className={linkClass}>
                <GitHubIcon className="h-4 w-4" /> Code
              </a>
            )}
            {p.video && (
              <button type="button" onClick={() => setShowVideo(!showVideo)} aria-expanded={showVideo} className={linkClass}>
                <PlayIcon className="h-4 w-4" /> {showVideo ? 'Hide demo' : 'Watch demo'}
              </button>
            )}
            {p.video && (
              <a href={`https://youtu.be/${p.video.id}`} target="_blank" rel="noreferrer" className={linkClass}>
                <ExternalIcon className="h-3.5 w-3.5" /> YouTube
              </a>
            )}
            {p.video?.note && <span className="w-full text-xs text-gray-400">{p.video.note}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {

  const [activeTab, setActiveTab] = useState(tabFromHash);

  const [displayTab, setDisplayTab] = useState(tabFromHash);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Handles the smooth fade transition between tabs
  const switchTimer = useRef(null);

  const showTab = (id) => {
    setActiveTab(id);
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearTimeout(switchTimer.current);
    switchTimer.current = setTimeout(() => {
      setDisplayTab(id);
      setIsTransitioning(false);
    }, 180);
  };

  // Keep the tab in the URL (#experience, #projects) so it can be linked and the back button works
  const switchTab = (id) => {
    if (id === activeTab) return;
    window.history.pushState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
    showTab(id);
  };

  useEffect(() => {
    const onPop = () => showTab(tabFromHash());
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      clearTimeout(switchTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-green-100 selection:text-white">

      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <button
            onClick={() => switchTab('home')}
            className="font-semibold text-lg sm:text-xl tracking-tight text-green-800 whitespace-nowrap"
          >
            Nika Ghaderi
          </button>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => switchTab(item.id)}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-500 hover:text-green-600 hover:bg-gray-50 hover:-translate-y-px'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-1">
              <SocialLinks />
            </div>

            {/* Download CV Button */}
            <a
              href="/Nika_Ghaderi_CV.pdf"
              download="Nika_Ghaderi_CV.pdf"
              className="group inline-flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-green-600 text-green-700 rounded-md text-sm font-semibold whitespace-nowrap hover:bg-green-600 hover:text-white hover:shadow-md hover:shadow-green-600/20 transition-all duration-200"
            >
              <span className="sm:hidden">CV</span>
              <span className="hidden sm:inline">Download CV</span>
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7M12 3v18" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden p-2 -mr-2 rounded-md text-gray-500 hover:bg-gray-50 transition-colors duration-200"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 shadow-lg">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setMenuOpen(false); switchTab(item.id); }}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  className={`block w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 pt-3 mt-3 border-t border-gray-100">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Window with Transition */}
      <main className="max-w-5xl mx-auto px-6 py-5 md:py-6">
        <div key={displayTab} className={`transition-opacity duration-200 ease-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>

          {/* HOME SECTION */}
          {displayTab === 'home' && (
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">

              <div className="flex-1 min-w-0 max-w-2xl space-y-4 w-full">
                <h1 className="reveal text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Hi, I'm <span className="text-green-700">Nika</span>.
                </h1>

                <p className="reveal text-lg text-gray-600 leading-relaxed" style={{ animationDelay: '90ms' }}>
                  I am a Computer Engineering B.Sc. student at Sharif University of Technology with a focus on systems, HPC, and AI.
                  I am an undergraduate researcher at the DAISY Lab, working on learning query cost models that extrapolate across data scale,
                  and a C/C++ software engineer at the Sharif HPC Center, building GPU-accelerated packet processing.
                </p>

                <p className="reveal text-sm text-gray-500 leading-relaxed" style={{ animationDelay: '120ms' }}>
                  Away from the terminal, I read a lot, mostly philosophical literature and the classics: French and Russian novels (Camus and Dostoevsky are favorites) and, lately, Latin American writers. I'm always open to a good book recommendation :)
                </p>

                {/* Contact Links */}
                <div className="reveal flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" style={{ animationDelay: '140ms' }}>
                  <a href="mailto:nika.ghaderi04@sharif.edu" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-green-700 transition-colors duration-200">
                    <MailIcon className="h-4 w-4" /> nika.ghaderi04@sharif.edu
                  </a>
                  <a href="https://www.linkedin.com/in/nika-ghaderi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-green-700 transition-colors duration-200">
                    <LinkedInIcon className="h-4 w-4" /> LinkedIn
                  </a>
                  <a href="https://github.com/NikaGhaderi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-green-700 transition-colors duration-200">
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="reveal border-l-4 border-green-500 pl-4 transition-colors duration-300 hover:border-green-600" style={{ animationDelay: '200ms' }}>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Education</p>
                    <p className="font-medium text-gray-900">B.Sc. Computer Engineering</p>
                    <p className="text-sm text-gray-700">Sharif University of Technology</p>
                    <p className="text-xs text-gray-400">2022 – Expected 2027</p>
                    <p className="text-sm text-green-700 font-medium">GPA: 19.30 / 20</p>
                  </div>

                  <div className="reveal border-l-4 border-green-200 pl-4 transition-colors duration-300 hover:border-green-300" style={{ animationDelay: '260ms' }}>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Interests</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Machine Learning • ML for Systems • High-Performance Computing • GPU Computing
                    </p>
                  </div>
                </div>

                <p className="reveal text-sm text-gray-500" style={{ animationDelay: '300ms' }}>
                  <span className="uppercase tracking-wider font-semibold">Languages:</span> Persian (Native) · English (C1) · French (B1)
                </p>
              </div>

              {/* Profile Animation */}
              <div className="reveal-fade relative w-full md:flex-shrink-0 md:w-[min(380px,calc((100vh-150px)*0.75))] aspect-[3/4]" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 rounded-xl bg-white overflow-hidden">
                  <iframe
                    src="/profile.html"
                    className="absolute left-1/2 top-1/2 rounded-xl"
                    style={{ width: '133.3333%', height: '75%', transform: 'translate(-50%, -50%) rotate(270deg)' }}
                    frameBorder="0"
                    scrolling="no"
                    title="Portrait of Nika Ghaderi (line drawing)"
                  ></iframe>
                </div>
              </div>

            </div>
          )}

          {/* EXPERIENCE SECTION */}
          {displayTab === 'experience' && (
            <div className="space-y-12">
              <SectionHeading>Research</SectionHeading>
              <Timeline items={researchItems} delay={80} />

              <SectionHeading delay="120ms">Engineering</SectionHeading>
              <Timeline items={engineeringItems} delay={160} />

              <SectionHeading delay="120ms">Teaching</SectionHeading>

              <div className="reveal bg-green-50 rounded-xl p-6 border border-green-100 transition-all duration-300 hover:shadow-md" style={{ animationDelay: '200ms' }}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">Teaching Assistant (2023 – Present)</h3>
                  <p className="text-sm text-gray-300">Sharif University of Technology · {taCourses.length} courses · {taOfferings} course offerings</p>
                </div>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  Designed and contributed to homework, quizzes, and exams for (× = number of semesters):
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {taCourses.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-green-100 px-3 py-1.5 text-sm text-gray-700 shadow-sm transition-all duration-200 hover:border-green-300 hover:shadow"
                    >
                      {c.name}
                      <span className="text-xs font-bold text-green-700">×{c.count}</span>
                    </span>
                  ))}
                </div>
              </div>

              <SectionHeading delay="120ms">Academic Service</SectionHeading>

              <div className="reveal bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-200" style={{ animationDelay: '200ms' }}>
                <h3 className="text-lg font-semibold text-gray-900">Grader – Iranian National Olympiad in Artificial Intelligence</h3>
                <p className="mt-1 text-sm font-medium text-green-700">Young Scholars Club (YSC) · 2026</p>
                <p className="mt-2 text-sm text-gray-600">
                  Graded exams that determined national medalists in Iran’s selection for the International Olympiad in AI (IOAI).
                </p>
              </div>

              <SectionHeading delay="120ms">Training &amp; Certifications</SectionHeading>

              <div className="space-y-3">
                {trainings.map((t, i) => (
                  <div key={t.title} className="reveal bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-200" style={{ animationDelay: `${160 + i * 90}ms` }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      {t.link ? (
                        <a href={t.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:text-green-700 hover:underline transition-colors duration-200">
                          {t.title} <ExternalIcon className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                      ) : (
                        <h3 className="font-semibold text-gray-900">{t.title}</h3>
                      )}
                      <span className="text-xs font-semibold text-white bg-green-50 rounded-full px-2.5 py-0.5">{t.date}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-green-700">{t.org}</p>
                    {t.desc && <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS SECTION */}
          {displayTab === 'projects' && (
            <div className="space-y-12">
              <div>
                <SectionHeading>Projects</SectionHeading>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {projects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} delay={100 + i * 90} />
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading delay="80ms">Technical Skills</SectionHeading>
                <div className="mt-8 space-y-4">
                  {skills.map((group, i) => (
                    <div key={group.label} className="reveal flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4" style={{ animationDelay: `${120 + i * 70}ms` }}>
                      <p className="sm:w-56 flex-shrink-0 sm:whitespace-nowrap text-sm text-gray-500 uppercase tracking-wider font-semibold">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((s) => (
                          <span key={s} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm transition-colors duration-200 hover:border-green-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading delay="80ms">Selected Honors</SectionHeading>
                <div className="mt-8 space-y-2 rounded-xl bg-green-50 border border-green-100 p-6">
                  {honors.map((h, i) => (
                    <div key={h.title} className="reveal" style={{ animationDelay: `${160 + i * 90}ms` }}>
                      <div className="flex items-start gap-4 -m-2 rounded-lg p-2 transition-all duration-300 hover:bg-white/10 hover:translate-x-1">
                        <div className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0" />
                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h3 className="font-semibold text-white">{h.title}</h3>
                            <span className="text-xs font-semibold text-gray-300">{h.date}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-300">{h.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {displayTab !== 'home' && (
        <footer className="max-w-5xl mx-auto px-6 py-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Nika Ghaderi
        </footer>
      )}
    </div>
  );
}
