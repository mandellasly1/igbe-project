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

  {
    name: "Oils & Perfumes",

    description:
      "Explore our traditional and spiritual oils and perfumes. Contact us for prices and availability.",

    products: [
      {
        name: "St. Michael Perfume",
        description:
          "A spiritual perfume available for customer enquiries.",

        price: null,
        image: "/products/st-michael-perfume.jpg",
      },

      {
        name: "Love Perfume",
        description:
          "A spiritual perfume. Contact us for product details and availability.",

        price: null,
        image: "/products/love-perfume.jpg",
      },

      {
        name: "Back to Sender Perfume",
        description:
          "A spiritual perfume available for customer enquiries.",

        price: null,
        image: "/products/back-to-sender-perfume.jpg",
      },

      {
        name: "Other Spiritual Perfumes",
        description:
          "Ask us about other spiritual perfumes available in our shop.",

        price: null,
        image: "/products/other-spiritual-perfumes.jpg",
      },

      {
        name: "Spiritual Oils",
        description:
          "Contact us to enquire about our available spiritual oils.",

        price: null,
        image: "/products/spiritual-oils.jpg",
      },
    ],
  },

  /* -------------------------------------------------------
     2. SPIRITUAL POWDERS
  ------------------------------------------------------- */

  {
    name: "Spiritual Powders",

    description:
      "Browse Native Chalk and other traditional powders. Different sizes are listed separately.",

    products: [
      {
        name: "Native Chalk — Large",
        description:
          "Large Native Chalk. Contact us to confirm price and availability.",

        price: null,
        image: "/products/native-chalk-large.jpg",
      },

      {
        name: "Native Chalk — Small",
        description:
          "Small Native Chalk. Contact us to confirm price and availability.",

        price: null,
        image: "/products/native-chalk-small.jpg",
      },

      {
        name: "Love Spiritual Powders",
        description:
          "Contact us for details about available spiritual powders.",

        price: null,
        image: "/products/love-spiritual-powders.jpg",
      },

      {
        name: "Other Spiritual Powders",
        description:
          "Ask us about other available traditional and spiritual powders.",

        price: null,
        image: "/products/other-spiritual-powders.jpg",
      },
    ],
  },

  /* -------------------------------------------------------
     3. INCENSE AND SOAPS
  ------------------------------------------------------- */

  {
    name: "Incense & Soaps",

    description:
      "Explore available soaps, incense and related traditional products.",

    products: [
      {
        name: "Joy Soap",
        description:
          "Contact us for product details, price and availability.",

        price: null,
        image: "/products/joy-soap.jpg",
      },

      {
        name: "Morning Dew Soap",
        description:
          "Contact us for product details, price and availability.",

        price: null,
        image: "/products/morning-dew-soap.jpg",
      },

      {
        name: "Traditional & Spiritual Incense",
        description:
          "Ask us about the available incense products in our shop.",

        price: null,
        image: "/products/spiritual-incense.jpg",
      },

      {
        name: "Other Soaps",
        description:
          "Contact us to enquire about other available soaps.",

        price: null,
        image: "/products/other-soaps.jpg",
      },
    ],
  },

  /* -------------------------------------------------------
     4. SPIRITUAL WORK ITEMS
  ------------------------------------------------------- */

  {
    name: "Spiritual Work Items",

    description:
      "A selection of traditional items. Contact us for product information and availability.",

    products: [
      {
        name: "Kola Nuts",
        description:
          "Contact us to enquire about Kola Nuts, prices and availability.",

        price: null,
        image: "/products/kola-nuts.jpg",
      },

      {
        name: "Camwood",
        description:
          "Contact us for information about available Camwood products.",

        price: null,
        image: "/products/camwood.jpg",
      },

      {
        name: "Herbs",
        description:
          "Ask us about available traditional herbs and product details.",

        price: null,
        image: "/products/herbs.jpg",
      },

      {
        name: "Thunder Stone",
        description:
          "Contact us for product details and availability.",

        price: null,
        image: "/products/thunder-stone.jpg",
      },

      {
        name: "Alligator Pepper",
        description:
          "Contact us to enquire about Alligator Pepper.",

        price: null,
        image: "/products/alligator-pepper.jpg",
      },

      {
        name: "Other Spiritual Work Items",
        description:
          "Ask us about other traditional and spiritual items available.",

        price: null,
        image: "/products/other-spiritual-work-items.jpg",
      },
    ],
  },

  /* -------------------------------------------------------
     5. TRADITIONAL UTENSILS AND CONTAINERS
  ------------------------------------------------------- */

  {
    name: "Traditional Utensils & Containers",

    description:
      "Traditional utensils and containers available in different sizes. Contact us for prices.",

    products: [
      {
        name: "White Basin — Small",
        description:
          "Small White Basin. Contact us for price and availability.",

        price: null,
        image: "/products/white-basin-small.jpg",
      },

      {
        name: "White Basin — Medium",
        description:
          "Medium White Basin. Contact us for price and availability.",

        price: null,
        image: "/products/white-basin-medium.jpg",
      },

      {
        name: "White Basin — Large",
        description:
          "Large White Basin. Contact us for price and availability.",

        price: null,
        image: "/products/white-basin-large.jpg",
      },

      {
        name: "Native Pot — Small",
        description:
          "Small Native Pot. Contact us for price and availability.",

        price: null,
        image: "/products/native-pot-small.jpg",
      },

      {
        name: "Native Pot — Medium",
        description:
          "Medium Native Pot. Contact us for price and availability.",

        price: null,
        image: "/products/native-pot-medium.jpg",
      },

      {
        name: "Native Pot — Large",
        description:
          "Large Native Pot. Contact us for price and availability.",

        price: null,
        image: "/products/native-pot-large.jpg",
      },

      {
        name: "Mortar and Pestle — Small",
        description:
          "Small Mortar and Pestle. Contact us for price and availability.",

        price: null,
        image: "/products/mortar-and-pestle-small.jpg",
      },

      {
        name: "Mortar and Pestle — Medium",
        description:
          "Medium Mortar and Pestle. Contact us for price and availability.",

        price: null,
        image: "/products/mortar-and-pestle-medium.jpg",
      },

      {
        name: "Mortar and Pestle — Large",
        description:
          "Large Mortar and Pestle. Contact us for price and availability.",

        price: null,
        image: "/products/mortar-and-pestle-large.jpg",
      },
    ],
  },
];

