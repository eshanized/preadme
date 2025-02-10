import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TableCreatorProps {
  onInsert: (tableMarkdown: string) => void;
  onClose: () => void;
}

const TableCreator: React.FC<TableCreatorProps> = ({ onInsert, onClose }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [headers, setHeaders] = useState<string[]>(Array(3).fill('Header'));
  const [alignment, setAlignment] = useState<string[]>(Array(3).fill('left'));
  const [error, setError] = useState<string | null>(null);

  const handleHeaderChange = (index: number, value: string) => {
    try {
      const newHeaders = [...headers];
      newHeaders[index] = value;
      setHeaders(newHeaders);
      setError(null);
    } catch (err) {
      setError('Error updating header');
    }
  };

  const handleAlignmentChange = (index: number, value: string) => {
    try {
      const newAlignment = [...alignment];
      newAlignment[index] = value;
      setAlignment(newAlignment);
      setError(null);
    } catch (err) {
      setError('Error updating alignment');
    }
  };

  const handleRowsChange = (value: number) => {
    try {
      const newValue = Math.max(1, Math.min(10, value));
      setRows(newValue);
      setError(null);
    } catch (err) {
      setError('Error updating rows');
    }
  };

  const handleColsChange = (value: number) => {
    try {
      const newValue = Math.max(1, Math.min(10, value));
      setCols(newValue);
      setHeaders(Array(newValue).fill('Header'));
      setAlignment(Array(newValue).fill('left'));
      setError(null);
    } catch (err) {
      setError('Error updating columns');
    }
  };

  const createTable = () => {
    try {
      // Validate inputs
      if (rows < 1 || cols < 1) {
        setError('Rows and columns must be greater than 0');
        return;
      }

      if (headers.length !== cols) {
        setError('Header count does not match column count');
        return;
      }

      // Create headers row
      const headerRow = headers.join(' | ');

      // Create alignment row
      const alignRow = alignment.map(align => {
        switch(align) {
          case 'center': return ':---:';
          case 'right': return '---:';
          default: return ':---';
        }
      }).join(' | ');

      // Create data rows
      const dataRows = Array(rows)
        .fill(0)
        .map(() => Array(cols).fill('Cell').join(' | '));

      // Combine all parts
      const tableMarkdown = [
        headerRow,
        alignRow,
        ...dataRows
      ].join('\n');

      // Add newlines before and after table
      const finalMarkdown = `\n${tableMarkdown}\n`;

      // Insert table and close modal
      onInsert(finalMarkdown);
      onClose();
      setError(null);
    } catch (err) {
      setError('Error creating table');
      console.error('Table creation error:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-nord-1 rounded-lg p-6 w-96 shadow-xl border border-nord-3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-nord-6">Insert Table</h3>
          <button
            onClick={onClose}
            className="text-nord-4 hover:text-nord-6 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded text-red-500">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-nord-4 mb-2">Rows</label>
              <input
                type="number"
                min="1"
                max="10"
                value={rows}
                onChange={(e) => handleRowsChange(parseInt(e.target.value) || 1)}
                className="input w-full bg-nord-2 border-nord-3"
              />
            </div>

            <div>
              <label className="block text-nord-4 mb-2">Columns</label>
              <input
                type="number"
                min="1"
                max="10"
                value={cols}
                onChange={(e) => handleColsChange(parseInt(e.target.value) || 1)}
                className="input w-full bg-nord-2 border-nord-3"
              />
            </div>
          </div>

          <div>
            <label className="block text-nord-4 mb-2">Headers</label>
            <div className="space-y-2">
              {headers.map((header, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={header}
                    onChange={(e) => handleHeaderChange(index, e.target.value)}
                    className="input flex-1 bg-nord-2 border-nord-3"
                    placeholder={`Header ${index + 1}`}
                  />
                  <select
                    value={alignment[index]}
                    onChange={(e) => handleAlignmentChange(index, e.target.value)}
                    className="input bg-nord-2 border-nord-3"
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={createTable}
            className="w-full bg-nord-10 hover:bg-nord-9 text-nord-6 py-2 px-4 rounded-lg transition-colors"
          >
            Insert Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableCreator;
