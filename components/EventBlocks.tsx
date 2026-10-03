"use client";

import { useEffect, useState } from "react";

export default function EventBlocks() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data.events || []));
  }, []);

  if (!events.length) {
    return <p className="text-center mt-6 text-igbe-red">Loading events...</p>;
  }

  return (
    <>
      {/* First three blocks side by side */}
      <div className="mt-8 grid grid-cols-3 gap-8">
        {events.slice(0, 3).map((event, idx) => (
          <a
            key={event._id}
            href={`/events/${event._id}`}
            className="flex items-center border rounded-lg p-6 shadow-md bg-white hover:shadow-lg hover:scale-105 transition-transform"
          >
            <div
              className={`w-1 h-16 mr-4 ${
                idx === 0
                  ? "bg-pink-500"
                  : idx === 1
                  ? "bg-yellow-500"
                  : "bg-purple-600"
              }`}
            ></div>
            <div>
              <h3 className="text-2xl font-semibold text-igbe-blue">
                {event.title}
              </h3>
              <p className="text-lg text-igbe-red">{event.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Block 4 - Special Announcements centered below */}
      {events[3] && (
        <div className="mt-8 flex justify-center">
          <a
            href={`/events/${events[3]._id}`}
            className="flex items-center border rounded-lg p-6 shadow-md bg-white hover:shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-1 h-16 bg-yellow-500 mr-4"></div>
            <div>
              <h3 className="text-2xl font-semibold text-igbe-gold">
                {events[3].title}
              </h3>
              <p className="text-lg text-igbe-red">{events[3].description}</p>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
