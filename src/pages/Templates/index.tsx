import React from 'react';
import { templateCategories } from '../../data/templates/categories';
import TemplateCategory from './TemplateCategory';
import GlassCard from '../../components/ui/GlassCard';

const Templates = () => {
  return (
    <div className="space-y-8">
      <GlassCard className="p-6 mb-8">
        <h1 className="text-3xl font-bold text-nord-6 mb-4">README Templates</h1>
        <p className="text-nord-4">
          Choose from our collection of templates for different types of projects.
          Each template is designed to help you create comprehensive documentation.
        </p>
      </GlassCard>

      {templateCategories.map((category) => (
        <TemplateCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Templates;