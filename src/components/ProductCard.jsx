import { Button } from '@base-ui/react';
import ProductGallery from './ProductGallery';

const ProductInfoRow = ({ label, value }) => {
  return (
    <div className="flex min-w-0 items-baseline gap-1 text-[11px] sm:text-xs md:text-sm">
      <span className="shrink-0 font-medium text-foreground">
        {label}
      </span>

      <span className="min-w-2 flex-1 overflow-hidden whitespace-nowrap text-muted-foreground/30 tracking-[2px]">
        ·····································
      </span>

      <span className="max-w-[45%] shrink-0 truncate text-right text-muted-foreground">
        {value}
      </span>
    </div>
  );
};

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article
      className="
        group
        w-full
        min-w-0
        overflow-hidden
        rounded-xl
        bg-white
        p-2.5
        shadow-sm
        ring-1
        ring-black/[0.05]
        transition-all
        duration-200

        dark:bg-zinc-900
        dark:ring-white/[0.08]

        sm:rounded-2xl
        sm:p-3
      "
    >
      {/* =====================================================
          GALLERY
      ===================================================== */}

      <ProductGallery
        images={product.images}
        badge={product.badge}
      />

      {/* =====================================================
          PRODUCT NAME
      ===================================================== */}

      <div className="mt-2.5 min-w-0 sm:mt-3">
        {/* Brand */}

        <p
          className="
            truncate
            text-[10px]
            font-semibold
            uppercase
            tracking-wide
            text-yellow-500

            sm:text-xs
          "
        >
          {product.brand}
        </p>

        {/* Name */}

        <h2
          className="
            mt-0.5
            line-clamp-2
            min-h-9
            text-[13px]
            font-semibold
            leading-[1.35]
            tracking-tight
            text-gray-900

            dark:text-zinc-100

            sm:text-sm
            sm:leading-5
          "
        >
          {product.name}
        </h2>
      </div>

      {/* =====================================================
          PRODUCT INFO
      ===================================================== */}

      <div
        className="
          mt-2.5
          space-y-1

          sm:mt-3
          sm:space-y-1.5
        "
      >
        <ProductInfoRow
          label="Rangi"
          value={product.color}
        />

        <ProductInfoRow
          label="Xotira"
          value={product.storage}
        />

        <ProductInfoRow
          label="Holati"
          value={product.condition}
        />

        <ProductInfoRow
          label="Almashgan"
          value={product.replaced}
        />
      </div>

      {/* =====================================================
          PRICE
      ===================================================== */}

      <div
        className="
          mt-2.5
          flex
          min-w-0
          items-end
          justify-between
          gap-2

          sm:mt-3
          sm:items-center
        "
      >
        <p
          className="
            min-w-0
            truncate
            text-base
            font-bold
            tracking-tight
            text-foreground

            sm:text-xl
          "
        >
          {product.price}
        </p>

        <p
          className="
            shrink-0
            text-[10px]
            font-medium
            text-muted-foreground

            sm:text-sm
          "
        >
          ${product.installment}/oy
        </p>
      </div>

      {/* =====================================================
          ACTION
      ===================================================== */}

      <Button
        type="button"
        className="
          mt-2
          h-9
          w-full
          cursor-pointer
          rounded-lg
          bg-yellow-400
          px-2
          text-xs
          font-semibold
          text-gray-900
          ring-1
          ring-yellow-400
          transition-all

          hover:bg-white
          hover:text-yellow-500

          dark:bg-yellow-500
          dark:ring-yellow-500
          dark:hover:bg-zinc-900
          dark:hover:text-yellow-400

          sm:mt-2.5
          sm:h-10
          sm:text-sm
        "
      >
        Band qilish
      </Button>
    </article>
  );
}
