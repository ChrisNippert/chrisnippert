export interface Project {
  title: string;
  slug: string;
  repo: string; // "owner/repo" format
  href: string;
  summary: string;
  image?: string;
  labels?: string[];
  aiAssistance?: {
    uses: string[];
  };
  caseStudy?: {
    problem: string;
    approach: string[];
    results: string[];
    nextStep: string;
  };
  stats?: Array<{
    label: string;
    value: string;
  }>;
}

export const projects: Project[] = [
  {
    title: "Relay",
    slug: "relay",
    repo: "ChrisNippert/relay",
    href: "https://github.com/ChrisNippert/relay",
    summary:
      "A chat app Specification including a server written in GO with a frontend built with React, Node.js, and WebSockets, featuring real-time messaging, voice and video channels, and End to End Encryption (E2EE).",
    image: "/images/relay_screenshot.png",
    labels: ["AI-assisted"],
    aiAssistance: {
      uses: [
        "Code generation and implementation support",
        "Debugging and refactoring",
        "Documentation and copy",
      ],
    },
    },
  {
    title: "Open Trove",
    slug: "open-trove",
    repo: "ChrisNippert/open-trove",
    href: "https://github.com/ChrisNippert/open-trove",
    summary:
      "A self-hosted inventory and collection manager with user-defined schemas. Build your own structure for anything — wardrobe, kitchen, board games, tools, whatever — then search, filter, and browse it all from one place.",
    labels: ["AI-assisted"],
    aiAssistance: {
      uses: [
        "Code generation and implementation support",
        "Debugging and refactoring",
        "Documentation and copy",
        "Design and architecture ideas",
      ],
    },
    stats: [
      { label: "Backend", value: "FastAPI" },
      { label: "Frontend", value: "React + TypeScript" },
      { label: "Search", value: "SQLite FTS5" },
    ],
  },
  {
    title: "Nearest Neighbor Bucket Map",
    slug: "nearest-neighbor-bucket-map",
    repo: "ChrisNippert/nearest_neighbor_bucket_map",
    href: "https://github.com/ChrisNippert/nearest_neighbor_bucket_map",
    summary:
      "A data structure designed to get a near neighbor given some key that doesn't exist in the structure. It utilizes a logarithmically sized stack of bucket maps.",
    image: "/images/nn_insertion.gif",
    stats: [
      { label: "Language", value: "Julia" },
      { label: "Average case", value: "O(log s)" },
      { label: "Benchmarked", value: "109.67 ns" },
    ],
    caseStudy: {
      problem:
        "Given a set of named RGB colors and an arbitrary RGB value, find the nearest named color efficiently. The underlying goal was to generalize this into a practical nearest-neighbor data structure.",
      approach: [
        "Stack hash maps whose bucket sizes increase exponentially, keyed by integers or tuples of integers.",
        "When inserting a point, place it into a bucket at each level, allowing candidate values to collide into progressively coarser buckets.",
        "Begin a lookup at the most accurate level and climb until a populated bucket is found, then linearly scan that small candidate set for the nearest value.",
        "For k-nearest queries, inspect adjacent buckets and linearly scan the additional candidate values.",
      ],
      results: [
        "Validated against a named-color lookup experiment containing roughly 17,000 colors.",
        "The repository benchmarks a median lookup around 109.67 ns, compared with roughly 2.696 ms for the linear comparison used in the experiment.",
      ],
      nextStep:
        "Generalize the structure to support non-integer numeric inputs.",
    },
  },
  {
    title: "Simple FFNN Julia",
    slug: "simple-ffnn-julia",
    repo: "ChrisNippert/simple-ffnn-julia",
    href: "https://github.com/ChrisNippert/simple-ffnn-julia",
    summary: "A simple feedforward neural network implementation in Julia.",
  },
  {
    title: "Speculative Parallel Best First Search",
    slug: "spbfs",
    repo: "ChrisNippert/SPBFS",
    href: "https://github.com/ChrisNippert/SPBFS",
    summary:
      "A codebase for research on parallelizing best-first search algorithms (A*, etc.).",
    stats: [
      { label: "Language", value: "C++" },
      { label: "Domain", value: "Parallel search" },
      { label: "Algorithm", value: "Best-first / A*" },
      { label: "Focus", value: "Speculative parallelism" },
    ],
    caseStudy: {
      problem:
        "Explore how best-first search algorithms such as A* can use parallel work without changing the expansion order that defines the sequential algorithm.",
      approach: [
        "Keep a main thread responsible for selecting and expanding nodes in the same order as a conventional best-first search.",
        "Use worker threads to speculatively generate successors for nodes that may be expanded later.",
        "Store generated successors so that when the main thread reaches a node, it can reuse work that has already been completed.",
        "Preserve the main algorithm's expansion ordering while moving successor generation off the critical path when speculation is correct.",
      ],
      results: [
        "Separates order-sensitive best-first expansion from parallel successor generation.",
        "Provides a C++ research codebase for investigating speculative parallelism in best-first search algorithms.",
      ],
      nextStep:
        "Benchmark the implementation against a sequential baseline across search problems and worker counts.",
    },
  },
  {
    title: "Tachyonic",
    slug: "tachyonic",
    repo: "ChrisNippert/tachyonic",
    href: "https://github.com/ChrisNippert/tachyonic",
    summary:
      "A shared url-based application for collaborative work.",
    image: "/images/tachyonic_screenshot.png",
  },
  {
    title: "AI-Learn",
    slug: "ai-learn",
    repo: "ChrisNippert/ai-learn",
    href: "https://github.com/ChrisNippert/ai-learn",
    summary:
      "A web app that uses the OpenAI API to dynamically generate course material for arbitrary topics.",
  },
  {
    title: "Marvel Rivals Team Analyzer",
    slug: "rivals-analyzer",
    repo: "ChrisNippert/Rivals-Statistical-Analyzer",
    href: "https://github.com/ChrisNippert/Rivals-Statistical-Analyzer",
    summary:
      'A Python tool to analyze team compositions and win rates in the online team shooter "Marvel Rivals".',
  },
  {
    title: "Thread Racer",
    slug: "thread-racer",
    repo: "ChrisNippert/thread_racer",
    href: "https://github.com/ChrisNippert/thread_racer",
    summary:
      "A fun little C++ game where you can race threads against each other to see which is fastest.",
  },
  {
    title: "This Website",
    slug: "this-website",
    repo: "ChrisNippert/ChrisNippert",
    href: "https://github.com/ChrisNippert/ChrisNippert",
    summary: "My personal portfolio website, built with Astro and Tailwind CSS.",
    labels: ["AI-assisted"],
    aiAssistance: {
      uses: [
        "UI and visual-design ideation",
        "Astro component and styling implementation support",
        "Portfolio copy refinement",
        "Build validation assistance",
      ],
    },
  },
];
