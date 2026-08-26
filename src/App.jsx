import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import ProductFilter from './components/ProductFilter';
import ProductGrid from './components/ProductGrid';

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
      <Footer />
    </main>
  );
}

export default App;
