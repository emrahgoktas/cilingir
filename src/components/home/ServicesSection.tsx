import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-white px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          Hizmetlerimiz
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted md:text-base">
          Kapı açmadan yüksek güvenlik kilitlerine kadar tek numaradan yönlendirme.
        </p>
        <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.slug} className="min-w-0">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
