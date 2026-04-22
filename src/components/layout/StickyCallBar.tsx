"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  trackPhoneCallSticky,
  trackStickyBarShown,
  trackWhatsAppSticky,
} from "@/lib/events";

const SCROLL_THRESHOLD_PX = 200;
const PHONE_TEL = "tel:+905323039169";
const WHATSAPP_URL = "https://wa.me/905369405656";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const stickyShownTracked = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const v = window.scrollY > SCROLL_THRESHOLD_PX;
      setVisible(v);
      if (v && !stickyShownTracked.current) {
        stickyShownTracked.current = true;
        trackStickyBarShown();
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 w-full min-w-0 overflow-x-hidden md:hidden ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      } transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="w-full min-w-0 border-t border-white/10 bg-primary/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_24px_rgba(0,0,0,0.15)] backdrop-blur-sm">
        <div className="mx-auto flex w-full min-w-0 max-w-lg gap-2">
          <a
            href={PHONE_TEL}
            className="flex min-h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-2 text-sm font-bold text-white transition-opacity active:opacity-90 sm:px-3"
            onClick={() => trackPhoneCallSticky()}
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            Hemen Ara
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-success px-2 text-sm font-bold text-white transition-opacity active:opacity-90 sm:px-3"
            onClick={() => trackWhatsAppSticky()}
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
