import React from 'react';
import { X } from 'lucide-react';

interface DemoViewerProps {
  component: React.FC;
  title: string;
  onClose: () => void;
}

export const DemoViewer: React.FC<DemoViewerProps> = ({ component: Component, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      <div className="bg-gray-800 text-white p-3 flex justify-between items-center shadow-md shrink-0 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition"
          >
            <X size={16} />
            Fechar Demo
          </button>
          <div className="h-6 w-px bg-gray-600 mx-2"></div>
          <span className="font-semibold text-sm hidden sm:block">Visualizando: <span className="text-blue-400">{title}</span></span>
        </div>
        <div className="flex items-center gap-4 px-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Modo de Visualização</span>
        </div>
      </div>
      <div id="demo-scroll-container" className="flex-1 overflow-auto bg-white relative scrollbar-hide">
        <Component />
      </div>
    </div>
  );
};