/* =========================================================
   PRICE FORMATTER
========================================================= */

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(price);
}

/* =========================================================
   PRODUCT IMAGE
========================================================= */

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
========================================================= */

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
========================================================= */

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return productCategories;
    }

    return productCategories
      .map((category) => {
        const categoryMatches = category.name
          .toLowerCase()
          .includes(search);

        const descriptionMatches = category.description
          .toLowerCase()
          .includes(search);

        const filteredProducts = category.products.filter((product) => {
          return (
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
          );
        });

        if (categoryMatches || descriptionMatches) {
          return category;
        }

        return {
          ...category,
          products: filteredProducts,
        };
      })
      .filter((category) => category.products.length > 0);
  }, [searchTerm]);

  const totalProducts = productCategories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  const whatsappIntroduction =
    "Hello White Queen Spirituals — Temple of the Queen Mother. " +
    "I would like to enquire about your products and services. " +
    "Please assist me with information about prices and availability. Thank you.";

  return (
    <main className="min-h-screen bg-amber-50/40">
      {/* =====================================================
          HERO / BUSINESS INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-800 text-white">
        {/* Decorative background elements */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-28">
          {/* Brand name must appear first */}

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300 md:text-base">
            White Queen Spirituals
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            White Queen Spirituals
          </h1>

          {/* Tagline immediately below brand */}

          <p className="mt-4 text-xl font-semibold text-amber-100 md:text-3xl">
            Temple of the Queen Mother
          </p>

          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-yellow-400" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            Welcome to White Queen Spirituals — Temple of the Queen
            Mother. Explore our selection of traditional, cultural,
            ceremonial and spiritual products. Contact us directly
            for product information, prices and availability.
          </p>

          {/* Business address */}

          <div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">
              Visit Our Location
            </p>

            <p className="mt-2 leading-7 text-white">
              Swali Market Road Junction, Yenagoa,
              Bayelsa State, Nigeria
            </p>

            <p className="mt-2 text-sm text-white/80">
              WhatsApp: 08169117532
            </p>
          </div>

          {/* Main WhatsApp contact button */}

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              message={whatsappIntroduction}
              className="min-w-64 rounded-full px-7 py-4 text-base shadow-lg"
            >
              Chat with Us on WhatsApp
            </WhatsAppButton>

            <a
              href="#products"
              className="inline-flex min-w-48 items-center justify-center rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CATALOGUE INTRODUCTION
      ====================================================== */}

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

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Browse our product categories and contact us on WhatsApp
            to ask questions, confirm availability and enquire about
            prices.
          </p>

          <div className="mt-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
            {totalProducts} listed products
          </div>
        </div>

        {/* =====================================================
            PRODUCT SEARCH
        ====================================================== */}

        <div className="mx-auto mb-12 max-w-2xl">
          <label
            htmlFor="product-search"
            className="mb-3 block text-sm font-bold text-amber-950"
          >
            Search our catalogue
          </label>

          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl"
            >
              🔎
            </span>

            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search for Kola Nuts, Native Chalk, Perfume..."
              className="w-full rounded-2xl border border-amber-200 bg-white py-4 pl-12 pr-5 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
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

        {/* =====================================================
            PRODUCT CATEGORY SECTIONS
        ====================================================== */}

        {filteredCategories.length > 0 ? (
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <section
                key={category.name}
                aria-label={category.name}
              >
                {/* Category heading */}

                <div className="mb-7 border-l-4 border-amber-600 pl-5">
                  <h2 className="text-2xl font-black text-amber-950 md:text-3xl">
                    {category.name}
                  </h2>

                  <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                    {category.description}
                  </p>
                </div>

                {/* Products */}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.name}
                      product={product}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-amber-100 bg-white px-6 py-14 text-center shadow-sm">
            <span className="text-5xl" aria-hidden="true">
              🔎
            </span>

            <h3 className="mt-4 text-xl font-bold text-amber-950">
              No products found
            </h3>

            <p className="mt-2 text-gray-600">
              Try another product name or search term.
            </p>

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-5 rounded-xl bg-amber-800 px-5 py-3 font-bold text-white transition hover:bg-amber-900"
            >
              Show All Products
            </button>
          </div>
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