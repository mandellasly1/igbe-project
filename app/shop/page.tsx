"use client";

import { useState } from "react";

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const products = [
    "Native Chalk",
    "Spiritual Perfume",
    "St. Michael Perfume",
    "Love Perfume",
    "Back to Sender Perfume",
    "White Basin - Large",
    "White Basin - Medium",
    "White Basin - Small",
    "Thunder Stone",
    "Alligator Pepper",
    "Native Pot",
    "Mortar and Pestle",
  ];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
            <main className="min-h-screen bg-white px-6 py-16">
            {/* Shop Introduction */}
    <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl border-l-8 border-igbe-pink bg-pink-50 px-6 py-12 text-center shadow-md md:px-12">
            
            <h1 className="text-4xl font-bold text-igbe-blue md:text-6xl">
            Mama White Spiritual
            </h1>

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-igbe-purple">
            Temple of the Queen Mother
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-red-600">
            Traditional, spiritual, and cultural products and services rooted
            in the heritage of the Queen Mother.
            </p>

        </div>
    </section>

      {/* Location */}
      <section className="mx-auto mt-12 max-w-4xl rounded-2xl border-l-8 border-igbe-purple bg-purple-50 p-8">
        <h2 className="text-2xl font-bold text-igbe-purple">
          Visit Mama White Spiritual
        </h2>

        <p className="mt-3 text-lg text-gray-700">
          Swali Market Road Junction, Yenagoa, Bayelsa State, Nigeria
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto mt-12 max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-igbe-purple md:text-4xl">
          Explore Our Spiritual Products
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Search for traditional, spiritual, ceremonial, and cultural
          products available from Mama White Spiritual.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center rounded-full border-2 border-igbe-purple bg-white px-5 py-3 shadow-md">
            <span className="mr-3 text-2xl">🔍</span>

            <input
              type="text"
              placeholder="Search for a product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-lg text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product}
              className="rounded-2xl border border-purple-200 bg-purple-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-igbe-purple">
                {product}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Traditional and spiritual product from Mama White Spiritual.
              </p>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            No products found. Try another search.
          </p>
        )}
      </section>
    </main>
  );
}