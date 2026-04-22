"use client";

import { MessageCircle, Phone } from "lucide-react";
import {
  getPhoneClickContextFromPath,
  trackPhoneCallClick,
  trackWhatsAppClick,
} from "@/lib/events";

const PHONE_DISPLAY = "0532 303 91 69";
const PHONE_TEL = "tel:+905323039169";
const WHATSAPP_URL = "https://wa.me/905323039169";

/** Footer’daki önceden tanımlı mesaj yok — boş metin ile `whatsapp_click`. */
const FOOTER_WHATSAPP_CONTEXT = "";

export function FooterContactLinks() {
  const onPhoneClick = () => {
    const ctx = getPhoneClickContextFromPath(window.location.pathname);
    trackPhoneCallClick(ctx.page_type, ctx.region ? { region: ctx.region } : undefined);
  };

  const onWhatsAppClick = () => {
    const ctx = getPhoneClickContextFromPath(window.location.pathname);
    trackWhatsAppClick(ctx.page_type, FOOTER_WHATSAPP_CONTEXT);
  };

  return (
    <div className="flex flex-col gap-3">
      <a
        href={PHONE_TEL}
        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        onClick={onPhoneClick}
      >
        <Phone className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
        {PHONE_DISPLAY}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 max-w-fit items-center justify-center gap-2 rounded-lg bg-success px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        onClick={onWhatsAppClick}
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
        WhatsApp
      </a>
    </div>
  );
}
