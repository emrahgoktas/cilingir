import type { FAQ } from "./regions";

export type ProcessStep = { step: number; title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  icon: string;
  process: ProcessStep[];
  faqs: FAQ[];
  relatedRegions: string[];
  ticketSize: "low" | "medium" | "high";
  oldSlug?: string;
};

/** Priority-1 region slugs (yüksek talep / gelir bölgeleri) — yüksek bilet hizmetlerinde tam liste kullanılır. */
export const PRIORITY_1_REGION_SLUGS: string[] = [
  "besiktas-cilingir",
  "levent-cilingir",
  "maslak-cilingir",
  "vadistanbul-cilingir",
  "maslak1453-cilingir",
  "istinye-cilingir",
  "nisantasi-cilingir",
  "etiler-cilingir",
  "sariyer-cilingir",
  "zekeriyakoy-cilingir",
  "tarabya-cilingir",
];

export const SERVICES: Service[] = [
  {
    slug: "kapi-cilingir",
    name: "Kapı Çilingir — Kapı Açma",
    title: "Kapı Açma | Acil Kapı Çilingir ve Hasarsız Giriş",
    description:
      "İçeride kaldınız mı? Anahtar kaybı veya arızalı kilitte profesyonel kapı açma. Ortalama 10-20 dakikada yerinde müdahale, şeffaf fiyat ve mümkün olduğunca hasarsız teknik.",
    h1: "Kapı Açma ve Acil Çilingir Hizmeti",
    intro:
      "Konut, işyeri veya daire kapılarında anahtar unutma, kırık anahtar veya bozuk silindir gibi durumlarda hızlı ekip yönlendiriyoruz. Silindir tipine göre uygun açılış seti seçerek çerçeve ve kapı yüzeyine gereksiz zarar vermemeye özen gösteriyoruz. Gece-gündüz aynı prosedürle kimlik ve mülkiyet teyidi sonrası çalışıyoruz.",
    icon: "DoorOpen",
    process: [
      {
        step: 1,
        title: "Çağrı ve adres teyidi",
        description:
          "Telefonda kısa güvenlik soruları ve net adres tarifi alınır; tahmini varış süresi paylaşılır.",
      },
      {
        step: 2,
        title: "Kimlik ve yetki kontrolü",
        description:
          "Yerinde kimlik ve mülkiyet veya kullanım hakkı teyidi yapılır; site güvenliği varsa prosedürüne uyulur.",
      },
      {
        step: 3,
        title: "Kilit incelemesi ve açılış",
        description:
          "Silindir markası ve kapı tipi tespit edilir; uygun teknikle kontrollü açılış uygulanır.",
      },
      {
        step: 4,
        title: "Son kontrol ve öneri",
        description:
          "Kapı ve kilit fonksiyonu test edilir; gerekirse silindir değişimi veya bakım önerilir.",
      },
    ],
    faqs: [
      {
        question: "Kapı açma işlemi kapıya zarar verir mi?",
        answer:
          "Çoğu standart silindirde özel açılış teknikleriyle hasar minimumdur; aşırı korozyonda veya güvenlik kilitlerinde kısmi müdahale gerekebilir, önceden bilgi verilir.",
      },
      {
        question: "Kiracı olarak kapı açtırabilir miyim?",
        answer:
          "Kira sözleşmesi, kimlik ve mümkünse ev sahibi bilgisi ile değerlendirilir; şüpheli durumlarda müdahale ertelenebilir.",
      },
      {
        question: "Gece kapı açma ücreti daha mı yüksek?",
        answer:
          "Mesai dışı tarifesi uygulanabilir; çağrı anında net aralık söylenir.",
      },
      {
        question: "Anahtar kırığı silindir içindeyse ne olur?",
        answer:
          "Kırık parça çıkarıldıktan sonra kilit çoğu zaman açılır; silindir zarar gördüyse değişim önerilir.",
      },
    ],
    relatedRegions: [
      "besiktas-cilingir",
      "sisli-cilingir",
      "mecidiyekoy-cilingir",
      "kagithane-cilingir",
      "sariyer-cilingir",
      "maslak-cilingir",
    ],
    ticketSize: "low",
    oldSlug: "hizmet-kapi-cilingir-1",
  },
  {
    slug: "kale-kilit",
    name: "Kale Kilit — Kilit Değişimi",
    title: "Kale Kilit Değişimi ve Montaj | Profesyonel Çilingir",
    description:
      "Kale ve uyumlu silindirlerde kilit değişimi, master anahtar düzeni ve güvenlik yükseltme. Yerinde ölçü, doğru set seçimi ve garanti kapsamında montaj.",
    h1: "Kale Kilit Değişimi ve Kurulum",
    intro:
      "Kale marka veya Kale ölçüsüne uyumlu silindirlerde değişim, çift kontrol sistemleri ve güvenlik seviyesi yükseltme taleplerinde çalışıyoruz. Kapı kalınlığı ve kol yönü ölçülmeden montaj yapılmaz. İş sonunda anahtar sayısı ve teslim tutanağı netleştirilir.",
    icon: "Lock",
    process: [
      {
        step: 1,
        title: "Keşif ve ölçü",
        description:
          "Mevcut silindir uzunluğu, profil ve kapı kalınlığı ölçülür; uyumlu Kale veya eşdeğer set önerilir.",
      },
      {
        step: 2,
        title: "Ürün ve fiyat onayı",
        description:
          "Seçilen güvenlik sınıfı ve anahtar adedi için net fiyat; onay sonrası montaja geçilir.",
      },
      {
        step: 3,
        title: "Söküm ve montaj",
        description:
          "Eski silindir güvenli şekilde çıkarılır; yeni set hizalanarak takılır, çalışma testi yapılır.",
      },
      {
        step: 4,
        title: "Anahtar teslimi ve bakım ipucu",
        description:
          "Anahtarlar teslim edilir; yağlama periyodu ve kullanım önerileri kısaca aktarılır.",
      },
    ],
    faqs: [
      {
        question: "Kale silindir her kapıya uygun mudur?",
        answer:
          "Ölçü ve profil uyumu şarttır; uyumsuz kapılarda adaptör veya farklı seri önerilir.",
      },
      {
        question: "Tek anahtarla tüm iç kapıları açtırmak mümkün mü?",
        answer:
          "Master düzen planlanabilir; karmaşık sistemlerde keşif ve ek süre gerekebilir.",
      },
      {
        question: "Eski anahtarlar tamamen geçersiz olur mu?",
        answer:
          "Silindir değişiminde eski anahtarlar çalışmaz; yedek anahtar sayısını baştan netleştirin.",
      },
      {
        question: "Garanti kapsamı nedir?",
        answer:
          "Montaj ve ürün garantisi işlem tutanağında belirtilir; kullanıcı kaynaklı darbe ve sıvı hasarı kapsam dışıdır.",
      },
    ],
    relatedRegions: [
      "besiktas-cilingir",
      "levent-cilingir",
      "nisantasi-cilingir",
      "mecidiyekoy-cilingir",
      "zincirlikuyu-cilingir",
      "gayrettepe-cilingir",
    ],
    ticketSize: "medium",
    oldSlug: "hizmet-kale-kilit-12",
  },
  {
    slug: "multlock-kilit",
    name: "Mul-T-Lock — Yüksek Güvenlik",
    title: "Mul-T-Lock Kilit ve Silindir | Yüksek Güvenlik Çözümleri",
    description:
      "Mul-T-Lock yüksek güvenlik silindiri: yetkisiz kopyaya karşı koruma, patentli anahtar ve profesyonel montaj. Konut ve işyeri için uzman keşif ve kurulum.",
    h1: "Mul-T-Lock Kilit Sistemleri",
    intro:
      "Patentli anahtar yapısı ve drill-resistant özellikleriyle Mul-T-Lock, yüksek güvenlik beklentisi olan konut ve işyerlerinde tercih edilir. Montaj öncesi kapı ve mevcut kilit uygunluğu teknik olarak doğrulanır. Anahtar kopyalama yalnızca yetkili kart ve kimlik ile yapılabildiğinden teslim süreci şeffaf planlanır.",
    icon: "ShieldCheck",
    process: [
      {
        step: 1,
        title: "Güvenlik ihtiyaç analizi",
        description:
          "Giriş yoğunluğu, risk seviyesi ve mevcut kilit tipi değerlendirilir; uygun Mul-T-Lock serisi önerilir.",
      },
      {
        step: 2,
        title: "Teknik uygunluk ve ölçüm",
        description:
          "Kapı kalınlığı, silindir ölçüsü ve kol uyumu kontrol edilir; özel sipariş gereksinimi varsa süre bildirilir.",
      },
      {
        step: 3,
        title: "Profesyonel montaj",
        description:
          "Yetkili ekipmanla söküm-takım yapılır; çalışma, yedekleme ve güvenlik testleri uygulanır.",
      },
      {
        step: 4,
        title: "Anahtar kod kartı ve eğitim",
        description:
          "Kod kartı ve anahtarlar teslim edilir; kopya politikası ve kullanım kısaca anlatılır.",
      },
    ],
    faqs: [
      {
        question: "Mul-T-Lock anahtarını her çilingir kopyalar mı?",
        answer:
          "Hayır; yalnızca yetkili noktalarda kod kartı ve kimlik ile kopyalanır.",
      },
      {
        question: "Mevcut kapıya dönüşüm mümkün mü?",
        answer:
          "Çoğu gömme kilitte mümkündür; ölçü uyumsuzluğunda alternatif set veya kapı düzenlemesi gerekebilir.",
      },
      {
        question: "Mul-T-Lock fiyatı neden yüksektir?",
        answer:
          "Patentli pin yapısı, materyal kalitesi ve yetkisiz kopyaya karşı koruma fiyatı etkiler.",
      },
      {
        question: "Kod kartını kaybedersem ne olur?",
        answer:
          "Üretici prosedürüne göre kimlik doğrulaması ve yeni kod kartı süreci işler; süre ve maliyet değişebilir.",
      },
    ],
    relatedRegions: [...PRIORITY_1_REGION_SLUGS],
    ticketSize: "high",
    oldSlug: "hizmet-multlock-kilit-11",
  },
  {
    slug: "oto-cilingir",
    name: "Oto Çilingir — Araç Kapısı",
    title: "Oto Çilingir | Araç Kapı Açma ve İmmobilizer",
    description:
      "Araç kapısı açılışı, bagaj ve kontak çevresi kilit sorunlarında mobil çilingir. Model bazlı teknik, hasar minimizasyonu ve şeffaf fiyatlandırma.",
    h1: "Oto Çilingir ve Araç Kapı Açma",
    intro:
      "Anahtar içeride kaldığında veya uzaktan kumanda arızasında marka ve modele göre kapı içi müdahale planlıyoruz. Conta ve cam çevresinde gereksiz zedelenmeyi önlemek için uygun açılış aletleri kullanıyoruz. Elektronik immobilizer veya kodlu sistemlerde üretici veya yetkili servis gerektiren durumları önceden ayırıyoruz.",
    icon: "Car",
    process: [
      {
        step: 1,
        title: "Marka-model ve konum",
        description:
          "Araç markası, model yılı ve bulunduğunuz güvenli konum teyit edilir; varış süresi paylaşılır.",
      },
      {
        step: 2,
        title: "Ruhsat ve kimlik",
        description:
          "Araç sahipliği veya kullanım yetkisi kontrol edilir; şüpheli taleplerde işlem yapılmaz.",
      },
      {
        step: 3,
        title: "Kapı / bagaj açılışı",
        description:
          "Uygun teknikle iç erişim sağlanır; gerekirse yedek anahtar senaryosu konuşulur.",
      },
      {
        step: 4,
        title: "Fonksiyon testi",
        description:
          "Kilit ve merkezi kilit sistemi test edilir; tekrarlayan arızada servis yönlendirmesi yapılabilir.",
      },
    ],
    faqs: [
      {
        question: "Tüm araç markalarında kapı açılıyor mu?",
        answer:
          "Çoğu binek araçta mümkündür; bazı lüks veya yeni nesil sistemlerde özel ekipman veya yetkili servis gerekebilir.",
      },
      {
        question: "Cam kırılarak mı açılır?",
        answer:
          "Öncelik hasarsız veya düşük müdahale yöntemleridir; zorunlu hallerde seçenekler önceden konuşulur.",
      },
      {
        question: "Yedek anahtar yaptırabilir miyim?",
        answer:
          "Çip veya immobilizer gerektiren anahtarlarda uygun donanım varsa yapılabilir; aksi halde yönlendirilirsiniz.",
      },
      {
        question: "Otoparkta kapı açılışı yapılır mı?",
        answer:
          "Evet; AVM ve site otoparklarında güvenlik izni gerekebilir.",
      },
    ],
    relatedRegions: [
      "mecidiyekoy-cilingir",
      "sisli-cilingir",
      "besiktas-cilingir",
      "ortakoy-cilingir",
      "kagithane-cilingir",
      "zincirlikuyu-cilingir",
    ],
    ticketSize: "medium",
  },
  {
    slug: "kasa-cilingir",
    name: "Kasa Çilingir — Kasa Açma",
    title: "Kasa Açma | Ofis ve Ev Kasası Çilingir Hizmeti",
    description:
      "Elektronik ve mekanik kasa açılışı: şifre unutma, anahtar kaybı ve arıza. Yetki teyidi zorunludur; ofis ve konut için güvenli müdahale.",
    h1: "Kasa Açma ve Kasa Çilingir",
    intro:
      "Kasa müdahalesi yüksek hassasiyet gerektirdiğinden önce yetki belgeleri ve kasa mülkiyeti netleştirilir. Mekanik ve elektronik kasalarda marka bilgisi çözüm süresini belirler. Başarısız deneme sonrası iç mekanizma hasarını büyütmemek için kontrollü teknik uygulanır.",
    icon: "Vault",
    process: [
      {
        step: 1,
        title: "Yetki ve belge kontrolü",
        description:
          "Kimlik, işyeri yetkisi veya noter / kurumsal yazı talep edilebilir; eksik belgede işlem yapılmaz.",
      },
      {
        step: 2,
        title: "Kasa tipi tespiti",
        description:
          "Marka, model ve kilit mekanizması değerlendirilir; açılış yöntemi ve riskler açıklanır.",
      },
      {
        step: 3,
        title: "Teknik açılış",
        description:
          "Uygun alet ve teknikle açılış denenir; bazı modellerde üretici kodu veya ikinci seans gerekebilir.",
      },
      {
        step: 4,
        title: "Yeni şifre / kilit önerisi",
        description:
          "Açılış sonrası şifre sıfırlama veya kilit değişimi önerilir; kullanım eğitimi verilir.",
      },
    ],
    faqs: [
      {
        question: "Ev kasası için komşu tanıklığı yeterli mi?",
        answer:
          "Genelde yeterli değildir; kimlik ve mülkiyet veya kullanım hakkı belgesi istenir.",
      },
      {
        question: "Elektronik kasa şifresi unutuldu, sıfırlanır mı?",
        answer:
          "Modele göre fabrika prosedürü veya teknik sıfırlama mümkün olabilir; bazı durumlarda üretici desteği gerekir.",
      },
      {
        question: "Kasa açılışı her zaman aynı gün biter mi?",
        answer:
          "Karmaşık sistemlerde ek süre veya parça gerekebilir; keşif sonrası netleştirilir.",
      },
      {
        question: "Başkasının kasasını açtırabilir miyim?",
        answer:
          "Hayır; hukuka aykırı taleplerde hizmet verilmez.",
      },
    ],
    relatedRegions: [...PRIORITY_1_REGION_SLUGS],
    ticketSize: "high",
  },
  {
    slug: "ojmar-kilitleri",
    name: "Ojmar Kilitleri — Ofis ve Soyunma Dolabı",
    title: "Ojmar Kilitleri | Ofis, Spor ve Halka Açık Alan Sistemleri",
    description:
      "Ojmar tipi dolap ve soyunma kilitlerinde arıza, kod sıfırlama ve anahtar düzeni. İşletme ve tesisler için kurumsal çilingir desteği.",
    h1: "Ojmar Kilitleri Servisi",
    intro:
      "Spor salonu, yüzme tesisi ve ofis soyunma alanlarında Ojmar ve benzeri dolap kilitlerinde sıkışma, kayıp jeton veya elektronik arıza için saha deneyimi sunuyoruz. Tesis yönetimi onayı olmadan toplu alan müdahalesi yapılmaz. Yedek parça ve kod kartı gereksinimi modele göre önceden bildirilir.",
    icon: "Building2",
    process: [
      {
        step: 1,
        title: "İşletme / yönetim onayı",
        description:
          "Tesis yetkilisi veya işletme müdürü bilgisi alınır; toplu kullanım alanında prosedüre uyulur.",
      },
      {
        step: 2,
        title: "Ünite ve kilit modeli",
        description:
          "Dolap numarası ve kilit serisi tespit edilir; uygun anahtar, kart veya sıfırlama yöntemi seçilir.",
      },
      {
        step: 3,
        title: "Onarım veya sıfırlama",
        description:
          "Mekanik veya elektronik müdahale uygulanır; gerekirse parça değişimi planlanır.",
      },
      {
        step: 4,
        title: "Test ve kayıt",
        description:
          "Kilit fonksiyonu test edilir; tesis kayıtları için tutanak veya fatura düzenlenebilir.",
      },
    ],
    faqs: [
      {
        question: "Sadece bir dolap için mi geliyorsunuz?",
        answer:
          "Evet; çoklu dolap bakımında işletme ile toplu keşif planlanabilir.",
      },
      {
        question: "Ojmar yedek anahtar temin edilir mi?",
        answer:
          "Modele ve yetki politikasına bağlıdır; stok veya sipariş süresi değişebilir.",
      },
      {
        question: "Elektronik panel arızası giderilir mi?",
        answer:
          "Basit arızalarda evet; anakart değişimi gerektiren durumlarda yedek parça süresi olabilir.",
      },
      {
        question: "Üyeler kendi dolabını açtırabilir mi?",
        answer:
          "İşletme politikası ve kimlik doğrulaması ile mümkün olabilir; tek başına talepte yönetim onayı istenir.",
      },
    ],
    relatedRegions: [...PRIORITY_1_REGION_SLUGS],
    ticketSize: "high",
    oldSlug: "hizmet-ojmar-kilitleri-13",
  },
  {
    slug: "acil-cilingir",
    name: "Acil Çilingir — 7/24",
    title: "Acil Çilingir 7/24 | Gece-Gündüz Kapı ve Kilit Servisi",
    description:
      "7/24 acil çilingir: kapı açılışı, basit kilit arızası ve hızlı müdahale. İstanbul Avrupa hattında gece nöbetli ekip ve net iletişim.",
    h1: "7/24 Acil Çilingir Hizmeti",
    intro:
      "Gece yarısı veya tatil günlerinde kapıda kalma durumunda öncelik sırası ve tahmini varış süresi şeffaf paylaşılır. Acil hat, düşük ve orta karmaşıklıktaki müdahalelere odaklanır; büyük güvenlik projeleri için randevulu keşif önerilir. Kimlik teyidi gece çağrılarında da aynı titizlikle uygulanır.",
    icon: "PhoneCall",
    process: [
      {
        step: 1,
        title: "Acil hat bağlantısı",
        description:
          "Adres, iletişim numarası ve kısa durum özeti alınır; öncelik ve süre bildirilir.",
      },
      {
        step: 2,
        title: "Güvenlik doğrulaması",
        description:
          "Yerinde kimlik ve mülkiyet veya kullanım hakkı kontrolü yapılır.",
      },
      {
        step: 3,
        title: "Hızlı müdahale",
        description:
          "Kapı açılışı veya geçici güvenlik önlemi uygulanır; gerekirse tamir ertesi güne planlanır.",
      },
      {
        step: 4,
        title: "Takip önerisi",
        description:
          "Kalıcı çözüm için silindir değişimi veya ek servis seçenekleri özetlenir.",
      },
    ],
    faqs: [
      {
        question: "Gerçekten her saat mi açıksınız?",
        answer:
          "Evet, 7/24 hattımız vardır; yoğunluk dönemlerinde sıra ve süre güncellenir.",
      },
      {
        question: "Gece çağrısında ek ücret var mı?",
        answer:
          "Mesai dışı tarifesi uygulanabilir; çağrıda aralık paylaşılır.",
      },
      {
        question: "Sadece kapı açma mı yapılıyor?",
        answer:
          "Acil durumda öncelik giriş sağlamaktır; kilit değişimi gibi işler aynı ziyarette veya randevuyla yapılabilir.",
      },
      {
        question: "Şüpheli bir çağrıda ne olur?",
        answer:
          "Yetki doğrulanamazsa müdahale yapılmaz ve gerekirse yetkili birimlere yönlendirme önerilir.",
      },
    ],
    relatedRegions: [
      "taksim-cilingir",
      "beyoglu-cilingir",
      "sisli-cilingir",
      "besiktas-cilingir",
      "kagithane-cilingir",
      "sariyer-cilingir",
    ],
    ticketSize: "low",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
