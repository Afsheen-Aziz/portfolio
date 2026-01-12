'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MainPanel from '@/components/MainPanel';
import ResponsePanel from '@/components/ResponsePanel';
import { endpoints } from '@/data/endpoints';
import { Menu, X, Terminal, Info, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [activeId, setActiveId] = useState(endpoints[0].id);
  const [executionStates, setExecutionStates] = useState<Record<string, {
    response: any | null;
    status: number | null;
    time: number | null;
    isExecuting: boolean;
  }>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize execution states
  useEffect(() => {
    const states: any = {};
    endpoints.forEach(e => {
      states[e.id] = { response: null, status: null, time: null, isExecuting: false };
    });
    setExecutionStates(states);
  }, []);

  // Intersection Observer for active ID
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    endpoints.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleExecute = (id: string) => {
    const endpoint = endpoints.find(e => e.id === id)!;

    setExecutionStates(prev => ({
      ...prev,
      [id]: { ...prev[id], isExecuting: true, response: null, status: null, time: null }
    }));

    setTimeout(() => {
      setExecutionStates(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          response: endpoint.response,
          status: 200,
          time: Math.floor(Math.random() * 200) + 50,
          isExecuting: false
        }
      }));
    }, 600);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const activeState = executionStates[activeId] || { response: null, status: null, time: null, isExecuting: false };

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Mobile Header */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-16 border-b border-white/5 bg-background/80 backdrop-blur-xl z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-accent-get" />
          <h1 className="text-lg font-bold tracking-tight">
            Afsheen<span className="text-accent-get">API</span>
          </h1>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-white/5 rounded-xl transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block w-72 h-full flex-shrink-0">
        <Sidebar selectedId={activeId} onSelect={scrollToSection} />
      </div>

      {/* Sidebar - Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-80 z-[70] bg-card"
            >
              <Sidebar selectedId={activeId} onSelect={scrollToSection} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col lg:flex-row pt-16 lg:pt-0 overflow-hidden relative">
        <div className="flex-1 overflow-y-auto scroll-smooth scrollbar-hide pb-32 snap-y snap-mandatory">
          {endpoints.map((endpoint) => (
            <div
              key={endpoint.id}
              id={endpoint.id}
              className="min-h-[70vh] lg:min-h-screen border-b border-white/5 last:border-0 py-12 lg:py-20 scroll-mt-16 lg:scroll-mt-0 snap-start snap-always flex flex-col justify-center"
            >
              <MainPanel
                endpoint={endpoint}
                onExecute={() => handleExecute(endpoint.id)}
                isExecuting={executionStates[endpoint.id]?.isExecuting ?? false}
              />
            </div>
          ))}
        </div>

        {/* Console / Response Panel */}
        <div className="h-[40vh] lg:h-full lg:w-[450px] border-t lg:border-t-0 lg:border-l border-white/5 bg-card/5 backdrop-blur-xl shrink-0">
          <ResponsePanel
            response={activeState.response}
            status={activeState.status}
            time={activeState.time}
            activeEndpointLabel={endpoints.find(e => e.id === activeId)?.label}
          />
        </div>
      </main>

      {/* Global Mobile Sticky Execute Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-xl border-t border-white/5 z-[40]">
        <button
          onClick={() => handleExecute(activeId)}
          disabled={executionStates[activeId]?.isExecuting}
          className={cn(
            "w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-accent-get/10",
            endpoints.find(e => e.id === activeId)?.method === 'GET'
              ? "bg-accent-get text-white"
              : "bg-accent-post text-white"
          )}
        >
          {executionStates[activeId]?.isExecuting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Play className="w-4 h-4 fill-current" />
          )}
          {executionStates[activeId]?.isExecuting ? 'Requesting...' : 'Execute Full Endpoint'}
        </button>
      </div>
    </div>
  );
}
