import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Leads } from './pages/Leads';
import { AIOutreach } from './pages/AIOutreach';
import { Pipeline } from './pages/Pipeline';
import { Intelligence } from './pages/Intelligence';
import { Analytics } from './pages/Analytics';
import { SettingsPage } from './pages/SettingsPage';

const PAGE_NAMES: Record<string, string> = {
  '/': 'Dashboard',
  '/leads': 'Leads',
  '/ai-outreach': 'AI Outreach',
  '/pipeline': 'Sales Pipeline',
  '/intelligence': 'Market Intelligence',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
};

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const currentPage = PAGE_NAMES[location.pathname] || 'ProspectIQ';

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
      <TopBar
        sidebarCollapsed={collapsed}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentPage={currentPage}
      />
      <main className={`pt-16 transition-all duration-300 ${collapsed ? 'pl-16' : 'pl-64'}`}>
        <div className="p-6 max-w-screen-2xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/ai-outreach" element={<AIOutreach />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
