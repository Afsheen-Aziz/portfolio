'use client';

import { Endpoint, endpoints } from '@/data/endpoints';
import { cn } from '@/lib/utils';
import { ChevronRight, User } from 'lucide-react';

interface SidebarProps {
    selectedId: string;
    onSelect: (id: string) => void;
}

export default function Sidebar({ selectedId, onSelect }: SidebarProps) {
    const groups = Array.from(new Set(endpoints.map((e) => e.group)));

    return (
        <aside className="w-full h-full overflow-y-auto bg-card flex flex-col border-r border-border scrollbar-hide">
            {/* Profile Header */}
            <div className="p-6 border-b border-border">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-get/10 border border-accent-get/20 flex items-center justify-center text-accent-get">
                        <User size={24} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-white leading-none">
                            Afsheen Aziz
                        </h1>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    OPEN FOR OPPORTUNITIES
                </div>
            </div>

            <div className="flex-1 py-4 px-3 space-y-6">
                {groups.map((group) => (
                    <div key={group}>
                        <h2 className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
                            {group}
                        </h2>
                        <div className="space-y-1">
                            {endpoints
                                .filter((e) => e.group === group)
                                .map((endpoint) => {
                                    const isActive = selectedId === endpoint.id;
                                    return (
                                        <button
                                            key={endpoint.id}
                                            onClick={() => onSelect(endpoint.id)}
                                            className={cn(
                                                "w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group text-left",
                                                isActive
                                                    ? "bg-slate-800/80 text-foreground ring-1 ring-white/10"
                                                    : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase w-10 text-center mt-0.5",
                                                    endpoint.method === 'GET'
                                                        ? "bg-accent-get/10 text-accent-get border border-accent-get/10"
                                                        : "bg-accent-post/10 text-accent-post border border-accent-post/10"
                                                )}
                                            >
                                                {endpoint.method}
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <p className={cn(
                                                    "truncate font-mono text-[13px]",
                                                    isActive ? "text-white" : "text-slate-300"
                                                )}>
                                                    {endpoint.path}
                                                </p>
                                                <p className="text-[11px] text-slate-500 truncate group-hover:text-slate-400 transition-colors">
                                                    {endpoint.label}
                                                </p>
                                            </div>
                                            <ChevronRight
                                                size={14}
                                                className={cn(
                                                    "mt-1 transition-transform",
                                                    isActive ? "text-accent-get opacity-100" : "text-slate-600 opacity-0 group-hover:opacity-100"
                                                )}
                                            />
                                        </button>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-border mt-auto bg-card/50">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>v1.0.0</span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span>API ACTIVE</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
