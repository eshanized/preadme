import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TableCreatorProps {
  onInsert: (tableMarkdown: string) => void;
  onClose: () => void;
}

const TableCreator: React.FC<TableCreatorProps> = ({ onInsert, onClose }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [headers, setHeaders] = useState<string[]>([]);
  
  const createTable = () => {
    const headerRow = headers.length ? headers : Array(cols).fill('Header');
    const alignRow = Array(cols).fill('---').join(' | ');
    const dataRows = Array(rows).fill(Array(cols).fill('Cell').join(' | '));
    
    const tableMarkdown = [
      headerRow.join(' | '),
      alignRow,
      ...dataRows
    ].join('\n');
    
    onInsert(tableMarkdown);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-nord-0 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-nord-1 rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-nord-6">Insert Table</h3>
          <button onClick={onClose} className="text-nord-4 hover:text-nord-6">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-nord-4 mb-2">Rows</label>
            <input
              type="number"
              min="1"
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value))}
              className="input w-full"
            />
          </div>
          
          <div>
            <label className="block text-nord-4 mb-2">Columns</label>
            <input
              type="number"
              min="1"
              value={cols}
              onChange={(e) => setCols(parseInt(e.target.value))}
              className="input w-full"
            />
          </div>
          
          <button
            onClick={createTable}
            className="btn btn-primary w-full"
          >
            Insert Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableCreator;