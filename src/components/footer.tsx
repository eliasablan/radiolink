import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <>
      <div className="bg-accent py-8">
        <div className="container grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Santo Domingo
              </h4>
              <p>
                Calle Filomena Gómez de Cova No. 303. Edif. 9+Dos.
                Serrallés. Santo Domingo. DN
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Telefono
              </h4>
              <p>+1 (829) 393-4008</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Whatsapp
              </h4>
              <p>+1 (829) 393-4008</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Oficina
              </h4>
              <p>+1 (809) 964-3451</p>
            </div>
            <Separator className="md:hidden" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Caracas
              </h4>
              <p>
                Av. Orinoco, entre calles Nicolás Copérnico y Perijá. Edif.
                Arbicenter, PH, Ofc. 11. Las Mercedes, Caracas.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Telefono
              </h4>
              <p>+58 (424) 218-8996</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Whatsapp
              </h4>
              <p>+58 (424) 218-8996</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Oficina
              </h4>
              <p>+58 (212) 991-2617 +58 (212) 991-9901</p>
            </div>
            <Separator className="md:hidden" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Ciudad de Panamá
              </h4>
              <p>
                Las Sabanas, Vía España Ph, Park Lane Tower, Oficina 5A,
                Hato Pintado, Ciudad de Panamá, Panamá.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Telefono
              </h4>
              <p>+58 (424) 218-8996</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Whatsapp
              </h4>
              <p>+58 (424) 218-8996</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-primary">
                Oficina
              </h4>
              <p>+58 (212) 991-2617</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-primary py-3 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          {/* Derechos de autor */}
          <div className="text-center md:mb-0 md:text-left">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Radiolink - Servicios
              Integrados de Telecomunicaciones. Repetición y ampliación de
              Coberturas para radios y celulares.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link
              href="/"
              target="_blank"
              className="transition duration-300 hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="transition duration-300 hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4.01c-.75.35-1.54.58-2.37.69a4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1A4.13 4.13 0 0 0 16 3c-2.3 0-4.2 2-4.2 4.4 0 .34.04.67.1.99-3.47-.17-6.55-1.87-8.61-4.44a4.54 4.54 0 0 0-.57 2.2c0 1.52.73 2.86 1.82 3.64a4.1 4.1 0 0 1-1.9-.54v.05c0 2.13 1.5 3.9 3.48 4.3a4.2 4.2 0 0 1-1.88.07c.53 1.67 2.08 2.87 3.91 2.9A8.3 8.3 0 0 1 2 19.3a11.7 11.7 0 0 0 6.29 1.89c7.55 0 11.67-6.42 11.67-11.98 0-.18-.01-.37-.02-.55A8.6 8.6 0 0 0 22 4.01z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
