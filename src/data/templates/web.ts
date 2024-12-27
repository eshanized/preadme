import { Template } from '../../types';

export const webTemplates: Template[] = [
  {
    id: 'react-app',
    name: 'React Application',
    description: 'Template for React applications with TypeScript',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Project Name\n\nA React application built with TypeScript and modern tooling.',
        required: true
      },
      {
        id: 'features',
        title: 'Features',
        content: '## Features\n\n- Feature 1\n- Feature 2\n- Feature 3',
        required: true
      },
      {
        id: 'tech-stack',
        title: 'Tech Stack',
        content: '## Tech Stack\n\n- React\n- TypeScript\n- Vite\n- React Router\n- State Management',
        required: true
      }
    ]
  },
  {
    id: 'vue-app',
    name: 'Vue.js Application',
    description: 'Template for Vue.js applications',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Project Name\n\nA Vue.js application with modern best practices.',
        required: true
      }
    ]
  },
  {
    id: 'next-app',
    name: 'Next.js Application',
    description: 'Template for Next.js applications',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Project Name\n\nA Next.js application with SSR and routing.',
        required: true
      }
    ]
  }
];