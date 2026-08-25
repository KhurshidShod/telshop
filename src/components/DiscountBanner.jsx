import { Button } from '@base-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const banners = [
  {
    id: 1,
    label: 'Samsung Galaxy A Series',
    title: (
      <>
        Samsungdan
        <br />
        qaynoq chegirma
      </>
    ),
    description: (
      <>
        Samsungning barcha A seriya telefonlariga{' '}
        <span className="font-bold text-gray-950">10% dan 35% gacha</span>{' '}
        chegirmalar.
      </>
    ),
    image: '/images/Galaxy-A-Series-KV.png',
    alt: 'Samsung Galaxy A Series',
  },

  {
    id: 2,
    label: 'Yangi iPhone',
    title: (
      <>
        iPhone uchun
        <br />
        maxsus taklif
      </>
    ),
    description: (
      <>
        Tanlangan iPhone modellariga{' '}
        <span className="font-bold text-gray-950">maxsus narxlar</span>.
      </>
    ),
    image: '/images/iphone-17-pro-.png',
    alt: 'Special smartphone offer',
  },

  {
    id: 3,
    label: 'TexnoDom Maxsus Taklif',
    title: (
      <>
        Smartfonlarni
        <br />
        qulay narxda oling
      </>
    ),
    description: (
      <>
        Yangi va ishlatilgan qurilmalar uchun{' '}
        <span className="font-bold text-gray-950">foydali takliflar</span>.
      </>
    ),
    image: '/images/795d847e3327d0545df3be7f37c04612.png',
    alt: 'TexnoDom smartphone offer',
  },
];

const DiscountBanner = () => {
  const [current, setCurrent] = useState(0);

  const currentBanner = banners[current];

  const previous = () => {
    setCurrent((index) => (index === 0 ? banners.length - 1 : index - 1));
  };

  const next = () => {
    setCurrent((index) => (index === banners.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="relative mt-3 w-full sm:mt-10 lg:mt-10">
      {/* =====================================================
          PREVIOUS BUTTON
      ===================================================== */}

      <Button
        type="button"
        onClick={previous}
        aria-label="Oldingi banner"
        className="
    absolute
    left-1
    top-1/2
    z-30
    flex
    size-10
    -translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    cursor-pointer
    appearance-none
    rounded-full
    border-4
    border-gray-50
    bg-yellow-400
    text-gray-950
    shadow-lg
    transition-transform
    duration-200
    hover:scale-105
    active:scale-95
    sm:size-11
    lg:size-12.5
    lg:border-[5px]
    dark:border-zinc-950
  "
      >
        <ChevronLeft
          className="size-6 shrink-0 text-gray-950 sm:size-7"
          strokeWidth={2.2}
        />
      </Button>

      {/* =====================================================
          NEXT BUTTON
      ===================================================== */}

      <Button
        type="button"
        onClick={next}
        aria-label="Keyingi banner"
        className="
    absolute
    right-1
    top-1/2
    z-30
    flex
    size-10
    translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    cursor-pointer
    appearance-none
    rounded-full
    border-4
    border-gray-50
    bg-yellow-400
    text-gray-950
    shadow-lg
    transition-transform
    duration-200
    hover:scale-105
    active:scale-95
    sm:size-11
    lg:size-12.5
    lg:border-[5px]
    dark:border-zinc-950
  "
      >
        <ChevronRight
          className="size-6 shrink-0 text-gray-950 sm:size-7"
          strokeWidth={2.2}
        />
      </Button>

      {/* =====================================================
          BANNER
      ===================================================== */}

      <div
        className="
          relative
          min-h-[520px]
          overflow-hidden
          rounded-2xl
          bg-yellow-400
          shadow-sm
          sm:min-h-[460px]
          sm:rounded-3xl

          lg:min-h-90

          dark:bg-yellow-500
        "
      >
        {/* ===================================================
            DECORATIVE BLOBS
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            size-64
            rounded-full
            bg-white/15

            sm:size-80
            lg:-right-24
            lg:-top-32
            lg:size-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-24
            size-72
            rounded-full
            border-[35px]
            border-white/10

            sm:-bottom-40
            sm:size-96
            sm:border-[50px]
          "
        />

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          key={currentBanner.id}
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[520px]
            max-w-7xl
            flex-col
            items-center
            justify-between
            px-7
            pt-8
            pb-0
            gap-5
            sm:min-h-[460px]
            sm:px-12
            sm:pt-10

            lg:min-h-90
            lg:flex-row
            lg:items-center
            lg:px-20
            lg:py-10

            animate-in
            fade-in
            duration-500
          "
        >
          {/* =================================================
              TEXT
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              max-w-xl
              text-center

              lg:text-left
            "
          >
            {/* Label */}

            <div
              className="
                mb-3
                inline-flex
                items-center
                rounded-full
                bg-gray-950
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-white

                sm:mb-4
                sm:text-xs
              "
            >
              {currentBanner.label}
            </div>

            {/* Heading */}

            <h1
              className="
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-gray-950

                sm:text-4xl

                md:text-5xl

                lg:text-6xl
              "
            >
              {currentBanner.title}
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-xs
                font-medium
                leading-relaxed
                text-gray-950/70

                sm:text-sm

                md:text-base

                lg:mx-0
                lg:mt-5
                lg:text-lg
              "
            >
              {currentBanner.description}
            </p>

            {/* CTA */}

            <Button
              type="button"
              className="
                mt-5
                h-10
                cursor-pointer
                rounded-xl
                bg-gray-950
                px-5
                text-xs
                font-semibold
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-gray-800
                hover:shadow-lg

                sm:mt-6
                sm:h-11
                sm:px-6
                sm:text-sm
              "
            >
              Chegirmalarni ko'rish
            </Button>
          </div>

          {/* =================================================
              PRODUCT IMAGE
          ================================================= */}

          <div
            className="
              relative
              mt-2
              flex
              w-full
              flex-1
              items-end
              justify-center

              sm:mt-0
              sm:min-h-[230px]

              lg:w-auto
              lg:flex-none
              lg:self-end
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2
                size-52
                -translate-x-1/2
                rounded-full
                bg-white/25
                blur-3xl

                sm:size-64

                lg:size-72
              "
            />

            <img
              src={currentBanner.image}
              alt={currentBanner.alt}
              draggable={false}
              className="
                relative
                z-10
                max-h-[210px]
                w-auto
                max-w-[75%]
                object-contain
                object-bottom
                drop-shadow-2xl

                sm:max-h-[250px]
                sm:max-w-[70%]

                md:max-h-[280px]

                lg:w-75
                lg:max-w-none
                lg:max-h-none
              "
            />
          </div>
        </div>

        {/* ===================================================
            MOBILE INDICATORS
        =================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-1.5
          "
        ></div>
      </div>
    </section>
  );
};

export default DiscountBanner;
