import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/metadata";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.9148171098104!2d29.0230747!3d41.114551399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab525c73e5e5b%3A0x4c9476f07dc2ba37!2sMaslak%20Anahtarium%20anahtar%20ve%20%C3%87ilingir!5e0!3m2!1str!2str!4v1775910445552!5m2!1str!2str";

const PHONE_DISPLAY = "0532 303 91 69";
const PHONE_TEL = "tel:+905323039169";
const WHATSAPP_URL = "https://wa.me/905323039169";
const DIRECTIONS_URL =
  "https://maps.google.com/?q=Maslak+Anahtarium+İstanbul";

type MapSectionProps = {
  mapHeight?: number;
};

export function MapSection({ mapHeight = 400 }: MapSectionProps) {
  return (
    <section className="overflow-x-hidden border-t border-border bg-white px-4 py-14 md:py-16">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-8 lg:grid-cols-5 lg:items-stretch lg:gap-10">
        <div className="min-w-0 lg:col-span-3">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height={mapHeight}
            style={{
              border: 0,
              borderRadius: "12px",
              minHeight: mapHeight,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maslak Anahtarium Konum"
            className="w-full max-w-full bg-surface/50"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center rounded-xl border border-border bg-surface p-6 shadow-sm lg:col-span-2">
          <p className="text-lg font-bold text-primary">{SITE_CONFIG.name}</p>

          <ul className="mt-6 flex flex-col gap-4 text-sm">
            <li className="flex gap-3 text-primary/90">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-mid"
                aria-hidden
              />
              <span>Ahi Evren Cad. No:120, Maslak, İstanbul</span>
            </li>
            <li>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-success hover:underline"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                WhatsApp
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="h-5 w-5 shrink-0 text-mid" aria-hidden />
              <span className="inline-flex rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                7/24 Açık
              </span>
            </li>
          </ul>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg border-2 border-accent bg-transparent px-4 py-3 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </section>
  );
}
