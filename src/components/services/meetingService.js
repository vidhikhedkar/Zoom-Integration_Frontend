// src/api/zoomApi.js

const API_BASE_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:8080/api";

/**
 * Create Zoom Meeting
 */
export const createZoomMeeting = async ({
    topic,
    duration,
    startTime,
    emails,
}) => {
    try {
        const response = await fetch(`${API_BASE_URL}/create-meeting`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topic,
                duration: Number(duration),
                startTime: new Date(startTime).toISOString(),
                emails: emails
                    .split(",")
                    .map((email) => email.trim())
                    .filter(Boolean),
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to create meeting");
        }

        return data;
    } catch (error) {
        throw new Error(error.message || "Network Error");
    }
};