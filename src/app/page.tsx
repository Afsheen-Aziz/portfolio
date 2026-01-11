'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MainPanel from '@/components/MainPanel';
import ResponsePanel from '@/components/ResponsePanel';
import { endpoints } from '@/data/endpoints';
import { Menu, X, Terminal, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [selectedId, setSelectedId] = useState(endpoints[0].id);
  const [response, setResponse] = useState<any | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const selectedEndpoint = endpoints.find((e) => e.id === selectedId)!;

  // Function to simulate execution
  const handleExecute = () => {
    setIsExecuting(true);
    setResponse(null);
    setStatus(null);
    setTime(null);

    setTimeout(() => {
      setResponse(selectedEndpoint.response);
      setStatus(200);
      setTime(Math.floor(Math.random() * 200) + 50);
      setIsExecuting(false);
    }, 600);
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Clear previous response on select - user must execute to see the new one
    setResponse(null);
    setStatus(null);
    setTime(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Hint logic removed for a cleaner experience as requested */}

      {/* Mobile Header */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-16 border-b border-border bg-card/80 backdrop-blur-md z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-accent-get" />
          <h1 className="text-lg font-bold">
            Core<span className="text-accent-get">API</span>
          </h1>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block w-72 h-full flex-shrink-0">
        <Sidebar selectedId={selectedId} onSelect={handleSelect} />
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
              <Sidebar selectedId={selectedId} onSelect={handleSelect} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col lg:flex-row pt-16 lg:pt-0 overflow-hidden relative">
        <MainPanel
          endpoint={selectedEndpoint}
          onExecute={handleExecute}
          isExecuting={isExecuting}
        />
        <div className="h-2/5 lg:h-full lg:w-[450px] border-t lg:border-t-0 lg:border-l border-border bg-card/10 backdrop-blur-sm">
          <ResponsePanel response={response} status={status} time={time} />
        </div>
      </main>
    </div>
  );
}
