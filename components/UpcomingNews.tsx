"use client";

import Link from "next/link";

export default function UpcomingNews() {
  return (
    <section className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-igbe-purple">
            Upcoming Article / News
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Waters of Heaven Temple Feast
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get ready for the upcoming Waters of Heaven Temple Feast — a time
            of gathering, celebration, dancing, songs, tradition, reflection,
            and community.
          </p>
        </div>

        {/* Main News Card */}
        <article className="relative overflow-hidden rounded-3xl border-l-8 border-igbe-purple bg-white shadow-lg">

          {/* Top Decorative Bar */}
          <div className="h-3 bg-igbe-purple" />

          <div className="p-7 md:p-10">

            {/* News Label */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-igbe-purple px-4 py-2 text-sm font-bold text-white">
                Upcoming Event
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                Waters of Heaven Temple
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-5 text-2xl font-bold text-gray-900 md:text-4xl">
              Waters of Heaven Temple Feast
            </h3>

            {/* Article Content */}
            <div className="max-w-4xl space-y-5 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                The Waters of Heaven Temple Feast is an upcoming gathering
                that brings together members of the community, families,
                friends, and visitors in celebration of tradition, heritage,
                spirituality, and community.
              </p>

              <p>
                The feast will be a time for dancing, songs, reflection,
                sharing, celebration, and creating meaningful memories
                together.
              </p>

              <p>
                As the date approaches, more information about the programme,
                activities, location, and other important details will be
                shared here.
              </p>
            </div>

            {/* Coming Soon */}
            <div className="mt-8 rounded-2xl border border-igbe-gold bg-yellow-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-igbe-gold">
                Coming Soon
              </p>

              <p className="mt-2 text-lg font-bold text-gray-900">
                More details about the Waters of Heaven Temple Feast will be
                announced soon.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-flex items-center rounded-full bg-igbe-purple px-7 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:bg-purple-800"
              >
                View Temple Events
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}

