"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type IgbeData = {
  history: any[];
  beliefs: any[];
  worship: any[];
  culture: any[];
  leadership: any[];
  timeline: any[];
};

function formatKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function DisplayValue({ value }: { value: any }) {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "string" || typeof value === "number") {
    return (
      <p className="mt-2 whitespace-pre-line leading-7 text-current/80">
        {String(value)}
      </p>
    );
  }

  if (Array.isArray(value)) {
    return (
      <ul className="mt-3 space-y-2">
        {value.map((item, index) => (
          <li
            key={index}
            className="rounded-xl bg-white/60 p-3 leading-6 ring-1 ring-black/5"
          >
            {typeof item === "object" ? (
              <DisplayValue value={item} />
            ) : (
              String(item)
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object") {
    return (
      <div className="mt-3 space-y-4">
        {Object.entries(value).map(([key, nestedValue]) => (
          <div key={key}>
            <p className="font-bold">{formatKey(key)}</p>
            <DisplayValue value={nestedValue} />
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-extrabold text-amber-800 ring-1 ring-amber-200">
          {number}
        </span>

        <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function FeaturePanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 ${className}`}
    >
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <div className="mt-3 text-slate-700">{children}</div>
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto my-10 h-1 w-24 rounded-full bg-amber-400" />
  );
}

const leadershipTitles = [
  {
    title: "Chief Priest",
    description:
      "A senior spiritual leadership title associated with the religious life, worship, and sacred responsibilities of the community.",
  },
  {
    title: "Uku Supreme / Ovie",
    description:
      "A senior traditional title within the leadership structure. The title represents an important level of authority and recognition within the community.",
  },
  {
    title: "Uku",
    description:
      "A traditional leadership title connected with community organization and traditional responsibilities.",
  },
  {
    title: "Omote-Uku",
    description:
      "A recognized traditional leadership position within the community structure.",
  },
  {
    title: "Ayeoba",
    description:
      "A traditional title recorded within the Igbe leadership structure.",
  },
  {
    title: "Olori",
    description:
      "A recognized community title within the traditional organizational structure.",
  },
  {
    title: "Ovbiedjo / Ebo",
    description:
      "A community title associated with traditional participation and organizational responsibilities.",
  },
  {
    title: "Emiegbe",
    description:
      "A title used within the broader community structure of Igbe.",
  },
];

export default function CommunitiesPage() {
  const [data, setData] = useState<IgbeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadIgbeData() {
      try {
        setLoading(true);

        const response = await fetch("/api/igbe");

        if (!response.ok) {
          throw new Error("Failed to load Igbe documentary data.");
        }

        const result = await response.json();

        setData({
          history: result.history || [],
          beliefs: result.beliefs || [],
          worship: result.worship || [],
          culture: result.culture || [],
          leadership: result.leadership || [],
          timeline: result.timeline || [],
        });
      } catch (err) {
        console.error(err);
        setError("Unable to load the Igbe documentary records.");
      } finally {
        setLoading(false);
      }
    }

    loadIgbeData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-6 py-20 text-white md:px-10 md:py-28">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Igbe Heritage & Community
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
              Preserving the Story of Igbe
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              A growing digital record of Igbe history, beliefs, worship,
              cultural practices, leadership, festivals, communities, and
              heritage.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-blue-200">
              This section of the Waters of Heaven Temple website is dedicated
              to documenting and preserving Igbe heritage. Waters of Heaven
              Temple is part of the Igbe community and uses this platform to
              help organize records, preserve cultural knowledge, and make
              information about Igbe available to people around the world.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#history"
              className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <p className="text-sm font-bold text-blue-200">01</p>
              <p className="mt-2 font-extrabold">History</p>
            </a>

            <a
              href="#founder"
              className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <p className="text-sm font-bold text-blue-200">02</p>
              <p className="mt-2 font-extrabold">Founder</p>
            </a>

            <a
              href="#beliefs"
              className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <p className="text-sm font-bold text-blue-200">03</p>
              <p className="mt-2 font-extrabold">Beliefs</p>
            </a>

            <a
              href="#leadership"
              className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <p className="text-sm font-bold text-blue-200">04</p>
              <p className="mt-2 font-extrabold">Leadership</p>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK NAVIGATION
      ========================================================== */}
      <section className="border-b border-slate-200 bg-white px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {[
            ["History", "#history"],
            ["Founder", "#founder"],
            ["Beliefs", "#beliefs"],
            ["Worship", "#worship"],
            ["Ohre", "#symbols"],
            ["Festivals", "#festivals"],
            ["Leadership", "#leadership"],
            ["Expansion", "#expansion"],
            ["Glossary", "#glossary"],
            ["Timeline", "#timeline"],
            ["Research", "#research"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-100 hover:text-blue-800"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {/* =========================================================
            LOADING
        ========================================================== */}
        {loading && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-700" />

            <p className="mt-4 font-semibold text-slate-600">
              Loading Igbe documentary records...
            </p>
          </div>
        )}

        {/* =========================================================
            ERROR
        ========================================================== */}
        {error && (
          <div className="mb-10 rounded-2xl bg-red-50 p-5 text-red-800 ring-1 ring-red-200">
            <p className="font-bold">Documentary data could not be loaded.</p>
            <p className="mt-1 text-sm">{error}</p>
          </div>
        )}

        {/* =========================================================
            HISTORY
        ========================================================== */}
        <section id="history" className="scroll-mt-24">
          <SectionHeading
            number="01"
            eyebrow="Historical Record"
            title="The History of Igbe"
            description="A dedicated place for preserving the historical development, memories, records, and stories connected with Igbe."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-amber-50 p-7 text-amber-950 shadow-sm ring-1 ring-amber-200 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                Preserving the Past
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Keeping Igbe history alive
              </h3>

              <p className="mt-5 leading-8">
                History is more than dates. It includes the people, places,
                teachings, traditions, experiences, stories, ceremonies, and
                memories passed from one generation to another.
              </p>

              <p className="mt-4 leading-8">
                This website provides a digital place where such information
                can be organized and preserved so that future generations can
                continue to learn about Igbe heritage.
              </p>

              <GoldDivider />

              <p className="leading-8">
                The records on this page are intended to grow as additional
                historical materials, community knowledge, photographs,
                documents, and verified information become available.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-7 text-blue-950 shadow-sm ring-1 ring-blue-200 md:p-9">
              <h3 className="text-2xl font-black">
                Documentary Records
              </h3>

              {data?.history?.length ? (
                <div className="mt-6 space-y-5">
                  {data.history.map((item, index) => (
                    <div
                      key={item._id?.toString?.() || index}
                      className="rounded-2xl bg-sky-50 p-5 text-sky-950 ring-1 ring-sky-200"
                    >
                      {Object.entries(item)
                        .filter(([key]) => key !== "_id")
                        .map(([key, value]) => (
                          <div key={key} className="mb-4 last:mb-0">
                            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                              {formatKey(key)}
                            </p>

                            <DisplayValue value={value} />
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 leading-7 text-slate-600">
                  Historical records will appear here as they are added to the
                  Igbe documentary database.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUNDER
        ========================================================== */}
        <section id="founder" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="02"
            eyebrow="The Beginning"
            title="Ubiecha Etarakpo — Founder of Igbe"
            description="A dedicated historical record of Ubiecha Etarakpo and the early emergence of the Igbe tradition."
          />

          <div className="rounded-3xl bg-rose-50 p-6 text-rose-950 shadow-lg ring-1 ring-rose-200 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">
              {/* FOUNDER IMAGE */}
              <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-pink-100 ring-1 ring-pink-200">
                <Image
                  src="/supreme.jpg"
                  alt="Ubiecha Etarakpo, founder of Igbe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-block w-fit rounded-full bg-rose-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700">
                  Founder & Prophet
                </span>

                <h3 className="text-3xl font-extrabold text-rose-900 md:text-4xl">
                  Ubiecha Etarakpo
                </h3>

                <p className="mt-5 leading-8">
                  Ubiecha Etarakpo is remembered in historical accounts as the
                  founder associated with the emergence of the Igbe religious
                  tradition in the nineteenth century.
                </p>

                <p className="mt-4 leading-8">
                  Historical accounts commonly place the emergence of Igbe
                  around <strong>1858</strong>, with its early development
                  associated with <strong>Kokori</strong>, in present-day
                  Delta State.
                </p>

                <p className="mt-4 leading-8">
                  Accounts of the tradition describe Ubiecha as a spiritual
                  teacher who preached against immoral behavior, harmful
                  practices, and forms of wrongdoing. His teachings and
                  religious activities became connected with the formation of
                  the Igbe movement.
                </p>

                <p className="mt-4 leading-8">
                  Dance became an important part of the worship tradition and
                  is also connected with the name <strong>Igbe</strong>.
                  Historical accounts also associate white or native chalk
                  with Igbe worship.
                </p>

                <div className="mt-6 rounded-2xl bg-white/70 p-5 ring-1 ring-rose-200">
                  <p className="font-bold text-rose-900">
                    Early Worship House
                  </p>

                  <p className="mt-2 leading-7">
                    Historical accounts describe Ubiecha establishing a
                    worship house within his compound. This place became
                    associated with the early religious activities of the
                    developing Igbe tradition.
                  </p>
                </div>
              </div>
            </div>

            {/* BIOGRAPHY */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <FeaturePanel
                title="Founder Biography"
                className="!bg-violet-50 !text-violet-950 !ring-violet-200"
              >
                <p className="leading-7">
                  Ubiecha Etarakpo occupies a central place in the historical
                  story of Igbe. Accounts of his life connect him with the
                  development of a spiritual tradition that emphasized
                  religious devotion, moral conduct, communal worship, and
                  distinctive cultural practices.
                </p>

                <p className="mt-4 leading-7">
                  His teachings and the community that developed around them
                  became part of the wider historical and cultural story of
                  the people among whom Igbe spread.
                </p>
              </FeaturePanel>

              <FeaturePanel
                title="Historical Caution"
                className="!bg-orange-50 !text-orange-950 !ring-orange-200"
              >
                <p className="leading-7">
                  Different historical sources contain variations in details
                  about Ubiecha Etarakpo's life, including the spelling of his
                  name and some dates associated with his biography.
                </p>

                <p className="mt-4 leading-7">
                  For that reason, this website will continue to distinguish
                  between documented historical information and details that
                  require additional community or archival verification.
                </p>
              </FeaturePanel>
            </div>
          </div>
        </section>

        {/* =========================================================
            BELIEFS
        ========================================================== */}
        <section id="beliefs" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="03"
            eyebrow="Spiritual Tradition"
            title="Beliefs of Igbe"
            description="A growing record of the spiritual ideas, teachings, values, and beliefs connected with Igbe."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-purple-50 p-7 text-purple-950 ring-1 ring-purple-200 md:p-9">
              <h3 className="text-2xl font-black">Core Spiritual Ideas</h3>

              <p className="mt-5 leading-8">
                Igbe is a religious and cultural tradition with its own
                spiritual practices, moral teachings, symbols, ceremonies, and
                community structures.
              </p>

              <p className="mt-4 leading-8">
                The purpose of this section is to preserve documented
                information about those beliefs while allowing community
                records to be expanded and corrected when better historical
                evidence becomes available.
              </p>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-7 shadow-sm ring-1 ring-indigo-200 md:p-9">
              {data?.beliefs?.length ? (
                <div className="space-y-5">
                  {data.beliefs.map((item, index) => (
                    <div
                      key={item._id?.toString?.() || index}
                      className="rounded-2xl bg-fuchsia-50 p-5 text-fuchsia-950 ring-1 ring-fuchsia-200"
                    >
                      {Object.entries(item)
                        .filter(([key]) => key !== "_id")
                        .map(([key, value]) => (
                          <div key={key} className="mb-4 last:mb-0">
                            <p className="text-sm font-bold uppercase tracking-wide text-purple-700">
                              {formatKey(key)}
                            </p>

                            <DisplayValue value={value} />
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="leading-7 text-slate-600">
                  Belief records will appear here as documentary information
                  is added to the database.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            WORSHIP
        ========================================================== */}
        <section id="worship" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="04"
            eyebrow="Worship & Practice"
            title="Worship, Rituals & Cultural Activities"
            description="Documenting the practices through which Igbe spirituality and community life are expressed."
          />

          <div className="rounded-3xl bg-sky-50 p-7 text-sky-950 ring-1 ring-sky-200 md:p-9">
            <div className="grid gap-6 md:grid-cols-3">
              <FeaturePanel
                title="Worship"
                className="!bg-white !text-sky-950 !ring-sky-200"
              >
                <p className="leading-7">
                  Worship provides a space for spiritual devotion, communal
                  participation, teaching, prayer, ceremony, and the
                  continuation of tradition.
                </p>
              </FeaturePanel>

              <FeaturePanel
                title="Rituals"
                className="!bg-cyan-50 !text-cyan-950 !ring-cyan-200"
              >
                <p className="leading-7">
                  Rituals and ceremonial practices form part of the religious
                  identity of the community and should be documented carefully
                  with respect for community knowledge.
                </p>
              </FeaturePanel>

              <FeaturePanel
                title="Cultural Activities"
                className="!bg-teal-50 !text-teal-950 !ring-teal-200"
              >
                <p className="leading-7">
                  Music, dance, gatherings, traditional clothing, language,
                  symbols, storytelling, and festivals can all contribute to
                  the cultural expression of Igbe.
                </p>
              </FeaturePanel>
            </div>

            {data?.worship?.length ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {data.worship.map((item, index) => (
                  <div
                    key={item._id?.toString?.() || index}
                    className="rounded-2xl bg-lime-50 p-5 text-lime-950 shadow-sm ring-1 ring-lime-200"
                  >
                    {Object.entries(item)
                      .filter(([key]) => key !== "_id")
                      .map(([key, value]) => (
                        <div key={key} className="mb-4 last:mb-0">
                          <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                            {formatKey(key)}
                          </p>

                          <DisplayValue value={value} />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* =========================================================
            OHRE
        ========================================================== */}
        <section id="symbols" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="05"
            eyebrow="Sacred Identity"
            title="Ohre — The Large White Chalk"
            description="Documenting Ohre, the large white chalk associated with Igbe spiritual and cultural heritage."
          />

          <div className="rounded-3xl bg-blue-50 p-6 text-blue-950 ring-1 ring-blue-200 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
              {/* OHRE IMAGE */}
              <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-cyan-50 ring-1 ring-cyan-200">
                <Image
                  src="/orhee.jpg"
                  alt="Ohre, the large white chalk of Igbe"
                  fill
                  className="object-contain p-5"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Sacred Symbol
                </span>

                <h3 className="mt-3 text-3xl font-black text-blue-950">
                  The White Chalk (Orhe)
                </h3>

                <p className="mt-5 leading-8">
                  <strong>Ohre</strong> is the large white chalk associated
                  with Igbe heritage and spiritual practice.
                </p>

                <p className="mt-4 leading-8">
                  White chalk has an important place in many traditional
                  spiritual contexts in the region. Within the Igbe tradition,
                  Ohre is remembered as a distinctive symbol connected with
                  worship and religious identity.
                </p>


                <p className="mt-4 leading-8">
                  The image shown here is included as part of the website's
                  effort to preserve visual records of Igbe heritage.
                </p>

                <div className="mt-6 rounded-2xl bg-indigo-50 p-5 ring-1 ring-indigo-200">
                  <p className="font-bold text-blue-900">Heritage Record</p>

                  <p className="mt-2 leading-7 text-blue-900/80">
                    As additional community records become available, this
                    section can be expanded with information about the use,
                    symbolism, historical meaning, and cultural context of
                    Ohre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FESTIVALS
        ========================================================== */}
        <section id="festivals" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="06"
            eyebrow="Community Celebrations"
            title="Festivals & Cultural Events"
            description="Recording important gatherings, festivals, ceremonies, and community events connected with Igbe."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-200">
              <h3 className="text-2xl font-black text-amber-950">
                Festival Records
              </h3>

              <p className="mt-4 leading-8 text-amber-950/80">
                Festivals are opportunities for communities to gather, worship,
                celebrate heritage, teach younger generations, and maintain
                relationships between different Igbe communities.
              </p>

              <p className="mt-4 leading-8 text-amber-950/80">
                Future records can include festival names, dates, locations,
                photographs, ceremonies, participants, historical background,
                and community explanations.
              </p>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-7 shadow-sm ring-1 ring-emerald-200">
              <h3 className="text-2xl font-black">Database Event Records</h3>

              {data?.culture?.length ? (
                <div className="mt-5 space-y-4">
                  {data.culture.map((item, index) => (
                    <div
                      key={item._id?.toString?.() || index}
                      className="rounded-2xl bg-pink-50 p-5 text-pink-950 ring-1 ring-pink-200"
                    >
                      {Object.entries(item)
                        .filter(([key]) => key !== "_id")
                        .map(([key, value]) => (
                          <div key={key} className="mb-4 last:mb-0">
                            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                              {formatKey(key)}
                            </p>

                            <DisplayValue value={value} />
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 leading-7 text-slate-600">
                  Festival and cultural event records will appear here as they
                  are added.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            LEADERSHIP
        ========================================================== */}
        <section id="leadership" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="07"
            eyebrow="Community Organization"
            title="Leadership & Community Structure"
            description="A record of traditional and spiritual leadership titles associated with Igbe communities."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTitles.map((leader, index) => {
              const leadershipColors = [
                "bg-rose-50 text-rose-950 ring-rose-200",
                "bg-blue-50 text-blue-950 ring-blue-200",
                "bg-amber-50 text-amber-950 ring-amber-200",
                "bg-purple-50 text-purple-950 ring-purple-200",
                "bg-emerald-50 text-emerald-950 ring-emerald-200",
                "bg-sky-50 text-sky-950 ring-sky-200",
                "bg-orange-50 text-orange-950 ring-orange-200",
                "bg-indigo-50 text-indigo-950 ring-indigo-200",
              ];

              const leadershipIconColors = [
                "bg-rose-100 text-rose-800",
                "bg-blue-100 text-blue-800",
                "bg-amber-100 text-amber-800",
                "bg-purple-100 text-purple-800",
                "bg-emerald-100 text-emerald-800",
                "bg-sky-100 text-sky-800",
                "bg-orange-100 text-orange-800",
                "bg-indigo-100 text-indigo-800",
              ];

              return (
                <div
                  key={leader.title}
                  className={`rounded-2xl p-5 shadow-sm ring-1 ${
                    leadershipColors[index % leadershipColors.length]
                  }`}
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full font-black ${
                      leadershipIconColors[
                        index % leadershipIconColors.length
                      ]
                    }`}
                  >
                    {leader.title.charAt(0)}
                  </div>

                  <h3 className="text-lg font-extrabold">{leader.title}</h3>

                  <p className="mt-3 text-sm leading-6 opacity-80">
                    {leader.description}
                  </p>
                </div>
              );
            })}
          </div>

          {data?.leadership?.length ? (
            <div className="mt-8 rounded-3xl bg-indigo-50 p-7 ring-1 ring-indigo-200 md:p-9">
              <h3 className="text-2xl font-black text-indigo-950">
                Recorded Leadership Data
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {data.leadership.map((item, index) => (
                  <div
                    key={item._id?.toString?.() || index}
                    className="rounded-2xl bg-violet-50 p-5 text-violet-950 ring-1 ring-violet-200"
                  >
                    {Object.entries(item)
                      .filter(([key]) => key !== "_id")
                      .map(([key, value]) => (
                        <div key={key} className="mb-4 last:mb-0">
                          <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">
                            {formatKey(key)}
                          </p>

                          <DisplayValue value={value} />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        {/* =========================================================
            EXPANSION
        ========================================================== */}
        <section id="expansion" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="08"
            eyebrow="Growth & Community"
            title="Expansion of Igbe Communities"
            description="Documenting the spread and development of Igbe communities across different locations."
          />

          <div className="rounded-3xl bg-emerald-50 p-7 text-emerald-950 ring-1 ring-emerald-200 md:p-9">
            <div className="grid gap-7 lg:grid-cols-3">
              <FeaturePanel
                title="Community Growth"
                className="!bg-emerald-50 !text-emerald-950 !ring-emerald-200"
              >
                <p className="leading-7">
                  Over time, Igbe developed beyond its early place of origin
                  and became connected with communities in different
                  locations.
                </p>
              </FeaturePanel>

              <FeaturePanel
                title="Local Communities"
                className="!bg-yellow-50 !text-yellow-950 !ring-yellow-200"
              >
                <p className="leading-7">
                  Individual communities can maintain their own histories,
                  leaders, gatherings, practices, and oral traditions while
                  remaining connected to the broader Igbe heritage.
                </p>
              </FeaturePanel>

              <FeaturePanel
                title="Digital Preservation"
                className="!bg-cyan-50 !text-cyan-950 !ring-cyan-200"
              >
                <p className="leading-7">
                  Digital documentation can help connect historical records,
                  photographs, community stories, and cultural information
                  across different locations.
                </p>
              </FeaturePanel>
            </div>

            <div className="mt-8 rounded-2xl bg-teal-50 p-6 ring-1 ring-teal-200">
              <p className="font-bold text-emerald-900">
                Community Expansion Records
              </p>

              <p className="mt-2 leading-7 text-emerald-900/80">
                This section can be expanded with verified information about
                Igbe communities, their locations, dates of establishment,
                leadership, festivals, and historical connections.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            GLOSSARY
        ========================================================== */}
        <section id="glossary" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="09"
            eyebrow="Language & Meaning"
            title="Igbe Glossary"
            description="A simple reference for important words, names, titles, symbols, and concepts connected with Igbe heritage."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Igbe",
                "The name of the religious and cultural tradition associated with Ubiecha Etarakpo.",
              ],
              [
                "Ohre",
                "The large white chalk associated with Igbe spiritual and cultural heritage.",
              ],
              [
                "Ubiecha Etarakpo",
                "The founder associated with the emergence of Igbe in historical accounts.",
              ],
              [
                "Chief Priest",
                "A senior spiritual leadership title within the community structure.",
              ],
              [
                "Uku",
                "A traditional leadership title recorded within Igbe community organization.",
              ],
              [
                "Ovie",
                "A traditional title that appears in the expression Uku Supreme / Ovie.",
              ],
              [
                "Omote-Uku",
                "A recognized traditional title within the Igbe leadership structure.",
              ],
              [
                "Ayeoba",
                "A recognized title within the traditional community structure.",
              ],
              [
                "Olori",
                "A traditional community title.",
              ],
            ].map(([term, meaning], index) => {
              const glossaryColors = [
                "bg-rose-50 text-rose-950 ring-rose-200",
                "bg-blue-50 text-blue-950 ring-blue-200",
                "bg-amber-50 text-amber-950 ring-amber-200",
                "bg-purple-50 text-purple-950 ring-purple-200",
                "bg-emerald-50 text-emerald-950 ring-emerald-200",
                "bg-sky-50 text-sky-950 ring-sky-200",
                "bg-orange-50 text-orange-950 ring-orange-200",
                "bg-indigo-50 text-indigo-950 ring-indigo-200",
                "bg-teal-50 text-teal-950 ring-teal-200",
              ];

              return (
                <div
                  key={term}
                  className={`rounded-2xl p-5 shadow-sm ring-1 ${
                    glossaryColors[index % glossaryColors.length]
                  }`}
                >
                  <h3 className="text-lg font-black">{term}</h3>

                  <p className="mt-2 text-sm leading-6 opacity-80">
                    {meaning}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            TIMELINE
        ========================================================== */}
        <section id="timeline" className="mt-20 scroll-mt-24">
          <SectionHeading
            number="10"
            eyebrow="Chronology"
            title="Historical Timeline"
            description="A chronological record that can grow as additional historical evidence and community records are documented."
          />

          <div className="relative ml-3 border-l-2 border-blue-200 pl-8">
            <div className="relative pb-10">
              <span className="absolute -left-[43px] top-1 h-5 w-5 rounded-full bg-blue-700 ring-4 ring-blue-100" />

              <div className="rounded-2xl bg-blue-50 p-5 text-blue-950 shadow-sm ring-1 ring-blue-200">
                <p className="text-sm font-black uppercase tracking-wider text-blue-700">
                  1858
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Emergence of Igbe
                </h3>

                <p className="mt-3 max-w-3xl leading-7 opacity-80">
                  Historical accounts commonly associate the emergence of Igbe
                  with the year 1858 and the activities of Ubiecha Etarakpo.
                </p>
              </div>
            </div>

            <div className="relative pb-10">
              <span className="absolute -left-[43px] top-1 h-5 w-5 rounded-full bg-amber-500 ring-4 ring-amber-100" />

              <div className="rounded-2xl bg-amber-50 p-5 text-amber-950 shadow-sm ring-1 ring-amber-200">
                <p className="text-sm font-black uppercase tracking-wider text-amber-700">
                  Early Development
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Growth of the Worship Community
                </h3>

                <p className="mt-3 max-w-3xl leading-7 opacity-80">
                  Worship, teaching, dance, spiritual practices, and community
                  organization became important parts of the developing Igbe
                  tradition.
                </p>
              </div>
            </div>

            {data?.timeline?.length ? (
              data.timeline.map((item, index) => (
                <div
                  key={item._id?.toString?.() || index}
                  className="relative pb-10"
                >
                  <span className="absolute -left-[43px] top-1 h-5 w-5 rounded-full bg-purple-600 ring-4 ring-purple-100" />

                  <div
                    className={`rounded-2xl p-5 shadow-sm ring-1 ${
                      [
                        "bg-purple-50 text-purple-950 ring-purple-200",
                        "bg-emerald-50 text-emerald-950 ring-emerald-200",
                        "bg-pink-50 text-pink-950 ring-pink-200",
                        "bg-cyan-50 text-cyan-950 ring-cyan-200",
                        "bg-orange-50 text-orange-950 ring-orange-200",
                      ][index % 5]
                    }`}
                  >
                    {Object.entries(item)
                      .filter(([key]) => key !== "_id")
                      .map(([key, value]) => (
                        <div key={key} className="mb-4 last:mb-0">
                          <p className="text-sm font-bold uppercase tracking-wide opacity-80">
                            {formatKey(key)}
                          </p>

                          <DisplayValue value={value} />
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </section>

        {/* =========================================================
            RESEARCH
        ========================================================== */}
        <section id="research" className="mt-20 scroll-mt-24">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-900 p-7 text-white shadow-xl md:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
              Research & Documentation
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Preserving Igbe for Future Generations
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-blue-100">
              The Waters of Heaven Temple website is being used as a digital
              documentation platform connected to the Igbe community. Its
              purpose is to help preserve historical information, organize
              records, keep track of heritage, and make information about Igbe
              available to people around the world.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-blue-100">
              The goal is not to replace community knowledge, oral history,
              traditional custodians, or historical research. Instead, the
              website provides a place where information can be organized and
              made easier to access while additional evidence and community
              contributions continue to be collected.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-rose-400/20 p-5 ring-1 ring-rose-200/30">
                <p className="font-extrabold">Preserve</p>
                <p className="mt-2 text-sm leading-6 text-blue-200">
                  Protect historical and cultural knowledge for future
                  generations.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-400/20 p-5 ring-1 ring-amber-200/30">
                <p className="font-extrabold">Document</p>
                <p className="mt-2 text-sm leading-6 text-blue-200">
                  Organize stories, records, photographs, events, and
                  community information.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-400/20 p-5 ring-1 ring-emerald-200/30">
                <p className="font-extrabold">Inform</p>
                <p className="mt-2 text-sm leading-6 text-blue-200">
                  Make reliable heritage information easier for people around
                  the world to discover.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="font-black text-slate-900">
                Igbe Heritage Documentation
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Preserving history, culture, community, and memory.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Waters of Heaven Temple
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}