"use client";

import { useEffect, useState, ReactNode } from "react";

type AboutData = {
  page?: string;
  title?: unknown;
  subtitle?: unknown;
  intro?: unknown;

  
  founder?: {
    name?: unknown;
    image?: unknown;
    titles?: unknown;
    alsoKnownAs?: unknown;
    founded?: unknown;
    origin?: unknown;
    basedIn?: unknown;
  };

  journey?: unknown;
  expressions?: unknown;
  videos?: unknown;

  livingHeritage?: unknown;
  mission?: unknown;
};

/* ===================================================== */
/* SAFE DATA HELPERS */
/* ===================================================== */


function toArray(value: unknown): unknown[] {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value || typeof value !== "object") {
    return [];
  }

  const object = value as Record<string, unknown>;

  /*
    If this is already one expression object:
    
    {
      title: "Dancing",
      icon: "dance",
      color: "red",
      description: "..."
    }

    treat it as ONE expression.
  */
  if (
    "title" in object &&
    "description" in object
  ) {
    return [object];
  }

  /*
    Otherwise, look through the object and collect
    expression objects and nested arrays.
  */
  const result: unknown[] = [];

  Object.values(object).forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else if (item && typeof item === "object") {
      const itemObject = item as Record<string, unknown>;

      if (
        "title" in itemObject &&
        "description" in itemObject
      ) {
        result.push(itemObject);
      } else {
        result.push(...toArray(itemObject));
      }
    }
  });

  return result;
}



