import { Template } from '../../types';

export const mobileTemplates: Template[] = [
  {
    id: 'react-native',
    name: 'React Native App',
    description: 'Cross-platform mobile application with React Native',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# App Name\n\nA React Native mobile application.',
        required: true
      }
    ]
  },
  {
    id: 'flutter',
    name: 'Flutter App',
    description: 'Cross-platform mobile application with Flutter',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# App Name\n\nA Flutter mobile application.',
        required: true
      }
    ]
  }
];