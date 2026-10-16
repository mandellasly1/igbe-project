"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "2348169117532";

const SHOP_LOCATION =
  "Swali Market Road Junction, Yenagoa, Bayelsa State, Nigeria";

type Product = {
  name: string;
  description: string;
  price: number | null;
  image: string;
};

type Category = {
  name: string;
  description: string;
  products: Product[];
};

const categories: Category[] = [
  {
    name: "Oils & Perfumes",
    description:
      "Explore our collection of traditional perfumes, fragrances, and spiritual oils.",
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

function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);

  const message = encodeURIComponent(
    `Hello White Queen Spirituals! I would like to enquire about ${product.name}. Please let me know the price and availability.`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-purple-50">
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
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-purple-700">
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

        <div className="mt-5 border-t border-purple-100 pt-4">
          <p className="font-bold text-purple-800">
            {product.price === null
              ? "Contact for price"
              : formatPrice(product.price)}
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-11 w-full items-center justify-center rounded-xl bg-purple-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-950"
          >
            Enquire on WhatsApp
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

            <p className="mt-1 text-sm text-gray-500">
              Temple of the Queen Mother
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple-800 px-6 py-3 text-sm font-semibold text-purple-900 transition hover:bg-purple-800 hover:text-white"
          >
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
                  5
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Product Categories
                </p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-yellow-700">
                  30+
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
        <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
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

        <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
            💬
          </div>

          <div>
            <h3 className="font-bold text-purple-950">
              Contact & Enquiries
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              WhatsApp: 08169117532
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-bold text-purple-800 hover:text-yellow-700"
            >
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

        {filteredCategories.length > 0 ? (
          <div className="space-y-14">
            {filteredCategories.map((category) => (
              <section key={category.name}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-8 w-1.5 rounded-full bg-yellow-500" />

                  <div>
                    <h3 className="text-2xl font-extrabold text-purple-950">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
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

      {/* Contact banner — the shared Footer remains in app/layout.tsx */}
      <section className="bg-purple-950 px-5 py-14 text-center text-white sm:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
          We Are Here to Help
        </p>

        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Looking for Something Special?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
          Contact White Queen Spirituals to enquire about products,
          prices, sizes, and availability.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-400 px-8 py-3 font-bold text-purple-950 transition hover:bg-yellow-300"
        >
          Enquire on WhatsApp
        </a>
      </section>
    </div>
  );
}