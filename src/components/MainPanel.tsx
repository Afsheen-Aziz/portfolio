'use client';

import { Endpoint } from '@/data/endpoints';
import { Play, Github, FileText, ExternalLink, Linkedin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MainPanelProps {
    endpoint: Endpoint;
    onExecute: () => void;
    isExecuting: boolean;
}

export default function MainPanel({ endpoint, onExecute, isExecuting }: MainPanelProps) {
    // Determine if the endpoint is a project based on its path
    const isProject = endpoint.path.startsWith('/projects/');
    const projectLink = endpoint.links?.find(l => l.type === 'github');

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-8 pb-10">
            <div>
                {/* API Header (Integrated at the top) */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                        <div className="flex items-center gap-3 bg-slate-900/50 p-1 pr-3 rounded-lg border border-white/5">
                            <span
                                className={cn(
                                    "text-[10px] font-bold px-2 py-0.5 rounded uppercase border",
                                    endpoint.method === 'GET'
                                        ? "bg-accent-get/10 text-accent-get border-accent-get/20"
                                        : "bg-accent-post/10 text-accent-post border-accent-post/20"
                                )}
                            >
                                {endpoint.method}
                            </span>
                            <h2 className="text-lg md:text-xl font-mono font-bold tracking-tight text-slate-200 break-all leading-none">
                                {endpoint.path}
                            </h2>
                        </div>

                        {/* Project Header Button */}
                        {isProject && projectLink && (
                            <a
                                href={projectLink?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-white/5 hover:border-white/10 shadow-lg active:scale-95"
                            >
                                <Github size={14} />
                                {projectLink?.label}
                            </a>
                        )}
                    </div>
                    <p className="text-slate-500 text-sm italic">
                        {endpoint.description}
                    </p>
                </div>

                {/* Content Section (Integrated under header) */}
                {endpoint.intro && (
                    <section className="space-y-4 pt-2">
                        <div className="space-y-1">
                            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white/90">
                                {endpoint.intro.title}
                            </h1>
                            <p className="text-sm md:text-base text-accent-get font-medium opacity-90">
                                {endpoint.intro.subtitle}
                            </p>
                        </div>

                        {endpoint.intro?.content && (
                            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                                {endpoint.intro.content}
                            </p>
                        )}

                        {/* Technical Highlights / Summary - Balanced Middle Ground */}
                        {endpoint.intro.highlights && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {endpoint.intro.highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/30 border border-white/5 hover:border-accent-get/30 transition-all group group/highlight">
                                        <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider group-hover/highlight:text-accent-get transition-colors">
                                            {item.label}
                                        </span>
                                        <div className="w-[1px] h-3 bg-slate-800" />
                                        <span className="text-[12px] font-medium text-slate-300 group-hover/highlight:text-white transition-colors">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}

                {/* Resources / Links */}
                {endpoint.links && !isProject && (
                    <section className="space-y-4">
                        {!endpoint.intro && (
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                Resources
                            </h3>
                        )}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {endpoint.links?.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-white/5 hover:border-white/10"
                                >
                                    {link.type === 'github' && <Github size={18} />}
                                    {link.type === 'resume' && <FileText size={18} />}
                                    {link.type === 'external' && <ExternalLink size={18} />}
                                    {link.type === 'linkedin' && <Linkedin size={18} />}
                                    {link.type === 'email' && <Mail size={18} />}
                                    {link.type === 'phone' && <Phone size={18} />}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Technical Parameters */}
                <div className="pt-4 space-y-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-start">
                            <span className="bg-background pr-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                Request Specification
                            </span>
                        </div>
                    </div>

                    {/* Parameters Section */}
                    <section className="space-y-4">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Request Parameters
                        </h3>
                        <div className="border border-slate-800/60 rounded-xl overflow-hidden overflow-x-auto bg-card/30">
                            <table className="w-full text-[12px] text-left">
                                <thead className="bg-slate-800/40 text-slate-400 border-b border-slate-800/60">
                                    <tr>
                                        <th className="px-4 py-2 font-semibold">Name</th>
                                        <th className="px-4 py-2 font-semibold">Location</th>
                                        <th className="px-4 py-2 font-semibold">Type</th>
                                        <th className="px-4 py-2 font-semibold">Required</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/40">
                                    <tr>
                                        <td className="px-4 py-2 text-slate-300 font-mono">Accept</td>
                                        <td className="px-4 py-2 text-slate-500 font-mono text-[10px]">header</td>
                                        <td className="px-4 py-2 text-slate-400 italic">string</td>
                                        <td className="px-4 py-2 text-slate-500 text-[10px]">true</td>
                                    </tr>
                                    {endpoint.method === 'POST' && (
                                        <tr>
                                            <td className="px-4 py-2 text-slate-300 font-mono text-xs">Content-Type</td>
                                            <td className="px-4 py-2 text-slate-500 font-mono text-[10px]">header</td>
                                            <td className="px-4 py-2 text-slate-400 italic">string</td>
                                            <td className="px-4 py-2 text-slate-500 text-[10px]">true</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Request Body Section */}
                    {endpoint.requestBody && (
                        <section className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                Payload
                            </h3>
                            <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800/60 font-mono text-[12px] relative overflow-hidden group">
                                <div className="absolute top-2 right-3 text-[9px] text-slate-600 font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                    schema: application/json
                                </div>
                                <pre className="text-slate-300">
                                    {JSON.stringify(endpoint.requestBody, null, 2)}
                                </pre>
                            </div>
                        </section>
                    )}

                    {/* Execute Button - Desktop Version */}
                    <div className="hidden md:flex pt-4 flex-col md:flex-row items-center gap-4">
                        <button
                            onClick={onExecute}
                            disabled={isExecuting}
                            className={cn(
                                "flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap",
                                endpoint.method === 'GET'
                                    ? "bg-accent-get hover:bg-accent-get/90 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
                                    : "bg-accent-post hover:bg-accent-post/90 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
                            )}
                        >
                            {isExecuting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
                            )}
                            {isExecuting ? 'Requesting...' : 'Execute Full Endpoint'}
                        </button>
                        <p className="text-[11px] text-slate-500 italic max-w-xs text-center md:text-left">
                            Executing this endpoint will simulate a request to the server and return a JSON response.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
