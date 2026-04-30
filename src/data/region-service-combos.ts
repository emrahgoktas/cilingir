import type { FAQ } from "@/data/regions";
import { getPriorityRegions, getRegionBySlug, type Region } from "@/data/regions";
import {
  PRIORITY_1_REGION_SLUGS,
  SERVICES,
  type Service,
} from "@/data/services";

export type RegionServiceCombo = {
  regionSlug: string;
  serviceSlug: string;
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
};

const TOP_3_SERVICE_SLUGS = [
  "kapi-cilingir",
  "oto-cilingir",
  "acil-cilingir",
] as const;

/** Programatik SEO — öncelik-1 bölgeler × tüm hizmetler + öncelik-2 × üst 3 hizmet. */
export const REGION_SERVICE_COMBO_COUNT = 101;

function regionTitleLabel(region: Region): string {
  return region.name.replace(/\s*çilingir\s*$/i, "").trim();
}

function serviceShortForH1(service: Service): string {
  const map: Record<string, string> = {
    "kapi-cilingir": "Kapı",
    "kale-kilit": "Kale Kilit",
    "multlock-kilit": "Mul-T-Lock",
    "oto-cilingir": "Oto",
    "kasa-cilingir": "Kasa",
    "ojmar-kilitleri": "Ojmar",
    "acil-cilingir": "Acil",
  };
  return map[service.slug] ?? service.name.split("—")[0]?.trim() ?? service.slug;
}

function serviceLabelForSentence(service: Service): string {
  const parts = service.name.split("—").map((p) => p.trim());
  return (parts.length > 1 ? parts[1]! : parts[0]!).toLowerCase();
}

export function regionShortFromSlug(regionSlug: string): string {
  return regionSlug.replace(/-cilingir$/i, "");
}

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Üç+ cümle — [ilçe]/hizmet havuzları çaprazlanır; bölge adı iki kez geçer. */
function buildIntro(region: Region, service: Service): string {
  const r = regionTitleLabel(region);
  const sv = serviceLabelForSentence(service);
  const key = `${region.slug}|${service.slug}`;
  const h = hashString(key);
  const i = h % OPENERS.length;
  const j = (Math.floor(h / OPENERS.length) + service.slug.length) % CLOSERS.length;
  const core = `${OPENERS[i]!(r, sv, region)} ${CLOSERS[j]!(r, sv, service, region)}`;
  const bridge = `${r} çevresinde ${region.district} mahalle ve güzergâhlarında ${sv} için sık sahaya çıkan ekibimiz; ${r}'ta İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız olarak önce güvenlik teyidi ve sonra teknik seçimi birlikte netleştiriyoruz.`;
  return `${core} ${bridge}`;
}

const OPENERS: Array<
  (r: string, sv: string, region: Region) => string
