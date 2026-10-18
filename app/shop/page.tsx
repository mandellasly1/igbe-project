"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "2348169117532";

const SHOP_LOCATION =
  "Swali Market Road by Trinity Junction, Yenagoa, Bayelsa State, Nigeria";

type Product = {
  name: string;
  description: string;
  price: number | null;
  image: string;
};

type Category = {
  name: string;
  description: string;
  background: string;
  accent: string;
  products: Product[];
};

const categories: Category[] = [
  {
    name: "Oils & Perfumes",
    description:
      "Explore our collection of traditional perfumes, fragrances, and spiritual oils.",
    background: "bg-purple-100",
    accent: "bg-purple-600",
    products: [
      {
        name: "St. Michael Perfume",
        description: "Traditional spiritual perfume.",
        price: null,
        image: "/products/st-michael-perfume.jpg",
      },
      {
        name: "Love Perfume",
        description: "Traditional fragrance product.",
        price: null,
        image: "/products/love-perfume.jpg",
      },
      {
        name: "Back to Sender Perfume",
        description: "Traditional spiritual perfume.",
        price: null,
        image: "/products/back-to-sender-perfume.jpg",
      },
      {
        name: "Other Spiritual Perfumes",
        description: "Ask about our available perfume varieties.",
        price: null,
        image: "/products/other-spiritual-perfumes.jpg",
      },
      {
        name: "Spiritual Oils",
        description: "Enquire about our available traditional oils.",
        price: null,
        image: "/products/spiritual-oils.jpg",
      },
    ],
  },
  {
    name: "Spiritual Powders",
    description:
      "Discover traditional chalks and powders in different varieties and sizes.",
    background: "bg-yellow-100",
    accent: "bg-yellow-500",
    products: [
      {
        name: "Native Chalk — Small",
        description: "Small native chalk.",
        price: null,
        image: "/products/native-chalk-small.jpg",
      },
      {
        name: "Native Chalk — Large",
        description: "Large native chalk.",
        price: null,
        image: "/products/native-chalk-large.jpg",
      },
      {
        name: "Love Spiritual Powders",
        description: "Ask about availability and prices.",
        price: null,
        image: "/products/love-spiritual-powders.jpg",
      },
      {
        name: "Other Spiritual Powders",
        description: "Enquire about other available varieties.",
        price: null,
        image: "/products/other-spiritual-powders.jpg",
      },
    ],
  },
  {
    name: "Incense & Soaps",
    description:
      "Browse traditional incense and soaps for cultural and ceremonial use.",
    background: "bg-pink-100",
    accent: "bg-pink-500",
    products: [
      {
        name: "Joy Soap",
        description: "Traditional soap product.",
        price: null,
        image: "/products/joy-soap.jpg",
      },
      {
        name: "Morning Dew Soap",
        description: "Traditional soap product.",
        price: null,
        image: "/products/morning-dew-soap.jpg",
      },
      {
        name: "Traditional & Spiritual Incense",
        description: "Enquire about available incense products.",
        price: null,
        image: "/products/spiritual-incense.jpg",
      },
      {
        name: "Other Soaps",
        description: "Ask about other available soaps.",
        price: null,
        image: "/products/other-soaps.jpg",
      },
    ],
  },
  {
    name: "Spiritual Work Items",
    description:
      "Explore traditional materials and cultural items available from our shop.",
    background: "bg-blue-100",
    accent: "bg-blue-600",
    products: [
      {
        name: "Kola Nuts",
        description: "Traditional kola nuts.",
        price: null,
        image: "/products/kola-nuts.jpg",
      },
      {
        name: "Camwood",
        description: "Traditional camwood.",
        price: null,
        image: "/products/camwood.jpg",
      },
      {
        name: "Herbs",
        description: "Enquire about available traditional herbs.",
        price: null,
        image: "/products/herbs.jpg",
      },
      {
        name: "Thunder Stone",
        description: "Ask about availability and product details.",
        price: null,
        image: "/products/thunder-stone.jpg",
      },
      {
        name: "Alligator Pepper",
        description: "Traditional alligator pepper.",
        price: null,
        image: "/products/alligator-pepper.jpg",
      },
      {
        name: "Sea Shells",
        description: "Traditional shells and cultural materials.",
        price: null,
        image: "/products/sea-shells.jpg",
      },
      {
        name: "Cowries",
        description: "Traditional cowrie shells.",
        price: null,
        image: "/products/cowries.jpg",
      },
      {
        name: "Other Spiritual Work Items",
        description: "Enquire about other available items.",
        price: null,
        image: "/products/other-spiritual-work-items.jpg",
      },
    ],
  },
  {
    name: "Traditional Utensils & Containers",
    description:
      "Browse traditional utensils and containers with separate listings for each size.",
    background: "bg-green-100",
    accent: "bg-green-600",
    products: [
      {
        name: "White Basin — Small",
        description: "Small white basin.",
        price: null,
        image: "/products/white-basin-small.jpg",
      },
      {
        name: "White Basin — Medium",
        description: "Medium white basin.",
        price: null,
        image: "/products/white-basin-medium.jpg",
      },
      {
        name: "White Basin — Large",
        description: "Large white basin.",
        price: null,
        image: "/products/white-basin-large.jpg",
      },
      {
        name: "Native Pot — Small",
        description: "Small traditional pot.",
        price: null,
        image: "/products/native-pot-small.jpg",
      },
      {
        name: "Native Pot — Medium",
        description: "Medium traditional pot.",
        price: null,
        image: "/products/native-pot-medium.jpg",
      },
      {
        name: "Native Pot — Large",
        description: "Large traditional pot.",
        price: null,
        image: "/products/native-pot-large.jpg",
      },
      {
        name: "Mortar and Pestle — Small",
        description: "Small mortar and pestle.",
        price: null,
        image: "/products/mortar-and-pestle-small.jpg",
      },
      {
        name: "Mortar and Pestle — Medium",
        description: "Medium mortar and pestle.",
        price: null,
        image: "/products/mortar-and-pestle-medium.jpg",
      },
      {
        name: "Mortar and Pestle — Large",
        description: "Large mortar and pestle.",
        price: null,
        image: "/products/mortar-and-pestle-large.jpg",
      },
    ],
  },
];

