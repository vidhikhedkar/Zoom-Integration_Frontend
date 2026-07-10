import React, { useState } from "react";
import { createZoomMeeting } from "./components/services/meetingService";
import Navbar from "./components/Navbar";
import MeetingForm from "./components/MeetingForm";
import MeetingResult from "./components/MeetingResult";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [zoomData, setZoomData] = useState(null);
  const [topic, setTopic] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [emails, setEmails] = useState("");

  const handleCreateMeeting = async (e) => {
    e.preventDefault();
    if (!topic || !startTime || !duration) return;

    setLoading(true);
    try {
      const data = await createZoomMeeting({ topic, startTime, duration, emails });

      if (data.success) {
        setZoomData(data);
        setTopic("");
        setStartTime("");
        setDuration(30);
        setEmails("");
      } else {
        alert(data.error || "Failed to create meeting");
      }
    } catch (err) {
      alert("Backend server is not reachable");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className=" bg-slate-50 flex flex-col font-sans box-border text-slate-900">
      <Navbar />

      {/* Responsive padding updates (py-6 on mobile, py-12 on desktop) */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:px-6 box-border">
        <div
          className={`w-full bg-white rounded-2xl border border-slate-200 shadow-xl grid overflow-hidden transition-all duration-300 ${
            zoomData 
              ? "max-w-5xl grid-cols-1 md:grid-cols-2" // Stacks on mobile/tablet, splits side-by-side on medium screens (768px+)
              : "max-w-lg grid-cols-1"
          }`}
        >
          <MeetingForm
            loading={loading}
            topic={topic}
            setTopic={setTopic}
            startTime={startTime}
            setStartTime={setStartTime}
            duration={duration}
            setDuration={setDuration}
            emails={emails}
            setEmails={setEmails}
            onSubmit={handleCreateMeeting}
          />

          {zoomData && (
            <MeetingResult
              zoomData={zoomData}
              onClear={() => setZoomData(null)}
              onCopy={copyToClipboard}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}