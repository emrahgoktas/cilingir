export type FAQ = { question: string; answer: string };

export type Region = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  responseTime: string;
  district: string;
  faqs: FAQ[];
  oldSlug?: string;
  priority: number;
};

function appendDistrictFaqs(region: Region): Region {
  const tail: FAQ[] = [
    {
      question: `Gece ${region.district} ilçesinde çilingir bulabilir miyim?`,
      answer: `Evet, ${region.district} ilçesinde 7/24 aktif ekibimiz nöbet düzeninde sahaya çıkar; ortalama yanıt süremizi adres netleştikçe paylaşırız.`,
    },
    {
      question: "Fiyatı önceden öğrenebilir miyim?",
      answer:
        "Kesinlikle. Sizi aramadan önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz; olası ek kalemleri gelmeden önce bildiririz.",
    },
  ];
  return { ...region, faqs: [...region.faqs, ...tail] };
}

const RAW_REGIONS: Region[] = [
  {
    slug: "besiktas-cilingir",
    name: "Beşiktaş Çilingir",
    title: "Beşiktaş Çilingir | 7/24 Acil Kapı ve Kilit Servisi",
    description:
      "Beşiktaş’ta çilingir hizmeti: kapı açılışı, kilit değişimi ve güvenlik çözümleri. Ortalama 10-15 dakikada yerinde servis, şeffaf fiyat ve garantili işçilik.",
    h1: "Beşiktaş Çilingir ve Acil Kapı Açma",
    intro:
      "Çarşı, Abbasağa, Ortaköy ve İskele hattında anahtar kaybı veya arızalı kilitler için mobil ekibimizi yönlendiriyoruz; yoğun güzergâhlarda önce adres ve kapı tipini netleştiriyoruz. Ortalama 10 dakika içinde kapınıza yaklaşmayı hedefleyerek konuşlanmış araçları kullanıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız, 14 yıllık deneyimiyle Akaretler ve Sinanpaşa civarında güvenilir çilingir servisidir. Beşiktaş’ta hem işyeri hem konutta şeffaf fiyat ve garantili işçilik sunarız.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    oldSlug: "bolge-besiktas-cilingir-128",
    priority: 1,
    faqs: [
      {
        question: "Beşiktaş İskele çevresinde ne kadar sürede gelirsiniz?",
        answer:
          "Trafik ve yoğunluk durumuna göre genelde 10-15 dakika içinde bölgeye intikal ediyoruz; tam süreyi adres netleştikçe paylaşıyoruz.",
      },
      {
        question: "Çarşı’daki dükkan kapısı için gece servisi var mı?",
        answer:
          "Evet, işyeri kepenk ve cam kapı kilitlerinde gece servisimiz bulunur; güvenlik protokollerine uygun şekilde çalışırız.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer:
          "Çoğu standart silindir ve gömme kilitte hasarsız veya minimal müdahaleyle açılış mümkündür; kilit tipine göre yöntemi yerinde değerlendiririz.",
      },
      {
        question: "Yeni kilit takımında marka seçimi konusunda yardım eder misiniz?",
        answer:
          "Evet, giriş yoğunluğunuza ve güvenlik beklentinize göre uygun silindir veya elektronik çözüm önerisi sunarız.",
      },
    ],
  },
  {
    slug: "levent-cilingir",
    name: "Levent Çilingir",
    title:
      "Levent Çilingir 7/24 | Büyükdere Cad, 1. Levent, 4. Levent, Metrocity | Hasarsız",
    description:
      "Levent çilingir arıyorsanız doğru yerdesiniz. Büyükdere Caddesi, 1. Levent, 4. Levent ve Metrocity çevresine 10-15 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Levent çilingir hattı 0532 303 91 69, Levent çilingir desteği 7/24 aktiftir.",
    h1: "Levent Çilingir — Büyükdere, Metrocity ve Tüm Mahallelere 7/24",
    intro:
      "Levent’te çilingir mi arıyorsunuz? 1. Levent, 2. Levent, 4. Levent, Büyükdere Caddesi, Metrocity AVM ve Kanyon AVM çevresine ortalama 10-15 dakikada ulaşıyoruz. Levent Metro ve Zincirlikuyu hattında adres teyidini hızlandırarak ekip yönlendirmesi yapıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Levent’te hasarsız ve garantili hizmet sunar.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    oldSlug: "bolge-levent-cilingir-127",
    priority: 1,
    faqs: [
      {
        question: "Levent hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Levent ve çevresindeki 1. Levent, 2. Levent, 4. Levent, Büyükdere Caddesi ve Zincirlikuyu hattı dahil tüm Levent semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Levent’te otopark bariyeri veya yan kapı için de geliyor musunuz?",
        answer:
          "Evet, otopark servis kapıları ve yan giriş kilitlerinde de hizmet veriyoruz; erişim noktasını tarif etmeniz yeterli.",
      },
      {
        question: "Ofis kasası veya dosya dolabı açılışı yapıyor musunuz?",
        answer:
          "Yetkili kimlik ve mülkiyet teyidi sonrası uygun mekanik kasa ve dolap kilitlerinde destek sağlarız; her marka için garanti veremeyebiliriz.",
      },
      {
        question: "Aynı gün silindir değişimi mümkün mü?",
        answer:
          "Stokta uygun silindir varsa aynı gün değişim yapılır; özel sipariş gerektiren modellerde süre bir gün uzayabilir.",
      },
    ],
  },
  {
    slug: "maslak-cilingir",
    name: "Maslak Çilingir",
    title:
      "Maslak Çilingir 7/24 | Vadistanbul, Maslak 1453, Skyland, Nidapark | Hasarsız",
    description:
      "Maslak çilingir arıyorsanız doğru yerdesiniz. Vadistanbul, Maslak 1453, Skyland ve Nidapark'a 10 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Maslak çilingir 0532 303 91 69, Maslak çilingir desteği 7/24 aktiftir.",
    h1: "Maslak Çilingir — Vadistanbul, 1453 ve Tüm Mahallelere 7/24",
    intro:
      "Maslak’ta çilingir mi arıyorsunuz? Vadistanbul, Maslak 1453, Skyland, Nidapark, Maslak Mahallesi, Büyükdere Caddesi ve Eski Büyükdere hattına ortalama 10-15 dakikada ulaşıyoruz. Rezidans, ofis ve ticari bloklarda hasarsız açılış ve kilit değişiminde hızlı adres teyidiyle çalışıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Maslak’ta güvenilir 7/24 hizmet verir.",
    responseTime: "12-18 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-maslak-cilingir-113",
    priority: 1,
    faqs: [
      {
        question: "Maslak hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Maslak ve çevresindeki Maslak Mahallesi, Ayazağa, Büyükdere Caddesi, Eski Büyükdere hattı ve Vadistanbul çevresi dahil tüm Maslak semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Maslak’ta elektronik kilit arızası için servis veriyor musunuz?",
        answer:
          "Pil, motor kartı veya mekanik kısım kaynaklı sorunlarda ilk teşhis yapıp uygun çözüm veya yönlendirme sunarız.",
      },
      {
        question: "AVM içindeki mağaza kilidi için izin gerekir mi?",
        answer:
          "Evet, AVM yönetimi ve mağaza yetkilisi onayı olmadan müdahale etmeyiz; yetkili kişi yanında çalışırız.",
      },
      {
        question: "Yedek anahtar çıkartma işlemini yerinde yapıyor musunuz?",
        answer:
          "Silindir uygunsa yerinde kopya çıkarılabilir; güvenlik gereği kimlik ve mülkiyet teyidi isteriz.",
      },
    ],
  },
  {
    slug: "vadistanbul-cilingir",
    name: "Vadistanbul Çilingir",
    title:
      "Vadistanbul Çilingir 7/24 | Vadi Istanbul AVM, Vadistanbul Rezidans, Maslak | Hasarsız",
    description:
      "Vadistanbul çilingir arıyorsanız doğru yerdesiniz. Vadi Istanbul AVM, Vadistanbul Rezidans Blokları, Vadistanbul Ofis ve Ayazağa sınırına 10-15 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Vadistanbul çilingir hattı 0532 303 91 69, Vadistanbul çilingir desteği 7/24 aktiftir.",
    h1: "Vadistanbul Çilingir — Vadi AVM, Rezidans ve Tüm Hatta 7/24",
    intro:
      "Vadistanbul'da çilingir mi arıyorsunuz? Vadi Istanbul AVM, Vadistanbul Rezidans Blokları, Vadistanbul Ofis ve Ayazağa sınırına ortalama 10-15 dakikada ulaşıyoruz. Vadistanbul Metro ve Maslak bağlantı hattında konum teyidini hızlandırarak ekip yönlendiriyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız bünyesinde 14 yıldır hasarsız ve garantili hizmet veriyoruz.",
    responseTime: "10-15 dakika",
    district: "Sarıyer",
    priority: 1,
    faqs: [
      {
        question: "Vadistanbul hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Vadistanbul ve çevresindeki Vadistanbul Rezidans Blokları, Vadi Istanbul AVM çevresi, Ayazağa sınırı ve Maslak hattı dahil tüm Vadistanbul semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "AVM üzerinden siteye geçişte gecikme olur mu?",
        answer:
          "Yoğun saatlerde AVM güvenlik hattı sırası süreyi uzatabilir; buluşmayı site yan girişine almak bazen daha hızlıdır.",
      },
      {
        question: "Rezidans kartlı sisteme müdahale eder misiniz?",
        answer:
          "Mekanik kilit ve silindir tarafında destek veririz; elektronik kart ve yazılım arızasında üretici veya site teknik servisine yönlendirme gerekebilir.",
      },
      {
        question: "Ofis katında kapı açılışında ek belge istenir mi?",
        answer:
          "Kurumsal kiracılarda şirket yetkilisi veya kapıcı onayı istenebilir; kimlik teyidi standarttır.",
      },
    ],
  },
  {
    slug: "maslak1453-cilingir",
    name: "Maslak 1453 Çilingir",
    title:
      "Maslak 1453 Çilingir 7/24 | 1453 Rezidans, Maslak 1453 Sitesi, Sarıyer | Hasarsız",
    description:
      "Maslak 1453 çilingir arıyorsanız doğru yerdesiniz. 1453 Konutları, Maslak 1453 Ana Blokları ve 1453 Ticaret Merkezi çevresine 10-15 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Maslak 1453 çilingir 0532 303 91 69, Maslak 1453 çilingir desteği 7/24 aktiftir.",
    h1: "Maslak 1453 Çilingir — 1453 Blokları ve Tüm Sitede 7/24",
    intro:
      "Maslak 1453’te çilingir mi arıyorsunuz? 1453 Konutları, Maslak 1453 Ana Blokları, Sarıyer-Maslak sınırı ve 1453 Ticaret Merkezi çevresine ortalama 10-15 dakikada ulaşıyoruz. Site giriş güvenliği ve blok numarası doğrulamasını hızlı yaparak yanlış giriş kaynaklı gecikmeleri azaltıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle hasarsız ve garantili hizmet sunar.",
    responseTime: "10-15 dakika",
    district: "Sarıyer",
    priority: 1,
    faqs: [
      {
        question: "Maslak 1453 hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Maslak 1453 ve çevresindeki 1453 Konutları, Maslak 1453 Ana Blokları, 1453 Ticaret Merkezi ve Sarıyer-Maslak sınırı dahil tüm Maslak 1453 semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Ticari ünite ile konut bloğu için aynı ekip gelir mi?",
        answer:
          "Aynı çağrıda mümkünse tek ekip; farklı bloklarda ikinci adres için ek süre öngörülebilir.",
      },
      {
        question: "Daire kapısında elektronik kilit arızası açılır mı?",
        answer:
          "Mekanik parça veya pil kaynaklı sorunlarda yerinde müdahale edilir; kart okuyucu yazılım arızasında marka servisi gerekebilir.",
      },
      {
        question: "Hafta sonu otopark çıkışında sıra olursa süre uzar mı?",
        answer:
          "Evet; maç veya etkinlik günlerinde çevre yollar kilitlenebilir, alternatif buluşma noktası önerebiliriz.",
      },
    ],
  },
  {
    slug: "nisantasi-cilingir",
    name: "Nişantaşı Çilingir",
    title: "Nişantaşı Çilingir | Lüks Konut ve Mağaza Kilit Servisi",
    description:
      "Nişantaşı’nda çilingir: mağaza, apartman ve lüks konutlarda kapı açılışı. Özel kilit sistemlerine deneyimli müdahale ve hızlı varış.",
    h1: "Nişantaşı Çilingir Hizmeti",
    intro:
      "Teşvikiye, Rumeli ve Valikonağı çevresindeki mağaza, vitrin ve arka servis kapılarında yüksek güvenlikli silindir ve elektrikli sistemler sıktır; önce marka-model teyidi yapıyoruz. Ortalama 10–15 dakikalık yanıt süresiyle Nişantaşı’nın dar sokaklarında mobil ekibi adresinize yönlendiriyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır lüks konut ve ticari işletmelere garantili işçilik sunar. Tarihi apartman girişlerinde koruma kurallarına uyarak riskli müdahaleden kaçınırız.",
    responseTime: "10-15 dakika",
    district: "Şişli",
    oldSlug: "bolge-nisantasi-cilingir-148",
    priority: 1,
    faqs: [
      {
        question: "Nişantaşı’nda mağaza kepenk kilidi sıkıştı, açılır mı?",
        answer:
          "Kilit mekanizmasını yerinde inceleriz; yağlama veya parça düzeltmesiyle çoğu vaka çözülür, gerekirse parça değişimi önerilir.",
      },
      {
        question: "Yüksek güvenlikli kapıda hasarsız açılış mümkün mü?",
        answer:
          "Marka ve modele bağlıdır; çoğu durumda özel açılış setleriyle hasarı minimumda tutarız, riskli durumda alternatifleri açıklarız.",
      },
      {
        question: "Apartman kapısında interkom ile açılış koordine edebilir misiniz?",
        answer:
          "Evet, daire sahibi veya kapıcı ile koordinasyonu siz başlatır; teknisyen geldiğinde içeriden onay sürecini bekleriz.",
      },
      {
        question: "Pazar günü vitrin kilidi için ek ücret var mı?",
        answer:
          "Mesai dışı ve tatil tarifesi uygulanabilir; çağrı anında net fiyat aralığını paylaşırız.",
      },
    ],
  },
  {
    slug: "etiler-cilingir",
    name: "Etiler Çilingir",
    title: "Etiler Çilingir | Villa ve Site Acil Kapı Servisi",
    description:
      "Etiler’de çilingir: villa, site ve mağaza kapılarında acil açılış ve kilit değişimi. Hızlı ekip, deneyimli teknisyen ve şeffaf fiyat politikası.",
    h1: "Etiler Çilingir ve Kilit Servisi",
    intro:
      "Konaklar, Ümitköy üstü ve Nispetiye eteklerinde villa ve bahçeli yapılarda yan giriş, garaj ve ana kapı için farklı kilit setleri olduğundan önce hangi kapının arızalı olduğunu netleştiriyoruz. Ortalama 10–18 dakikalık bandımızda Etiler’in eğimli sokaklarına uygun mobil araç rotasıyla geliyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle gece sessiz çalışma prosedürüne uygun ekiple hizmet verir. Mülk güvenliği için kimlik ve kullanım teyidini yerinde şeffaf şekilde yaparız.",
    responseTime: "10-18 dakika",
    district: "Beşiktaş",
    priority: 1,
    faqs: [
      {
        question: "Villa bahçe kapısı uzaktan kumandalı, yine de çilingir gerekir mi?",
        answer:
          "Mekanik kilit veya motor arızasında yerinde müdahale gerekebilir; önce kumanda pil ve sinyal kontrolü önerilir, sonra teknik değerlendirme yapılır.",
      },
      {
        question: "Garaj bölümü kapısı için ayrı ücretlendirme olur mu?",
        answer:
          "Aynı adreste ikinci kapı için makul ek işçilik yansıtılabilir; çağrıda kapı sayısını belirtmeniz fiyat netliği sağlar.",
      },
      {
        question: "Etiler’de hangi kilit markalarında yedek parça taşıyorsunuz?",
        answer:
          "Yaygın Avrupa ve yerli silindir markalarında parça taşırız; nadir sistemlerde özel sipariş süresi olabilir.",
      },
      {
        question: "Anahtar kırığı silindir içinde kaldı, çıkarılabilir mi?",
        answer:
          "Çoğu durumda özel çıkarıcılarla parça temizlenir; silindir zarar gördüyse değişim önerilir.",
      },
    ],
  },
  {
    slug: "sariyer-cilingir",
    name: "Sarıyer Çilingir",
    title: "Sarıyer Çilingir | İlçe Geneli Acil Kilit ve Kapı Servisi",
    description:
      "Sarıyer’de çilingir: merkez ve çevre mahallelerde kapı açılışı, kilit tamiri ve değişimi. Geniş bölge kapsaması ve hızlı yönlendirme.",
    h1: "Sarıyer Çilingir Hizmeti",
    intro:
      "Rumelihisarı’ndan Bahçeköy ve Kilyos’a kadar Sarıyer geniş olduğu için mahalle ve caddeyi baştan netleştiriyoruz; sahilden iç kesime göre tahmini süreyi güncelliyoruz. Ortalama 12–22 dakikalık bandımızda dar köy yollarına uygun küçük servis ekibi veya motosikletli teknisyen yönlendirebiliyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Boğaz hattında güvenilir çilingirlik yapıyor. Yoğun yağış veya köprü trafiğinde rotayı önceden konuşarak sürpriz gecikmeleri azaltırız.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-sariyer-cilingir-120",
    priority: 1,
    faqs: [
      {
        question: "Sarıyer merkez dışındaki mahallelere de geliyor musunuz?",
        answer:
          "Evet, ilçe sınırları içindeki tüm mahallelere servis veriyoruz; mesafeye göre varış süresi değişir.",
      },
      {
        question: "Köy içi yolu dar, büyük araç girmezse ne olur?",
        answer:
          "Gerekirse yaya ekip veya motosikletli teknisyen yönlendirmesi yapılır; adres tarifi bu durumda kritiktir.",
      },
      {
        question: "Kış aylarında sahil yolunda gecikme olur mu?",
        answer:
          "Yoğun yağış ve trafikte süre uzayabilir; tahmini varışı güncel tutmak için sizi arayıp bilgilendiririz.",
      },
      {
        question: "Muhtarlık veya belediye yanındaki işyeri kapısı için hızlı servis var mı?",
        answer:
          "Merkezi noktalarda ekip yoğunluğumuz yüksektir; genelde kısa sürede müdahale edebiliriz.",
      },
    ],
  },
  {
    slug: "zekeriyakoy-cilingir",
    name: "Zekeriyaköy Çilingir",
    title: "Zekeriyaköy Çilingir | Site ve Villa 7/24 Kilit Servisi",
    description:
      "Zekeriyaköy’de çilingir: kapalı siteler ve müstakil yapılarda acil kapı açılışı. Site prosedürlerine uyum, hızlı iletişim ve güvenilir servis.",
    h1: "Zekeriyaköy Çilingir",
    intro:
      "Kapalı sitelerde güvenlik kaydı için plaka ve daire bilgisini önceden ilettiğinizde kulübe süresini kısaltıyoruz; yanlış blok girişinde zaman kaybını önlüyoruz. Ortalama 15–25 dakikalık bandımızda müstakil villalarda uzun bahçe yolunda kapı önü buluşma noktasını birlikte tarif ediyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle Zekeriyaköy’de hem konut hem ticari ünite kapılarında garantili işçilik sunar. Gece nöbetlerinde site içi hız ve sessiz çalışma kurallarına uyarız.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-zekeriyakoy-cilingir-125",
    priority: 1,
    faqs: [
      {
        question: "Site güvenliği çilingiri içeri almıyor, ne yapmalıyım?",
        answer:
          "Yönetim veya daire sahibiyle güvenlik hattını aramanızı öneririz; çoğu sitede kayıtlı çilingir firmasına izin verilir.",
      },
      {
        question: "Villa demir kapıda paslı kilit sıkışması giderilir mi?",
        answer:
          "Pas temizliği ve mekanik ayar çoğu zaman sorunu çözer; aşırı aşınmada silindir değişimi daha güvenli olur.",
      },
      {
        question: "Akıllı kilit uygulaması açılmıyor, yedek anahtar yok?",
        answer:
          "Mekanik override varsa oradan giriş denenir; tamamen elektronik kilitlerde üretici desteği gerekebilir, durumu açıklarız.",
      },
      {
        question: "Hafta sonu site içinde çalışma kısıtı var mıdır?",
        answer:
          "Site yönetim kurallarına göre değişir; gürültülü işlem gerekiyorsa yönetim onayı şarttır.",
      },
    ],
  },
  {
    slug: "tarabya-cilingir",
    name: "Tarabya Çilingir",
    title: "Tarabya Çilingir | Sahil ve Konut Acil Kapı Açma",
    description:
      "Tarabya’da çilingir: konut, işyeri ve marinaya yakın bölgelerde kilit servisi. Nem ve tuzlu hava koşullarına uygun bakım önerileriyle destek.",
    h1: "Tarabya Çilingir Hizmeti",
    intro:
      "Tarabya sahilinde tuzlu havaya bağlı korozyonda silindir sıkışması sıktır; müdahaleden sonra kısa süreli koruyucu bakım öneriyoruz. Ortalama 12–20 dakikalık hedef yanıt süresiyle yokuşlu sokaklarda araç yaklaşımını önceden planlıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır marinaya yakın işletme ve konutlarda çilingirlik yapıyor. Gece nöbetlerinde güvenlik koordinasyonunu şeffaf şekilde yürütürüz.",
    responseTime: "12-20 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-tarabya-cilingir-122",
    priority: 1,
    faqs: [
      {
        question: "Deniz havası kilitleri ne kadar hızlı bozar?",
        answer:
          "Paslanmaya bağlı sıkışma aylardan yıllara kadar değişir; düzenli yağlama ve pas önleyici sprey ömrü uzatır.",
      },
      {
        question: "Tarabya yokuşlarında acil servis gecikir mi?",
        answer:
          "Park ve trafik yoğunluğunda birkaç dakika fark oluşabilir; en kısa güzergâhı kullanırız.",
      },
      {
        question: "Yazlık kapalı ev ilk girişte açılmıyor, ne yapılır?",
        answer:
          "Uzun süre kullanılmayan kilitlerde mekanizma yapışması olur; yerinde temizlik veya kontrollü açılış uygulanır.",
      },
      {
        question: "İşyeri sigorta poliçesi kilit değişimini kapsar mı?",
        answer:
          "Poliçe şartlarına bağlıdır; fatura ve tutanak taleplerinize uygun belge düzenleyebiliriz.",
      },
    ],
  },
  {
    slug: "mecidiyekoy-cilingir",
    name: "Mecidiyeköy Çilingir",
    title: "Mecidiyeköy Çilingir | Metro ve İş Merkezi Kilit Servisi",
    description:
      "Mecidiyeköy’de çilingir: metro çıkışları, iş merkezleri ve apartmanlarda acil kapı açılışı. Yoğun bölgede hızlı ekip yönetimi ve net fiyat.",
    h1: "Mecidiyeköy Çilingir",
    intro:
      "Metro ve otobüs aktarma yoğunluğu randevu saatlerinde yolu kilitliyor; buluşma noktası olarak cadde üzeri işaret vermeniz bulmayı kolaylaştırıyor. Ofis katlarında asansör önceliği için blok giriş kodunu önceden istiyoruz. Akşam trafiğinde alternatif rota kullanan ekiplerle süreyi dengelemeye çalışıyoruz.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    oldSlug: "bolge-mecidiyekoy-cilingir-133",
    priority: 2,
    faqs: [
      {
        question: "Mecidiyeköy’de buluşma noktası olarak neresi uygundur?",
        answer:
          "Metro çıkışı, bilinen bir iş merkezi girişi veya cadde köşesi tarifi en hızlı buluşmayı sağlar.",
      },
      {
        question: "İş merkezinde kilit değişimi için yönetim izni gerekir mi?",
        answer:
          "Birçok plazada teknik müdahale için bildirim istenir; ofis yöneticinizle önceden iletişim kurmanız iyi olur.",
      },
      {
        question: "Apartman kapısı toplu girişte sıkıştı, beklemeden açılır mı?",
        answer:
          "Kalabalıkta hızlı müdahale ederiz; güvenlik için mümkünse kapıcı veya site görevlisini bilgilendirin.",
      },
      {
        question: "Öğle arası kısa sürede yetişebilir misiniz?",
        answer:
          "Yoğunluğa bağlıdır; acil olduğunu belirtirseniz en yakın boştaki ekibe öncelik veririz.",
      },
    ],
  },
  {
    slug: "sisli-cilingir",
    name: "Şişli Çilingir",
    title: "Şişli Çilingir | Hastane ve Ofis Bölgesi Kilit Servisi",
    description:
      "Şişli’de çilingir: hastane çevresi, ofis ve konutlarda kapı açılışı. 7/24 destek, deneyimli teknisyen ve şeffaf ücretlendirme.",
    h1: "Şişli Çilingir Hizmeti",
    intro:
      "Hastane yakınındaki çağrılarda asansör ve ziyaretçi akışı koordinasyonu gerekebiliyor; sessiz ve hızlı çalışmayı ön planda tutuyoruz. Ofis sokaklarında kısa süreli park düzenine uyarak iniyoruz. Çok katlı apartmanlarda daire numarası ve kapı yönü tarifini netleştiriyoruz.",
    responseTime: "10-15 dakika",
    district: "Şişli",
    oldSlug: "bolge-sisli-cilingir-154",
    priority: 2,
    faqs: [
      {
        question: "Hastane yakınında çilingir hizmeti için ek belge ister misiniz?",
        answer:
          "Genelde standart kimlik ve mülkiyet veya kullanım yetkisi yeterlidir; kurum içi özel alanlarda hastane güvenliği prosedürü uygulanır.",
      },
      {
        question: "Şişli’de tek yön nedeniyle uzun yürüme olur mu?",
        answer:
          "Bazı sokaklarda araç yakınında duramayabiliriz; buluşma noktası olarak ana cadde tarifi vermeniz iyi olur.",
      },
      {
        question: "Kısa süreli kiralık daire kapısı için ev sahibi onayı şart mı?",
        answer:
          "Kira sözleşmesi veya yetkili yazılı onay talep edebiliriz; hukuki güvenlik için standart uygulamadır.",
      },
      {
        question: "Çilingir faturası vergili kesiliyor mu?",
        answer:
          "Talep üzerine fatura veya fiş düzenlenebilir; kurumsal müşteriler için bilgileri çağrıda alırız.",
      },
    ],
  },
  {
    slug: "beyoglu-cilingir",
    name: "Beyoğlu Çilingir",
    title: "Beyoğlu Çilingir | Tarihi Bina ve İşyeri Kilit Servisi",
    description:
      "Beyoğlu’nda çilingir: tarihi apartman, otel ve dükkan kapılarında acil açılış. Dar sokak ve eğimli araziye uygun ekip planlaması.",
    h1: "Beyoğlu Çilingir",
    intro:
      "Tarihi binalarda orijinal kapı ve kilit koruma beklentisi yüksek olduğundan önce fotoğraf ve durum tespiti yapıyoruz. İstiklal çevresinde yaya kalabalığında buluşma noktası seçimi kritik. Otellerde resepsiyon koordinasyonunu misafir adına başlatabiliriz.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    oldSlug: "bolge-beyoglu-cilingir-135",
    priority: 2,
    faqs: [
      {
        question: "Tarihi kapıda çizik riski var mı?",
        answer:
          "Özel açılış teknikleriyle riski azaltırız; çok hassas durumlarda restorasyon uzmanı önerisi verebiliriz.",
      },
      {
        question: "Otel odası kapısı için resepsiyon ne yapmalı?",
        answer:
          "Misafir kimlik doğrulaması ve oda kaydı sonrası teknik ekibe eşlik edilmesi genelde yeterlidir.",
      },
      {
        question: "Beyoğlu’nda gece servisi güvenli mi?",
        answer:
          "Ekiplerimiz tanıdık güzergâhlarda çalışır; yine de buluşmayı aydınlık ana cadde üzerinde tutmanızı öneririz.",
      },
      {
        question: "Dar sokakta araç giremiyorsa ücret değişir mi?",
        answer:
          "Standart işçilik aynı kalır; yalnızca uzun yürüme veya ek süre gerektiren özel durumlar önceden bildirilir.",
      },
    ],
  },
  {
    slug: "taksim-cilingir",
    name: "Taksim Çilingir",
    title: "Taksim Çilingir | Otel ve Daire Acil Kapı Açma",
    description:
      "Taksim’de çilingir: otel, apart daire ve işyeri kapılarında hızlı müdahale. Gece-gündüz servis, kalabalık bölgede net buluşma noktası.",
    h1: "Taksim Çilingir Hizmeti",
    intro:
      "Taksim’de kısa süreli park ve güvenlik kontrolleri süreyi etkileyebileceği için landmark bazlı buluşma öneriyoruz. Apart otellerde resepsiyon hattı üzerinden hızlı onay akışı kuruyoruz. Gece eğlence çıkışı saatlerinde cadde üzeri yoğunlukta yedek ekip tutuyoruz.",
    responseTime: "10-18 dakika",
    district: "Beyoğlu",
    oldSlug: "bolge-taksim-cilingir-136",
    priority: 2,
    faqs: [
      {
        question: "Taksim Meydanı yakınında nerede buluşalım?",
        answer:
          "Belirli bir otel girişi, AVM köşesi veya metro çıkışı tarifi en pratik yöntemdir.",
      },
      {
        question: "Kısa kiralık daire kapısı için kimlik yeterli mi?",
        answer:
          "Rezervasyon kaydı ve kimlik birlikte değerlendirilir; platform üzerinden doğrulama istenebilir.",
      },
      {
        question: "Gece saatlerinde ek ücret uygulanır mı?",
        answer:
          "Mesai dışı tarifesi uygulanabilir; telefonda net aralık söylenir.",
      },
      {
        question: "Kalabalıkta ekip beni nasıl bulur?",
        answer:
          "Telefonla canlı konum veya görünür işletme önü tarifi rica ederiz; mümkünse sizi arayıp yönlendiririz.",
      },
    ],
  },
  {
    slug: "kagithane-cilingir",
    name: "Kağıthane Çilingir",
    title: "Kağıthane Çilingir | Konut ve Sanayi Yolu Kilit Servisi",
    description:
      "Kağıthane’de çilingir: konut siteleri ve sanayi yolu işyerlerinde kapı açılışı. Geniş cadde erişimi ve hızlı yönlendirme ile servis.",
    h1: "Kağıthane Çilingir",
    intro:
      "Sanayi hattındaki işyerlerinde kepenk ve yan kapı kilitleri farklı marka yoğunluğu taşıyor; stok öncesi model fotoğrafı isteyebiliyoruz. Konut sitelerinde otopark kat kodları girişi hızlandırıyor. Baraj yolu trafiğine göre rota güncellemesi yapıyoruz.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    oldSlug: "bolge-kagithane-cilingir-139",
    priority: 2,
    faqs: [
      {
        question: "Sanayi sitesi içinde çilingir girişi için kart gerekir mi?",
        answer:
          "Site yönetimi kurallarına bağlıdır; çoğu zaman işyeri sahibi giriş sağlar veya kapıda karşılar.",
      },
      {
        question: "Kağıthane’de gece trafiği süreyi uzatır mı?",
        answer:
          "Ana arterlerde yoğunluk olabilir; tahmini süreyi güncel trafiğe göre revize ederiz.",
      },
      {
        question: "Kepenk kilidi ile dükkan kapı kilidi aynı anda mı bakılır?",
        answer:
          "İki ayrı mekanizma ise süre uzar; çağrıda her iki kapının da arızalı olduğunu belirtin.",
      },
      {
        question: "Yedek silindir stoğunuz var mı?",
        answer:
          "Yaygın ölçülerde stok bulunur; ölçü ve marka uyumu için yerinde ölçüm yapılır.",
      },
    ],
  },
  {
    slug: "gayrettepe-cilingir",
    name: "Gayrettepe Çilingir",
    title: "Gayrettepe Çilingir | Metro ve Plaza Bölgesi Kilit Servisi",
    description:
      "Gayrettepe’de çilingir: metro bağlantıları ve plaza çevresinde acil kapı açılışı. İş çıkışı saatlerinde esnek ekip planlaması.",
    h1: "Gayrettepe Çilingir Hizmeti",
    intro:
      "E-5 bağlantıları ve metro çıkışları çevresinde buluşma noktası olarak işaretli köşeler kullanıyoruz. Plaza bloklarında zemin kattan üst kata çıkış süresini hesaba katıyoruz. Akşam trafiğinde alternatif iç yolları bilen sürücüler görevlendiriyoruz.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    oldSlug: "bolge-gayrettepe-cilingir-130",
    priority: 2,
    faqs: [
      {
        question: "Metro çıkışında buluşursak ek ücret olur mu?",
        answer:
          "Hayır, buluşma noktası ücreti değiştirmez; yalnızca işçilik ve malzeme ücretlendirilir.",
      },
      {
        question: "Plaza içi teknik oda kilidi açılıyor mu?",
        answer:
          "Yetki ve yönetim onayıyla mümkün olan durumlarda destek veririz; her plaza kuralı farklıdır.",
      },
      {
        question: "Gayrettepe’de motosikletli ekip var mı?",
        answer:
          "Yoğun trafikte uygunsa motosikletli teknisyen yönlendirilebilir; önceden talep edin.",
      },
      {
        question: "Kapı kolu gevşedi, tamir mi değişim mi?",
        answer:
          "Yerinde kontrol sonrası pim veya yay değişimi yeterli olabilir; aşınmada komple set önerilir.",
      },
    ],
  },
  {
    slug: "zincirlikuyu-cilingir",
    name: "Zincirlikuyu Çilingir",
    title: "Zincirlikuyu Çilingir | Finans ve Plaza Kilit Servisi",
    description:
      "Zincirlikuyu’da çilingir: plaza ve rezidanslarda kapı açılışı, kilit değişimi. Kurumsal standartlarda iletişim ve hızlı varış.",
    h1: "Zincirlikuyu Çilingir",
    intro:
      "Finans merkezi çevresinde güvenlik prosedürleri sıkı olduğundan kimlik ve ziyaretçi kartı süreçlerini baştan hatırlatıyoruz. Gökdelen lobilerinde asansör grubu bilgisi olmadan üst kata çıkmak zaman alabiliyor. Mesai bitişinde talep sıçraması yaşandığı için çağrı sırası yönetimi şeffaf tutuluyor.",
    responseTime: "10-16 dakika",
    district: "Şişli",
    oldSlug: "bolge-zincirlikuyu-cilingir-129",
    priority: 2,
    faqs: [
      {
        question: "Plaza girişinde metal dedektörden geçmek gerekir mi?",
        answer:
          "Bina güvenlik kurallarına uymak gerekir; alet çantaları X-ray’dan geçebilir.",
      },
      {
        question: "Kurumsal fatura için sipariş öncesi bilgi gerekir mi?",
        answer:
          "Evet, vergi numarası ve unvanı çağrıda veya müdahale öncesi paylaşmanız faturayı hızlandırır.",
      },
      {
        question: "Zincirlikuyu’da rezidans ve ofis aynı kulede, nasıl ayırt edilir?",
        answer:
          "Blok ve asansör grubu kodunu net yazmanız yanlış kata çıkmayı önler.",
      },
      {
        question: "Akıllı kartlı geçiş bozuldu, mekanik kilit devreye alınır mı?",
        answer:
          "Sistem mimarisine göre değişir; bazı kapılarda yedek mekanik silindir bulunur, bazılarında uzman çağrısı gerekir.",
      },
    ],
  },
  {
    slug: "ortakoy-cilingir",
    name: "Ortaköy Çilingir",
    title: "Ortaköy Çilingir | Boğaz Hattı Konut ve İşyeri Servisi",
    description:
      "Ortaköy’de çilingir: boğaz manzaralı konutlar ve kafe çevresinde acil kilit hizmeti. Hafta sonu yoğunluğunda esnek rota ve hızlı iletişim.",
    h1: "Ortaköy Çilingir Hizmeti",
    intro:
      "Hafta sonu turistik yoğunlukta araç yaklaşımı zorlaştığı için buluşmayı köprü altı veya ana cadde üzeri sabit noktalara alıyoruz. Dar sokaklı eski yapılarda kapı açılış açısını ölçmeden müdahale etmiyoruz. Kafe ve restoran arka servis kapılarında kapanış saatine uyumlu sessiz çalışıyoruz.",
    responseTime: "12-22 dakika",
    district: "Beşiktaş",
    oldSlug: "bolge-ortakoy-cilingir-134",
    priority: 2,
    faqs: [
      {
        question: "Cumartesi akşamı Ortaköy’de ne kadar sürede gelirsiniz?",
        answer:
          "Turistik yoğunlukta süre uzayabilir; mümkün olan en kısa rota ve yaya bağlantıyla geliriz.",
      },
      {
        question: "Boğaz hattı konutlarında güvenlik görevlisi zorunlu mu?",
        answer:
          "Sitelerde genelde evet; daire sahibi veya kiracı girişi güvenlikle önceden netleştirmelidir.",
      },
      {
        question: "Kafe deposu kilidi gece açılır mı?",
        answer:
          "İşletme yetkilisi yanında olmalıdır; alkol ruhsatlı işletmelerde ek prosedür olabilir.",
      },
      {
        question: "Deniz nemine bağlı kilit sıkışması için öneriniz nedir?",
        answer:
          "Düzenli grafit sprey ve yılda bir bakım öneririz; açılış sonrası kısa süreli yağlama yapılabilir.",
      },
    ],
  },
  {
    slug: "ayazaga-cilingir",
    name: "Ayazağa Çilingir",
    title:
      "Ayazağa Çilingir 7/24 | Ayazağa Köyü, Şişli Ayazağa, Metro İstasyonu Çevresi | Hasarsız",
    description:
      "Ayazağa çilingir arıyorsanız doğru yerdesiniz. Ayazağa Köyü, Ayazağa Mahallesi, Şişli Ayazağa ve Ayazağa Metro çevresine 12-20 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Ayazağa çilingir 0532 303 91 69, Ayazağa çilingir desteği 7/24 aktiftir.",
    h1: "Ayazağa Çilingir — Köy, Metro ve Tüm Mahallelere 7/24",
    intro:
      "Ayazağa’da çilingir mi arıyorsunuz? Ayazağa Köyü, Ayazağa Mahallesi, Şişli Ayazağa, Ayazağa Metro, Kanyon yakını ve Levent-Ayazağa hattına ortalama 12-20 dakikada ulaşıyoruz. Sanayi ve konut dokusunda sokak tabelası ile bina referansını hızlı doğrulayarak yanlış rota riskini düşürüyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Ayazağa’da hasarsız ve garantili hizmet verir.",
    responseTime: "12-20 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-ayazaga-cilingir-121",
    priority: 3,
    faqs: [
      {
        question: "Ayazağa hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Ayazağa ve çevresindeki Ayazağa Köyü, Ayazağa Mahallesi, Şişli Ayazağa, Ayazağa Metro çevresi ve Levent-Ayazağa hattı dahil tüm Ayazağa semtlerine hizmet veriyoruz. Ortalama 12-20 dakikada kapınızdayız.",
      },
      {
        question: "Konut tarafında site girişi uzun sürer mi?",
        answer:
          "Kayıt süreleri değişir; önceden güvenliğe isim bildirmeniz süreyi kısaltır.",
      },
      {
        question: "Fabrika yan kapısı için endüstriyel kilit açılışı yapılır mı?",
        answer:
          "Mekanik kilitlerde destek veririz; özel makine kilidi veya elektronik sistemde üretici şartnamesi gerekebilir.",
      },
      {
        question: "Hafta içi öğlen arası randevu kesin tutulur mu?",
        answer:
          "Acil çağrılar önceliklidir; randevulu işlerde mümkün olduğunca saat aralığı taahhüt ederiz.",
      },
    ],
  },
  {
    slug: "resitpasa-cilingir",
    name: "Reşitpaşa Çilingir",
    title:
      "Reşitpaşa Çilingir 7/24 | İTÜ Kampüsü, Reşitpaşa Mah, Maslak Çevresi | Hasarsız",
    description:
      "Reşitpaşa çilingir arıyorsanız doğru yerdesiniz. İTÜ Kampüsü, Reşitpaşa Mahallesi, Maslak Sanayi ve Reşitpaşa Metro çevresine 12-22 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Reşitpaşa çilingir 0532 303 91 69, Reşitpaşa çilingir desteği 7/24 aktiftir.",
    h1: "Reşitpaşa Çilingir — İTÜ, Sanayi ve Tüm Mahallelere 7/24",
    intro:
      "Reşitpaşa’da çilingir mi arıyorsunuz? İTÜ Kampüsü, Reşitpaşa Mahallesi, Maslak Sanayi, Kağıthane sınırı ve Reşitpaşa Metro hattına ortalama 12-22 dakikada ulaşıyoruz. Yokuşlu sokak ve site güvenliği kaynaklı gecikmeleri önlemek için plaka ve kapı bilgilerini önceden doğruluyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Reşitpaşa’da hasarsız ve garantili hizmet verir.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-resitpasa-cilingir-123",
    priority: 3,
    faqs: [
      {
        question: "Reşitpaşa hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Reşitpaşa ve çevresindeki Reşitpaşa Mahallesi, İTÜ Kampüsü çevresi, Maslak Sanayi, Kağıthane sınırı ve Reşitpaşa Metro hattı dahil tüm Reşitpaşa semtlerine hizmet veriyoruz. Ortalama 12-22 dakikada kapınızdayız.",
      },
      {
        question: "Site içinde iki farklı blokta işlem yapılır mı?",
        answer:
          "Evet, ikinci blok için makul ek süre ve ücret öngörülebilir; önceden bildirin.",
      },
      {
        question: "Kışın kilit donması yaşanırsa ne yapılır?",
        answer:
          "Zorla çevirmeyin; kontrollü ısıtma ve teknik açılış yöntemi uygulanır, gerekirse silindir değişir.",
      },
      {
        question: "Villa interkomu çalışmıyor, çilingir nasıl girer?",
        answer:
          "Ev sahibi kapıda karşılamalı veya güvenlik eşlik etmelidir; aksi halde müdahale ertelenebilir.",
      },
    ],
  },
  {
    slug: "yenikoy-cilingir",
    name: "Yeniköy Çilingir",
    title: "Yeniköy Çilingir | Sahil Mahallesi Acil Kilit Servisi",
    description:
      "Yeniköy’de çilingir: sahil yolu ve iç sokak konutlarında kapı açılışı. Tuzlu hava koşullarında kilit ömrü için pratik öneriler.",
    h1: "Yeniköy Çilingir Hizmeti",
    intro:
      "Sahil şeridinde rüzgâr ve nem birlikte kilit mekanizmalarını yoruyor; müdahale sonrası basit koruma adımlarını anlatıyoruz. Sahil yolunda park kısıtı olduğunda iç sokak buluşması tercih ediyoruz. Site girişlerinde yabancı plaka kaydı zaman alabiliyor.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-yenikoy-cilingir-124",
    priority: 3,
    faqs: [
      {
        question: "Yeniköy sahil yolunda park yasağı var mı?",
        answer:
          "Kesimlere göre değişir; yasaklı bölgelerde en yakın yasal parka yönlendiririz.",
      },
      {
        question: "Yazlık kapalı ev ilk açılışta kilit zorlanır mı?",
        answer:
          "Uzun süre kullanılmayan kilitlerde evet; yağlama ve kontrollü açılış uygulanır.",
      },
      {
        question: "Site plakası yurt dışı ise giriş gecikir mi?",
        answer:
          "Güvenlik kaydı uzayabilir; önceden yönetime bildirmeniz süreci hızlandırır.",
      },
      {
        question: "Deniz kenarında paslı silindir değişimi şart mı?",
        answer:
          "Pas kritik seviyedeyse değişim güvenlik için önerilir; erken müdahale daha ekonomik olur.",
      },
    ],
  },
  {
    slug: "buyukdere-cilingir",
    name: "Büyükdere Çilingir",
    title: "Büyükdere Çilingir | Ana Cadde ve Plaza Kilit Servisi",
    description:
      "Büyükdere Caddesi üzerinde çilingir: plaza ve ofis girişlerinde acil kapı açılışı. Ana arter erişimi ve hızlı ekip yönetimi.",
    h1: "Büyükdere Çilingir",
    intro:
      "Ana cadde üzerinde blok girişleri birbirine benzediği için cadde numarası ve işyeri tabelası tarifini net istiyoruz. Metrobüs ve otobüs şeridi trafiği buluşma süresine etki edebiliyor. Çift yönlü girişli plazalarda hangi kanattan çıkılacağını önceden söylemeniz iyi olur.",
    responseTime: "10-18 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-buyukdere-cilingir-126",
    priority: 3,
    faqs: [
      {
        question: "Büyükdere’de hangi taraftan geleceğinizi nasıl belirlersiniz?",
        answer:
          "Adres numarası ve yön (Levent tarafı / istikamet) tarifi en doğru yönlendirmeyi sağlar.",
      },
      {
        question: "Plaza girişinde vale alanına çilingir aracı girer mi?",
        answer:
          "Plaza kuralına bağlıdır; çoğu zaman cadde üzeri kısa duruş veya yan sokak buluşması yapılır.",
      },
      {
        question: "Ofis kapısı kart okuyuculu, mekanik anahtar yok?",
        answer:
          "Yedek mekanik silindir varsa onunla açılır; yoksa BT veya güvenlik birimi devreye alınmalıdır.",
      },
      {
        question: "Öğle trafiğinde süre garanti edilir mi?",
        answer:
          "Trafik değişkendir; tahmini aralık verilir, gecikme olursa bilgilendirme yapılır.",
      },
    ],
  },
  {
    slug: "baltalimani-cilingir",
    name: "Baltalimanı Çilingir",
    title: "Baltalimanı Çilingir | Liman Çevresi Konut Kilit Servisi",
    description:
      "Baltalimanı’nda çilingir: liman çevresi ve konutlarda acil kapı açılışı. Endüstriyel ve konut karışık bölgede deneyimli ekip.",
    h1: "Baltalimanı Çilingir",
    intro:
      "Liman çevresinde kamyon ve iş makinesi trafiği görünürlüğü etkileyebiliyor; buluşmada görünür işaret kullanıyoruz. Konut sokakları endüstriyel alana yakın olduğundan gece aydınlatması önemli. Tuz ve rüzgârın kilit üzerindeki etkisini özellikle zemin kat girişlerinde görüyoruz.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-baltalimani-cilingir-131",
    priority: 3,
    faqs: [
      {
        question: "Liman yolu çalışması servisi geciktirir mi?",
        answer:
          "Geçici yol kapanmalarında alternatif güzergâh kullanılır; süre bir miktar uzayabilir.",
      },
      {
        question: "Endüstriyel gürültüde telefonla tarif zorlaşıyor, ne yapmalıyım?",
        answer:
          "WhatsApp konumu veya görünür tabela fotoğrafı paylaşmanız bulmayı kolaylaştırır.",
      },
      {
        question: "Zemin kat nemli kilit sık sık sıkışıyor, çözüm nedir?",
        answer:
          "Silindir içi temizlik ve uygun yağlama yapılır; kalıcı çözüm için kapı altı izolasyon önerilir.",
      },
      {
        question: "Gece liman vardiyası çıkışında servis var mı?",
        answer:
          "7/24 hattımız vardır; vardiya çıkışı yoğunluğunda sıra yönetimi uygulanabilir.",
      },
    ],
  },
  {
    slug: "dikilitas-cilingir",
    name: "Dikilitaş Çilingir",
    title: "Dikilitaş Çilingir | Beşiktaş Merkeze Yakın Kilit Servisi",
    description:
      "Dikilitaş’ta çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş merkeze yakınlık avantajıyla kısa varış süreleri.",
    h1: "Dikilitaş Çilingir Hizmeti",
    intro:
      "Merkeze yakın olduğunuz için çoğu çağrıda ilk araç rotası kısa kalıyor; yine de tek yön düzeninde tur atma gerekebiliyor. Apartman ve butik işyeri girişleri iç içe; kapı numarasını netleştirmek önemli. Akşam saatlerinde çarşı trafiğine alternatif iç sokak kullanıyoruz.",
    responseTime: "10-18 dakika",
    district: "Beşiktaş",
    oldSlug: "bolge-dikilitas-cilingir-132",
    priority: 3,
    faqs: [
      {
        question: "Dikilitaş’tan Beşiktaş çarşıya yürüme mesafesinde servis hızlanır mı?",
        answer:
          "Coğrafi yakınlık genelde varışı kısaltır; anlık trafik yine de etkileyebilir.",
      },
      {
        question: "Dükkan önüne sandalye dizili, çilingir nerede dursun?",
        answer:
          "Yakın köşe veya işyeri sahibinin gösterdiği kısa süreli duruş noktası kullanılır.",
      },
      {
        question: "Apartman zili bozuk, daire nasıl bulunur?",
        answer:
          "Kapıcı veya komşu teyidi, varsa daire numarası fotoğrafı yardımcı olur.",
      },
      {
        question: "Kısa süreli kilit yağlaması sorunu çözer mi?",
        answer:
          "Basit sıkışmalarda evet; iç mekanizma aşınmışsa geçici çözüm olabilir, değişim gerekebilir.",
      },
    ],
  },
  {
    slug: "emirgan-cilingir",
    name: "Emirgan Çilingir",
    title:
      "Emirgan Çilingir 7/24 | Emirgan Korusu, Emirgan Sahili, Boğaz Hattı | Hasarsız",
    description:
      "Emirgan çilingir arıyorsanız doğru yerdesiniz. Emirgan Korusu, Emirgan İskelesi, Emirgan Mahallesi ve Boğaz sahiline 12-22 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Emirgan çilingir 0532 303 91 69, Emirgan çilingir desteği 7/24 aktiftir.",
    h1: "Emirgan Çilingir — Koru, İskele ve Tüm Mahallelere 7/24",
    intro:
      "Emirgan’da çilingir mi arıyorsunuz? Emirgan Korusu, Emirgan İskelesi, Emirgan Mahallesi, Boğaz sahili ve Emirgan-Tarabya hattına ortalama 12-22 dakikada ulaşıyoruz. Hafta sonu ziyaretçi trafiğinde buluşma noktasını doğru seçerek park kaynaklı gecikmeleri azaltıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Emirgan’da hasarsız ve garantili hizmet sunar.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-emirgan-cilingir-137",
    priority: 3,
    faqs: [
      {
        question: "Emirgan hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Emirgan ve çevresindeki Emirgan Mahallesi, Emirgan Korusu çevresi, Emirgan İskelesi, Boğaz sahili ve Emirgan-Tarabya hattı dahil tüm Emirgan semtlerine hizmet veriyoruz. Ortalama 12-22 dakikada kapınızdayız.",
      },
      {
        question: "Ahşap kapı kilit montajı farklı mıdır?",
        answer:
          "Evet, özel aparat ve ölçü gerekir; yerinde keşif sonrası doğru set önerilir.",
      },
      {
        question: "Site içinde sessiz çalışma talep edilebilir mi?",
        answer:
          "Mümkün olduğunca düşük sesle çalışırız; gerekirse el aleti tercih edilir.",
      },
      {
        question: "Koru etkinlik günlerinde ek güvenlik olur mu?",
        answer:
          "Olabilir; güvenlik yönlendirmesine uymak zorunludur.",
      },
    ],
  },
  {
    slug: "istinye-cilingir",
    name: "İstinye Çilingir",
    title:
      "İstinye Çilingir 7/24 | İstinye Park, Yeniköy Cad, Sarıyer İstinye | Hasarsız",
    description:
      "İstinye çilingir arıyorsanız doğru yerdesiniz. İstinye Park AVM, İstinye Mahallesi, Yeniköy Caddesi ve Baltalimanı hattına 10-15 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. İstinye çilingir 0532 303 91 69, İstinye çilingir desteği 7/24 aktiftir.",
    h1: "İstinye Çilingir — İstinye Park, Yeniköy ve Tüm Hatta 7/24",
    intro:
      "İstinye’de çilingir mi arıyorsunuz? İstinye Park AVM, İstinye Mahallesi, Yeniköy Caddesi, Baltalimanı ve Sarıyer-İstinye hattına ortalama 10-15 dakikada ulaşıyoruz. Marina ve sahil tek yönlerinde doğru buluşma noktasıyla yaklaşımı hızlandırıp otopark kat kaybını azaltıyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle İstinye’de hasarsız ve garantili hizmet verir.",
    responseTime: "10-15 dakika",
    district: "Sarıyer",
    priority: 1,
    faqs: [
      {
        question: "İstinye hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "İstinye ve çevresindeki İstinye Mahallesi, İstinye Park AVM çevresi, Yeniköy Caddesi, Baltalimanı ve Sarıyer-İstinye hattı dahil tüm İstinye semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Sahil yolu konutlarında güvenlik kaydı zorunlu mu?",
        answer:
          "Çoğu sitede evet; daire sahibi veya kiracı önceden güvenliğe isim bildirmelidir.",
      },
      {
        question: "Deniz nemine bağlı kilit donması için ne önerirsiniz?",
        answer:
          "Zorlamayın; kontrollü yağlama ve teknik açılış sonrası bakım önerilir, gerekirse silindir değişimi.",
      },
      {
        question: "İstinye ile Sarıyer merkez arasında fiyat farkı olur mu?",
        answer:
          "Mesafe ve trafik tabanlı ücretlendirme olabilir; çağrıda net aralık paylaşılır.",
      },
    ],
  },
  {
    slug: "seyrantepe-cilingir",
    name: "Seyrantepe Çilingir",
    title:
      "Seyrantepe Çilingir 7/24 | Vodafone Park Çevresi, Beşiktaş Seyrantepe | Hasarsız",
    description:
      "Seyrantepe çilingir arıyorsanız doğru yerdesiniz. Vodafone Park çevresi, Seyrantepe Mahallesi, Seyrantepe Metro ve Beşiktaş-Seyrantepe hattına 15-30 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Seyrantepe çilingir 0532 303 91 69, Seyrantepe çilingir desteği 7/24 aktiftir.",
    h1: "Seyrantepe Çilingir — Metro, Vodafone Park ve Tüm Hatta 7/24",
    intro:
      "Seyrantepe’de çilingir mi arıyorsunuz? Vodafone Park çevresi, Beşiktaş-Seyrantepe hattı, Seyrantepe Mahallesi, İkitelli yolu ve Seyrantepe Metro bağlantısına ortalama 15-30 dakikada ulaşıyoruz. Maç günü güvenlik bariyerleri ve yol kapanışlarında alternatif yaya buluşma noktasıyla servis sürekliliğini koruyoruz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı yetkili firmamız 14 yıllık deneyimiyle Seyrantepe’de hasarsız ve garantili hizmet verir.",
    responseTime: "15-30 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-seyrantepe-cilingir-138",
    priority: 3,
    faqs: [
      {
        question: "Seyrantepe hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Seyrantepe ve çevresindeki Seyrantepe Mahallesi, Seyrantepe Metro çevresi, İkitelli yolu, Beşiktaş-Seyrantepe hattı ve Vodafone Park bağlantısı dahil tüm Seyrantepe semtlerine hizmet veriyoruz. Ortalama 15-30 dakikada kapınızdayız.",
      },
      {
        question: "Stadyum yakınındaki işyeri kilidi için süre uzar mı?",
        answer:
          "Trafik ve güvenlik kontrolleri süreyi etkileyebilir; maç saatini paylaşmanız planlamayı kolaylaştırır.",
      },
      {
        question: "Konut otoparkında kaybolmuş anahtar için ne yapılır?",
        answer:
          "Güvenlik kamerası veya vale kaydı varsa süreç hızlanır; yoksa kimlik doğrulaması sonrası açılış yapılır.",
      },
      {
        question: "Maçsız günlerde normal süre nedir?",
        answer:
          "Genelde diğer mahallelere yakın sürelerde; trafik sakin olduğunda daha kısa olur.",
      },
    ],
  },
  {
    slug: "bomonti-cilingir",
    name: "Bomonti Çilingir",
    title: "Bomonti Çilingir | Tarihi Bira Fabrikası Çevresi Kilit Servisi",
    description:
      "Bomonti’de çilingir: dönüşüm alanı ve çevre konutlarda kapı açılışı. Karma kullanım bölgede gece-gündüz esnek servis.",
    h1: "Bomonti Çilingir Hizmeti",
    intro:
      "Dönüşen endüstriyel yapılar ile yeni rezidansların yan yana olduğu sokaklarda adres karışıklığını önlemek için bina adını soruyoruz. Gece eğlence mekânı çıkışlarında cadde üzeri buluşma yoğun. Dar sokaklarda komşu bina girişleri birbirine çok benzeyebiliyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Bomonti’de hangi binayı kastettiğimi nasıl anlatırım?",
        answer:
          "Bina ticari adı, sokak numarası ve varsa AVM veya otel referansı ekleyin.",
      },
      {
        question: "Gece çıkış saatinde kapı açılmıyor, kimlik yeterli mi?",
        answer:
          "Kira veya mülkiyet teyidi ile birlikte değerlendirilir; güvenlik varsa onlarla koordine olun.",
      },
      {
        question: "Endüstriyel görünümlü binada modern kilit uyumsuzluğu olur mu?",
        answer:
          "Kapı kalınlığı ve çerçeve ölçüsü farklı olabilir; yerinde ölçüm şarttır.",
      },
      {
        question: "Kısa süreli etkinlik için geçici kilit önerir misiniz?",
        answer:
          "İhtiyaca göre padlock veya geçici silindir çözümleri önerilebilir; güvenlik seviyesi tartışılır.",
      },
    ],
  },
  {
    slug: "ferikoy-cilingir",
    name: "Feriköy Çilingir",
    title: "Feriköy Çilingir | Semt Pazarı ve Konut Kilit Servisi",
    description:
      "Feriköy’de çilingir: semt pazarı çevresi ve apartmanlarda acil kapı açılışı. Pazartesi ve yoğun günlerde alternatif buluşma planı.",
    h1: "Feriköy Çilingir",
    intro:
      "Semt pazarı kurulduğu günlerde sokak girişleri kapanabiliyor; buluşmayı pazardan bağımsız köşelere kaydırıyoruz. Apartman araları dar olduğundan komşu kapı ile karışmaması için renkli kapı tarifi rica ediyoruz. Akşam saatlerinde sokak aydınlatması zayıf kesimlerde telefon feneri ile yönlendirme yapıyoruz.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Pazar günü Feriköy’de servis zorlaşır mı?",
        answer:
          "Evet, tezgâh ve kalabalık nedeniyle buluşma noktası değişebilir; sabırlı tarif önemlidir.",
      },
      {
        question: "Pazar dışı günlerde daha hızlı mı?",
        answer:
          "Genelde evet; sokaklar açık olduğunda yaklaşım kolaylaşır.",
      },
      {
        question: "Apartman kapısı zili çalışmıyor, ne yapılır?",
        answer:
          "Kapıcı veya komşu aracılığıyla içeri haber verilir; mümkünse telefonla içeriden biri iner.",
      },
      {
        question: "Eski apartman kapısında kilit ölçüsü standart mıdır?",
        answer:
          "Hayır, tarihi kapılarda ölçü sapması sıktır; yerinde ölçüm gerekir.",
      },
    ],
  },
  {
    slug: "kurtulus-cilingir",
    name: "Kurtuluş Çilingir",
    title: "Kurtuluş Çilingir | Tarihi Apartman Bölgesi Kilit Servisi",
    description:
      "Kurtuluş’ta çilingir: tarihi apartman ve ara sokak konutlarında acil kapı açılışı. Dar sokak deneyimi ve dikkatli müdahale.",
    h1: "Kurtuluş Çilingir",
    intro:
      "Tarihi apartman girişlerinde dar antre ve alçak tavan sık olduğundan alet seçimini buna göre yapıyoruz. Ara sokaklarda park için komşu işyeri önü izni gerekebiliyor. Bina yaşına saygılı olarak gereksiz zedelenmeyi önlemeye çalışıyoruz.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Kurtuluş’ta araç parkı yoksa ne yapılır?",
        answer:
          "En yakın ücretli otopark veya cadde üzeri yasal duruş noktasına yönlendiririz, yaya devam ederiz.",
      },
      {
        question: "Tarihi kapıda özel izin gerekir mi?",
        answer:
          "Kültürel envanter veya site kararı varsa yönetim onayı istenebilir; standart konutlarda gerekmez.",
      },
      {
        question: "Dar antrede çalışmak süreyi uzatır mı?",
        answer:
          "Bir miktar uzatabilir; ergonomik alet ve deneyimle süre kontrol altında tutulur.",
      },
      {
        question: "Komşu gürültü şikâyeti olur mu?",
        answer:
          "Gece saatlerinde mümkün olduğunca düşük ses; gerekirse ertesi güne randevu önerilir.",
      },
    ],
  },
  {
    slug: "okmeydani-cilingir",
    name: "Okmeydanı Çilingir",
    title: "Okmeydanı Çilingir | Sağlık Kampüsü Çevresi Kilit Servisi",
    description:
      "Okmeydanı’nda çilingir: hastane ve eğitim kampüsü çevresinde acil kapı açılışı. Yoğun güzergâhta hızlı yönlendirme ve net adres.",
    h1: "Okmeydanı Çilingir Hizmeti",
    intro:
      "Sağlık kampüsü çevresinde günlük trafik dalgalı olduğu için buluşmayı bilinen bir kavşak veya eczane önü gibi sabit referanslara bağlıyoruz. Öğrenci yurtları ve kiralık dairelerde kimlik kontrolünü titiz uyguluyoruz. Vardiya değişim saatlerinde cadde üzeri yoğunluk artıyor.",
    responseTime: "12-20 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Hastane yakınında çilingir çağrısı için özel kural var mı?",
        answer:
          "Hastane güvenliği ve özel alanlarda prosedür uygulanır; genel sokaktaki konut ve işyerlerinde standarttır.",
      },
      {
        question: "Yurt kapısı için müdahale yapılır mı?",
        answer:
          "Yurt müdürlüğü onayı ve öğrenci kimlik doğrulaması şarttır; aksi halde işlem yapılmaz.",
      },
      {
        question: "Okmeydanı rampalarında kışın gecikme olur mu?",
        answer:
          "Buzlanma ve yoğun yağışta süre uzayabilir; güvenli sürüş önceliklidir.",
      },
      {
        question: "Çok katlı binada asansör arızası var, üst kata çıkılır mı?",
        answer:
          "Evet, merdivenle çıkılır; kat numarasını ve kapı yönünü net tarif edin.",
      },
    ],
  },
  {
    slug: "haciosman-cilingir",
    name: "Hacıosman Çilingir",
    title: "Hacıosman Çilingir | Kuzey Hattı Konut ve Site Servisi",
    description:
      "Hacıosman’da çilingir: kuzey hattı siteleri ve konutlarda acil kilit hizmeti. Mesafeli güzergâhlarda planlı varış ve net iletişim.",
    h1: "Hacıosman Çilingir",
    intro:
      "Kuzey hattında mesafe uzun olduğundan çağrı anında tam mahalle ve site adı olmadan yönlendirme yapılmıyor. Orman kenarı sitelerde güvenlik kulübesi süreci vakit alabiliyor. Akşam saatlerinde sokak aydınlatması sınırlı kesimlerde buluşma noktasını netleştiriyoruz.",
    responseTime: "18-28 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Hacıosman’a diğer semtlere göre neden daha geç gelinir?",
        answer:
          "Mesafe ve site giriş prosedürleri toplam süreyi uzatır; çağrıda net adres süreyi iyileştirir.",
      },
      {
        question: "Orman yanı sitelerde gece güvenlik endişesi var mı?",
        answer:
          "Ekipler tanıdık güzergâhlarda çalışır; buluşmayı aydınlık güvenlik kabinine almanızı öneririz.",
      },
      {
        question: "Site içinde yabancı plaka kaydı uzun sürer mi?",
        answer:
          "Siteler arası farklıdır; önceden yönetime bildirmeniz süreci hızlandırır.",
      },
      {
        question: "Uzun mesafede ek ücret var mı?",
        answer:
          "Mesafe ve süreye göre tarifede güncelleme olabilir; telefonda ön bilgi verilir.",
      },
    ],
  },
  {
    slug: "kirecburnu-cilingir",
    name: "Kireçburnu Çilingir",
    title: "Kireçburnu Çilingir | Sahil Sitesi ve Villa Kilit Servisi",
    description:
      "Kireçburnu’nda çilingir: sahil siteleri ve villalarda acil kapı açılışı. Dar rampa ve eğimli güzergâhlarda güvenli yaklaşım.",
    h1: "Kireçburnu Çilingir Hizmeti",
    intro:
      "Sahil sitelerinde rampa ve dönel yollar dar olduğundan büyük servis aracı yerine kompakt araç tercih edilebiliyor. Villalarda deniz tarafı giriş ile cadde tarafı giriş farklı kilit setleri taşıyabiliyor. Gece rüzgârında kapı slam sonrası kilit sıkışması sık görülüyor.",
    responseTime: "12-24 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Kireçburnu rampalarında araç üstte kalır mı?",
        answer:
          "Dar rampalarda güvenli duruş noktası seçilir; gerekirse alt parka yönlendirilirsiniz.",
      },
      {
        question: "Villada iki ayrı giriş kilidi var, ikisi de açılır mı?",
        answer:
          "Evet, her biri ayrı değerlendirilir; süre ve ücret kapı başına konuşulur.",
      },
      {
        question: "Rüzgârda kapı çarpması kilidi bozar mı?",
        answer:
          "Çarpma mekanizmaya stres yapar; kontrol ve ayar gerekir, ağır hasarda parça değişir.",
      },
      {
        question: "Sitede vale kapısı ile ana giriş farklı, hangisini tarif etmeliyim?",
        answer:
          "Müdahale edilecek kapıyı seçin; teknisyen o noktaya yönlendirilir.",
      },
    ],
  },
  {
    slug: "ulus-cilingir",
    name: "Ulus Çilingir",
    title: "Ulus Çilingir | Lüks Konut ve Okul Çevresi Kilit Servisi",
    description:
      "Ulus’ta çilingir: lüks konut ve okul çevresinde acil kapı açılışı. Sakin mahalle düzeninde kontrollü servis ve net fiyat.",
    h1: "Ulus Çilingir",
    intro:
      "Lüks konut sokaklarında güvenlik gözetimi sık olduğundan plaka ve ziyaretçi kaydı için önceden hazırlık istiyoruz. Okul çevresinde servis saatlerinde trafik kısıtı olabiliyor. Geniş bahçeli yapılarda interkom arızasında kapıda karşılama kritik hale geliyor.",
    responseTime: "10-18 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Ulus’ta site güvenliği çilingiri uzun süre bekletir mi?",
        answer:
          "Kayıt prosedürü siteye göre değişir; önceden isim bildirmek süreyi kısaltır.",
      },
      {
        question: "Okul çıkış saatinde sokak kapanır mı?",
        answer:
          "Bazı okullarda geçici trafik düzeni olur; alternatif buluşma noktası belirlenebilir.",
      },
      {
        question: "Lüks konutta yüksek güvenlik silindir değişimi uzun sürer mi?",
        answer:
          "Marka ve ölçüye göre değişir; özel sipariş gerekiyorsa ikinci ziyaret planlanabilir.",
      },
      {
        question: "Bahçe interkomu çalışmıyor, nasıl girilir?",
        answer:
          "Ev sahibi veya güvenliğin kapıda karşılaması gerekir; aksi halde müdahale ertelenir.",
      },
    ],
  },
];

export const REGIONS: Region[] = RAW_REGIONS.map(appendDistrictFaqs);

export const getRegionBySlug = (slug: string): Region | undefined =>
  REGIONS.find((r) => r.slug === slug);

export const getPriorityRegions = (priority: number): Region[] =>
  REGIONS.filter((r) => r.priority === priority);

/** Ana sayfa: önce tüm öncelik-1, sonra öncelik-2 bölgeler (REGIONS sırası korunur). */
export function getTopRegionsForHome(limit = 12): Region[] {
  const merged = [...getPriorityRegions(1), ...getPriorityRegions(2)];
  return merged.slice(0, limit);
}
