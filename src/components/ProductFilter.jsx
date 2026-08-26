import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import FilterCheckbox from './FilterCheckbox';
// import { Checkbox } from '@/components/ui/checkbox';

const categories = ['Telefonlar', 'MacBook', 'Planshet'];
const brands = ['Apple', 'Samsung', 'Xiaomi'];
const conditions = ['Yangi', 'B/U'];
const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

export default function ProductFilter() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className="
        w-full
        lg:sticky
        lg:top-30
        lg:w-60
        lg:shrink-0
        lg:self-start
      "
    >
      {/* Mobile filter button */}
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen((value) => !value)}
        className="
          flex
          h-11
          w-full
          items-center
          justify-between
          rounded-xl
          border-gray-200
          bg-white
          px-4
          text-sm
          font-medium
          text-gray-900
          shadow-sm
          hover:bg-gray-50
          dark:border-zinc-800
          dark:bg-zinc-900
          dark:text-zinc-100
          dark:hover:bg-zinc-800
          lg:hidden
        "
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal className="size-4" />
          Filtrlar
        </span>

        <ChevronDown
          className={`size-4 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </Button>

      {/* Filter content */}
      <div
        className={`
          mt-3
          rounded-xl
          border
          border-gray-200
          bg-white
          p-4
          dark:border-zinc-800
          dark:bg-zinc-900
          lg:mt-0
          lg:block
          lg:p-5
          ${open ? 'block' : 'hidden'}
        `}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Filtrlar
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Mahsulotlarni saralash
            </p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="
              h-auto
              px-0
              text-xs
              font-medium
              text-yellow-600
              hover:bg-transparent
              hover:text-yellow-700
              dark:text-yellow-400
              dark:hover:bg-transparent
              dark:hover:text-yellow-300
            "
          >
            Tozalash
          </Button>
        </div>

        <div className="space-y-6">
          {/* Category */}
          <FilterSection title="Kategoriya">
            {categories.map((category) => (
              <FilterCheckbox
                key={category}
                id={`category-${category}`}
                label={category}
              />
            ))}
          </FilterSection>

          {/* Brand */}
          <FilterSection title="Brend">
            {brands.map((brand) => (
              <FilterCheckbox
                key={brand}
                id={`brand-${brand}`}
                label={brand}
              />
            ))}
          </FilterSection>

          {/* Condition */}
          <FilterSection title="Holati">
            {conditions.map((condition) => (
              <FilterCheckbox
                key={condition}
                id={`condition-${condition}`}
                label={condition}
              />
            ))}
          </FilterSection>

          {/* Storage */}
          <FilterSection title="Xotira">
            {storageOptions.map((storage) => (
              <FilterCheckbox
                key={storage}
                id={`storage-${storage}`}
                label={storage}
              />
            ))}
          </FilterSection>

          {/* Price */}
          <FilterSection title="Narx">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-900
                  outline-none
                  transition-colors
                  placeholder:text-gray-400
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/20
                  dark:border-zinc-700
                  dark:bg-zinc-800
                  dark:text-zinc-100
                  dark:placeholder:text-zinc-500
                "
              />

              <input
                type="number"
                placeholder="Max"
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-900
                  outline-none
                  transition-colors
                  placeholder:text-gray-400
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/20
                  dark:border-zinc-700
                  dark:bg-zinc-800
                  dark:text-zinc-100
                  dark:placeholder:text-zinc-500
                "
              />
            </div>
          </FilterSection>

          {/* Availability */}
          <FilterSection title="Mavjudligi">
            <FilterCheckbox
              id="available"
              label="Faqat mavjud"
            />
          </FilterSection>
        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   FILTER SECTION
========================================================= */

function FilterSection({ title, children }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>

      <div className="space-y-2.5">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   FILTER CHECKBOX
========================================================= */

// function FilterCheckbox({ id, label }) {
//   return (
//     <div className="flex items-center gap-2">
//       <Checkbox
//         id={id}
//         className="
//           size-4
//           rounded-[4px]
//           border-gray-300
//           data-[state=checked]:border-yellow-400
//           data-[state=checked]:bg-yellow-400
//           data-[state=checked]:text-zinc-950
//           dark:border-zinc-700
//           dark:data-[state=checked]:border-yellow-400
//           dark:data-[state=checked]:bg-yellow-400
//           dark:data-[state=checked]:text-zinc-950
//         "
//       />

//       <label
//         htmlFor={id}
//         className="
//           cursor-pointer
//           select-none
//           text-sm
//           text-gray-700
//           dark:text-zinc-300
//         "
//       >
//         {label}
//       </label>
//     </div>
//   );
// }
