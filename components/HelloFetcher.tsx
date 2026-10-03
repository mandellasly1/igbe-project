"use client";  // this file is a Client Component

import { useEffect, useState } from "react";

export default function HelloFetcher() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <p className="mt-6 text-igbe-blue font-semibold">
      {message}
    </p>
  );
}
