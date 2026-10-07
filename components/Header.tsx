import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-igbe-purple text-igbe-white shadow-md">
      {/* Top Row */}
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Image
            src="/Orhe.PNG"   // place Orhe.PNG in /public folder
            alt="Orhe Symbol"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-yellow-500"
            loading="eager"
           />

           {/* Site name in gold */}
          <h1 className="text-2xl font-bold text-yellow-500">
            Waters of Heaven Temple
          </h1>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-igbe-gold">Home</a>
          <a href="/events" className="hover:text-igbe-gold">Events</a>
          <a href="/about" className="hover:text-igbe-gold">About</a>
          <a href="/contact" className="hover:text-igbe-gold">Contact</a>
        </nav>
      </div>

      {/* Secondary Row (attached directly under header) */}
      <div className="bg-igbe-white py-3">
        <div className="container mx-auto flex justify-center space-x-9">
          <a href="/" className="text-blue-600 font-bold text-xl hover:text-igbe-gold">
            Home (Waters of Heaven Temple)
          </a>
          <a href="/communities" className="text-red-600 font-bold text-xl hover:text-igbe-gold">
            Communities (Igbe Heritage)
          </a>
          <a href="/gallery" className="text-yellow-500 font-bold text-xl hover:text-igbe-gold">
            Gallery
          </a>
          <a href="/events" className="text-pink-600 font-bold text-xl hover:text-igbe-gold">
            Events & Ceremonies
          </a>
          <a href="/articles" className="text-purple-700 font-bold text-xl hover:text-igbe-gold">
            Articles / News
          </a>
        </div>
      </div>
    </header>
  );
}
