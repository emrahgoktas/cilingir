import { BadgeCheck, CircleDollarSign, Shield, Zap } from "lucide-react";

const blocks = [
  {
    title: "Hız",
    icon: Zap,
    body:
      "Ortalama 12 dakika yanıt süresi — adres netleşince en yakın mobil ekibe yönlendirme yapılır.",
  },
  {
    title: "Güven",
    icon: Shield,
    body:
      "1.200+ memnun müşteri; kimlik ve mülkiyet teyidi ile oda kayıtlı işletme standardında müdahale.",
  },
  {
    title: "Fiyat Şeffaflığı",
    icon: CircleDollarSign,
    body:
      "Gelmeden önce telefonda net fiyat — sürpriz kalemleri önceden bildiririz.",
  },
  {
    title: "Garanti",
    icon: BadgeCheck,
    body:
      "İşçilik garantisi — memnun kalmazsanız ücretsiz düzeltme; takılan parçalar için üretici şartları geçerlidir.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section className="overflow-x-hidden border-t border-border bg-white px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          Neden Biz?
        </h2>
        <ul className="mt-10 grid list-none gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blocks.map(({ title, icon: Icon, body }) => (
            <li
              key={title}
              className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mid/10 text-mid">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
