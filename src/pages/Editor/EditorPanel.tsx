import React from 'react';
import { useStore } from '../../store/useStore';
import SectionEditor from './SectionEditor';
import { Save } from 'lucide-react';

const EditorPanel = () => {
  const { title, description, sections, setTitle, setDescription } = useStore();

  return (
    <div className="card overflow-y-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-nord-6 mb-2">Project Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input w-full"
            placeholder="Enter project title"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-nord-6 mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input w-full h-32"
            placeholder="Enter project description"
          />
        </div>

        {sections.map((section) => (
          <SectionEditor key={section.id} section={section} />
        ))}

        <button className="btn btn-primary w-full flex items-center justify-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;