import { useState } from 'react';
import { Route, Routes } from 'react-router';

import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import PhonePriceEstimator from './components/PhonePriceEstimator';
import ProductFilter from './components/ProductFilter';
import ProductGrid from './components/ProductGrid';
import ProductPage from './components/ProductPage';

/* ============================================================
   PRODUCTS
============================================================ */

const products = [
  {
    id: 1,
    badge: 'Yangi',
    brand: 'Apple',
    name: 'iPhone 17 Pro Max',
    color: 'Titanium',
    storage: '256GB',
    condition: 'Yaxshi',
    replaced: "Yo'q",
    price: '$1,399',
    installment: '35',
    images: [
      {
        src: '/images/white-usb-charger-with-cable-free-png.webp',
        alt: 'iPhone 17 Pro Max back',
      },
      {
        src: '/images/61rMkfbSybL._SL1500_-100x100.jpg',
        alt: 'iPhone 17 Pro Max front',
      },
      {
        src: '/images/filters_upscale().webp',
        alt: 'iPhone 17 Pro Max',
      },
    ],
  },

  {
    id: 2,
    badge: 'B/U',
    brand: 'Apple',
    name: 'iPhone 16 Pro Max',
    color: 'Natural Titanium',
    storage: '256GB',
    condition: "A'lo",
    replaced: "Yo'q",
    price: '$999',
    installment: '25',
    images: [
      {
        src: '/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone 16 Pro Max',
      },
      {
        src: '/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone 16 Pro Max front',
      },
      {
        src: '/images/filters_upscale().webp',
        alt: 'iPhone 16 Pro Max side',
      },
    ],
  },

  {
    id: 3,
    badge: 'Yangi',
    brand: 'Samsung',
    name: 'Galaxy S25 Ultra',
    color: 'Titanium Black',
    storage: '512GB',
    condition: 'Yangi',
    replaced: "Yo'q",
    price: '$1,199',
    installment: '30',
    images: [
      {
        src: '/images/filters_upscale().webp',
        alt: 'Samsung Galaxy S25 Ultra',
      },
      {
        src: '/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'Samsung Galaxy S25 Ultra',
      },
    ],
  },

  ...Array.from({ length: 7 }, (_, index) => ({
    id: index + 4,
    badge: 'B/U',
    brand: 'Apple',
    name: 'MacBook Pro M4',
    color: 'Space Black',
    storage: '512GB',
    condition: 'Yaxshi',
    replaced: 'Batareya',
    price: '$1,599',
    installment: '40',
    images: [
      {
        src: '/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'MacBook Pro M4',
      },
      {
        src: '/images/filters_upscale().webp',
        alt: 'MacBook Pro M4',
      },
    ],
  })),
];

/* ============================================================
   HOME PAGE
============================================================ */

function HomePage() {
  const [phoneEstimatorOpen, setPhoneEstimatorOpen] =
    useState(false);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />

      {/* ======================================================
          DISCOUNT BANNER
      ====================================================== */}

      <Layout>
        <DiscountBanner />
      </Layout>

      {/* ======================================================
          SELL / TRADE-IN CTA
      ====================================================== */}

      <Layout>
        <section className="my-8">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-border/60
              bg-background
              shadow-sm
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                p-6

                sm:p-8

                md:flex-row
                md:items-center
                md:justify-between

                lg:p-10
              "
            >
              {/* LEFT */}

              <div className="max-w-2xl">
                <div
                  className="
                    mb-3
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-yellow-400/10
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-yellow-600
                    dark:text-yellow-400
                  "
                >
                  <span className="size-2 rounded-full bg-yellow-400" />

                  Telefoningizni yangilang
                </div>

                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-foreground

                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Telefoningizni sotmoqchimisiz?
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-muted-foreground

                    sm:text-base
                  "
                >
                  Telefoningiz qiymatini hisoblang yoki
                  Trade-In orqali yangi telefon sotib
                  olishda qancha to'lashingiz kerakligini
                  bilib oling.
                </p>
              </div>

              {/* RIGHT */}

              <button
                type="button"
                onClick={() => setPhoneEstimatorOpen(true)}
                className="
                  flex
                  h-14
                  w-full
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-yellow-400
                  px-7
                  text-base
                  font-bold
                  text-zinc-950
                  shadow-sm
                  transition-all

                  hover:bg-yellow-300
                  hover:shadow-md
                  active:scale-[0.98]

                  md:w-auto
                "
              >
                Pricing
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </section>
      </Layout>

      {/* ======================================================
          PHONE ESTIMATOR
      ====================================================== */}

      <PhonePriceEstimator
        open={phoneEstimatorOpen}
        onClose={() => setPhoneEstimatorOpen(false)}
        products={products}
      />

      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      <Layout>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <ProductFilter />

          <div className="min-w-0 flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </Layout>

      <Footer />
    </main>
  );
}

/* ============================================================
   PRODUCT ROUTE
============================================================ */

function ProductRoute() {
  return <ProductPage products={products} />;
}

/* ============================================================
   APP / ROUTES
============================================================ */

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/products/:productId"
        element={<ProductRoute />}
      />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
            <div className="text-center">
              <h1 className="text-5xl font-black text-foreground">
                404
              </h1>

              <p className="mt-3 text-muted-foreground">
                Sahifa topilmadi.
              </p>

              <a
                href="/"
                className="
                  mt-6
                  inline-flex
                  rounded-xl
                  bg-yellow-400
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-zinc-950
                  transition
                  hover:bg-yellow-300
                "
              >
                Bosh sahifaga
              </a>
            </div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
