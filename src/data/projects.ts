export interface Project {
  title: string;
  slug: string;
  repo: string; // "owner/repo" format
  href: string;
  summary: string;
  image?: string;
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
    },
  {
    title: "Open Trove",
    slug: "open-trove",
    repo: "ChrisNippert/open-trove",
    href: "https://github.com/ChrisNippert/open-trove",
    summary:
      "A self-hosted inventory and collection manager with user-defined schemas. Build your own structure for anything — wardrobe, kitchen, board games, tools, whatever — then search, filter, and browse it all from one place.",
  },
  {
    title: "Nearest Neighbor Bucket Map",
    slug: "nearest-neighbor-bucket-map",
    repo: "ChrisNippert/nearest_neighbor_bucket_map",
    href: "https://github.com/ChrisNippert/nearest_neighbor_bucket_map",
    summary:
      "A data structure designed to get a near neighbor given some key that doesn't exist in the structure. It utilizes a logarithmically sized stack of bucket maps.",
    image: "/images/nn_insertion.gif",
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
  },
];
