"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

/* =========================================================
   WHATSAPP CONFIGURATION
========================================================= */

const WHATSAPP_NUMBER = "2348169117532";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================================================
   TYPES
========================================================= */

type Product = {
  name: string;
  description: string;
  price: number | null;
  image?: string;
};

type ProductCategory = {
  name: string;
  description: string;
  products: Product[];
};

/* =========================================================
   WHATSAPP BUTTON
========================================================= */

function WhatsAppButton({
  message,
  children,
  className = "",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-center font-bold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    >
      <span aria-hidden="true" className="text-xl">
        ☎
      </span>

      {children}
    </a>
  );
}

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories: ProductCategory[] = [
  /* -------------------------------------------------------
     1. OILS AND PERFUMES
  ------------------------------------------------------- */


function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(price);
}

/* =========================================================
   PRODUCT IMAGE

function ProductImage({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-amber-50">
      {product.image && !imageFailed ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center px-5 text-center">
          <span className="text-5xl" aria-hidden="true">
            📦
          </span>

          <p className="mt-3 font-semibold text-amber-900">
            Product photo coming soon
          </p>

          <p className="mt-1 text-xs text-amber-800/70">
            {product.name}
          </p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PRODUCT CARD

function ProductCard({ product }: { product: Product }) {
  const message =
    `Hello White Queen Spirituals — Temple of the Queen Mother. ` +
    `I am interested in purchasing ${product.name}. ` +
    `Please let me know the price and availability. Thank you.`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product photograph */}

      <ProductImage product={product} />

      {/* Product information */}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-amber-950">
          {product.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        <div className="mt-5 border-t border-amber-100 pt-4">
          {product.price !== null ? (
            <p className="text-lg font-extrabold text-amber-800">
              {formatPrice(product.price)}
            </p>
          ) : (
            <p className="text-sm font-semibold text-amber-800">
              Contact us for price and availability.
            </p>
          )}

          {/* WhatsApp order button */}

          <WhatsAppButton
            message={message}
            className="mt-4 w-full"
          >
            Order on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   SHOP PAGE

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");

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

  const whatsappIntroduction =
    "Hello White Queen Spirituals — Temple of the Queen Mother. " +
    "I would like to enquire about your products and services. " +
    "Please assist me with information about prices and availability. Thank you.";

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

      <section
        id="products"
        className="mx-auto max-w-7xl scroll-mt-6 px-6 py-14 md:px-10 md:py-20"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
            Our Collection
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-amber-950 md:text-5xl">
            Explore Our Products
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

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-3 text-sm font-bold text-amber-800 underline underline-offset-4 hover:text-amber-950"
            >
              Clear search
            </button>
          )}
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

      {/* =====================================================
          WHATSAPP CONTACT SECTION
      ====================================================== */}

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-green-50 shadow-sm ring-1 ring-green-200">
          <div className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                We Are Here to Help
              </p>

              <h2 className="mt-3 text-2xl font-black text-green-950 md:text-3xl">
                Need Help Choosing a Product?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-green-900/80">
                Contact White Queen Spirituals directly on WhatsApp
                to ask about our products, sizes, prices and
                availability.
              </p>

              <p className="mt-3 font-semibold text-green-900">
                WhatsApp: 08169117532
              </p>
            </div>

            <WhatsAppButton
              message={whatsappIntroduction}
              className="w-full md:w-auto"
            >
              Message Us Now
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-amber-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center md:px-10">
          <h2 className="text-xl font-black text-amber-950">
            White Queen Spirituals
          </h2>

          <p className="mt-2 font-semibold text-amber-800">
            Temple of the Queen Mother
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Swali Market Road Junction, Yenagoa,
            Bayelsa State, Nigeria
          </p>

          <p className="mt-2 text-sm text-gray-600">
            WhatsApp: 08169117532
          </p>

          <div className="mt-6">
            <WhatsAppButton message={whatsappIntroduction}>
              Contact Us on WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} White Queen Spirituals.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}