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
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone 17 Pro Max back',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone 17 Pro Max front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'iPhone side',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'Samsung Galaxy',
      },
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'Product',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'MacBook',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'MacBook',
      },
    ],
  },
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
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone 17 Pro Max back',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone 17 Pro Max front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'iPhone side',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'Samsung Galaxy',
      },
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'Product',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'MacBook',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'MacBook',
      },
    ],
  },
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
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone 17 Pro Max back',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone 17 Pro Max front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'iPhone',
      },
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'iPhone front',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'iPhone side',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'Samsung Galaxy',
      },
      {
        src: '/src/assets/images/1757672591_iPhone-17-Pro-Cosmic-Orange-Back.png',
        alt: 'Product',
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

    currency: 'USD',

    images: [
      {
        src: '/src/assets/images/2-iPhone-17-pro-max-cosmic-orange-front.png',
        alt: 'MacBook',
      },
      {
        src: '/src/assets/images/filters_upscale().webp',
        alt: 'MacBook',
      },
    ],
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full px-2 py-4 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
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
