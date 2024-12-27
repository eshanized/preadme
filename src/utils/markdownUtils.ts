import { ReadmeState } from '../types';

export const generateMarkdown = ({ title, description, sections }: ReadmeState): string => {
  const parts = [
    `# ${title}`,
    '',
    description,
    '',
    ...sections.map(section => `## ${section.title}\n\n${section.content}`),
  ];

  return parts.join('\n');
};