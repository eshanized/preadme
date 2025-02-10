import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReadmeState, Section } from '../types';

interface ReadmeStore extends ReadmeState {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setSections: (sections: Section[] | ((prev: Section[]) => Section[])) => void;
  setSelectedTemplate: (templateId: string | null) => void;
  toggleDarkMode: () => void;
  setAuthor: (author: string) => void;
  updateLastSaved: () => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

const initialState: ReadmeState = {
  title: '',
  description: '',
  sections: [], // Ensure this is always initialized as an array
  selectedTemplate: null,
  darkMode: true,
  author: 'eshanized',
  lastSaved: new Date().toISOString(),
  isLoading: false,
};

export const useStore = create<ReadmeStore>()(
  persist(
    (set) => ({
      ...initialState,
      setTitle: (title: string) => set({ title }),
      setDescription: (description: string) => set({ description }),
      setSections: (sectionsOrUpdater: Section[] | ((prev: Section[]) => Section[])) =>
        set((state) => ({
          sections: Array.isArray(sectionsOrUpdater)
            ? sectionsOrUpdater
            : sectionsOrUpdater(state.sections || [])
        })),
      setSelectedTemplate: (templateId: string | null) => set({ selectedTemplate: templateId }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setAuthor: (author: string) => set({ author }),
      updateLastSaved: () => set({ lastSaved: new Date().toISOString() }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      reset: () => set(initialState),
    }),
    {
      name: 'readme-storage',
    }
  )
);