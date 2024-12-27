export interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  templates: Template[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  required: boolean;
}

// Re-export from index.ts for backward compatibility
export * from './index';