> = [
  (r, sv) =>
    `${r}’ta ${sv} taleplerinde adres ve kapı tipini telefonda netleştiriyor, trafik yoğunluğuna göre tahmini süreyi paylaşıyoruz.`,
  (r, sv) =>
    `${r} bölgesinde ${sv} hizmeti için önce güvenlik teyidi, ardından silindir veya araç markasına uygun teknik seçimi yapıyoruz.`,
  (r, sv) =>
    `${r} sakinleri ve işletmeleri için ${sv} çağrılarında aynı kalite standardıyla sahaya çıkıyor; sürpriz ücretleri önceden konuşuyoruz.`,
  (r, sv) =>
    `${r} çevresinde ${sv} ihtiyacında buluşma noktasını netleştirip, site ve plaza giriş kurallarına uygun ilerliyoruz.`,
  (r, sv) =>
    `${r}’ta ${sv} işlemlerinde kapı veya kasa üzerinde gereksiz zedelenmeyi önlemek için doğru açılış setini seçiyoruz.`,
  (r, sv) =>
    `${r} mahallelerinde ${sv} kapsamında gece-gündüz aynı prosedürle kimlik ve yetki kontrolünü ihmal etmiyoruz.`,
  (r, sv, region) =>
    `${r}’ta ${sv} arayan müşterilere ${region.responseTime} bandında yönlendirme hedefiyle süreyi adres netleştikçe güncelliyoruz.`,
  (r, sv) =>
    `${r} bölgesinde ${sv} için mobil ekip yönlendirmesi yaparken otopark ve güvenlik kulübesi süreçlerini önceden hatırlatıyoruz.`,
  (r, sv) =>
    `${r}’ta ${sv} hizmetinde konut ve işyeri ayrımına göre farklı ölçü ve marka yoğunluğuyla çalışıyoruz.`,
  (r, sv) =>
    `${r} çevresinde ${sv} talebinde önce arıza veya kilitlenme tipini anlıyor, yanlış müdahale riskini düşürüyoruz.`,
  (r, sv) =>
    `${r}’ta ${sv} çağrılarında apartman ve site yönetimiyle uyum için gerekli bilgileri sizden isteyebiliyoruz.`,
  (r, sv) =>
    `${r} bölgesinde ${sv} işinde kullanılan sarf ve ürün seçeneklerini şeffaf şekilde özetliyoruz.`,
  (r, sv) =>
    `${r}’ta ${sv} ihtiyacı olanlar için yerinde ölçü ve marka tespiti olmadan montaj vaat etmiyoruz.`,
  (r, sv) =>
    `${r} sokaklarında ${sv} hizmetinde dar giriş ve merdivenli yapılarda ekipman taşıma süresini hesaba katıyoruz.`,
  (r, sv) =>
    `${r}’ta ${sv} müşterilerine işlem sonrası kısa kullanım ve bakım önerisi vererek tekrar arızayı azaltmayı hedefliyoruz.`,
  (r, sv) =>
    `${r} bölgesinde ${sv} konusunda yoğun saatlerde sıra ve varış süresi hakkında dürüst bilgi veriyoruz.`,
];

const CLOSERS: Array<
  (r: string, sv: string, service: Service, region: Region) => string
> = [
  (r, sv, service, region) =>
    `İşlem öncesi ${region.responseTime} bandında yönlendirme hedefliyoruz; ${service.slug === "oto-cilingir" ? "marka" : "kilit"} tipine göre süre değişebilir.`,
  (r, sv, service, region) =>
    `${region.district} genelinde ${sv} için ekip deneyimi ve yedek parça ihtimali çağrı sırasında kısaca değerlendirilir.`,
  (r, sv, service) =>
    `${service.ticketSize === "high" ? "Yüksek güvenlik beklentisinde" : "Standart taleplerde"} ${r} için uygun seri ve işçilik seçimi önceliklidir.`,
  (r, sv, _, region) =>
    `Bölgede ortalama ${region.responseTime} içinde adresinize yönlenme hedefiyle hareket ediyoruz; köprü ve ana cadde trafiği süreyi uzatabilir.`,
  (r, sv, service) =>
    `${sv} sonrası ${service.slug.includes("kilit") ? "anahtar sayısı ve garanti kapsamı" : "fonksiyon testi"} tutanağa bağlanır.`,
  (r, sv) =>
    `Yanlış anahtar veya zorlama sonrası ${sv} çağrılarında mevcut hasarı büyütmeden ilerlemek için önce gözlem yapıyoruz.`,
  (r, sv, service) =>
    `${r}’ta ${sv} için şeffaf ücret aralığı ve olası ek kalemler telefonda özetlenir; onay sonrası işleme geçilir. Süreç, ${service.process.length} adımlı standart prosedürümüzle uyumludur.`,
  (r, sv, _, region) =>
    `Site ve rezidans yoğunluğu yüksek güzergâhlarda ${region.responseTime} hedefi adres katına göre revize edilebilir.`,
  (r, sv, service) =>
    `${service.slug === "kasa-cilingir" ? "Yetki belgesi ve kasa mülkiyeti" : "Kimlik ve kullanım hakkı"} doğrulanmadan ${sv} işlemine başlanmaz.`,
  (r, sv) =>
    `Acil çizelgede ${r} bölgesinde ${sv} için nöbet hattı üzerinden sıra yönetimi yapılır; yoğunluk mesajı alabilirsiniz.`,
  (r, sv, service) =>
    `${sv} kapsamında ${service.slug === "multlock-kilit" ? "patentli anahtar ve kod kartı" : "ürün seçimi"} için yerinde ölçü şarttır.`,
  (r, sv) =>
    `Bölge trafiği ve park kısıtı ${r} ${sv} çağrılarında buluşma noktasını cadde üzeri işaretle kolaylaştırır.`,
  (r, sv, _, region) =>
    `${region.responseTime} bandı tahmini olup tam süre adres ve güvenlik prosedürüne bağlıdır.`,
  (r, sv, service) =>
    `${sv} işlemi sonunda ${service.slug === "kapi-cilingir" ? "kapı ve silindir" : "ekipman"} fonksiyonu test edilerek teslim edilir.`,
  (r, sv) =>
    `Gecikme riskinde ${r} bölgesinde ${sv} müşterilerine alternatif rota veya ikinci ekip seçeneği mümkün olduğunca önceden bildirilir.`,
  (r, sv, service) =>
    `${r}’ta ${sv} için kullanılan teknikler kapı malzemesi ve güvenlik sınıfına göre değişir; sabit tek yöntem yoktur.${service.ticketSize === "high" ? " Özel güvenlik ürünlerinde ek keşif süresi gerekebilir." : ""}`,
];

