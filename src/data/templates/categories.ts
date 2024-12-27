import { TemplateCategory } from '../../types';
import { webTemplates } from './web';
import { backendTemplates } from './backend';
import { mobileTemplates } from './mobile';
import { libraryTemplates } from './library';
import { toolTemplates } from './tools';

export const templateCategories: TemplateCategory[] = [
  {
    id: 'web',
    name: 'Web Development',
    description: 'Templates for web applications and frameworks',
    templates: webTemplates
  },
  {
    id: 'backend',
    name: 'Backend & API',
    description: 'Templates for backend services and APIs',
    templates: backendTemplates
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Templates for mobile applications',
    templates: mobileTemplates
  },
  {
    id: 'library',
    name: 'Libraries & Packages',
    description: 'Templates for reusable libraries and packages',
    templates: libraryTemplates
  },
  {
    id: 'tools',
    name: 'Tools & CLIs',
    description: 'Templates for developer tools and CLIs',
    templates: toolTemplates
  }
];