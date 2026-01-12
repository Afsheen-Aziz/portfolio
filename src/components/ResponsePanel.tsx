'use client';

import JSONHighlighter from './JSONHighlighter';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

interface ResponsePanelProps {
    response: any | null;
    status: number | null;
    time: number | null;
    activeEndpointLabel?: string;
    onResizeStart: () => void;
}

export default function ResponsePanel({ response, status, time, activeEndpointLabel, onResizeStart }: ResponsePanelProps) {
    return (
        <div className="w-full h-full flex flex-col bg-[#0c0c0e] relative group/terminal">
            {/* Resize Handle - Top (Mobile) - Larger touch area */}
            <div
                onMouseDown={onResizeStart}
                onTouchStart={onResizeStart}
                className="lg:hidden absolute -top-4 left-0 right-0 h-8 cursor-ns-resize z-[100] flex items-center justify-center"
            >
                <div className="w-16 h-1.5 bg-white/20 rounded-full group-hover/terminal:bg-accent-get transition-colors shadow-lg" />
            </div>

            {/* Resize Handle - Left (Desktop) */}
            <div
                onMouseDown={onResizeStart}
                className="hidden lg:block absolute top-0 -left-2 bottom-0 w-4 cursor-ew-resize z-[100] group"
            >
                <div className="h-full w-[2px] bg-white/5 group-hover:bg-accent-get transition-colors mx-auto shadow-xl" />
            </div>

            <div className="p-3 px-4 border-b border-border flex items-center justify-between bg-card/30 backdrop-blur-md sticky top-0 z-10 h-14">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-get shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        Response Payload
                        {activeEndpointLabel && (
                            <>
                                <span className="text-slate-700">/</span>
                                <span className="text-accent-get normal-case">{activeEndpointLabel}</span>
                            </>
                        )}
                    </h3>
                </div>
                {status && (
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                            <Clock size={11} />
                            <span>{time}ms</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-accent-post/10 text-accent-post text-[10px] font-bold px-2 py-0.5 rounded-md border border-accent-post/20">
                            <CheckCircle2 size={11} />
                            <span>{status} OK</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-3 scrollbar-hide bg-gradient-to-b from-transparent to-black/20">
                <AnimatePresence mode="wait">
                    {response ? (
                        <motion.div
                            key={JSON.stringify(response)}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <JSONHighlighter data={response} />
                        </motion.div>
                    ) : (
                        <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-slate-700 space-y-6">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl border-2 border-slate-900 flex items-center justify-center bg-slate-900/40">
                                    <span className="font-mono text-2xl animate-pulse">?</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border-2 border-background flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                </div>
                            </div>
                            <div className="text-center space-y-2 max-w-[200px]">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                    Awaiting Input
                                </p>
                                <p className="text-[10px] leading-relaxed">
                                    Select an endpoint and hit the <span className="text-accent-get">execute</span> button to fetch live profile data.
                                </p>
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            <div className="p-3 px-4 border-t border-border bg-card/20 flex items-center justify-between text-[10px] text-slate-600 font-mono">
                <span>Content-Type: application/json</span>
                <span>Server: Next.js/Edge</span>
            </div>
        </div>
    );
}
