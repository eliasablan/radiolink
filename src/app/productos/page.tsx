import React from 'react';
import { getCollectionProducts, getProducts } from '@/lib/shopify';
import ProductCard from '@/components/product-card';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

export default async function page() {
  const allProducts = await getProducts({});
  const portatiles = await getCollectionProducts({
    collection: 'radios-portatiles-motorola',
  });
  const moviles = await getCollectionProducts({
    collection: 'radios-moviles-motorola',
  });
  const repetidores = await getCollectionProducts({
    collection: 'repetidores-motorola',
  });
  console.log({
    portatiles: portatiles.length,
    moviles: moviles.length,
    repetidores: repetidores.length,
    allProducts: allProducts.length,
  });
  return (
    <>
      {/* Radios Portátiles Motorola */}
      <div className="w-full bg-primary">
        <div className="container py-12">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            Radios Portátiles Motorola
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Serie Profesional
          </h3>
        </div>
      </div>
      <div className="container grid gap-4 py-12 md:grid-cols-5">
        {portatiles.map((product) => (
          <ProductCard
            key={product.id}
            loading="lazy"
            product={product}
            src={product.featuredImage?.url}
            alt={product.title}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>

      {/* Radios Moviles Motorola */}
      <div className="w-full bg-primary">
        <div className="container py-12">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            Radios Moviles Motorola
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Equipos de Radio de dos vías
          </h3>
        </div>
      </div>
      <div className="container grid gap-4 py-12 md:grid-cols-5">
        {moviles.map((product) => (
          <ProductCard
            key={product.id}
            loading="lazy"
            product={product}
            src={product.featuredImage?.url}
            alt={product.title}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>

      {/* Repetidores Motorola */}
      <div className="w-full bg-primary">
        <div className="container py-12">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            Repetidores Motorola
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Repetidores Analógicos y Digitales VHF/UHF
          </h3>
        </div>
      </div>
      <div className="container grid gap-4 py-12 md:grid-cols-5">
        {repetidores.map((product) => (
          <ProductCard
            key={product.id}
            loading="lazy"
            product={product}
            src={product.featuredImage?.url}
            alt={product.title}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>

      {/* Contenido extra */}
      <div className="w-full bg-primary">
        <div className="container py-12">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            La serie de radios digitales MOTOTRB ENHANCED de Motorola
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Repetidores Analógicos y Digitales VHF/UHF
          </h3>
        </div>
      </div>
      <div className="container py-8">
        <Image
          src="/catalogo/uno.webp"
          alt="Expansion celular"
          layout="responsive"
          className="my-8"
          width={3840}
          height={75}
        />
        <p className="my-8 text-muted-foreground">
          La Serie de Radios digitales MOTOTRBO Enhanced de MOTOROLA
          compendia toda la tecnología de punta desarrollada mundialmente
          para comunicaciones móviles hasta el presente, junto a los más
          recientes desarrollos incorporados por los más importantes
          Institutos y Comités integradores de Normativas de calidad,
          seguridad y confiabilidad; así como, el abanico completo de
          capacidades y facilidades exigidos por el estándar mundial
          digital DMR, al cual La Plataforma se apega. Los centros
          científicos de diseño y creación de MOTOROLA Solutions,
          innovadores de punta, y productores de los avances electrónicos y
          de comunicaciones más importantes e icónicos durante casi un
          siglo, han dotado a la serie de Radios Digitales MOTOTRBO
          Enhanced del conjunto más completo de bondades y facilidades de
          comunicación, aunado a los acostumbrados niveles de calidad,
          solidez y durabilidad, característicos de la marca.
        </p>
        <p className="my-8 text-muted-foreground">
          La Plataforma MOTOTRBO Enhanced de MOTOROLA, incluye radios
          capaces de manejar hasta 1000 diferentes canales de comunicación,
          de funcionamiento dual, analógico o digital, configurables
          flexiblemente con todas las posibilidades y bondades presentes en
          La Plataforma. Llamadas selectivas y de grupo, llamadas de
          alerta, y la configuración de unidades supervisoras capaces de
          controlar grandes grupos o flotas completas, y hasta grupos de
          software, no necesariamente pre – asignados a canal alguno.
        </p>
        <h2 className="my-8 text-4xl font-semibold uppercase text-primary">
          Capacitada y facultada para requerimientos de «misión crítica»
        </h2>

        <Image
          src="/catalogo/dos.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <p className="mt-8 text-muted-foreground">
          Todos los elementos y componentes de La Plataforma MOTOTRBO están
          especificados para funcionar al máximo de sus capacidades y
          rendimientos sobre la base de las condiciones y parámetros que a
          continuación se especifican:
        </p>
        <ul className="mb-8 mt-4 list-inside list-disc text-muted-foreground">
          <li>
            Ciclo continuo de Operación, es decir, de manera continua e
            ininterrumpida las 24 horas del día, 365 días al año.
          </li>
          <li>
            Grado máximo o inmediato de disponibilidad del canal de
            comunicación, entendido como “Retardo Cero” después del
            accionamiento del Botón de PTT.
          </li>
          <li>
            Especificaciones extremas de solidez sobre la base de
            estándares militares, protección contra elementos y pruebas de
            vida acelerada mundialmente aceptadas.
          </li>
        </ul>
        <h2 className="my-8 text-4xl font-semibold uppercase text-primary">
          Productos de nuevas capacidades, rendimiento y performance
        </h2>

        <Image
          src="/catalogo/tres.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <ul className="my-8 list-inside list-disc text-muted-foreground">
          <li>
            MOTOTRBO Enhanced contempla la dotación de sistemas WiFi en las
            diferentes unidades de radio, lo cual permite la administración
            inalámbrica o remota de las unidades y abre un compás inmenso
            de opciones para desarrollos y aplicaciones de comunicación en
            el futuro.
          </li>
          <li>
            En cuanto a la{' '}
            <span className="font-bold">
              autonomía eléctrica y de funcionamiento
            </span>
            ,MOTOTRBO Enhanced mejoró sustancialmente el performance
            general, extendiéndose a{' '}
            <span className="font-bold">
              más de 48 horas continuas la duración de las baterías
              recargables
            </span>{' '}
            por ciclo de operación, en condiciones de trabajo Tx /Stand By
            del 20%, establecidas como el formato de control de mediciones
            estándar, adoptado como referencia hasta el presente.
          </li>
          <li>
            La Plataforma ha incorporado nuevas facilidades de seguridad
            personal, tal y como lo son el{' '}
            <span className="font-bold">“Man Down”</span> , y las{' '}
            <span className="font-bold">
              señales de alerta por lapsos de inactividad completa y
              flexiblemente configurables
            </span>
            . Con éste conjunto de facilidades se puede diseñar y programar
            en las unidades de radio las condiciones exactas capaces de
            prestablecer y definir las situaciones de irregularidad o
            riesgo particulares de cada usuario o cliente específico, quien
            es el único ente calificado para precisarlas.
          </li>
          <li>
            MOTOTRBO en la actualidad cumple a cabalidad con normativas
            mundiales de durabilidad, solidez y confiabilidad como lo son{' '}
            <span className="font-bold">IP67</span>, que estipula
            características de resistencia ambiental de los equipos
            electrónicos tales que mantengan todas funciones y parámetros
            de rendimiento y desempeño estando sumergidos hasta cuatro 4
            metros por lapsos máximos de cuatro 4 horas.
          </li>
          <li>
            MOTOTRBO cumple cabalmente el conjunto de{' '}
            <span className="font-bold">Normas Militares de Solidez</span>{' '}
            que han caracterizado a la Marca desde sus inicios. En la
            actualidad aprueba los siguientes Estándares Militares:
          </li>
        </ul>

        <Image
          src="/catalogo/cuatro.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <h2 className="my-8 text-4xl font-semibold uppercase text-primary">
          Estrategia de motorola solutions certificación de facultad para
          áreas peligrosas normativa tía hazloc
        </h2>

        <Image
          src="/catalogo/cinco.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <h2 className="mb-4 mt-8 text-4xl font-semibold uppercase text-primary">
          Transición en certificaciones de áreas peligrosas
        </h2>
        <p className="my-4 text-muted-foreground">
          Si opera en entornos donde podría haber polvo, vapores o gases
          inflamables o explosivos, debería considerar la implementación de
          equipos de comunicación certificados para áreas peligrosas,
          comúnmente conocidos como “HAZLOC”.
        </p>
        <p className="font-bold">
          CADUCIDAD DE ESTÁNDAR NUEVOS EMBLEMAS ACCIÓN REQUERIDA *TIA:
        </p>
        <p className="my-4 text-muted-foreground">
          Telcommunications Industry Association HOJA DE DATOS ESTRATEGIA
          DE RADIO DE DOS VÍAS DE MOTOROLA SOLUTIONS PARA ÁREAS PELIGROSAS
          (HAZLOC) El estándar Factory Mutual FM3610_88 establecido caducó
          en 2012. La producción de radios certificados conforme FM3610_88
          será discontinuada en diciembre de 2015. Motorola se irá
          adaptando al nuevo estándar TIA-4950 respecto de la certificación
          de sus radios de dos vías para ambientes peligrosos, el cual es
          similar al estándar FM3610_88. Las pruebas de cumplimiento serán
          ejecutadas por UL (Underwriters Laboratories).
        </p>
        <p className="my-4 text-muted-foreground">
          Los radios certificados conforme a FM implementados en campo,
          mantendrán su estado de aprobación FM como «Intrínsecamente
          Seguro», siempre que todo servicio técnico o reparación se
          efectúe en instalaciones inspeccionadas por FM.
        </p>
        <p className="font-bold">NUEVOS EMBLEMAS</p>
        <p className="my-4 text-muted-foreground">
          Las baterías y los radios ASTRO 25™ y MOTOTRBO™ certificados
          conforme a TIA-4950 están disponibles actualmente. Están
          claramente identificados con los nuevos emblemas.
        </p>
        <p className="font-bold">ACCIÓN REQUERIDA</p>
        <p className="my-4 text-muted-foreground">
          Asegúrese de que la documentación de sus instalaciones defina los
          requerimientos para Áreas Peligrosas en términos de División,
          Clase y Grupo; es decir, que no solo incluya la leyenda “Aprobado
          por FM” o “Intrínsecamente Seguro”. Es importante conocer la
          clasificación específica de Áreas Peligrosas a fin de seleccionar
          correctamente los equipos aprobados para cada entorno.
        </p>
        <p className="font-bold">CLASIFICACIÓN HAZLOC</p>
        <p className="my-4 text-muted-foreground">
          Son muchas las industrias en las que puede existir áreas
          peligrosas, incluidas refinerías, instalaciones de almacenamiento
          de combustible, plantas químicas, elevadores de granos y plantas
          de procesamiento de plásticos. El Código Eléctrico Nacional (NEC)
          NFPA 70 define “las áreas peligrosas” como «lugares con riesgo de
          incendio o explosión debido a la presencia de gases o vapores
          inflamables, líquidos inflamables, polvo combustible o partículas
          en suspensión o fibras inflamables».
        </p>
        <p className="my-4 text-muted-foreground">
          Los fabricantes de equipos no determinan la necesidad de
          implementar productos “HAZLOC” ni examinan el entorno en el que
          se usarán los radios. La clasificación «Áreas peligrosas» está
          determinada por las Autoridades Jurisdiccionales (Authorities
          Having Jurisdiction – AHJs) sobre las instalaciones en cuestión;
          por ejemplo, el Jefe de Bomberos, el proveedor de seguros o un
          experto en seguridad de instalaciones.
        </p>
        <p className="font-bold">
          CÓDIGO ELÉCTRICO NACIONAL (NEC) NFPA 70
        </p>
        <p className="my-4 font-bold text-muted-foreground">Clases</p>
        <ul className="my-4 list-inside list-disc text-muted-foreground">
          <li>Clase I: Gases, vapores o líquidos inflamables</li>
          <li>Clase II: Polvos combustibles</li>
          <li>Clase III: Partículas en suspensión y fibras inflamables</li>
        </ul>
        <p className="my-4 font-bold text-muted-foreground">
          División (Clasificación de Área)
        </p>
        <ul className="my-4 list-inside list-disc text-muted-foreground">
          <li>
            División 1: Lugares con presencia, permanente o parcial, de
            gas, vapor, líquido o polvo inflamable durante las condiciones
            operativas normales
          </li>
          <li>
            División 2: Lugares con muy baja probabilidad de presencia de
            gas, vapor, líquido o polvo inflamable durante las condiciones
            operativas normales
          </li>
        </ul>
        <p className="my-4 font-bold text-muted-foreground">
          Grupos (Organizados por Clases)
        </p>
        <p className="my-4 font-bold text-muted-foreground">
          Clase I: Grupos de Gases
        </p>
        <ul className="my-4 list-inside list-disc text-muted-foreground">
          <li>Grupo A: grupo de acetileno y gases equivalentes</li>
          <li>Grupo B: grupo de hidrógeno y gases equivalentes</li>
          <li>Grupo C: grupo de etileno y gases equivalentes</li>
          <li>Grupo D: grupo de metano y gases equivalentes</li>
        </ul>
        <p className="my-4 font-bold text-muted-foreground">
          Clase II: Grupos de Polvos
        </p>
        <ul className="my-4 list-inside list-disc text-muted-foreground">
          <li>
            Grupo E: polvos conductores (mecánico; fábricas, recicladoras)
          </li>
          <li>
            Grupo F: polvos de carbón combustible (polvo de carbón vegetal
            y coque); solo sobre el nivel del suelo
          </li>
          <li>Grupo G: polvos de granos</li>
        </ul>
        <p className="my-4 font-bold text-muted-foreground">
          Clase III: Para Las Fibras no hay Subgrupos
        </p>
        <Table className="my-4 border">
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Laboratorio de Certificación
              </TableCell>
              <TableCell>FM Approvals (FM)</TableCell>
              <TableCell>UnderWritters Laboratories (UL)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Estándar
              </TableCell>
              <TableCell>Aplicado FM 310_88</TableCell>
              <TableCell>TIA-4950</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Clasificación
              </TableCell>
              <TableCell>
                División 1<br />
                Clase I, Grupos C,D,
                <br />
                Clase II, GRupos E,F,G,
                <br />
                Clase III, T3C División 1
              </TableCell>
              <TableCell>
                División 1<br />
                Clase I, Grupos C,D,
                <br />
                Clase II, GRupos E,F,G,
                <br />
                Clase III, T3C
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Apto para usos en áreas peligrosas
              </TableCell>
              <TableCell>SI</TableCell>
              <TableCell>SI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Ejemplo de etiqueta en radios ASTRO 15
              </TableCell>
              <TableCell>
                <Image
                  src="/catalogo/table/astro1.webp"
                  alt="astro 1"
                  width={200}
                  height={200}
                />
              </TableCell>
              <TableCell>
                <Image
                  src="/catalogo/table/astro2.webp"
                  alt="astro 1"
                  width={300}
                  height={150}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">
                Ejemplo de etiqueta en radios MOTOTRBO
              </TableCell>
              <TableCell>
                <Image
                  src="/catalogo/table/mototrbo1.webp"
                  alt="mototrbo 1"
                  width={300}
                  height={150}
                />
              </TableCell>
              <TableCell>
                <Image
                  src="/catalogo/table/mototrbo2.webp"
                  alt="mototrbo 2"
                  width={300}
                  height={150}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 className="mb-4 mt-8 text-4xl font-semibold uppercase text-primary">
          Apego al estándar de la digital mobile radio asociation (DMR)
        </h2>

        <Image
          src="/catalogo/seis.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <p className="my-8 text-muted-foreground">
          El apego cabal y riguroso al estándar mundial DMR permite mejoras
          sustanciales en la calidad de la señal de voz, la cual se blinda
          materialmente ante el ruido electromagnético, obteniéndose al
          mismo tiempo considerables mejoras en el alcance de la señal de
          radio, en comparación con los tradicionales sistemas de
          modulación analógica, que fueron hasta hace pocos años, los de
          mayor rendimiento en el alcance asociado a una sola radio celda
          de transrecepción.{' '}
        </p>
        <p className="my-8 text-muted-foreground">
          De acuerdo a lo previsto por el estándar DMR, MOTOTRBO contempla
          el manejo simultáneo de dos canales de comunicación completamente
          independientes mediante modulación o división por tiempo
          multiplexado. De esta forma se optimiza la capacidad del manejo
          del tráfico de las radio – llamadas por cada canal de
          comunicación, llegando inclusive a duplicarse en muchos casos.
          Algunas de las más nuevas e innovadoras capacidades y facilidades
          de seguridad, rendimiento, calidad y desempeño, incorporadas por
          la Plataforma pueden mencionarse a continuación:
        </p>
        <h2 className="my-8 text-4xl font-semibold uppercase text-primary">
          Facilidades, bondades y aplicaciones inherentes a la plataforma
          mototrbo
        </h2>

        <Image
          src="/catalogo/siete.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <ul className="my-8 list-inside list-disc text-muted-foreground">
          <li>
            Conectividad y comunicación con Redes{' '}
            <span className="font-bold">LAN, WAN e Internet</span>.
          </li>
          <li>
            La Mensajería de texto <span className="font-bold">SMS</span>,
            Radio a Radio, Radio a Grupo, Radio A Flota, Radio Terminal
            LAN, vicecersa.
          </li>
          <li>
            Aplicaciones de <span className="font-bold">Telemetría</span>.
          </li>
          <li>
            La{' '}
            <span className="font-bold">Tele – localización por GPS</span>{' '}
            y todos los estándares mundiales de Geo Posicionamiento
            existentes en la actualidad.
          </li>
          <li>
            Aplicaciones para el manejo de grandes flotas de radios
            controladas y visualizadas con su posición exacta sobre de
            mapas digitalizados, correspondientes a cada localidad o Región
            en el mundo entero, combinándose la aplicación y uso de
            diferentes facilidades al mismo tiempo, como el Radio Despacho,
            la Mensajería de Texto y el Geo Posicionamiento desde un único
            terminal o Cónsola de Radio Despacho y Control.
          </li>
          <li>
            La{' '}
            <span className="font-bold">
              Encripción o Encriptación Digital{' '}
            </span>{' '}
            de las conversaciones de voz y Texto en diferentes niveles de
            complejidad, y de acuerdo a diferentes algoritmos, otorgándole
            importantes grados de invulnerabilidad, privacidad, y seguridad
            a las comunicaciones.
          </li>
          <li>
            La interconexión ({' '}
            <span className="font-bold">“NetWorking”</span>) a través y
            mediante protocolos de redes de Datos{' '}
            <span className="font-bold">Ethernet y TCP IP</span>,
            permitiéndose el establecimiento a su vez de amplias redes de
            Radio Digital de relativo bajo costo de implementación, sin
            límites en su alcance o extensión, si se considera y aprovecha
            a la propia <span className="font-bold">Internet</span> para su
            configuración.
          </li>
        </ul>
        <h2 className="my-8 text-4xl font-semibold uppercase text-primary">
          Funcionabilidad e incorporación completa de bluetooth 4.0
        </h2>

        <Image
          src="/catalogo/ocho.webp"
          alt="Expansion celular"
          layout="responsive"
          width={3840}
          height={75}
        />
        <ul className="my-8 list-inside list-disc text-muted-foreground">
          <li>
            Actualmente los radios de la serie MOTOTRBO Enhanced incluyen
            toda la funcionabilidad del Bluetooth 4.0 que permite el
            intercambio y comunicación de datos con otros dispositivos,
            contempla diámetros de alcance de un orden magnitud mayores a
            los típicos del estándar en sus versiones anteriores, e incluye
            la posibilidad de utilizar celdas de repetición intermedias
            para extender la penetración hacia áreas o zonas de muy difícil
            acceso. Gracias a Bluetooth 4.0, la{' '}
            <span className="font-bold">tele – localización</span> de
            unidades suscriptoras o radios se extiende a los recintos
            interiores en edificaciones ({' '}
            <span className="font-bold">“In Door”</span>), los cuales no
            poseen espacios o áreas abiertas hacia los satélites de geo
            posicionamiento, y de esta forma las diferentes aplicaciones
            contemplan la alimentación de sus bases de datos particulares
            con la información planos digitales internos de las mismas
            edificaciones u oficinas de los diferentes usuarios.
          </li>
        </ul>
      </div>
    </>
  );
}
