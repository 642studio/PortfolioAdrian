export interface HeroCTA {
  label: string;
  href: string;
  type: "anchor" | "external" | "disabled";
  note?: string;
}

export interface Capability {
  title: string;
  description: string;
  bullets: string[];
}

export interface VeridisComponent {
  name: string;
  description: string;
}

export interface SystemDirectoryItem {
  name: string;
  description: string;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface TechnicalNote {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: {
    name: string;
    role: string;
    valueProp: string;
    ctas: HeroCTA[];
  };
  whatIBuild: {
    title: string;
    intro: string;
    capabilities: Capability[];
  };
  featuredVeridis: {
    title: string;
    subtitle: string;
    description: string;
    architectureNodes: string[];
    endermites: string[];
    components: VeridisComponent[];
  };
  selectedSystems: {
    title: string;
    intro: string;
  };
  architectureAutomation: {
    title: string;
    intro: string;
    flowTitle: string;
    flow: string[];
    directoryTitle: string;
    directory: SystemDirectoryItem[];
  };
  infrastructure: {
    title: string;
    intro: string;
    pillars: string[];
  };
  technicalStack: {
    title: string;
    groups: StackGroup[];
  };
  about: {
    title: string;
    description: string;
  };
  education: {
    title: string;
    description: string;
  };
  notes: {
    title: string;
    items: TechnicalNote[];
  };
  contact: {
    title: string;
    description: string;
  };
}
