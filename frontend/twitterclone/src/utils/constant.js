export const USER_API_END_POINT = "https://twitter-back-3gpp.onrender.com/api/v1/user";
export const TWEET_API_END_POINT = "https://twitter-back-3gpp.onrender.com/v1/tweet";

export const timeSince = (timestamp) => {
    if (!timestamp) return "Invalid date"; // Handle missing timestamp

    let time = Date.parse(timestamp);
    if (isNaN(time)) return "Invalid date"; // Handle invalid timestamp

    let now = Date.now();
    let secondsPast = (now - time) / 1000;
    let suffix = secondsPast < 0 ? "from now" : "ago"; // Determine suffix for future or past time
    secondsPast = Math.abs(secondsPast); // Convert to absolute for consistent calculations

    let intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (let i in intervals) {
        let interval = intervals[i];
        if (secondsPast >= interval) {
            let count = Math.floor(secondsPast / interval);
            return `${count} ${i}${count > 1 ? "s" : ""} ${suffix}`;
        }
    }
    return "Just now"; // Fallback for timestamps very close to the current time
};