function buildDescription(region: Region, service: Service, h: number): string {
  const r = regionTitleLabel(region);
  const sv = serviceLabelForSentence(service);
  const variants = [
    `${r} ${sv}: 7/24 çilingir, ortalama ${region.responseTime} hedefi, şeffaf fiyat. 0536 940 56 56 — hasarsız öncelik, garantili işçilik, yerinde keşif.`,
    `${r} bölgesinde ${sv} — mobil ekip, kimlik teyidi, profesyonel açılış ve montaj. Hızlı yönlendirme; İstanbul Avrupa yakası genelinde servis.`,
    `${sv} ${r}’ta: acil hat, tahmini varış ${region.responseTime}, Kale & Mul-T-Lock uyumu. Kapı, kasa ve oto kilitlerinde uzman destek — hemen arayın.`,
    `${r} çevresi ${sv} hizmeti; site ve işyeri deneyimi, sürprizsiz ücret konuşması. 0536 940 56 56 ile adresinizi netleştirin, ekibimizi yönlendirelim.`,
    `${r}’ta ${sv} talepleriniz için ölçü ve marka tespiti; güvenli müdahale, iş sonu test. 7/24 İstanbul çilingir hattı — garantili çözüm arayın.`,
  ];
  return variants[h % variants.length]!;
}

function buildTitle(region: Region, service: Service, h1: string): string {
  const tail = "7/24 | İstanbul Çilingir | 0536 940 56 56";
  const base = `${h1} — ${tail}`;
  if (base.length <= 70) return base;
  return `${h1} | 7/24 İstanbul | 0536 940 56 56`;
}

function makeCombo(region: Region, service: Service): RegionServiceCombo {
  const regionSlug = region.slug;
  const serviceSlug = service.slug;
  const short = regionShortFromSlug(regionSlug);
  const slug = `${short}-${serviceSlug}`;
  const h1 = `${regionTitleLabel(region)} ${serviceShortForH1(service)} Çilingir`;
  const h = hashString(slug);
  const intro = buildIntro(region, service);
  const description = buildDescription(region, service, h);
  const title = buildTitle(region, service, h1);

  return {
    regionSlug,
    serviceSlug,
    slug,
    h1,
    title,
    description,
    intro,
  };
}

