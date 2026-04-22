"use client";

import { Check } from "lucide-react";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { SERVICES } from "@/data/services";
import { getPriorityRegions } from "@/data/regions";
import { clarityEvent } from "@/lib/clarity";
import { pushEvent } from "@/lib/gtm";

function getFormRegions() {
  const merged = [...getPriorityRegions(1), ...getPriorityRegions(2)];
  return [...merged].sort((a, b) =>
    a.name.localeCompare(b.name, "tr", { sensitivity: "base" })
  );
}

type FieldErrors = Partial<
  Record<"name" | "phone" | "regionSlug" | "serviceSlug", string>
>;

const initialForm = {
  name: "",
  phone: "",
  regionSlug: "",
  serviceSlug: "",
  message: "",
};

export function ContactFormSection() {
  const baseId = useId();
  const regions = useMemo(() => getFormRegions(), []);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Ad soyad gerekli";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) next.phone = "Telefon gerekli";
    else if (phoneDigits.length < 10)
      next.phone = "Geçerli bir telefon girin";
    if (!form.regionSlug) next.regionSlug = "İlçe seçin";
    if (!form.serviceSlug) next.serviceSlug = "Hizmet seçin";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const region =
      regions.find((r) => r.slug === form.regionSlug)?.name ?? form.regionSlug;
    const service =
      SERVICES.find((s) => s.slug === form.serviceSlug)?.name ??
      form.serviceSlug;

    void (async () => {
      await pushEvent("form_submit", { service, region });
      clarityEvent("contact_form_submit");
    })();

    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;
    const t = window.setTimeout(() => {
      setSubmitted(false);
      setForm({ ...initialForm });
      setErrors({});
    }, 3000);
    return () => clearTimeout(t);
  }, [submitted]);

  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="rounded-xl border border-border bg-white p-6 shadow-md md:p-10 md:grid md:grid-cols-2 md:gap-10 md:items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Sizi Arayalım
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Formu doldurun, uzman ekibimiz sizi en kısa sürede arasın.
            </p>
          </div>

          <div className="relative mt-8 md:mt-0">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-3 rounded-lg border border-success/30 bg-success/10 px-6 py-12 text-center"
                role="status"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
                  <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden />
                </span>
                <p className="text-base font-semibold text-primary">
                  Teşekkürler! En kısa sürede sizi arayacağız.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4"
                noValidate
              >
                <div>
                  <label
                    htmlFor={`${baseId}-name`}
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Ad Soyad <span className="text-accent">*</span>
                  </label>
                  <input
                    id={`${baseId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-primary outline-none ring-mid focus:border-mid focus:ring-2 focus:ring-mid/20"
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-accent">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${baseId}-phone`}
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Telefon <span className="text-accent">*</span>
                  </label>
                  <input
                    id={`${baseId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="05xx xxx xx xx"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-primary outline-none ring-mid focus:border-mid focus:ring-2 focus:ring-mid/20"
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-accent">{errors.phone}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${baseId}-region`}
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    İlçe <span className="text-accent">*</span>
                  </label>
                  <select
                    id={`${baseId}-region`}
                    name="region"
                    required
                    value={form.regionSlug}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, regionSlug: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-primary outline-none ring-mid focus:border-mid focus:ring-2 focus:ring-mid/20"
                  >
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {regions.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                  {errors.regionSlug ? (
                    <p className="mt-1 text-xs text-accent">
                      {errors.regionSlug}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${baseId}-service`}
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Hizmet <span className="text-accent">*</span>
                  </label>
                  <select
                    id={`${baseId}-service`}
                    name="service"
                    required
                    value={form.serviceSlug}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, serviceSlug: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-primary outline-none ring-mid focus:border-mid focus:ring-2 focus:ring-mid/20"
                  >
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.serviceSlug ? (
                    <p className="mt-1 text-xs text-accent">
                      {errors.serviceSlug}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${baseId}-message`}
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id={`${baseId}-message`}
                    name="message"
                    rows={4}
                    placeholder="Sorununuzu kısaca anlatın..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full resize-y rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-primary outline-none ring-mid focus:border-mid focus:ring-2 focus:ring-mid/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-accent py-3 text-sm font-bold text-white transition-opacity hover:opacity-95 active:opacity-90"
                >
                  Geri Arayın
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
