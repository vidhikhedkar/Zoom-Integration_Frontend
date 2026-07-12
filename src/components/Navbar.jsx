import React from "react";
import { Video, LayoutDashboard, Users, Settings } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="min-h-16 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:py-0 sm:px-8 gap-4 box-border">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="bg-blue-600 text-white h-8 w-8 rounded-lg flex justify-center items-center">
                    <Video size={16} strokeWidth={2.5} />
                </div>
                <span className="text-base font-bold text-slate-900 m-0">Vidhi's Space</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 max-w-full overflow-x-auto no-scrollbar">
                <button className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-1.5 bg-none border-none cursor-pointer hover:text-slate-900 transition-colors">
                    <LayoutDashboard size={14} /> Dashboard
                </button>
                <button className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-1.5 bg-none border-none cursor-pointer hover:text-slate-900 transition-colors">
                    <Users size={14} /> Directory
                </button>
                <button className="text-sm font-medium text-slate-500 whitespace-nowrap flex items-center gap-1.5 bg-none border-none cursor-pointer hover:text-slate-900 transition-colors">
                    <Settings size={14} /> Settings
                </button>
            </div>
        </nav>
    );
}
