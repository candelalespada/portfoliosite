export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  docs?: string;
  slides?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Ganarlo - Productivity App",
    description:
      "*in progress*\nA habit-formation mobile app that rewards verified daily task completion with screen time, spanning onboarding, task creation, and reward tracking, plus an iOS home-screen widget for at-a-glance progress. **Problem:** most habit apps rely on willpower alone - there's no built-in incentive loop, so people abandon them. **Impact:** by tying screen time (a resource users already want) to real task completion, Ganarlo creates an accountability system baked into the product itself, not bolted on. Designed end-to-end - UI/UX in Figma, built with Expo/React Native and Supabase.",
    tags: ["JavaScript", "TypeScript", "Expo", "React Native", "App Development"],
    repo: "https://github.com/candelalespada/ganarlo",
  },
  {
    slug: "project-two",
    title: "Budget Tracking Site",
    description:
      "*in progress* \nA personal finance site aimed at financial literacy beginners, with planned features for expense tracking, categorization, budget goal-setting, and bank account syncing. **Problem:** most budgeting tools assume financial literacy the user doesn't have yet, creating a barrier for first-time budgeters. **Impact:** by designing specifically for beginners, the app lowers the entry point to financial habit-building rather than assuming prior expertise.",
    tags: ["JavaScript", "TypeScript", "Expo", "React Native", "App Development"],
    repo: "https://github.com/candelalespada/budget-tracker",
  },
  {
    slug: "project-three",
    title: "Predicting Professor Ratings with a Transformer Model",
    description:
      "Built a transformer-based text classification model from scratch in PyTorch that predicts a professor's star rating (1-5) directly from the text of student reviews, using 633 reviews pulled from the PlanetTerp API. **Problem:** review platforms collect thousands of qualitative comments that are time-consuming to parse manually, and star ratings alone don't capture why a review is positive or negative - this model bridges the two by learning to infer rating from language alone. **Impact:** achieved 75% exact-match accuracy and 88% accuracy within one star, with a mean absolute error of just 0.48 stars - despite training on a class-imbalanced dataset (skewed heavily toward 4-5 star reviews) and without relying on any pretrained language models, showing the architecture itself was capturing real signal from the text.",
    tags: ["Python", "Pandas", "PyTorch", "Data Visualization"],
    slides:
      "https://docs.google.com/presentation/d/17eaHn9dc-gr_7manmYMh8Q5o1frvZO0rAgm-J7hiPG0/edit?usp=sharing",
    repo: "https://github.com/candelalespada/professor-rating-predictor/blob/main/PlanetTerpPredictor.ipynb",
  },
  {
    slug: "project-four",
    title: "Predicting Academic Performance from Study Habits",
    description:
      "Analyzed survey data from 188 CMSC320 students, applying Logistic Regression, Decision Trees, and K-Nearest Neighbors to three prediction tasks: pass/fail classification, exact letter grade classification, and regression on exact exam score, based on self-reported study habits (attendance, sleep, screen time, readings completed, etc.). **Problem:** understanding which behaviors actually predict academic outcomes could help students and instructors identify at-risk students early and target interventions before it's too late. **Impact:** the best model (KNN) reached 58% accuracy on pass/fail prediction and was notably better at flagging likely failing students (higher recall on the Fail class) than confidently identifying passing ones - suggesting behavioral red flags like low study time and poor sleep are meaningfully predictive of risk, even though exact grade prediction proved much harder (29-32% accuracy) due to overlapping habits between adjacent grade bands.",
    tags: ["Python", "Pandas", "Data Visualization"],
    docs:
      "https://docs.google.com/document/d/1THdau_7u5emgVqrSKAI0sO1gMhEDDui96IKF0MyPRAY/edit?usp=sharing",
    repo: "https://github.com/candelalespada/study-habits-predictor/blob/main/StudyHabitsPredictor.ipynb",
  },
  {
    slug: "project-five",
    title: "MicroCaml Interpreter",
    description:
      "A full lexer, parser, and interpreter for the MicroCaml language, applying functional programming concepts and validated with unit tests. **Problem:** understanding how programming languages themselves work requires building the pipeline that turns text into executable behavior. **Impact:** demonstrated the ability to build a language toolchain end-to-end.",
    tags: ["OCaml", "Functional Programming", "Interpreters"],
    repo: "https://github.com/candelalespada/microcaml-interpreter",
  },
  {
    slug: "project-six",
    title: "Regular Expression Engine",
    description:
      "Implemented NFA/DFA algorithms and regex transformations in OCaml using recursion, pattern matching, and immutable data structures. **Problem:** regex matching underlies countless tools (search, validation, parsing) but is rarely built from first principles. **Impact:** built the theoretical foundation of pattern matching from the ground up, translating theory into working code.",
    tags: ["OCaml", "Algorithms"],
    repo: "https://github.com/candelalespada/regular-expression-engine",
  },
  {
    slug: "project-seven",
    title: "Automation Tool",
    description:
      "A simplified version of UNIX make, engineered in C to parse custom makefiles and build targets based on dependency rules, including process control, dependency handling, and Valgrind-verified memory safety. **Problem:** manually tracking which files depend on which, and rebuilding only what's changed, becomes error-prone and slow as a codebase grows. **Impact:** demonstrated systems-level thinking by implementing a real developer tool from scratch, with an optimizer and leak-free memory management.",
    tags: ["C", "Memory Management"],
  },
  {
    slug: "project-eight",
    title: "CPU Instruction Simulator",
    description:
      "C functions that encode and decode 32-bit instructions for a hypothetical CPU, manipulating opcodes, registers, and memory addresses using bitwise operators and pointers. **Problem:** understanding how software translates into hardware-level execution requires simulating that translation directly. **Impact:** replicated real hardware execution flow, showing fluency in low-level systems programming.",
    tags: ["C", "Low-level Programming"],
  },
  {
    slug: "project-nine",
    title: "Nuclear Reactor Control Under Uncertainty (MDP-Based Approach)",
    description:
      "*Group Project*\nModeled a nuclear reactor's power control system as a Markov Decision Process, using Value Iteration to compute the optimal control policy under uncertainty. **Problem:** reactors must continuously track changing power demand, but real control actions are stochastic (e.g. trying to raise power by one level might raise it by two, or do nothing at all), making naive rule-based control unreliable. **Impact:** stress-tested the controller across 9 reactor configurations with different failure modes, achieving near-perfect demand tracking (R² up to 0.9996) even under stochastic, overshooting actions - while also surfacing the limits of control itself when a reactor had no reliable way to decrease power.",
    tags: ["Python", "LaTeX"],
    docs: "/mdp-project.pdf",
  },
  {
    slug: "project-ten",
    title: "Recipe Finder",
    description:
      "*Group Project*\nA full-stack web application that lets users search for recipes by keyword (e.g. 'chicken,' 'pasta,' 'tacos') and save the ones they want to revisit later, built with HTML, CSS, JavaScript, and MongoDB. **Problem:** finding recipes online often means sifting through cluttered sites full of ads and unrelated content - this site strips that down to a fast, keyword-driven search paired with a simple way to bookmark favorites for later. **Impact:** owned both the front-end layout and the back-end server-side logic and database management for storing saved recipes, gaining hands-on experience deploying and maintaining a real, working web application from idea to finished product.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    link: "https://cmsc335-final-project-tiii.onrender.com/",
  },
];
