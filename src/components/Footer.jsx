import { Clock3, MapPin, Phone } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from 'react-icons/fa';

const companyLinks = [
  'Biz haqimizda',
  'Aloqa',
  'Yetkazib berish',
  "To'lov turlari",
  'Qaytarish siyosati',
  "Do'konlar",
  'Sayt xaritasi',
];

const categoryLinks = [
  'Knopkali telefonlar',
  'Smartfonlar',
  'Gadjetlar',
  'Aksessuar va jihozlar',
];

const Footer = () => {
  return (
    <footer
      className="
        mt-16
        w-full
        border-t
        border-zinc-800
        bg-zinc-950
        text-zinc-300

        sm:mt-20
        lg:mt-24
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1550px]
          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10

          lg:px-12
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12

            lg:grid-cols-[1.5fr_1fr_1fr_1.35fr]
            lg:gap-12
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <h2
              className="
                text-xl
                tracking-tight
                text-white
                font-black
                sm:text-[21px]
              "
            >
              Texno<span className='text-yellow-400'>Dom</span>
            </h2>

            <p
              className="
                mt-3
                max-w-sm
                text-sm
                leading-6
                text-zinc-400
              "
            >
              Eng so'nggi gadjetlar va elektronika do'koni. Sifat va ishonch
              kafolati.
            </p>

            {/* Socials */}

            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Telegram"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-yellow-400 hover:text-gray-950"
              >
                <FaTelegramPlane className="size-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-yellow-400 hover:text-gray-950"
              >
                <FaInstagram className="size-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-yellow-400 hover:text-gray-950"
              >
                <FaFacebookF className="size-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-yellow-400 hover:text-gray-950"
              >
                <FaYoutube className="size-4" />
              </a>
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                text-yellow-400
              "
            >
              Kompaniya
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-zinc-400
                      transition-colors
                      duration-200
                      hover:text-yellow-400
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CATEGORIES
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                text-yellow-400
              "
            >
              Kategoriyalar
            </h3>

            <ul className="mt-5 space-y-3">
              {categoryLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-zinc-400
                      transition-colors
                      duration-200
                      hover:text-yellow-400
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                text-yellow-400
              "
            >
              Biz bilan aloqa
            </h3>

            <div className="mt-5 space-y-4">
              {/* Phone */}

              <a
                href="tel:+998XXXXXXXXX"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-400
                  transition-colors
                  hover:text-yellow-400
                "
              >
                <Phone
                  className="
                    size-4
                    shrink-0
                    text-yellow-400
                  "
                />

                <span>+998 XX XXX XX XX</span>
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-400
                "
              >
                <MapPin
                  className="
                    size-4
                    shrink-0
                    text-yellow-400
                  "
                />

                <span>Toshkent sh.</span>
              </div>

              {/* Working hours */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-400
                "
              >
                <Clock3
                  className="
                    size-4
                    shrink-0
                    text-yellow-400
                  "
                />

                <span>09:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div
          className="
            mt-10
            border-t
            border-zinc-800
            pt-6

            sm:mt-12
            sm:pt-7
          "
        >
          <p
            className="
              text-center
              text-xs
              text-zinc-500

              sm:text-sm
            "
          >
            © 2026 Texno Dom. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
