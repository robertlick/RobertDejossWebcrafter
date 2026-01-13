
import React, { useState } from 'react';
import { PortfolioHome } from './components/PortfolioHome';
import { DemoViewer } from './components/DemoViewer';
import { DEMO_SITES, WORKFLOW_STEPS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');

  const handleViewDemo = (id: string) => {
    setCurrentView(id);
    window.scrollTo(0, 0);
  };

  const handleCloseDemo = () => {
    setCurrentView('home');
  };

  const activeDemo = DEMO_SITES.find(d => d.id === currentView);

  return (
    <div className="antialiased text-gray-900 bg-white min-h-screen">
      {activeDemo ? (
        <DemoViewer 
          component={activeDemo.component} 
          title={activeDemo.name} 
          onClose={handleCloseDemo} 
        />
      ) : (
        <PortfolioHome 
          demos={DEMO_SITES} 
          steps={WORKFLOW_STEPS} 
          onViewDemo={handleViewDemo} 
        />
      )}
    </div>
  );
};

export default App;
