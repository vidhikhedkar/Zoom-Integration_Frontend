import React from "react";
import { Video, PlusCircle } from "lucide-react";

export default function MeetingForm({
    loading,
    topic,
    setTopic,
    startTime,
    setStartTime,
    duration,
    setDuration,
    emails,
    setEmails,
    onSubmit,
}) {
    return (
        <div className="p-10 box-border">
            <div className="flex items-center gap-3.5 mb-8">
                <div className="bg-blue-50 text-blue-600 h-11 w-11 rounded-xl flex justify-center items-center">
                    <Video size={20} strokeWidth={2.5} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 m-0 leading-tight">Zoom Scheduler</h2>
                    <p className="text-xs text-slate-500 mt-1 mb-0">Create instant meetings and sync up invitations.</p>
                </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
                <div className="text-left">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Meeting Topic</label>
                    <input
                        type="text"
                        required
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Sprint Sync Session"
                        className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm outline-none box-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 text-left">
                        <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Start Time</label>
                        <input
                            type="datetime-local"
                            required
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm outline-none box-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex-1 text-left">
                        <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Duration (Mins)</label>
                        <input
                            type="number"
                            min="1"
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm outline-none box-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="text-left">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Recipient Emails</label>
                    <textarea
                        rows={3}
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                        placeholder="john@company.com, sarah@company.com"
                        className="w-full p-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm outline-none resize-none box-border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 rounded-lg bg-blue-600 text-white border-none text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 mt-6 disabled:opacity-50 hover:bg-blue-700 transition-colors"
                >
                    <PlusCircle size={15} />
                    {loading ? "Creating..." : "Create Zoom Meeting"}
                </button>
            </form>
        </div>
    );
}