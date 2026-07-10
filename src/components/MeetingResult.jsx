import React from "react";
import { CheckCircle2, Link, Copy, KeyRound, Mail } from "lucide-react";

export default function MeetingResult({ zoomData, onClear, onCopy }) {
    return (
        <div className="p-10 bg-slate-50 border-t border-slate-200 sm:border-t-0 sm:border-l flex flex-col justify-between box-border">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" strokeWidth={3} />
                    <h4 className="text-[11px] font-bold uppercase tracking-wider m-0 text-emerald-600">Meeting Active</h4>
                </div>

                <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Topic</span>
                    <div className="text-base font-bold text-slate-900">{zoomData.topic}</div>
                </div>

                <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Link size={12} /> Live Link
                    </span>
                    <div className="flex gap-2 mt-1.5">
                        <input
                            type="text"
                            value={zoomData.joinUrl}
                            readOnly
                            className="w-full h-9 px-3.5 rounded-lg border border-slate-300 bg-slate-100 text-slate-900 font-mono text-xs outline-none box-border"
                        />
                        <button
                            type="button"
                            onClick={() => onCopy(zoomData.joinUrl)}
                            className="h-9 px-3 rounded-lg border border-slate-300 bg-white cursor-pointer flex items-center justify-center hover:bg-slate-50 transition-colors"
                        >
                            <Copy size={13} />
                        </button>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                            <KeyRound size={12} /> Password
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-mono">
                            {zoomData.password || "None"}
                        </span>
                    </div>

                    <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                            <Mail size={12} /> Delivery
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {zoomData.emailsSent || 0} Sent
                        </span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={onClear}
                className="mt-10 bg-none border-none text-slate-400 text-xs font-semibold cursor-pointer text-left underline p-0 hover:text-slate-600 transition-colors"
            >
                Clear Workspace
            </button>
        </div>
    );
}