function buildComboList(): RegionServiceCombo[] {
  const list: RegionServiceCombo[] = [];
  const seen = new Set<string>();

  for (const rs of PRIORITY_1_REGION_SLUGS) {
    const region = getRegionBySlug(rs);
    if (!region) continue;
    for (const service of SERVICES) {
      const c = makeCombo(region, service);
      const k = `${c.regionSlug}|${c.serviceSlug}`;
      if (seen.has(k)) continue;
      seen.add(k);
      list.push(c);
    }
  }

  const p2 = getPriorityRegions(2);
  for (const region of p2) {
    for (const serviceSlug of TOP_3_SERVICE_SLUGS) {
      const service = SERVICES.find((s) => s.slug === serviceSlug);
      if (!service) continue;
      const k = `${region.slug}|${service.slug}`;
      if (seen.has(k)) continue;
      seen.add(k);
      list.push(makeCombo(region, service));
    }
  }

  return list;
}

export const REGION_SERVICE_COMBOS: RegionServiceCombo[] = buildComboList();

const COMBO_LOOKUP = new Map<string, RegionServiceCombo>();
for (const c of REGION_SERVICE_COMBOS) {
  COMBO_LOOKUP.set(`${c.regionSlug}|${c.serviceSlug}`, c);
}

export function getComboBySlugs(
  regionSlug: string,
  serviceSlug: string
): RegionServiceCombo | undefined {
  return COMBO_LOOKUP.get(`${regionSlug}|${serviceSlug}`);
}

export function getRelatedCombos(
  regionSlug: string,
  currentServiceSlug: string,
  limit = 3
): RegionServiceCombo[] {
  const same = REGION_SERVICE_COMBOS.filter(
    (c) => c.regionSlug === regionSlug && c.serviceSlug !== currentServiceSlug
  );
  return same.slice(0, limit);
}

function faqHash(comboKey: string, i: number): number {
  return hashString(`${comboKey}|faq|${i}`);
}

/** Bölge + hizmet sayfasına özel 4 SSS — şablonlar hash ile çeşitlenir. */
export function getComboFaqs(
  combo: RegionServiceCombo,
  region: Region,
  service: Service
): FAQ[] {
  const r = regionTitleLabel(region);
  const sv = serviceLabelForSentence(service);
  const key = `${region.slug}|${service.slug}`;

  const qTemplates = [
    (n: number) =>
      n % 2 === 0
        ? `${r}’ta ${sv} için ortalama ne kadar sürede gelirsiniz?`
        : `${r} bölgesinde ${sv} çağrısında varış süresi nasıl hesaplanır?`,
    (n: number) =>
      n % 2 === 0
        ? `${r}’ta ${sv} fiyatı telefonda netleşir mi?`
        : `${sv} ücreti ${r} için mesai dışı farklı mı?`,
    (n: number) =>
      n % 2 === 0
        ? `${r}’ta ${sv} sırasında kimlik veya tapu istenir mi?`
        : `Site ve apartmanda ${sv} için ${r}’ta ek belge gerekir mi?`,
    (n: number) =>
      n % 2 === 0
        ? `${r} çevresinde ${sv} sonrası garanti kapsamı nedir?`
        : `${sv} işleminden sonra ${r}’ta tekrar arıza olursa ne yapmalıyım?`,
  ];

  const aTemplates: Array<(_n: number) => string> = [
    () =>
      `Adres netleştikçe genelde ${region.responseTime} bandında yönlendirme yapıyoruz; trafik ve güvenlik girişi süreyi uzatabilir. Çağrı anında güncel tahmini paylaşırız.`,
    () =>
      `İş öncesi aralık ve olası ek ücretler (mesai dışı, uzak mesafe) konuşulur; onayınız olmadan işlem başlamaz. ${r} için şeffaflık önceliğimizdir.`,
    () =>
      `Konut ve işyerinde kimlik ve kullanım hakkı kontrolü standarttır; şüpheli durumlarda müdahale ertelenebilir. ${sv} öncesi bilgi vermeniz süreci hızlandırır.`,
    () =>
      `Montaj ve işçilik kapsamı işlem tutanağında belirtilir; ürün garantisi marka şartlarına tabidir. Tekrarlayan arızada yeniden değerlendirme yapılır.`,
  ];

  return [0, 1, 2, 3].map((idx) => {
    const fh = faqHash(key, idx);
    return {
      question: qTemplates[idx]!(fh),
      answer: aTemplates[idx]!(fh),
    };
  });
}
