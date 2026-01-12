'use client';

import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import { Copy, Check } from 'lucide-react';

interface JSONHighlighterProps {
    data: any;
}

export default function JSONHighlighter({ data }: JSONHighlighterProps) {
    const codeRef = useRef<HTMLPreElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [data]);

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-xl overflow-hidden bg-[#0d0d0f] p-4 border border-white/5 group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-get/30 to-transparent opacity-50" />
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all hover:text-white hover:bg-slate-800"
                title="Copy JSON"
            >
                {copied ? <Check size={12} className="text-accent-post" /> : <Copy size={12} />}
            </button>
            <pre className="!bg-transparent text-[12px] md:text-[13px] leading-[1.5] whitespace-pre-wrap break-all md:break-words text-slate-300">
                <code ref={codeRef} className="language-json">
                    {JSON.stringify(data, null, 2)}
                </code>
            </pre>
        </div>
    );
}
