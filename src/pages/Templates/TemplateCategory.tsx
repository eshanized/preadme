import React from 'react';
import { TemplateCategory as TCategoryType } from '../../types/templates';
import TemplateCard from './TemplateCard';
import GlassCard from '../../components/ui/GlassCard';

interface TemplateCategoryProps {
  category: TCategoryType;
}

const TemplateCategory: React.FC<TemplateCategoryProps> = ({ category }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-nord-6 mb-4">{category.name}</h2>
      <p className="text-nord-4 mb-6">{category.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default TemplateCategory;