/*
  Safely renders MongoDB values.

  This prevents errors such as:

  Objects are not valid as a React child
*/
function DisplayValue({
  value,
  className = "",
}: {
  value: unknown;
  className?: string;
}): ReactNode {
  if (value === null || value === undefined) {
    return null;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return <span className={className}>{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    return (
      <div className={className}>
        {value.map((item, index) => (
          <div key={index}>
            <DisplayValue value={item} />
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === "object") {
    const entries = Object.entries(value);

    return (
      <div className={`space-y-3 ${className}`}>
        {entries.map(([key, item]) => (
          <div key={key}>
            <p className="font-semibold capitalize text-gray-800">
              {formatLabel(key)}
            </p>

            <div className="text-gray-700">
              <DisplayValue value={item} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

/* ===================================================== */
/* TURN OBJECT KEYS INTO READABLE LABELS */
/* ===================================================== */

function formatLabel(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase());
}

/* ===================================================== */
/* GET A SIMPLE STRING WHEN WE NEED ONE */
/* ===================================================== */

function getText(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(getText).filter(Boolean).join(", ");
  }

  if (value && typeof value === "object") {
    const object = value as Record<string, unknown>;

    /*
      If MongoDB gives us:

      {
        title: "...",
        description: "..."
      }

      use the useful text rather than trying to render
      the whole object as a React child.
    */

    if (object.description !== undefined) {
      return getText(object.description);
    }

    if (object.title !== undefined) {
      return getText(object.title);
    }

    return Object.values(object).map(getText).filter(Boolean).join(" ");
  }

  return "";
}

/* ===================================================== */
/* COLORS */
/* ===================================================== */

const journeyColors: Record<
  string,
  {
    line: string;
    number: string;
    title: string;
    background: string;
  }
> = {
  purple: {
    line: "border-igbe-purple",
    number: "bg-igbe-purple text-white",
    title: "text-igbe-purple",
    background: "bg-purple-50",
  },

  red: {
    line: "border-igbe-red",
    number: "bg-igbe-red text-white",
    title: "text-igbe-red",
    background: "bg-red-50",
  },

  yellow: {
    line: "border-igbe-yellow",
    number: "bg-igbe-yellow text-black",
    title: "text-yellow-700",
    background: "bg-yellow-50",
  },

  blue: {
    line: "border-igbe-blue",
    number: "bg-igbe-blue text-white",
    title: "text-igbe-blue",
    background: "bg-blue-50",
  },
};

const expressionColors: Record<
  string,
  {
    border: string;
    title: string;
    background: string;
  }
> = {
  red: {
    border: "border-igbe-red",
    title: "text-igbe-red",
    background: "bg-red-50",
  },

  purple: {
    border: "border-igbe-purple",
    title: "text-igbe-purple",
    background: "bg-purple-50",
  },

  green: {
    border: "border-green-600",
    title: "text-green-700",
    background: "bg-green-50",
  },

  gold: {
    border: "border-igbe-gold",
    title: "text-yellow-700",
    background: "bg-yellow-50",
  },

  pink: {
    border: "border-igbe-pink",
    title: "text-pink-600",
    background: "bg-pink-50",
  },

  blue: {
    border: "border-igbe-blue",
    title: "text-igbe-blue",
    background: "bg-blue-50",
  },
};

/* ===================================================== */
/* ABOUT PAGE */
/* ===================================================== */

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAbout() {
      try {
        const response = await fetch("/api/about");

        if (!response.ok) {
          throw new Error("Failed to load About page");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load About page content.");
      } finally {
        setLoading(false);
      }
    }

    loadAbout();
  }, []);

  /* ===================================================== */
  /* LOADING */
/* ===================================================== */

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <p className="text-lg text-igbe-purple font-semibold">
          Loading Waters of Heaven Temple...
        </p>
      </main>
    );
  }

  /* ===================================================== */
  /* ERROR */
/* ===================================================== */

  if (error || !data) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-igbe-red mb-3">
            Unable to Load Page
          </h1>

          <p className="text-gray-600">
            {error || "About page content could not be found."}
          </p>
        </div>
      </main>
    );
  }

  /* ===================================================== */
  /* NORMALIZE ARRAYS */
/* ===================================================== */

  const journey = toArray(data.journey);

  const expressions = toArray(data.expressions);

  const videos = toArray(data.videos);

  const founderTitles = toArray(data.founder?.titles);

  const founderNames = toArray(data.founder?.alsoKnownAs);

  /* ===================================================== */
  /* PAGE */
/* ===================================================== */

  return (
    <main className="min-h-screen bg-white">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-igbe-purple text-white">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-igbe-yellow mb-5">
            Waters of Heaven Temple
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <DisplayValue value={data.title} />
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            <DisplayValue value={data.subtitle} />
          </p>

          <div className="w-24 h-1 bg-igbe-yellow mx-auto mt-8" />
        </div>
      </section>

      {/* ================================================= */}
      {/* INTRODUCTION */}
      {/* ================================================= */}

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-igbe-purple mb-6">
          Our Story
        </h2>

        <div className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
          <DisplayValue value={data.intro} />
        </div>
      </section>

      {/* ================================================= */}
      {/* FOUNDER */}
      {/* ================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Founder Image */}

          <div className="relative min-h-[500px] overflow-hidden rounded-3xl shadow-xl border-4 border-igbe-purple">
            <img
              src="/founder/kate.jpg"
              alt="Kate Onobriakpeyan"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-black/70 p-6">
              <h2 className="text-3xl font-bold text-white">
                <DisplayValue value={data.founder?.name} />
              </h2>

              <p className="text-igbe-yellow font-semibold mt-2">
                Founder of Waters of Heaven Temple
              </p>
            </div>
          </div>

          {/* Founder Information */}

          <div className="flex flex-col justify-center bg-purple-50 rounded-3xl p-8 md:p-10 border-l-8 border-igbe-purple">
            <p className="text-sm uppercase tracking-widest font-bold text-igbe-purple mb-3">
              Our Founder
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <DisplayValue value={data.founder?.name} />
            </h2>

            {/* Titles */}

            <div className="mb-7">
              <h3 className="text-xl font-bold text-igbe-purple mb-3">
                Titles & Ranks
              </h3>

              <div className="flex flex-wrap gap-3">
                {founderTitles.map((title, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white border-2 border-igbe-purple text-igbe-purple font-semibold"
                  >
                    <DisplayValue value={title} />
                  </span>
                ))}
              </div>
            </div>

            {/* Also Known As */}

            <div className="mb-7">
              <h3 className="text-xl font-bold text-igbe-red mb-3">
                Also Known As
              </h3>

              <ul className="space-y-2 text-gray-700">
                {founderNames.map((name, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-igbe-red font-bold">•</span>

                    <DisplayValue value={name} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Founder Details */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border-l-4 border-igbe-yellow">
                <p className="text-sm font-semibold text-gray-500">
                  Founded
                </p>

                <p className="text-xl font-bold text-yellow-700">
                  <DisplayValue value={data.founder?.founded || 2013} />
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border-l-4 border-igbe-blue">
                <p className="text-sm font-semibold text-gray-500">
                  Origin
                </p>

                <p className="font-semibold text-igbe-blue">
                  <DisplayValue value={data.founder?.origin} />
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border-l-4 border-igbe-purple sm:col-span-2">
                <p className="text-sm font-semibold text-gray-500">
                  Based In
                </p>

                <p className="font-semibold text-igbe-purple">
                  <DisplayValue value={data.founder?.basedIn} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* OUR JOURNEY */}
      {/* ================================================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-igbe-red mb-3">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-igbe-purple">
              From Home to Waters of Heaven
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
              The journey of Waters of Heaven Temple has grown through
              different places, experiences, relationships, and spiritual
              reflections.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative">
            <div className="absolute left-[22px] md:left-[31px] top-0 bottom-0 w-1 bg-gray-200" />

            <div className="space-y-14">
              {journey.map((item, index) => {
                const itemObject =
                  item && typeof item === "object"
                    ? (item as Record<string, unknown>)
                    : {};

                const color =
                  getText(itemObject.color).toLowerCase() || "purple";

                const colors =
                  journeyColors[color] || journeyColors.purple;

                return (
                  <article
                    key={index}
                    className="relative pl-16 md:pl-24"
                  >
                    {/* Number */}

                    <div
                      className={`absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full ${colors.number} flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg z-10`}
                    >
                      {getText(itemObject.number) || index + 1}
                    </div>

                    {/* Story */}

                    <div
                      className={`border-l-8 ${colors.line} ${colors.background} rounded-r-2xl p-7 md:p-9 shadow-sm`}
                    >
                      <h3
                        className={`text-2xl md:text-3xl font-bold ${colors.title} mb-4`}
                      >
                        <DisplayValue value={itemObject.title} />
                      </h3>

                      <div className="text-gray-700 leading-relaxed text-lg">
                        <DisplayValue value={itemObject.description} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
              
            {/* ================================================= */}
            {/* EXPRESSIONS */}
            {/* ================================================= */}

            <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-igbe-red mb-3">
                Our Expressions
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-igbe-purple">
                Expressions That Became Our Symbol
                </h2>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5">
                Over time, certain expressions became closely associated with
                the identity, spiritual life, culture, and community of Waters
                of Heaven Temple.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {expressions.map((expression, index) => {
                const expressionObject =
                    expression && typeof expression === "object"
                    ? (expression as Record<string, unknown>)
                    : {};

                const color =
                    getText(expressionObject.color).toLowerCase() || "purple";

                const colors =
                    expressionColors[color] || expressionColors.purple;

                return (
                    <article
                    key={index}
                    className={`${colors.background} border-l-8 border-igbe-purple rounded-r-2xl p-7 shadow-sm`}
                    >
                    {/* Expression title */}
                    <h3
                        className={`text-2xl font-bold ${colors.title} mb-3`}
                    >
                        <DisplayValue value={expressionObject.title} />
                    </h3>

                    {/* Expression description */}
                    <div className="text-gray-700 leading-relaxed">
                        <DisplayValue value={expressionObject.description} />
                    </div>
                    </article>
                );
                })}
            </div>
            </section>




      {/* ================================================= */}
      {/* VIDEOS */}
      {/* ================================================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-igbe-blue mb-3">
              Visual Heritage
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-igbe-purple">
              Our Experiences in Motion
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5">
              These spaces are reserved for videos that document our
              dancing, songs, spiritual experiences, ancestral reflection,
              and community life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => {
              const videoObject =
                video && typeof video === "object"
                  ? (video as Record<string, unknown>)
                  : {};

              const videoUrl = getText(videoObject.url);

              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-8 border-igbe-blue"
                >
                  <div className="aspect-video bg-black">
                    {videoUrl ? (
                      <video
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={videoUrl} type="video/mp4" />

                        Your browser does not support the video element.
                      </video>
                    ) : (
                      <div className="h-full flex items-center justify-center text-white">
                        Video coming soon
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-igbe-blue mb-3">
                      <DisplayValue value={videoObject.title} />
                    </h3>

                    <div className="text-gray-600 leading-relaxed">
                      <DisplayValue value={videoObject.description} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* LIVING HERITAGE */}
      {/* ================================================= */}

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="border-y-4 border-igbe-gold py-12">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-yellow-700 mb-4">
            Living Heritage
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-igbe-purple mb-7">
            A Heritage That Continues
          </h2>

          <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <DisplayValue value={data.livingHeritage} />
          </div>
        </div>
      </section>

     
      {/* ===================================================== */}
      {/* OUR PURPOSE */}
      {/* ===================================================== */}

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-igbe-blue mb-4">
              What We Stand For
            </p>

            <div className="w-20 h-1 bg-igbe-gold mx-auto rounded-full" />
          </div>

          {/* Main statement */}
          <div className="relative max-w-4xl mx-auto border-l-4 border-igbe-purple pl-8 md:pl-12">

            <h2 className="text-4xl md:text-5xl font-bold text-igbe-purple mb-7">
              Our Purpose
            </h2>

            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              {getText(
                data.mission &&
                  typeof data.mission === "object"
                  ? (data.mission as Record<string, unknown>).description
                  : data.mission
              )}
            </p>

            <div className="flex gap-2 mt-8">
              <div className="h-1 w-16 bg-igbe-red rounded-full" />
              <div className="h-1 w-16 bg-igbe-gold rounded-full" />
              <div className="h-1 w-16 bg-igbe-blue rounded-full" />
            </div>

          </div>

          {/* Closing thought */}
          <p className="text-center text-gray-600 italic text-lg mt-12">
            Preserving our roots, nurturing our community, and carrying our
            heritage forward.
          </p>

        </div>
      </section>

    </main>
  );
}

