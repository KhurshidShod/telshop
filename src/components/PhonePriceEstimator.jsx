import {
  Battery,
  Calculator,
  Check,
  ChevronRight,
  CircleDollarSign,
  Smartphone,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const phoneModels = {
  Apple: [
    { model: 'iPhone 17 Pro Max', basePrice: 1399 },
    { model: 'iPhone 17 Pro', basePrice: 1199 },
    { model: 'iPhone 17', basePrice: 899 },
    { model: 'iPhone 16 Pro Max', basePrice: 999 },
    { model: 'iPhone 16 Pro', basePrice: 899 },
    { model: 'iPhone 16', basePrice: 800 },
    { model: 'iPhone 15 Pro Max', basePrice: 899 },
    { model: 'iPhone 15 Pro', basePrice: 799 },
    { model: 'iPhone 15', basePrice: 700 },
    { model: 'iPhone 14 Pro Max', basePrice: 799 },
    { model: 'iPhone 14 Pro', basePrice: 699 },
    { model: 'iPhone 14', basePrice: 600 },
    { model: 'iPhone 13 Pro Max', basePrice: 699 },
    { model: 'iPhone 13 Pro', basePrice: 599 },
    { model: 'iPhone 13', basePrice: 500 },
    { model: 'iPhone 12 Pro Max', basePrice: 599 },
    { model: 'iPhone 12 Pro', basePrice: 499 },
    { model: 'iPhone 12', basePrice: 200 },
    { model: 'iPhone 11 Pro Max', basePrice: 499 },
    { model: 'iPhone 11 Pro', basePrice: 399 },
    { model: 'iPhone 11', basePrice: 299 },
  ],

  Samsung: [
    { model: 'Galaxy S25 Ultra', basePrice: 1199 },
    { model: 'Galaxy S25+', basePrice: 999 },
    { model: 'Galaxy S25', basePrice: 799 },
    { model: 'Galaxy S24 Ultra', basePrice: 999 },
    { model: 'Galaxy S24', basePrice: 899 },
    { model: 'Galaxy S23 Ultra', basePrice: 799 },
    { model: 'Galaxy S23', basePrice: 699 },
    { model: 'Galaxy S22', basePrice: 599 },
  ],

  Xiaomi: [
    { model: 'Xiaomi 15 Ultra', basePrice: 999 },
    { model: 'Xiaomi 15', basePrice: 699 },
    { model: 'Xiaomi 14 Ultra', basePrice: 899 },
    { model: 'Xiaomi 14', basePrice: 599 },
    { model: 'Xiaomi 13 Ultra', basePrice: 799 },
    { model: 'Xiaomi 13', basePrice: 499 },
    { model: 'Xiaomi 12 Ultra', basePrice: 699 },
    { model: 'Xiaomi 12', basePrice: 399 },
  ],
};

const storageOptions = [
  { value: '128GB', multiplier: 0.9 },
  { value: '256GB', multiplier: 1 },
  { value: '512GB', multiplier: 1.12 },
  { value: '1TB', multiplier: 1.2 },
];

const conditions = [
  {
    value: "A'lo",
    multiplier: 0.72,
    description: 'Deyarli yangi',
  },
  {
    value: 'Yaxshi',
    multiplier: 0.68,
    description: 'Yengil ishlatilgan',
  },
  {
    value: "O'rtacha",
    multiplier: 0.6,
    description: 'Sezilarli izlar mavjud',
  },
];

const colors = [
  { value: 'Qora', color: '#171717' },
  { value: 'Oq', color: '#ffffff' },
  { value: 'Kulrang', color: '#71717a' },
  { value: "Ko'k", color: '#2563eb' },
  { value: 'Titanium', color: '#a1a1aa' },
  { value: 'Oltin', color: '#d4a72c' },
  {
    value: 'Boshqa',
    color: 'linear-gradient(135deg, #facc15, #a855f7, #3b82f6)',
  },
];

const formatPrice = (price) => {
  return `$${Math.round(price).toLocaleString('en-US')}`;
};

export default function PhonePriceEstimator() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [storage, setStorage] = useState('');
  const [battery, setBattery] = useState(91);
  const [condition, setCondition] = useState('');
  const [color, setColor] = useState('');

  const availableModels = brand ? phoneModels[brand] || [] : [];

  const selectedModel = availableModels.find((item) => item.model === model);

  // =================================================
  // PRICE CALCULATION
  // =================================================

  let estimatedPrice = null;

  if (selectedModel && storage && battery && condition) {
    const storageData = storageOptions.find((item) => item.value === storage);

    const conditionData = conditions.find((item) => item.value === condition);

    if (storageData && conditionData) {
      const batteryValue = Number(battery);

      const batteryMultiplier =
        batteryValue >= 95
          ? 1
          : batteryValue >= 90
            ? 0.96
            : batteryValue >= 85
              ? 0.91
              : batteryValue >= 80
                ? 0.85
                : 0.78;

      const price =
        selectedModel.basePrice *
        storageData.multiplier *
        conditionData.multiplier *
        batteryMultiplier;

      estimatedPrice = Math.max(Math.round(price), 50);
    }
  }

  const canCalculate =
    brand && model && storage && battery && condition && color;

  // =================================================
  // RESET
  // =================================================

  const reset = () => {
    setBrand('');
    setModel('');
    setStorage('');
    setBattery(91);
    setCondition('');
    setColor('');
  };

  // =================================================
  // BATTERY LABEL
  // =================================================

  const getBatteryLabel = () => {
    if (battery >= 95) return "A'lo";
    if (battery >= 90) return 'Yaxshi';
    if (battery >= 80) return "O'rtacha";
    return 'Past';
  };

  return (
    <section className="w-full">
      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          grid
          lg:grid-cols-[0.9fr_1.1fr]
          border
            border-border/60
            rounded-3xl
            lg:border-none
        "
      >
        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <div className="relative">
          <div
            className="
      relative
      flex
      border-none
      min-h-[520px]
      flex-col
      justify-center
      overflow-hidden
      rounded-t-3xl

      bg-zinc-950
      px-6
      pt-16
      pb-10
      text-white

      sm:px-10
      sm:pt-20

      lg:sticky
      lg:top-6
      lg:h-screen
      lg:min-h-screen
      lg:rounded-l-3xl
      lg:rounded-t-none
      lg:px-12
      lg:pt-20
      lg:pb-14
    "
          >
            {/* =================================================
        STORE PHOTO BACKGROUND
    ================================================= */}

            <div
              className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-cover
        bg-center
        bg-no-repeat
      "
              style={{
                backgroundImage: "url('/images/magazin.webp')",
              }}
            />

            {/* =================================================
        DARK OVERLAY
    ================================================= */}

            <div
              className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-zinc-950/50
      "
            />

            {/* =================================================
        LEFT GRADIENT
    ================================================= */}

            <div
              className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-gradient-to-t
        lg:bg-gradient-to-r
        from-zinc-950/90
        dark:from-zinc-950
        via-zinc-950/70
        to-transparent
      "
            />

            {/* =================================================
        MAN ILLUSTRATION
        KEEPING YOUR ORIGINAL MAN1
    ================================================= */}

            <img
              src="/images/Man1.png"
              alt=""
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              bottom-0
              right-[-100px]
              z-[1]
              h-[430px]
              w-auto
              object-contain
              brightness-75

              sm:right-[-70px]
              sm:h-[500px]

              lg:right-[-50px]
              lg:h-[min(620px,85vh)]
  "
            />

            {/* =================================================
        CONTENT
    ================================================= */}

            <div
              className="
        relative
        z-10
        max-w-md
      "
            >
              {/* ICON */}

              <div
                className="
          mb-5
          flex
          size-12
          items-center
          justify-center
          rounded-2xl
          bg-yellow-400
          text-zinc-950
        "
              >
                <Smartphone className="size-6" />
              </div>

              {/* SMALL TITLE */}

              <p
                className="
          mb-3
          text-xs
          font-bold
          uppercase
          tracking-[0.18em]
          text-yellow-400
        "
              >
                Telefoningizni soting
              </p>

              {/* MAIN TITLE */}

              <h2
                className="
          max-w-md
          text-3xl
          font-black
          leading-[0.95]
          tracking-tight
          text-white

          sm:text-4xl

          lg:text-5xl
        "
              >
                Telefoningiz
                <br />
                qancha turadi?
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
          mt-5
          max-w-md
          text-sm
          leading-6
          text-zinc-200

          sm:text-base
        "
              >
                Telefoningiz haqidagi ma&apos;lumotlarni kiriting. <br /> Taxminiy
                sotib olish narxini bir necha soniyada <br /> hisoblab beramiz.
              </p>

              {/* FEATURES */}

              <div className="mt-8 space-y-3">
                {[
                  'Tezkor taxminiy narx',
                  'Telefon holatiga qarab hisoblash',
                  "Ma'lumotlaringiz xavfsiz",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="
                flex
                size-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-yellow-400
                text-zinc-950
              "
                    >
                      <Check className="size-3.5" />
                    </div>

                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT COLUMN
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-b-3xl
            lg:border
            border-border/60
            border-t-0
            lg:border-t-1
            bg-background
            shadow-xl

            lg:rounded-r-3xl
            lg:rounded-bl-none
          "
        >
          <div
            className="
              px-5
              py-8

              sm:px-8
              sm:py-10

              lg:px-10
              lg:py-12
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-8">
              <div className="flex items-center gap-2">
                <Calculator className="size-5 text-yellow-500" />

                <h3
                  className="
                    text-xl
                    font-black
                    text-foreground
                  "
                >
                  Telefon ma&apos;lumotlari
                </h3>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Telefoningiz haqidagi ma&apos;lumotlarni tanlang
              </p>
            </div>

            {/* =================================================
                BRAND
            ================================================= */}

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Brend
                </label>

                {brand && (
                  <span className="text-xs font-medium text-yellow-500">
                    {brand}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Object.keys(phoneModels).map((item) => {
                  const isSelected = brand === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setBrand(item);
                        setModel('');
                      }}
                      className={`
                        group
                        relative
                        flex
                        h-20
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? 'border-yellow-400 bg-yellow-400/10 shadow-sm ring-2 ring-yellow-400/20'
                            : 'border-border bg-background hover:border-yellow-400/50 hover:bg-muted/50'
                        }
                      `}
                    >
                      {isSelected && (
                        <div
                          className="
                            absolute
                            right-2
                            top-2
                            flex
                            size-5
                            items-center
                            justify-center
                            rounded-full
                            bg-yellow-400
                            text-zinc-950
                          "
                        >
                          <Check className="size-3" />
                        </div>
                      )}

                      <span
                        className={`
                          text-sm
                          font-bold

                          ${
                            isSelected
                              ? 'text-yellow-600 dark:text-yellow-400'
                              : 'text-foreground'
                          }
                        `}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                MODEL
            ================================================= */}

            <div className="mt-7 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Model
                </label>

                {model && (
                  <span className="max-w-[55%] truncate text-xs font-medium text-yellow-500">
                    {model}
                  </span>
                )}
              </div>

              {!brand ? (
                <div
                  className="
                    flex
                    h-20
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-dashed
                    border-border
                    bg-muted/20
                    text-sm
                    text-muted-foreground
                  "
                >
                  Avval brendni tanlang
                </div>
              ) : (
                <div
                  className="
                    grid
                    max-h-[250px]
                    grid-cols-1
                    gap-2
                    overflow-y-auto
                    pr-1

                    sm:grid-cols-2
                  "
                >
                  {availableModels.map((item) => {
                    const isSelected = model === item.model;

                    return (
                      <button
                        key={item.model}
                        type="button"
                        onClick={() => setModel(item.model)}
                        className={`
                          relative
                          flex
                          min-h-[68px]
                          cursor-pointer
                          flex-col
                          items-start
                          justify-center
                          rounded-xl
                          border
                          px-4
                          text-left
                          transition-all
                          duration-200

                          ${
                            isSelected
                              ? 'border-yellow-400 bg-yellow-400/10 ring-2 ring-yellow-400/20'
                              : 'border-border bg-background hover:border-yellow-400/50 hover:bg-muted/40'
                          }
                        `}
                      >
                        {isSelected && (
                          <div
                            className="
                              absolute
                              right-3
                              top-3
                              flex
                              size-5
                              items-center
                              justify-center
                              rounded-full
                              bg-yellow-400
                              text-zinc-950
                            "
                          >
                            <Check className="size-3" />
                          </div>
                        )}

                        <span className="pr-7 text-sm font-bold text-foreground">
                          {item.model}
                        </span>

                        <span className="mt-1 text-xs text-muted-foreground">
                          Bazaviy narx {formatPrice(item.basePrice)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* =================================================
                STORAGE
            ================================================= */}

            <div className="mt-7 space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Xotira
              </label>

              <div className="grid grid-cols-4 gap-2">
                {storageOptions.map((item) => {
                  const isSelected = storage === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setStorage(item.value)}
                      className={`
                        h-12
                        cursor-pointer
                        rounded-xl
                        border
                        text-sm
                        font-bold
                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? 'border-yellow-400 bg-yellow-400 text-zinc-950 shadow-sm'
                            : 'border-border bg-background text-foreground hover:border-yellow-400/50 hover:bg-muted/50'
                        }
                      `}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
    BATTERY
================================================= */}

            <div className="mt-7 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Batareya holati
                </label>

                <div className="flex items-center gap-2">
                  <span
                    className="
          rounded-lg
          bg-yellow-400/10
          px-2
          py-1
          text-xs
          font-bold
          text-yellow-600
          dark:text-yellow-400
        "
                  >
                    {getBatteryLabel()}
                  </span>

                  <span className="text-2xl font-black text-foreground">
                    {battery}%
                  </span>
                </div>
              </div>

              {/* CUSTOM BATTERY SLIDER */}

              <label
                className="
      battery-slider
      group
      flex
      w-full
      cursor-pointer
      items-center
    "
                style={{
                  '--slider-progress': `${((battery - 50) / 50) * 100}%`,
                }}
              >
                <Battery
                  className="
        mr-4
        size-5
        shrink-0
        text-yellow-500
      "
                />

                <input
                  type="range"
                  min="50"
                  max="100"
                  value={battery}
                  onChange={(event) => setBattery(Number(event.target.value))}
                  className="battery-level"
                  aria-label="Batareya foizi"
                />
              </label>

              <div
                className="
      flex
      justify-between
      pl-9
      text-xs
      text-muted-foreground
    "
              >
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            {/* =================================================
                CONDITION
            ================================================= */}

            <div className="mt-7 space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Holati
              </label>

              <div className="grid gap-2 sm:grid-cols-3">
                {conditions.map((item) => {
                  const isSelected = condition === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setCondition(item.value)}
                      className={`
                        relative
                        min-h-[92px]
                        cursor-pointer
                        rounded-xl
                        border
                        p-4
                        text-left
                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? 'border-yellow-400 bg-yellow-400/10 ring-2 ring-yellow-400/20'
                            : 'border-border bg-background hover:border-yellow-400/50 hover:bg-muted/40'
                        }
                      `}
                    >
                      {isSelected && (
                        <div
                          className="
                            absolute
                            right-2
                            top-2
                            flex
                            size-5
                            items-center
                            justify-center
                            rounded-full
                            bg-yellow-400
                            text-zinc-950
                          "
                        >
                          <Check className="size-3" />
                        </div>
                      )}

                      <div className="text-sm font-bold text-foreground">
                        {item.value}
                      </div>

                      <div className="mt-1 text-xs leading-4 text-muted-foreground">
                        {item.description}
                      </div>

                      <div className="mt-2 text-xs font-bold text-yellow-600 dark:text-yellow-400">
                        {Math.round(item.multiplier * 100)}% bazaviy
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                COLOR
            ================================================= */}

            <div className="mt-7 space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Rang
              </label>

              <div className="flex flex-wrap gap-3">
                {colors.map((item) => {
                  const isSelected = color === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setColor(item.value)}
                      className="
                        group
                        flex
                        cursor-pointer
                        flex-col
                        items-center
                        gap-2
                      "
                      aria-label={item.value}
                    >
                      <span
                        className={`
                          relative
                          flex
                          size-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-200

                          ${
                            isSelected
                              ? 'scale-110 border-yellow-400 ring-4 ring-yellow-400/20'
                              : 'border-border group-hover:scale-105 group-hover:border-yellow-400/60'
                          }
                        `}
                      >
                        <span
                          className="size-7 rounded-full"
                          style={{
                            background: item.color,
                          }}
                        />

                        {isSelected && (
                          <span
                            className="
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Check
                              className="
                                size-4
                                text-white
                                drop-shadow
                              "
                            />
                          </span>
                        )}
                      </span>

                      <span
                        className={`
                          text-[11px]
                          font-medium

                          ${
                            isSelected
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                          }
                        `}
                      >
                        {item.value}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                RESULT
            ================================================= */}

            <div
              className={`
                mt-7
                overflow-hidden
                rounded-2xl
                border
                transition-all

                ${
                  estimatedPrice
                    ? 'border-yellow-400/50 bg-yellow-400/10'
                    : 'border-border bg-muted/30'
                }
              `}
            >
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Taxminiy narx
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <CircleDollarSign className="size-5 text-yellow-500" />

                    <span
                      className="
                        text-2xl
                        font-black
                        tracking-tight
                        text-foreground
                      "
                    >
                      {estimatedPrice ? formatPrice(estimatedPrice) : '—'}
                    </span>
                  </div>
                </div>

                {estimatedPrice && (
                  <div
                    className="
                      hidden
                      rounded-lg
                      bg-yellow-400
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-zinc-950
                      sm:block
                    "
                  >
                    TAXMINIY
                  </div>
                )}
              </div>

              <div
                className="
                  border-t
                  border-border/60
                  px-5
                  py-3
                  text-xs
                  leading-5
                  text-muted-foreground
                "
              >
                Yakuniy narx telefonni ko&apos;zdan kechirgandan so&apos;ng
                aniqlanadi.
              </div>
            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                disabled={!canCalculate}
                className="
                  h-14
                  min-h-14
                  w-full
                  flex-1
                  cursor-pointer
                  rounded-xl
                  bg-yellow-400
                  px-5
                  text-base
                  font-bold
                  text-zinc-950

                  hover:bg-yellow-300

                  disabled:cursor-not-allowed
                  disabled:opacity-50

                  sm:h-12
                  sm:min-h-12
                  sm:w-auto
                  sm:text-sm
                "
              >
                Telefonni sotish
                <ChevronRight className="ml-1 size-5" />
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={reset}
                className="
                  h-14
                  min-h-14
                  w-full
                  cursor-pointer
                  rounded-xl
                  px-5
                  text-base
                  font-semibold
                  text-foreground

                  sm:h-12
                  sm:min-h-12
                  sm:w-auto
                  sm:text-sm
                "
              >
                Tozalash
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
