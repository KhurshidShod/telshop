import {
  ArrowLeft,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router';

import Footer from './Footer';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductGallery from './ProductGallery';

export default function ProductPage({ products }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [productId]);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);

  /* ==========================================================
     FIND CURRENT PRODUCT
  ========================================================== */

  const product = products?.find(
    (item) => String(item.id) === String(productId)
  );

  /* ==========================================================
     PRODUCT NOT FOUND
  ========================================================== */

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-zinc-950">
        <Header />

        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-20
                items-center
                justify-center
                rounded-3xl
                bg-yellow-400/10
                text-yellow-500
              "
            >
              <ShoppingBag className="size-8" />
            </div>

            <p className="mt-6 text-sm font-bold text-yellow-500">404</p>

            <h1
              className="
                mt-2
                text-3xl
                font-black
                tracking-tight
                text-gray-950

                dark:text-white
              "
            >
              Mahsulot topilmadi
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Siz izlayotgan mahsulot mavjud emas yoki o'chirilgan.
            </p>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="
                mt-7
                inline-flex
                h-12
                items-center
                gap-2
                rounded-xl
                bg-yellow-400
                px-6
                text-sm
                font-bold
                text-zinc-950
                shadow-sm
                transition-all
                hover:bg-yellow-300
                hover:shadow-md
              "
            >
              <ArrowLeft className="size-4" />
              Bosh sahifaga qaytish
            </button>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  /* ==========================================================
     RELATED PRODUCTS
  ========================================================== */

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 5);

  /* ==========================================================
     QUANTITY
  ========================================================== */

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  /* ==========================================================
     PAGE
  ========================================================== */

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />

      {/* ======================================================
          HERO / PRODUCT AREA
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
        "
      >
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            size-[420px]
            rounded-full
            bg-yellow-400/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-40
            size-[500px]
            rounded-full
            bg-yellow-400/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1450px]
            px-3
            pb-12
            pt-5

            min-[360px]:px-4

            sm:px-6
            sm:pb-16
            sm:pt-7

            md:px-8

            lg:px-10
            lg:pb-20
            lg:pt-9

            xl:px-12
          "
        >
          {/* ==================================================
              BREADCRUMB
          ================================================== */}

          <div
            className="
              mb-5
              flex
              flex-wrap
              items-center
              gap-2
              text-xs
              text-muted-foreground

              sm:mb-7
              sm:text-sm
            "
          >
            <Link to="/" className="transition hover:text-foreground">
              Bosh sahifa
            </Link>

            <span>/</span>

            <span>{product.brand}</span>

            <span>/</span>

            <span className="font-medium text-foreground">{product.name}</span>
          </div>

          {/* ==================================================
              BACK BUTTON
          ================================================== */}

          <Link
            to="/"
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-muted-foreground
              transition-colors
              hover:text-foreground

              sm:mb-8
            "
          >
            <ArrowLeft className="size-4" />
            Mahsulotlarga qaytish
          </Link>

          {/* ==================================================
              MAIN PRODUCT CARD
          ================================================== */}

          <section
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-gray-200/70
              bg-white
              shadow-[0_20px_70px_-30px_rgba(0,0,0,0.25)]

              dark:border-white/[0.07]
              dark:bg-zinc-900

              sm:rounded-[30px]

              lg:rounded-[36px]
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
              "
            />

            <div
              className="
                grid
                grid-cols-1

                lg:grid-cols-[1.18fr_0.92fr]
              "
            >
              {/* =================================================
                  LEFT — PRODUCT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  min-w-0
                  overflow-hidden
                  border-b
                  border-gray-200/70
                  bg-linear-to-br
                  from-gray-50
                  via-white
                  to-gray-100
                  p-4

                  sm:p-6

                  md:p-8

                  lg:border-b-0
                  lg:border-r
                  lg:p-10

                  dark:border-white/[0.07]
                  dark:from-zinc-900
                  dark:via-zinc-900
                  dark:to-zinc-950
                "
              >
                {/* Decorative circle */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    size-[280px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-yellow-400/[0.08]
                    blur-3xl

                    sm:size-[400px]
                  "
                />

                {/* Product number */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-10
                    hidden
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200/80
                    bg-white/80
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-muted-foreground
                    backdrop-blur-md

                    sm:flex

                    dark:border-white/[0.08]
                    dark:bg-zinc-900/70
                  "
                >
                  <span className="size-1.5 rounded-full bg-yellow-400" />
                  Product #{product.id}
                </div>

                {/* Gallery */}

                <div className="relative z-[1]">
                  <ProductGallery
                    images={product.images}
                    badge={product.badge}
                  />
                </div>

                {/* Image bottom label */}

                <div
                  className="
                    relative
                    z-[1]
                    mx-auto
                    mt-4
                    flex
                    max-w-md
                    items-center
                    justify-center
                    gap-2
                    text-center
                    text-xs
                    text-muted-foreground
                  "
                >
                  <Zap className="size-3.5 text-yellow-500" />
                  Sifatli va tekshirilgan mahsulot
                </div>
              </div>

              {/* =================================================
                  RIGHT — PRODUCT INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  min-w-0
                  flex-col
                  p-5

                  sm:p-7

                  md:p-9

                  lg:p-10
                  xl:p-12
                "
              >
                {/* Brand */}

                <div className="flex items-center justify-between gap-4">
                  <p
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-yellow-500

                      sm:text-sm
                    "
                  >
                    {product.brand}
                  </p>

                  {/* Favorite */}

                  <button
                    type="button"
                    onClick={() => setFavorite((value) => !value)}
                    aria-label="Sevimlilarga qo'shish"
                    className={`
                      flex
                      size-11
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-all

                      ${
                        favorite
                          ? 'border-yellow-400 bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-400/20'
                          : 'border-gray-200 bg-white text-gray-500 hover:border-yellow-400 hover:text-yellow-500 dark:border-white/[0.08] dark:bg-zinc-900 dark:text-zinc-400'
                      }
                    `}
                  >
                    <Heart
                      className="size-5"
                      fill={favorite ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                {/* Product title */}

                <h1
                  className="
                    mt-3
                    max-w-xl
                    text-3xl
                    font-black
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-gray-950

                    sm:text-4xl

                    md:text-[42px]

                    lg:text-[46px]

                    dark:text-white
                  "
                >
                  {product.name}
                </h1>

                {/* Badge row */}
                <div className="mt-5 flex items-center gap-1.5">
                  <span className="h-1 w-10 rounded-full bg-yellow-400" />

                  <span className="h-1 w-2 rounded-full bg-yellow-400/40" />

                  <span className="h-1 w-1 rounded-full bg-yellow-400/20" />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-yellow-400
                      px-3
                      py-1.5
                      text-xs
                      font-bold
                      text-zinc-950
                    "
                  >
                    <span className="size-1.5 rounded-full bg-zinc-950" />

                    {product.badge}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-gray-600

                      dark:bg-white/[0.06]
                      dark:text-zinc-300
                    "
                  >
                    {product.condition}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-green-500/10
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-green-600

                      dark:text-green-400
                    "
                  >
                    Mavjud
                  </span>
                </div>

                {/* =================================================
                    PRICE
                ================================================= */}

                <div
                  className="
    relative
    mt-7
    overflow-hidden
    rounded-2xl
    border
    border-yellow-300/70
    bg-gray-50/80
    p-5
    sm:p-6

    dark:border-yellow-200/30
    dark:bg-zinc-800/50
  "
                >
                  {/* Top-right yellow blob */}
                  <div
                    className="
      pointer-events-none
      absolute
      -right-16
      -top-16
      size-40
      rounded-full
      bg-yellow-400/20
      blur-3xl
      dark:bg-yellow-400/10
    "
                  />

                  {/* Bottom-left yellow blob */}
                  <div
                    className="
      pointer-events-none
      absolute
      -bottom-20
      -left-20
      size-44
      rounded-full
      bg-yellow-400/15
      blur-3xl
      dark:bg-yellow-400/10
    "
                  />
                  <div className="relative z-[1]">
                    <p className="text-xs font-medium text-muted-foreground">
                      Bugungi narx
                    </p>

                    <div className="mt-1 flex flex-wrap items-end gap-x-4 gap-y-1">
                      <span className="text-4xl font-black text-foreground tracking-[-0.035em] sm:text-5xl">
                        {product.price}
                      </span>

                      <span
                        className="
          mb-1
          rounded-lg
          bg-yellow-400/10
          px-2.5
          py-1
          text-xs
          font-bold
          text-yellow-600
          dark:bg-yellow-400/10
          dark:text-yellow-400
        "
                      >
                        Eng yaxshi narx
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                      yoki{' '}
                      <span className="font-bold text-foreground">
                        ${product.installment}
                      </span>{' '}
                      × 24 oy muddatli to‘lov
                    </p>
                  </div>
                </div>

                {/* =================================================
                    PRODUCT INFO
                ================================================= */}

                <div className="mt-7">
                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-2

                      sm:grid-cols-
                      sm:gap-3
                    "
                  >
                    <InfoBox label="Rangi" value={product.color} />

                    <InfoBox label="Xotira" value={product.storage} />

                    <InfoBox label="Holati" value={product.condition} />

                    <InfoBox label="Almashgan" value={product.replaced} />
                  </div>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div
                  className="
    relative
    overflow-hidden
    mt-7
    rounded-2xl
    border
    border-gray-200/70
    bg-[#181818]
    dark:bg-black
    p-4

    sm:p-5

    dark:border-yellow-200/30
  "
                >
                  {/* Top-right yellow blob */}
                  <div
                    className="
      pointer-events-none
      absolute
      -right-12
      -top-12
      size-28
      rounded-full
      bg-yellow-400/15
      blur-2xl
    "
                  />

                  {/* Bottom-left yellow blob */}
                  <div
                    className="
      pointer-events-none
      absolute
      -bottom-12
      -left-12
      size-28
      rounded-full
      bg-yellow-400/15
      blur-2xl
    "
                  />

                  {/* Content */}
                  <div className="relative z-[1]">
                    <h2
                      className="
        text-sm
        font-bold
        text-yellow-400
      "
                    >
                      Mahsulot haqida
                    </h2>

                    <p
                      className="
        mt-2
        text-sm
        leading-6
        text-yellow-50
      "
                    >
                      {product.name} — sifatli va ishonchli qurilma. Mahsulot
                      tekshirilgan va xarid qilishga tayyor.
                    </p>
                  </div>
                </div>

                {/* =================================================
                    QUANTITY + ACTION
                ================================================= */}

                <div className="mt-7">
                  <div
                    className="
                      flex
                      flex-col
                      gap-3

                      sm:flex-row
                    "
                  >
                    {/* Quantity */}

                    <div
                      className="
                        flex
                        h-13
                        shrink-0
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-1

                        sm:w-36

                        dark:border-white/[0.08]
                        dark:bg-zinc-900
                      "
                    >
                      <button
                        type="button"
                        onClick={decreaseQuantity}
                        className="
                          flex
                          size-10
                          cursor-pointer
                          items-center
                          justify-center
                          rounded-lg
                          text-muted-foreground
                          transition
                          hover:bg-gray-100
                          hover:text-foreground
                          dark:hover:bg-white/[0.06]
                        "
                      >
                        <Minus className="size-4" />
                      </button>

                      <span className="text-sm font-bold text-foreground">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={increaseQuantity}
                        className="
                          flex
                          size-10
                          cursor-pointer
                          items-center
                          justify-center
                          rounded-lg
                          text-muted-foreground
                          transition
                          hover:bg-gray-100
                          hover:text-foreground
                          dark:hover:bg-white/[0.06]
                        "
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>

                    {/* Order */}

                    <button
                      type="button"
                      className="
                        group
                        flex
                        h-13
                        flex-1
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-yellow-400
                        px-6
                        text-sm
                        font-black
                        text-zinc-950
                        shadow-[0_10px_30px_-10px_rgba(250,204,21,0.6)]
                        transition-all

                        hover:-translate-y-0.5
                        hover:bg-yellow-300
                        hover:shadow-[0_15px_35px_-10px_rgba(250,204,21,0.7)]

                        active:translate-y-0
                      "
                    >
                      <ShoppingBag
                        className="
                          size-5
                          transition-transform
                          group-hover:scale-110
                        "
                      />
                      Band qilish
                    </button>
                  </div>
                </div>

                {/* =================================================
                    TRUST
                ================================================= */}

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-2

                    sm:grid-cols-3
                  "
                >
                  <TrustItem
                    icon={<Truck className="size-4" />}
                    title="Yetkazib berish"
                    text="Tez va xavfsiz"
                  />

                  <TrustItem
                    icon={<ShieldCheck className="size-4" />}
                    title="Kafolat"
                    text="Sifat kafolati"
                  />

                  <TrustItem
                    icon={<Check className="size-4" />}
                    title="Tekshirilgan"
                    text="Ishonchli mahsulot"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ======================================================
          RELATED PRODUCTS
      ====================================================== */}

      {relatedProducts.length > 0 && (
        <section
          className="
            border-t
            border-gray-200/70
            bg-white
            py-12

            sm:py-16

            lg:py-20

            dark:border-white/[0.06]
            dark:bg-zinc-950
          "
        >
          <div
            className="
              mx-auto
              max-w-[1450px]
              px-3

              min-[360px]:px-4

              sm:px-6

              md:px-8

              lg:px-10

              xl:px-12
            "
          >
            {/* Section heading */}

            <div
              className="
                mb-7
                flex
                flex-col
                gap-3

                sm:mb-9
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-yellow-500
                  "
                >
                  <span className="size-1.5 rounded-full bg-yellow-400" />
                  Sizga yoqishi mumkin
                </div>

                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-gray-950

                    sm:text-3xl

                    dark:text-white
                  "
                >
                  O'xshash mahsulotlar
                </h2>
              </div>

              <Link
                to="/"
                className="
                  text-sm
                  font-semibold
                  text-muted-foreground
                  transition
                  hover:text-yellow-500
                "
              >
                Barchasini ko'rish →
              </Link>
            </div>

            {/* Products */}

            <div
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-3
                sm:gap-4

                lg:grid-cols-4

                xl:grid-cols-5
              "
            >
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}

/* =============================================================
   INFO BOX
============================================================= */

function InfoBox({ label, value }) {
  return (
    <div className=" relative min-w-0 overflow-hidden border border-yellow-300/70 dark:border-yellow-200/30 rounded-xl bg-gray-50 p-3 sm:p-4 dark:bg-zinc-800/60 ">
      <div className=" pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-yellow-400/15 blur-2xl dark:bg-yellow-400/10 " />{' '}
      <div className=" pointer-events-none absolute -bottom-10 -left-10 size-24 rounded-full bg-yellow-400/15 blur-2xl dark:bg-yellow-400/10 " />{' '}
      <div className="relative z-[1]">
        <p className=" truncate text-[10px] font-medium text-muted-foreground sm:text-xs ">
          {label}
        </p>
        <p className=" mt-1 truncate text-xs font-bold text-foreground sm:text-sm ">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({ icon, title, text }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-gray-200/70
        p-3

        dark:border-white/[0.07]
      "
    >
      <div
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-yellow-400/10
          text-yellow-500
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            truncate
            text-xs
            font-bold
            text-foreground
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            truncate
            text-[10px]
            text-muted-foreground
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}
