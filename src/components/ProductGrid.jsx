import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section className="min-w-0 w-full">
      <div
        className="
          grid
          w-full
          min-w-0

          grid-cols-2
          gap-2

          min-[360px]:gap-3

          sm:grid-cols-3
          sm:gap-4

          md:gap-5

          lg:grid-cols-4
          lg:gap-5

          xl:grid-cols-5
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
