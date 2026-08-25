import DiscountBanner from './components/DiscountBanner';
import Header from './components/Header';
import Layout from './components/Layout';
import ProductFilter from './components/ProductFilter';
import ProductGrid from './components/ProductGrid';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* HEADER */}

      <Header />

      {/* DISCOUNT */}
      <Layout>
        <DiscountBanner />
      </Layout>

      {/* PRODUCTS */}
      <Layout>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <ProductFilter />

          <div className="min-w-0 flex-1">
            <ProductGrid />
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;
