import EventBlocks from "@/components/EventBlocks";

export default function Home() {
  return (
    <main className="min-h-screen bg-igbe-white p-10">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 text-center rounded-lg shadow-md mb-10"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Dancing & Connecting With Our Ancestors
          </h1>

          <p className="text-xl max-w-2xl mx-auto">
            Preserving Tradition 🐚 Finding Our Origin 🐚 Connecting Communities
          </p>

          <div className="mt-8">
            <a
              href="/communities"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
            >
              Explore Igbe Heritage
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-igbe-red">Welcome</span>{" "}
        <span className="text-igbe-yellow">to</span>{" "}
        <span className="text-igbe-blue">Waters</span>{" "}
        <span className="text-igbe-yellow">of</span>{" "}
        <span className="text-igbe-red">Heaven</span>{" "}
        <span className="text-igbe-blue">Temple</span>
      </h1>

      {/* About / Our Origin Section */}
      <section className="py-16 text-center">

        <h2 className="text-4xl font-bold text-igbe-purple mb-6">
          Our Origin
        </h2>

        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Waters of Heaven Temple was founded to honor the sacred traditions
          of Igbe worship. Here, faith, culture, and community come together
          to celebrate life, spirit, and heritage.
        </p>

        {/* Founder Information */}
        <div className="max-w-6xl mx-auto mt-10">

          {/* Founder + Titles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

            {/* Founder Information Card */}
            <div className="bg-red-50 rounded-2xl shadow-lg p-8 border-t-8 border-igbe-red">

              <h3 className="text-2xl font-bold text-red-800 mb-5">
                Founder of Waters of Heaven Temple
              </h3>

              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Kate Onobriakpeyan
              </h4>

              <p className="text-gray-800 font-semibold mb-3">
                Also known as:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Omocherighorami</li>
                <li>Queen Shine Shine</li>
                <li>White Queen</li>
                <li>Roman Money</li>
                <li>Mama White</li>
                <li>Celebrity Omote-Uku</li>
              </ul>

            </div>


            {/* Titles and Origin Card */}
            <div className="bg-yellow-50 rounded-2xl shadow-lg p-8 border-t-8 border-igbe-yellow">

              <h3 className="text-2xl font-bold text-yellow-800 mb-5">
                Titles & Origin
              </h3>

              <div className="space-y-5 text-gray-800">

                {/* Title / Rank */}
                <div>
                  <p className="font-bold text-lg">
                    Title / Rank
                  </p>

                  <p>
                    Omote-Uku / Ayeoba
                  </p>
                </div>

                {/* Traditional Title */}
                <div>
                  <p className="font-bold text-lg">
                    Traditional Title
                  </p>

                  <p>
                    Ovbiedjo / Ebo
                  </p>
                </div>

                {/* Founded */}
                <div>
                  <p className="font-bold text-lg">
                    Founded
                  </p>

                  <p>
                    2018
                  </p>
                </div>

                {/* Origin */}
                <div>
                  <p className="font-bold text-lg">
                    Origin
                  </p>

                  <p>
                    Okirigvue, Sapele, Delta State, Nigeria
                  </p>
                </div>

                {/* Based In */}
                <div>
                  <p className="font-bold text-lg">
                    Based In
                  </p>

                  <p>
                    Yenagoa, Bayelsa State, Nigeria
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ===================================== */}
          {/* PERSONALITY & CHARACTER */}
          {/* ===================================== */}

          <div className="mt-12">

            <h2 className="text-4xl font-bold text-igbe-purple mb-8 text-center">
              Her Personality & Character
            </h2>


            {/* Four Personality Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">


              {/* Personality Card 1 */}
              <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border-t-8 border-igbe-blue">

                <h3 className="text-2xl font-bold text-blue-800 mb-5">
                  Kindness, Discipline & Courage
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  Kate Onobriakpeyan is a kind and welcoming person, especially
                  toward those who approach her with good intentions. She is
                  disciplined, hardworking, courageous, and deeply devoted to
                  her spiritual path and responsibilities.
                </p>

              </div>


              {/* Personality Card 2 */}
              <div className="bg-purple-50 rounded-2xl shadow-lg p-8 border-t-8 border-igbe-purple">

                <h3 className="text-2xl font-bold text-purple-800 mb-5">
                  Truth & Tradition
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  She strongly values truth and detests dishonesty and lies.
                  She is protective of tradition and committed to preserving
                  the values and practices that are important to her community.
                </p>

              </div>


              {/* Personality Card 3 */}
              <div className="bg-green-50 rounded-2xl shadow-lg p-8 border-t-8 border-green-600">

                <h3 className="text-2xl font-bold text-green-800 mb-5">
                  Charity & Leadership
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  As a charitable person and strong leader, she cares about
                  the well-being of others and is willing to support people
                  within her community.
                </p>

              </div>


              {/* Personality Card 4 */}
              <div className="bg-orange-50 rounded-2xl shadow-lg p-8 border-t-8 border-orange-500">

                <h3 className="text-2xl font-bold text-orange-800 mb-5">
                  Strength, Firmness & Commitment
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  Although welcoming and caring, she is also firm when
                  wrongdoing is practiced around her. Her courage, discipline,
                  strong sense of truth, and commitment to tradition are
                  important parts of the way she leads and serves.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Gallery Preview */}
      <section className="bg-pink-100 py-16 px-6 rounded-lg shadow-md mb-10">

        <h2 className="text-3xl font-bold text-center text-igbe-purple mb-8">
          Glimpses of Worship & Ceremonies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="text-igbe-blue shadow-md rounded-lg p-4">
            📸 Ceremony Image
          </div>

          <div className="text-igbe-blue shadow-md rounded-lg p-4">
            📸 Community Gathering
          </div>

          <div className="text-igbe-blue shadow-md rounded-lg p-4">
            📸 Heritage Symbol
          </div>

        </div>

        <div className="text-center mt-8">

          <a
            href="/gallery"
            className="text-igbe-purple font-semibold hover:underline"
          >
            View Full Gallery →
          </a>

        </div>

      </section>


      {/* Call to Action */}
      <button className="mt-6 rounded-lg bg-igbe-blue px-6 py-3 font-semibold text-igbe-white shadow-md hover:bg-igbe-gold">
        Join Us Today
      </button>


      {/* Temple Events */}
      <h2 className="mt-10 w-full bg-igbe-purple text-center text-igbe-white py-3 text-4xl font-extrabold tracking-wide shadow-md">
        Temple Events
      </h2>

      {/* Dynamic Event Blocks */}
      <EventBlocks />


      {/* News & Articles */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold text-igbe-purple mb-6">
          Latest Articles & News
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          Stay updated with teachings, community stories, and cultural insights.
        </p>

        <a
          href="/articles"
          className="bg-igbe-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-igbe-gold"
        >
          Read More
        </a>

      </section>

    </main>
  );
}

