import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Template } from '../../types';
import { useStore } from '../../store/useStore';
import { FileText } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const navigate = useNavigate();
  const { setSelectedTemplate, setSections } = useStore();

  const handleSelect = () => {
    setSelectedTemplate(template.id);
    setSections(template.sections);
    navigate('/editor');
  };

  return (
    <div className="card hover:bg-nord-2 transition-colors cursor-pointer" onClick={handleSelect}>
      <FileText className="w-8 h-8 text-nord-8 mb-4" />
      <h3 className="text-xl font-bold text-nord-6 mb-2">{template.name}</h3>
      <p className="text-nord-4">{template.description}</p>
    </div>
  );
};

export default TemplateCard;