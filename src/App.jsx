import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}

      <header className="border-b bg-white">
        <div
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              TexnoDom
            </h1>
          </div>

          <div className="text-xs text-muted-foreground">
            Smartphones
          </div>
        </div>
      </header>

      {/* PRODUCTS */}

      <ProductGrid />
    </main>
  );
}

export default App;
