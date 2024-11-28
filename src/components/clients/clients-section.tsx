import React from 'react';
import { ClientLogo } from './client-logo';

const clients = [
  { name: 'FTC', logo: '/clientes/ftc.png' },
  { name: 'DHL', logo: '/clientes/dhl.png' },
  { name: 'Sincor', logo: '/clientes/sincor.png' },
  { name: 'Brinks', logo: '/clientes/brinks.png' },
  { name: 'Panalpina', logo: '/clientes/panalpina.png' },
  { name: 'Edeeste', logo: '/clientes/edeeste.png' },
  { name: 'BOD', logo: '/clientes/bod.png' },
  { name: 'Bayer', logo: '/clientes/bayer.png' },
  { name: 'Motorola', logo: '/clientes/solutions.png' },
  { name: 'Suelopetol', logo: '/clientes/suelopetrol.png' },
  { name: 'Alcaldia', logo: '/clientes/alcaldia.png' },
  { name: 'Femsa', logo: '/clientes/femsa.png' },
];

export function ClientsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Clientes</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {clients.map((client) => (
            <ClientLogo key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
