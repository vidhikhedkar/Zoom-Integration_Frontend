import React from "react";
import { HelpCircle, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="min-h-14 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between px-6 py-4 sm:py-0 sm:px-8 gap-2.5 box-border text-xs text-slate-400 text-center sm:text-left">
            <div>&copy; 2026 Vidhi's Space. All rights reserved.</div>
            <div className="flex gap-4">
                <NavLink to="/help" className="text-slate-500 no-underline inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                    <HelpCircle size={12} /> Help Docs
                </NavLink>
                <NavLink to="/status" className="text-slate-500 no-underline inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Zoom Status <ExternalLink size={10} />
                </NavLink>
            </div>
        </footer>
    );
}
