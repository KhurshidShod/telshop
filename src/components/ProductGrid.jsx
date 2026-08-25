import ProductCard from './ProductCard';

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
        src: '/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone 17 Pro Max back',
      },
      {
        src: '/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
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

  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
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
  },
  {
    id: 10,
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
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full">
      <div
        className="
    grid
    w-full
    grid-cols-2
    justify-items-center
    gap-3
    sm:grid-cols-3
    sm:gap-5
    lg:grid-cols-5
    lg:gap-5
  "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
