"use client";

import { useEffect, useState } from "react";

export default function EventBlocks() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.events || []));
  }, []);

  if (!events.length) {
    return (
      <p className="mt-6 text-center text-igbe-red">
        Loading events...
      </p>
    );
  }

  return (
    <>
      {/* First three blocks: responsive layout */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {events.slice(0, 3).map((event, idx) => (
          <a
            key={event._id}
            href={`/events/${event._id}`}
            className="flex min-w-0 items-center rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg sm:p-5 lg:p-6"
          >
            {/* Coloured side bar */}
            <div
              className={`mr-3 h-16 w-1 shrink-0 sm:mr-4 ${
                idx === 0
                  ? "bg-pink-500"
                  : idx === 1
                  ? "bg-yellow-500"
                  : "bg-purple-600"
              }`}
            ></div>

            {/* Event title and description */}
            <div className="min-w-0 flex-1">
              <h3 className="break-words text-xl font-semibold text-igbe-blue [overflow-wrap:anywhere] sm:text-2xl">
                {event.title}
              </h3>

              <p className="break-words text-base text-igbe-red [overflow-wrap:anywhere] sm:text-lg">
                {event.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Block 4 - Special Announcements centered below */}
      {events[3] && (
        <div className="mt-8 flex justify-center">
          <a
            href={`/events/${events[3]._id}`}
            className="flex w-full min-w-0 max-w-2xl items-center rounded-lg border bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg sm:p-5 lg:p-6"
          >
            {/* Yellow side bar */}
            <div className="mr-3 h-16 w-1 shrink-0 bg-yellow-500 sm:mr-4"></div>

            {/* Announcement title and description */}
            <div className="min-w-0 flex-1">
              <h3 className="break-words text-xl font-semibold text-igbe-gold [overflow-wrap:anywhere] sm:text-2xl">
                {events[3].title}
              </h3>

              <p className="break-words text-base text-igbe-red [overflow-wrap:anywhere] sm:text-lg">
                {events[3].description}
              </p>
            </div>
          </a>
        </div>
      )}
    </>
  );
}

