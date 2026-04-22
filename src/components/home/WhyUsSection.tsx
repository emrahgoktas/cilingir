import { BadgeCheck, CircleDollarSign, Shield, Zap } from "lucide-react";

const blocks = [
  {
    title: "Hız",
    icon: Zap,
    body:
      "Adres netleşince ekip yönlendirmesi yapılır; yoğun bölgelerde ortalama 10–20 dakika hedefiyle çalışırız.",
  },
  {
    title: "Güven",
    icon: Shield,
    body:
      "Kimlik ve mülkiyet teyidi, oda kayıtlı işletme standardı ve şeffaf süreçle güvenli müdahale.",
  },
  {
    title: "Fiyat Şeffaflığı",
    icon: CircleDollarSign,
    body: "Gelmeden önce fiyat, sürpriz ücret yok.",
  },
  {
    title: "Garanti",
    icon: BadgeCheck,
    body:
      "Yapılan işçilik ve takılan parçalar için net garanti koşulları; sorun halinde geri dönüş hattı.",
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
