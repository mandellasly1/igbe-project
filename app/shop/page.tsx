"use client";

import { useState } from "react";

const productCategories = [
  {
    name: "Spiritual Perfumes",
    description:
      "Explore our collection of spiritual perfumes for traditional and ceremonial use.",
    icon: "🧴",
    products: [
      "Spiritual Perfume",
      "St. Michael Perfume",
      "Love Perfume",
      "Back to Sender Perfume",
    ],
  },
  {
    name: "Spiritual Powders",
    description:
      "Traditional powders and related products used in cultural and spiritual practices.",
    icon: "✨",
    products: ["Native Chalk"],
  },
  {
    name: "Spiritual Work Items",
    description:
      "Traditional items associated with spiritual practices and cultural heritage.",
    icon: "🪬",
    products: ["Thunder Stone", "Alligator Pepper"],
  },
  {
    name: "Traditional Utensils & Containers",
    description:
      "Traditional containers and utensils used in cultural and ceremonial settings.",
    icon: "🏺",
    products: [
      "White Basin - Large",
      "White Basin - Medium",
      "White Basin - Small",
      "Native Pot",
      "Mortar and Pestle",
    ],
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCategories = productCategories
    .map((category) => ({
      ...category,
      products: category.products.filter((product) =>
        product.toLowerCase().includes(normalizedSearch)
      ),
    }))
    .filter((category) => category.products.length > 0);

  const totalResults = filteredCategories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      {/* Shop Introduction */}
      <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl border-l-8 border-igbe-pink bg-pink-50 px-6 py-12 text-center shadow-md md:px-12">
          <h1 className="text-4xl font-bold text-igbe-blue md:text-6xl">
            White Queen Spirituals
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
          Visit White Queen Spirituals
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
          Browse our products by category or search for a specific traditional,
          spiritual, ceremonial, or cultural item.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center rounded-full border-2 border-igbe-purple bg-white px-5 py-3 shadow-md">
            <span className="mr-3 text-2xl" aria-hidden="true">
              🔍
            </span>

            <input
              type="search"
              aria-label="Search products"
              placeholder="Search across all product categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-lg text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Search Result Count */}
        {normalizedSearch && (
          <p className="mt-5 text-center text-sm text-gray-600">
            {totalResults} {totalResults === 1 ? "product" : "products"} found
            for &quot;{search.trim()}&quot;
          </p>
        )}

        {/* Product Categories */}
        <div className="mt-12 space-y-14">
          {filteredCategories.map((category) => (
            <section
              key={category.name}
              aria-label={category.name}
              className="rounded-3xl border border-purple-100 bg-purple-50/50 p-6 md:p-8"
            >
              {/* Category Heading */}
              <div className="mb-7 border-b border-purple-200 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {category.icon}
                  </span>

                  <h3 className="text-2xl font-bold text-igbe-purple md:text-3xl">
                    {category.name}
                  </h3>
                </div>

                <p className="mt-3 max-w-3xl text-gray-600">
                  {category.description}
                </p>
              </div>

              {/* Products in This Category */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {category.products.map((product) => (
                  <article
                    key={product}
                    className="rounded-2xl border border-red-500 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <h4 className="text-lg font-bold text-igbe-purple">
                      {product}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Traditional and cultural product available from White
                      Queen Spirituals.
                    </p>

                    <div className="mt-5 border-t border-purple-100 pt-4">
                      <span className="text-sm font-semibold text-igbe-red">
                        Contact us for availability
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="mt-12 rounded-2xl border border-purple-200 bg-purple-50 p-10 text-center">
            <p className="text-xl font-bold text-igbe-purple">
              No products found
            </p>

            <p className="mt-3 text-gray-600">
              Try another search term or clear the search box to see all
              products.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 rounded-full bg-igbe-purple px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Show All Products
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

