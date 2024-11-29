import React from 'react';
import Image from 'next/image';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function page() {
  return (
    <>
      {/* Cabecera */}
      <div className="relative min-h-96 w-full">
        <Image
          src="/expansion/expansion-celular.jpg"
          alt="Expansion celular"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-8 space-y-6 px-8">
          <h3 className="text-pretty text-3xl font-bold text-white">
            Lleve la Comunicación a todas las áreas con nuestra tecnología
            de Expansión Celular <span>Wilson</span>
          </h3>
          <Button
            size="lg"
            variant="gooeyLeft"
            className="font-semibold"
            asChild
          >
            <Link href="/contacto">
              No se quede sin señal, contáctenos
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="container py-14">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            Sistemas de Expansión de Cobertura Celular
          </h2>
        </div>
      </div>

      {/* Contenido de la pagina */}
      <div className="container grid grid-cols-2 gap-8 py-32 md:grid-cols-4">
        <p className="col-span-full my-auto text-muted-foreground md:col-span-2">
          Representamos y distribuimos a la Firma Wilson, fabricante
          mundial de amplificadores expansores bidireccionales celulares en
          todas las bandas y plataformas existentes, desde GPRS para GSM
          hasta LTE 4G.
        </p>
        <div className="relative col-span-full row-span-2 min-h-[300px] bg-primary md:col-span-2 md:min-h-[500px]">
          <Image
            src="/expansion/barras.jpg"
            alt="Barras"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative col-span-full min-h-[200px] bg-accent md:col-span-2">
          <Image
            src="/expansion/sotanos.jpg"
            alt="Sotanos"
            fill
            className="object-contain"
          />
        </div>
        <Image
          src="/expansion/wilson.jpg"
          alt="Wilson"
          width={400}
          height={300}
          layout="responsive"
          className="my-auto"
        />
        <Card className="flex flex-col justify-center">
          <CardHeader>
            <Image
              src="/expansion/imagen-1.jpg"
              alt="Wilson"
              width={400}
              height={300}
              layout="responsive"
            />
          </CardHeader>
          <CardFooter>
            <h3 className="mb-4 w-full text-center text-xl font-bold">
              Wilson Pro 1000
            </h3>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-center">
          <CardHeader>
            <Image
              src="/expansion/imagen-2.jpg"
              alt="Wilson"
              width={400}
              height={300}
              layout="responsive"
            />
          </CardHeader>
          <CardFooter>
            <h3 className="mb-4 w-full text-center text-xl font-bold">
              Wilson Pro 1000
            </h3>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-center">
          <CardHeader>
            <Image
              src="/expansion/imagen-3.jpg"
              alt="Wilson"
              width={400}
              height={300}
              layout="responsive"
            />
          </CardHeader>
          <CardFooter>
            <h3 className="mb-4 w-full text-center text-xl font-bold">
              Wilson Pro 1000
            </h3>
          </CardFooter>
        </Card>
        <Image
          src="/expansion/imagen-4.jpg"
          alt="barras"
          width={400}
          height={300}
          layout="responsive"
          className="col-span-full my-auto"
        />
      </div>
      <div className="w-full bg-primary py-8">
        <div className="container flex items-center justify-center gap-8">
          <h4 className="text-4xl font-semibold text-primary-foreground">
            Contáctenos y mejore su cobertura
          </h4>
          <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            className="border-2 p-6 text-2xl"
            asChild
          >
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
