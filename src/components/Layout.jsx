export default function Layout({ children }) {
  return (
    <main
      className="
        mx-auto
        w-full
        max-w-[1550px]

        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12

        py-6
        sm:py-8
        md:py-10
        lg:py-12
        xl:py-14
      "
    >
      <div
        className="
          flex
          w-full
          flex-col
          gap-6
          sm:gap-8
          md:gap-10
          lg:gap-12
        "
      >
        {children}
      </div>
    </main>
  );
}
