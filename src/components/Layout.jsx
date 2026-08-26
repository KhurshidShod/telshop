export default function Layout({ children }) {
  return (
    <main
      className="
        mx-auto
        w-full
        max-w-[1550px]
        min-w-0

        px-2
        py-4

        min-[360px]:px-3
        min-[360px]:py-5

        sm:px-5
        sm:py-7

        md:px-7
        md:py-8

        lg:px-9
        lg:py-10

        xl:px-12
        xl:py-12
      "
    >
      <div
        className="
          flex
          w-full
          min-w-0
          flex-col

          gap-5

          min-[360px]:gap-6

          sm:gap-8

          md:gap-9

          lg:gap-10
        "
      >
        {children}
      </div>
    </main>
  );
}
