import { Button } from '@base-ui/react';
import ProductGallery from './ProductGallery';

const ProductInfoRow = ({ label, value }) => {
  return (
    <div className="flex min-w-0 items-baseline text-xs sm:text-sm">
      <span className="shrink-0 font-medium text-foreground">{label}</span>

      <span
        className="
          mx-2
          min-w-0
          flex-1
          overflow-hidden
          whitespace-nowrap
          text-muted-foreground/40
          tracking-[2px]
        "
      >
        ·····································
      </span>

      <span className="shrink-0 text-muted-foreground">{value}</span>
    </div>
  );
};

export default function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  return (
    <article
      className="
        group
        w-full
        max-w-[250px]
        overflow-hidden
        rounded-2xl
        bg-white
        dark:bg-zinc-900
        p-3
        shadow-sm
        ring-1
        ring-black/[0.05]
        dark:ring-white/[0.08]
        transition-all
        duration-200
      "
    >
      {/* GALLERY */}

      <ProductGallery images={product.images} badge={product.badge} />

      {/* PRODUCT NAME */}

      <div className="mt-3">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-yellow-400
          "
        >
          {product.brand}
        </p>

        <h2
          className="
            mt-0.5
            line-clamp-2
            text-sm
            font-semibold
            leading-5
            text-gray-900
          "
        >
          {product.name}
        </h2>
      </div>

      {/* INFO */}

      <div className="mt-3 space-y-1.5">
        <ProductInfoRow label="Rangi" value={product.color} />

        <ProductInfoRow label="Xotira" value={product.storage} />

        <ProductInfoRow label="Holati" value={product.condition} />

        <ProductInfoRow label="Almashgan" value={product.replaced} />
      </div>

      {/* PRICE */}

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xl font-bold text-foreground">{product.price}</p>

        <p className="text-sm font-medium text-muted-foreground">${product.installment}/oy</p>
      </div>
      <Button className="w-full bg-yellow-400 dark:bg-yellow-500 p-2 mt-2 rounded-lg text-gray-900 ring-1 ring-yellow-400 dark:ring-yellow-500 hover:text-yellow-400 hover:bg-white dark:hover:bg-zinc-900 cursor-pointer transition-all">Band qilish</Button>
    </article>
  );
}
