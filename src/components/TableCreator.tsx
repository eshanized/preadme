import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TableCreatorProps {
  onInsert: (tableMarkdown: string) => void;
  onClose: () => void;
}

const TableCreator: React.FC<TableCreatorProps> = ({ onInsert, onClose }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [headers, setHeaders] = useState<string[]>(Array(cols).fill('Header'));

  const handleHeaderChange = (index: number, value: string) => {
    const newHeaders = [...headers];
    newHeaders[index] = value;
    setHeaders(newHeaders);
  };

  const createTable = () => {
    // Logging state for debugging
    console.log("Rows:", rows);
    console.log("Columns:", cols);
    console.log("Headers:", headers);

    const alignRow = Array(cols).fill('---').join(' | ');
    const dataRows = Array(rows).fill(Array(cols).fill('Cell').join(' | '));

    const tableMarkdown = [
      headers.join(' | '),
      alignRow,
      ...dataRows
    ].join('\n');

    console.log("Table Markdown:", tableMarkdown);

    // Call onInsert to pass the tableMarkdown
    onInsert(tableMarkdown);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Insert Table</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Rows</label>
            <input
              type="number"
              min="1"
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value))}
              className="input w-full"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-2">Columns</label>
            <input
              type="number"
              min="1"
              value={cols}
              onChange={(e) => {
                setCols(parseInt(e.target.value));
                setHeaders(Array(parseInt(e.target.value)).fill('Header'));
              }}
              className="input w-full"
            />
          </div>

          {/* Dynamic Header Input Fields */}
          <div>
            <label className="block text-gray-600 mb-2">Headers</label>
            <div className="space-y-2">
              {headers.map((header, index) => (
                <input
                  key={index}
                  type="text"
                  value={header}
                  onChange={(e) => handleHeaderChange(index, e.target.value)}
                  className="input w-full"
                />
              ))}
            </div>
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
