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

export interface ReadmeState {
  title: string;
  description: string;
  sections: Section[];
  selectedTemplate: string | null;
  darkMode: boolean;
  author: string;
  lastSaved: string;
}

export interface KeyboardShortcut {
  keys: string[];
  action: string;
  description: string;
}