const categoryNames = [
  "All Products",
  ...categories.map((category) => category.name),
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(price);
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.27-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.92a11.85 11.85 0 0 0-3.48-8.44ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);

  const message = encodeURIComponent(
    `Hello White Queen Spirituals! I would like to enquire about ${product.name}. Please let me know the price and availability.`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-gray-50">
        {!imageFailed ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-gray-500">
            Product photo coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-purple-950">
          {product.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <p className="font-bold text-purple-800">
            {product.price === null
              ? "Contact for price"
              : formatPrice(product.price)}
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <WhatsAppIcon />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const filteredCategories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return categories
      .filter(
        (category) =>
          selectedCategory === "All Products" ||
          category.name === selectedCategory,
      )
      .map((category) => ({
        ...category,
        products: category.products.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.products.length > 0);
  }, [searchTerm, selectedCategory]);

  const totalProducts = filteredCategories.reduce(
    (total, category) => total + category.products.length,
    0,
  );

  const contactMessage = encodeURIComponent(
    "Hello White Queen Spirituals! I would like to enquire about your products.",
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`;

  return (
    <div className="w-full flex-grow bg-white text-gray-800">
      {/* Shop announcement */}
      <div className="bg-purple-950 px-4 py-3 text-center text-sm text-white">
        <span className="font-medium">
          Welcome to White Queen Spirituals
        </span>
        <span className="mx-2 text-yellow-400">✦</span>
        <span className="text-purple-100">
          Temple of the Queen Mother
        </span>
      </div>

      {/* Shop identity */}
      <section className="border-b border-purple-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-extrabold tracking-tight text-purple-950 sm:text-3xl">
              White Queen{" "}
              <span className="text-yellow-600">Spirituals</span>
            </h1>

            <p className="mt-1 text-sm text-blue-700">
              Temple of the Queen Mother
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <WhatsAppIcon />
            Contact Our Shop
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="overflow-hidden bg-purple-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-700">
              Welcome to Our Store
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-purple-950 sm:text-5xl lg:text-6xl">
              Tradition Meets
              <span className="block text-purple-700">
                Modern Shopping
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-600">
              Discover traditional, cultural, ceremonial, and spiritual
              items from White Queen Spirituals. Browse our catalogue
              and contact us to confirm prices and availability.
            </p>

            <a
              href="#catalogue"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-purple-800 px-7 py-3 font-bold text-white shadow-md transition hover:bg-purple-950"
            >
              Explore the Catalogue
            </a>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-xl sm:p-12">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 text-5xl">
              👑
            </div>

            <h3 className="mt-6 text-center text-2xl font-extrabold text-purple-950">
              The Queen Mother
            </h3>

            <p className="mt-3 text-center leading-7 text-gray-600">
              A welcoming destination for traditional products and
              cultural heritage.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-purple-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-purple-800">
                  {categories.length}
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Product Categories
                </p>
              </div>

             
            <div className="rounded-xl bg-yellow-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-yellow-700">
                {categories.reduce(
                  (total, category) => total + category.products.length,
                  0,
                ) >= 30
                  ? "30+"
                  : categories.reduce(
                      (total, category) => total + category.products.length,
                      0,
                    )}
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Product Listings
              </p>
            </div>
           </div>
          </div>
        </div>
      </section>

      {/* Shop information */}
      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-2">
        {/* Visit Our Shop — light purple background */}
        <div className="flex items-start gap-4 rounded-2xl border border-purple-200 bg-purple-100 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl">
            📍
          </div>

          <div>
            <h3 className="font-bold text-purple-950">
              Visit Our Shop
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {SHOP_LOCATION}
            </p>
          </div>
        </div>

        {/* Contact & Enquiries — light green background */}
        <div className="flex items-start gap-4 rounded-2xl border border-green-200 bg-green-100 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-700">
            <WhatsAppIcon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="font-bold text-purple-950">
              Contact & Enquiries
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              WhatsApp: 08169117532
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us →
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section
        id="catalogue"
        className="mx-auto max-w-7xl scroll-mt-6 px-5 py-12 sm:py-16"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
            Discover Our Collection
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-purple-950 sm:text-4xl">
            Shop Our Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Find the items you need, explore our categories, and contact
            us directly for pricing and availability.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-2xl">
          <label
            htmlFor="product-search"
            className="mb-2 block text-sm font-semibold text-purple-950"
          >
            Search the catalogue
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-purple-200 bg-white px-4 py-2 shadow-sm focus-within:border-purple-700 focus-within:ring-2 focus-within:ring-purple-100">
            <span aria-hidden="true" className="text-xl">
              🔍
            </span>

            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search perfumes, chalk, soaps, pots..."
              className="min-h-11 w-full bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {categoryNames.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "border-purple-800 bg-purple-800 text-white shadow-md"
                  : "border-purple-200 bg-white text-purple-900 hover:border-purple-700 hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product count */}
        <div className="mb-8 mt-8 flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-purple-900">
              {totalProducts}
            </span>{" "}
            {totalProducts === 1 ? "product" : "products"}
          </p>

          {(searchTerm || selectedCategory !== "All Products") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Products");
              }}
              className="text-sm font-semibold text-purple-800 hover:text-yellow-700"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Coloured product categories */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <section
                key={category.name}
                className={`rounded-2xl p-5 sm:p-7 ${category.background}`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`h-10 w-2 shrink-0 rounded-full ${category.accent}`}
                  />

                  <div>
                    <h3 className="text-2xl font-extrabold text-purple-950">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      {category.description}
                    </p>
                  </div>
                </div>

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
          <div className="rounded-2xl border border-purple-100 bg-purple-50 px-5 py-16 text-center">
            <h3 className="text-xl font-bold text-purple-950">
              No products found
            </h3>

            <p className="mt-3 text-gray-600">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Products");
              }}
              className="mt-5 rounded-xl bg-purple-800 px-6 py-3 font-semibold text-white hover:bg-purple-950"
            >
              Show All Products
            </button>
          </div>
        )}
      </section>

      {/* Green contact banner */}
      <section className="bg-purple-900 px-5 py-14 text-center text-white sm:py-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-700">
          <WhatsAppIcon className="h-9 w-9" />
        </div>

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-green-100">
          We Are Here to Help
        </p>

        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Looking for Something Special?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50">
          Contact White Queen Spirituals to enquire about products,
          prices, sizes, and availability.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-green-800 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
        >
          <WhatsAppIcon />
          <span>Enquire on WhatsApp</span>
        </a>
      </section>
    </div>
  );
}

