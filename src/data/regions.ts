export type FAQ = { question: string; answer: string };

export type Region = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  richContent?: string;
  technicalArticle?: string;
  responseTime: string;
  district: string;
  faqs: FAQ[];
  oldSlug?: string;
  priority: number;
};

function appendDistrictFaqs(region: Region): Region {
  if (region.faqs.length >= 6) {
    return region;
  }
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

type TechnicalArticleConfig = {
  regionName: string;
  localContext: string;
  landmarks: string;
};

function buildTechnicalArticle(config: TechnicalArticleConfig): string {
  const { regionName, localContext, landmarks } = config;
  return `## ${regionName}'ta Kilit Teknolojisi ve Doğru Çilingir Seçimi

${regionName}, İstanbul içinde hem yoğun konut trafiğini hem de ticari hareketliliği bir arada yaşayan bölgelerden biri olduğu için kilit arızaları sanıldığından daha farklı profillerde görülür. ${regionName} içinde gün boyunca karşılaştığımız çağrılar yalnızca kapıda kalma vakası değildir; tek noktalı silindirlerden çok noktalı çelik kapı kilitlerine, elektronik kartlı sistemlerden ofis tipi barel arızalarına kadar geniş bir teknik spektrum vardır. ${regionName} için bu rehberde hem kullanıcı tarafında fark yaratacak bilgileri hem de sahada uyguladığımız teknik süreci sade ama uzman bir dille paylaşıyoruz.

## Silindir tipleri ve günlük arıza nedenleri

Konutlarda en yaygın yapı tek noktalı silindir sistemidir. Bu sistemlerde barel içinde pim aşınması başladığında anahtar zor döner, mandal tam çekmez ve geceleri emniyete alma zorlaşır. Çok noktalı sistemlerde ise kapının üst-alt kilit noktaları birlikte çalışır; tek bir yerde sıkışma olsa bile tüm mekanizma etkilenir. ${regionName} içinde özellikle ${landmarks} çevresindeki yüksek kullanımlı binalarda çok noktalı sistemlerin bakım ihtiyacını daha sık görüyoruz. Barel kalitesi düşük veya yanlış ölçü seçilmişse anahtar kırılması ve dönmeme sorunu hızla artar.

## Kilit mekanizması: mandal, emniyet ve gece mandalı

Mandal dili, kapının kapanmasını sağlayan ana parçadır; emniyet sürgüsü ise asıl güvenlik katmanını oluşturur. Gece mandalı devreye alındığında kapı dışarıdan anahtarla açılamayan moda geçebilir ve bu noktada kullanıcı hataları sıklaşır. ${regionName} çağrılarında en kritik konu, arızanın mandal kaynaklı mı yoksa emniyet dişlisi kaynaklı mı olduğunun ilk dakikada doğru teşhis edilmesidir. Doğru teşhis, gereksiz delme işleminden kaçınmamızı ve hasarsız açma oranını yükseltmemizi sağlar.

## Çelik kapı anatomisi ve güvenlik noktaları

Çelik kapılarda kilit tek bir kutudan ibaret değildir; karşılık, kasa ayarı, menteşe ekseni ve kilit dili uyumu birlikte değerlendirilir. Kasa ile kapı arasındaki milimetrik kayma bile kilit mekanizmasının zorlanmasına neden olur. ${regionName} içinde eski binalarda kapı kasası oturması, yeni rezidanslarda ise ağır kapı paneli nedeniyle aşağı sarkma problemi görülebilir. Bu iki durum aynı belirtiyi verse de çözüm yöntemi farklıdır. Profesyonel yaklaşım, önce kapı geometri kontrolü, sonra silindir ve mekanizma müdahalesidir.

## Mul-T-Lock, Kale ve Yale farkları

Yüksek güvenlikte Mul-T-Lock sistemleri patentli anahtar profili ve drilling dayanımıyla öne çıkar. Kale, yaygın servis ağı ve uygun maliyetli güvenlik yükseltmeleriyle tercih edilir. Yale ise kullanıcı ergonomisi ve model çeşitliliğiyle güçlü bir alternatiftir. ${regionName} gibi hem rezidans hem işyeri karışımı bölgelerde marka seçimi, yalnızca fiyatla değil kullanım sıklığı, giriş-çıkış yoğunluğu ve kopya kontrol ihtiyacıyla yapılmalıdır. Yanlış marka değil, yanlış model en büyük risktir.

## Aşınma döngüsü, bakım periyodu ve nem etkisi

Kilitlerin bakım gereksinimi bölgesel şartlara göre değişir. ${localContext} gibi çevresel etkiler olan alanlarda silindir içindeki yağlayıcı daha hızlı performans kaybedebilir. Genel önerimiz, yılda en az bir defa silindir ve mekanizma kontrolüdür. ${regionName} içinde yoğun kullanımlı apartman girişlerinde bu periyot altı aya çekilebilir. Düzenli bakım, hem arıza riskini azaltır hem de acil çağrılardaki işlem maliyetini düşürür.

## Acil kapı açma teknikleri: ne zaman hangi yöntem?

Sahada üç ana teknik başlık kullanılır: picking, bump key ve kontrollü drill. Picking, uygun silindirlerde hasarsız açma için ilk tercihtir. Bump key, yalnızca belirli silindir sınıflarında ve güvenlik kriterleri karşılanınca uygulanır. Drill ise son çaredir; mekanizma kilitlenmişse ve diğer yöntemler sonuç vermiyorsa kontrollü noktadan yapılır. ${regionName} içinde hedefimiz her zaman hasarsız önceliktir. Bu yüzden teknik seçim, hızdan önce güvenlik ve kapı bütünlüğü odaklı yapılır.

## Elektronik kilitler, oto çilingir ve kasa sistemleri

Elektronik kilitlerde sorun çoğu zaman yazılım değil, mekanik senkron kayması veya pil/aktüatör zayıflamasıdır. Oto çilingirde ise transponder ve immobilizer eşleşmesi kritik rol oynar; kapıyı açmak ile aracı güvenli biçimde çalıştırabilmek farklı uzmanlık ister. Kasa tarafında mekanik, elektronik ve yangına dayanıklı modellerin her biri farklı prosedür gerektirir. ${regionName} içinde çağrı almadan önce model bilgisini istememizin nedeni budur: doğru ekipmanla ilk müdahalede çözüm oranını yükseltmek.

## Sonuç ve doğru hizmet standardı

${regionName} için doğru çilingir hizmeti, yalnızca kapı açmak değil; kilit mekanizmasını anlamak, riski doğru yönetmek ve kullanıcıyı bilgilendirmektir. Bizim standart sürecimizde önce adres ve kilit tipi alınır, ardından tahmini süre ve fiyat aralığı net paylaşılır, yerinde kimlik/mülkiyet teyidi yapılır ve işlem sonrası bakım önerisi verilir. Eğer ${regionName} bölgesinde teknik bilgisi güçlü, şeffaf fiyat politikası olan ve hasarsız müdahale önceliği taşıyan bir ekip arıyorsanız hemen 0536 940 56 56 numarasından bize ulaşabilirsiniz.`;
}

const TECHNICAL_ARTICLES: Record<string, string> = {
  "maslak-cilingir": buildTechnicalArticle({
    regionName: "Maslak",
    localContext: "rezidans kuleleri, yoğun ofis kullanımı ve ana arter trafiği",
    landmarks: "Vadistanbul, Maslak 1453 ve Skyland",
  }),
  "vadistanbul-cilingir": buildTechnicalArticle({
    regionName: "Vadistanbul",
    localContext: "katmanlı blok güvenliği, AVM ve ofis geçiş yoğunluğu",
    landmarks: "Vadi AVM, A/B rezidans blokları ve Ayazağa hattı",
  }),
  "ayazaga-cilingir": buildTechnicalArticle({
    regionName: "Ayazağa",
    localContext: "eski-yeni bina karması ve metro bağlantı trafiği",
    landmarks: "Ayazağa Metro, Şişli Ayazağa ve Levent hattı",
  }),
  "levent-cilingir": buildTechnicalArticle({
    regionName: "Levent",
    localContext: "plaza giriş prosedürleri ve yüksek ofis sirkülasyonu",
    landmarks: "Büyükdere, Metrocity ve Kanyon",
  }),
  "istinye-cilingir": buildTechnicalArticle({
    regionName: "İstinye",
    localContext: "marina etkisi, sahil nemi ve AVM prosedürleri",
    landmarks: "İstinye Park, Yeniköy ve Baltalimanı",
  }),
  "emirgan-cilingir": buildTechnicalArticle({
    regionName: "Emirgan",
    localContext: "Boğaz hattı nemi, tarihi yapı kapıları ve etkinlik trafiği",
    landmarks: "Emirgan Korusu, Emirgan İskelesi ve Tarabya hattı",
  }),
  "tarabya-cilingir": buildTechnicalArticle({
    regionName: "Tarabya",
    localContext: "marina çevresi tuzlu hava ve yokuşlu dar sokaklar",
    landmarks: "Tarabya Marina, Kireçburnu ve Boğaz sahili",
  }),
  "resitpasa-cilingir": buildTechnicalArticle({
    regionName: "Reşitpaşa",
    localContext: "kampüs, sanayi ve konut karışımı yoğun kullanım",
    landmarks: "İTÜ Kampüsü, Maslak Sanayi ve Ayazağa",
  }),
  "kirecburnu-cilingir": buildTechnicalArticle({
    regionName: "Kireçburnu",
    localContext: "sahil nemi, tuzlu hava ve tarihi yapı kilitleri",
    landmarks: "Tarabya, Yeniköy Caddesi ve Boğaz hattı",
  }),
};

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
    title: "Levent Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Levent çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Levent çilingir 0536 940 56 56",
    h1: "Levent Çilingir — Büyükdere, Metrocity ve Tüm Mahallelere 7/24",
    intro:
      "Levent'te çilingir hizmeti için en doğru adrestesiniz. 1. Levent, 2. Levent, 4. Levent, Büyükdere Caddesi plaza katları, Metrocity AVM ve Kanyon AVM çevresine ortalama 10-15 dakikada ulaşıyoruz. Levent'in kurumsal yapısını ve plaza giriş sistemlerini bilen ekibimiz, ofis ve rezidans kilit sorunlarını minimum beklemeyle çözüyor. Fiyatı önceden söyler, gelince kimlik teyidi yaparız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Levent'in güvendiği çilingir servisidir.",
    richContent:
      "## Levent'te Ofis Kapısı Açtırmak İçin Ne Gerekir?\n\nOfis katlarında çilingir hizmeti almak için bina yöneticisi veya ofis yetkilisinin yerinde olması ya da onay vermesi gerekir. Ekibimiz geldiğinde standart kimlik ve yetki teyidi yapar — bu hem sizin hem bizim güvencemizdir.\n\n## Plaza Güvenliği ile Koordinasyon\n\nLevent'teki büyük plazalarda güvenlik kaydı gerekebilir. Bizi önceden aramanız ve plazanın adını söylemeniz, ekibimizin hazırlıklı gelmesini sağlar. Bazı plazaların kayıtlı çilingir listesi vardır — firmamız bu listelerde yer almaktadır.\n\n## Gece Levent'te Çilingir\n\nGece Levent'te kapıda kalmak tehlikeli olabilir. 7/24 aktif ekibimiz ortalama 10-15 dakikada yanınızda. Gece servisi ek ücreti önceden bildirilir.",
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
    title: "Maslak Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Maslak çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Maslak çilingir 0536 940 56 56",
    h1: "Maslak Çilingir — Vadistanbul, 1453 ve Tüm Mahallelere 7/24",
    intro:
      "Maslak'ta çilingir ihtiyacı duyanlar için doğru adrestesiniz. Vadistanbul rezidans blokları, Maslak 1453 kuleleri, Skyland ve Nidapark AVM çevresine ortalama 10-15 dakikada ulaşıyoruz. Büyükdere Caddesi üzerindeki ofis kulelerine, Eski Büyükdere'deki sanayi yapılarına ve Maslak Mahallesi'nin ara sokaklarına olan derin bilgimizle en kısa rotayı kullanıyoruz. Ekibimiz geliş öncesinde size mutlaka fiyat bilgisi verir — kapıda sürpriz rakamla karşılaşmazsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı 14 yıllık firmamız, Maslak'ta en çok tercih edilen yetkili çilingir servisidir.",
    richContent:
      "## Maslak'ta Sık Karşılaşılan Kilit Sorunları\n\nVadistanbul ve Maslak 1453 gibi yüksek katlı rezidanslarda en sık karşılaştığımız sorun, elektronik ve mekanik kilitlerin birlikte kullanıldığı kombine sistemlerdir. Bu yapılarda kapı açmak önce doğru ekipman, sonra bina güvenliğiyle koordinasyon gerektirir — ekibimiz her ikisini de hızla sağlar.\n\n## Maslak'ta Çilingir Fiyatları\n\nFiyat, kapı tipi ve kilit modeline göre değişir. Standart bir çelik kapı açma işlemi için gelmeden önce net aralık paylaşırız. Gece servisi, tarifli ek ücret içerebilir — ama bunu da önceden söyleriz. Rakiplerimizin aksine 'kapıda fiyat' uygulamıyoruz.\n\n## Nasıl Çalışıyoruz?\n\n1. Sizi ararsınız, adres ve kapı tipini sorarız\n2. Tahmini süre ve yaklaşık fiyat bildiririz\n3. En yakın ekip yola çıkar\n4. Gelince kimlik ve mülkiyet teyidi yaparız\n5. Hasarsız açış sonrası garantili işçilik belgesi veririz",
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
    title: "Vadistanbul Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Vadistanbul çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Vadistanbul çilingir 0536 940 56 56",
    h1: "Vadistanbul Çilingir — Vadi AVM, Rezidans ve Tüm Bloklara 7/24",
    intro:
      "Vadistanbul'da çilingir arıyorsanız en doğru yerdesiniz. Vadi İstanbul AVM, A ve B Rezidans Blokları, Ofis Kulesi ve Ayazağa Metro çıkışına ortalama 10 dakikada ulaşıyoruz. Vadistanbul kompleksinin katmanlı güvenlik sistemi ve blok numarası koordinasyonunu bildiğimizden bekleme süresini minimize ediyoruz. Gelmeden önce net fiyat, kapıda sürpriz yok. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Vadistanbul sakinlerine hizmet veriyor.",
    richContent:
      "## Vadistanbul'da Çilingir Süreç Nasıl İşler?\n\nVadistanbul'da çilingir çağırmak standart bir adresten farklıdır. Güvenlik kulübesine giriş kaydı, doğru blok ve daire teyidi gerektirir. Ekibimiz bu prosedürü biliyor — gereksiz bekleme olmadan doğrudan kapınıza ulaşıyoruz.\n\n## AVM Katta mı, Rezidans Katta mı?\n\nVadi AVM içindeki mağaza ve ofisler için bina yönetimi onayıyla çalışıyoruz. Rezidans bloklarında daire sahibinin ya da kiracının yerinde bulunması yeterli. Her iki durumda da kimlik teyidi standart prosedürümüzdür.\n\n## Sık Sorulan: 'Gece Vadistanbul'a Geliyor musunuz?'\n\nEvet, 7/24 aktif ekibimiz var. Gece servisinde ek ücret olabilir — ama aramadan önce söyleriz. Hiçbir zaman 'geldim, ücret bu' demedik, demeyiz.",
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
      "Maslak 1453 çilingir arıyorsanız doğru yerdesiniz. 1453 Konutları, Maslak 1453 Ana Blokları ve 1453 Ticaret Merkezi çevresine 10-15 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Maslak 1453 çilingir 0536 940 56 56, Maslak 1453 çilingir desteği 7/24 aktiftir.",
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
    title: "Tarabya Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Tarabya çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Tarabya çilingir 0536 940 56 56",
    h1: "Tarabya Çilingir — Marina, Kireçburnu ve Boğaz Hattına 7/24",
    intro:
      "Tarabya'da çilingir ihtiyacınız için doğru yerdesiniz. Tarabya Marina, Kireçburnu Mahallesi, Tarabya Mahallesi, Boğaz sahil şeridi ve Yeniköy bağlantı hattına ortalama 10-15 dakikada ulaşıyoruz. Marina çevresindeki konutlarda nem ve tuz aşınmasına karşı deneyimli ekibimiz, açış sonrası bakım önerileriyle uzun vadeli çözüm sunar. Gelmeden fiyat, gelince teyit — sürpriz yok. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Tarabya'da güvenilir hizmet veriyor.",
    richContent:
      "## Tarabya Marina Çevresinde Çilingir\n\nTarabya Marina yakınındaki konutlar ve iş yerlerinde deniz nemi, kilit mekanizmalarını ciddi ölçüde etkiler. Yılda en az bir kez silindir bakımı tavsiye edilir. Ekibimiz acil açış sonrasında ücretsiz durum değerlendirmesi yapıyor.\n\n## Yokuşlu Sokaklarda Ulaşım\n\nTarabya'nın bazı sokakları dar ve yokuşludur. Adres paylaşırken en yakın büyük yol veya işaret noktasını belirtmeniz ekibimizin hızla ulaşmasını sağlar.\n\n## Gece Tarabya'da Güvenli Hizmet\n\nGece saatlerinde Tarabya sahil yolu trafiği azalır, ekibimiz daha hızlı ulaşır. 7/24 aktif servisimizle gece çilingir ihtiyacınızda da yanınızdayız.",
    responseTime: "12-20 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-tarabya-cilingir-122",
    priority: 1,
    faqs: [
      {
        question: "Tarabya hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Tarabya ve çevresindeki Tarabya Mahallesi, Tarabya Marina çevresi, Kireçburnu ve Boğaz sahili dahil tüm Tarabya semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Tarabya'de gece çilingir bulabilir miyim?",
        answer:
          "Evet, Tarabya'de 7/24 aktif ekibimiz her gece sahada. Ortalama yanıt süremizi adres netleştikçe paylaşırız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer:
          "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Tarabya Marina çevresinde park zorluğu olursa ne yapıyorsunuz?",
        answer:
          "Marina yoğunluğunda en yakın güvenli buluşma noktasını telefonda belirleyip yürüyerek son metreyi tamamlıyoruz; bu sayede müdahale süresi uzamaz.",
      },
      {
        question: "Tarabya'da oda kayıtlı yetkili firma olduğunuzu nasıl doğrularım?",
        answer:
          "İstanbul Anahtarcılar ve Çilingirciler Odası kaydımızı talep halinde paylaşırız; 14 yıllık saha deneyimimizle hasarsız ve garantili çalışırız.",
      },
      {
        question: "Boğaz sahilindeki nem kilit ömrünü kısaltır mı?",
        answer:
          "Evet, tuzlu-nemli hava silindir aşınmasını hızlandırabilir. Tarabya sahil hattında müdahale sonrası koruyucu bakım ve periyodik kontrol öneriyoruz.",
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
    title: "Ayazağa Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Ayazağa çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Ayazağa çilingir 0536 940 56 56",
    h1: "Ayazağa Çilingir — Metro, Şişli Ayazağa ve Tüm Mahallelere 7/24",
    intro:
      "Ayazağa'da çilingir ihtiyacınız için doğru firmadasınız. Ayazağa Metro İstasyonu çevresi, Şişli Ayazağa Mahallesi, Levent-Ayazağa bağlantı hattı ve Kanyon AVM yakınına ortalama 10-15 dakikada ulaşıyoruz. Ayazağa'nın hem toplu konut hem de kurumsal yapı karışımını bilen ekibimiz, sizi en kısa sürede kapınızda buluşturuyor. Gelmeden fiyat, gelince kimlik teyidi — şeffaf ve güvenli hizmet anlayışımız değişmez. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Ayazağa'da hizmet veriyor.",
    richContent:
      "## Ayazağa'da Kilit Sorunları Neden Yaygın?\n\nAyazağa, hem eski Şişli konutlarını hem de yeni rezidansları barındırıyor. Eski yapılarda aşınmış silindir, yeni yapılarda çok noktalı kilit sistemi sorunları yaygındır. Her iki türde de deneyimli ekibimiz doğru yöntemi belirler.\n\n## Metro Çıkışına Yakın mısınız?\n\nAyazağa Metro çıkışına 5 dakika yürüme mesafesindeyseniz buluşma noktası belirleyerek süreci hızlandırabilirsiniz. Özellikle geç saatlerde bu yöntem daha güvenlidir.\n\n## Ayazağa'da Fiyat Ne Kadar?\n\nStandart kapı açma için telefonda net aralık veriyoruz. Silindir değişimi gerekiyorsa ürün seçeneklerini ve fiyatlarını önceden paylaşıyoruz. Sürpriz ücret yok.",
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
    title: "Reşitpaşa Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Reşitpaşa çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Reşitpaşa çilingir 0536 940 56 56",
    h1: "Reşitpaşa Çilingir — İTÜ, Maslak Sanayi ve Ayazağa'ya 7/24",
    intro:
      "Reşitpaşa'da çilingir hizmetinde doğru firmadasınız. İTÜ Ayazağa Kampüsü çevresi, Reşitpaşa Mahallesi, Maslak Sanayi bölgesi ve Ayazağa hattına ortalama 10-15 dakikada ulaşıyoruz. Hem üniversite yurdu ve öğrenci konutları hem de sanayi yapıları için deneyimli ekibimiz farklı kilit sistemlerine hızla uyum sağlar. Gelmeden fiyat, gelince teyit — değişmeyen hizmet anlayışımız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Reşitpaşa'da güvenilir çilingir hizmeti sunuyor.",
    richContent:
      "## İTÜ Kampüsü Çevresinde Çilingir\n\nİTÜ Ayazağa Kampüsü içindeki yurt ve lojmanlarda kilit sorunları için kampüs güvenliğiyle koordinasyon gerekebilir. Ekibimiz bu prosedürü biliyor ve süreçi birlikte yönetiyor. Öğrenci kimliği veya yetkili yönetici varlığı standart teyit prosedürümüzdür.\n\n## Reşitpaşa Sanayi Yapılarında Acil Servis\n\nSanayi yapılarında rulo kepenk, endüstriyel kapı ve özel kilit sistemleri yaygındır. Ekibimiz bu sistemler için gerekli ekipmana sahiptir; ama karmaşık durumlarda önce yerinde inceleme yaparak doğru çözümü belirleriz.\n\n## Gece Reşitpaşa'da Yanıt Süresi\n\nReşitpaşa trafiği gece azalır. 7/24 ekibimiz gece saatlerinde çoğunlukla 8-12 dakika içinde ulaşır.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-resitpasa-cilingir-123",
    priority: 3,
    faqs: [
      {
        question: "Reşitpaşa hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Reşitpaşa ve çevresindeki Reşitpaşa Mahallesi, İTÜ Kampüsü çevresi, Maslak Sanayi ve Ayazağa hattı dahil tüm Reşitpaşa semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Reşitpaşa'de gece çilingir bulabilir miyim?",
        answer:
          "Evet, Reşitpaşa'de 7/24 aktif ekibimiz her gece sahada. Ortalama yanıt süremizi adres netleştikçe paylaşırız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer:
          "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "İTÜ yurtları ve kampüs çevresinde kimlik doğrulaması gerekiyor mu?",
        answer:
          "Evet, kampüs ve yurt çevresinde güvenlik prosedürüne uygun şekilde kimlik/kullanım teyidi alıyoruz; bu süreç sonrası hızlıca müdahaleye geçiyoruz.",
      },
      {
        question: "Reşitpaşa'da güvenilir ve yetkili firma olduğunuzu nasıl anlarım?",
        answer:
          "İstanbul Anahtarcılar ve Çilingirciler Odası kaydımızı talep halinde gösteriyoruz; 14 yıllık deneyimimizle hasarsız ve garantili işçilik sağlıyoruz.",
      },
      {
        question: "Maslak Sanayi ve Ayazağa hattında trafik süreyi etkiler mi?",
        answer:
          "Yoğun saatlerde güzergah değişebilir; Reşitpaşa-Maslak-Sanayi hattında en hızlı rota ile hareket edip güncel varış süresini arayarak paylaşıyoruz.",
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
    title: "Emirgan Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Emirgan çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Emirgan çilingir 0536 940 56 56",
    h1: "Emirgan Çilingir — Korusu, Boğaz Sahili ve Tüm Mahallelere 7/24",
    intro:
      "Emirgan'da çilingir hizmeti için doğru adrestesiniz. Emirgan Korusu çevresi, Emirgan İskelesi, Boğaz sahil şeridi, Emirgan Mahallesi ve Tarabya-Emirgan hattına ortalama 10-15 dakikada ulaşıyoruz. Boğaz'a yakın konumdaki konutlarda tuzlu havanın kilit mekanizmalarına etkisini bilen ekibimiz, hem açış hem de uzun vadeli bakım önerileri sunar. Gelmeden fiyat, gelince teyit. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Emirgan'ın güvendiği çilingir servisidir.",
    richContent:
      "## Emirgan'da Kilit Sorunlarının Temel Nedeni\n\nEmirgan'daki konutların büyük bölümü Boğaz'a 200-500 metre mesafededir. Bu mesafede tuzlu nem, standart silindirlerde yılda bir bakım gerektiren bir aşınmaya neden olur. Ekibimiz açış sonrası ücretsiz silindir değerlendirmesi sunar.\n\n## Emirgan Korusu Etkinliklerinde Araç Parkı\n\nKoru etkinlikleri döneminde trafik yoğunluğu artar. Bu saatlerde buluşma noktası olarak İskele caddesi önerilir — ekibimiz bu rotayı iyi bilir.\n\n## Sahil Konutlarında Hasarsız Kapı Açma\n\nEmirgan'daki tarihi köşk ve yalılarda kapı yapısına zarar vermemek kritiktir. Ekibimiz ahşap kapı mekanizmalarında özel teknikler kullanır.",
    responseTime: "12-22 dakika",
    district: "Sarıyer",
    oldSlug: "bolge-emirgan-cilingir-137",
    priority: 3,
    faqs: [
      {
        question: "Emirgan hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Emirgan ve çevresindeki Emirgan Mahallesi, Emirgan Korusu çevresi, Emirgan İskelesi ve Tarabya hattı dahil tüm Emirgan semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Emirgan'de gece çilingir bulabilir miyim?",
        answer:
          "Evet, Emirgan'de 7/24 aktif ekibimiz her gece sahada. Ortalama yanıt süremizi adres netleştikçe paylaşırız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer:
          "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Emirgan Korusu çevresinde hafta sonu trafik olursa ne yapıyorsunuz?",
        answer:
          "Koru yoğunluğunda buluşma noktasını iskele veya ana cadde tarafına kaydırıp alternatif rota ile geliyoruz; güncel varış süresini telefonla bildiriyoruz.",
      },
      {
        question: "Emirgan'da yetkili ve güvenilir olduğunuzu nasıl doğrularım?",
        answer:
          "İstanbul Anahtarcılar ve Çilingirciler Odası kaydımızı paylaşırız; 14 yıllık deneyimimizle hasarsız müdahale ve garantili işçilik sunarız.",
      },
      {
        question: "Boğaz sahiline yakın evlerde kilit neden sık arıza verir?",
        answer:
          "Tuzlu hava ve nem silindirde aşınmayı artırabilir. Emirgan-Boğaz hattında müdahale sonrası koruyucu bakım önerileriyle tekrar arıza riskini azaltıyoruz.",
      },
    ],
  },
  {
    slug: "istinye-cilingir",
    name: "İstinye Çilingir",
    title: "İstinye Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "İstinye çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. İstinye çilingir 0536 940 56 56",
    h1: "İstinye Çilingir — İstinye Park, Yeniköy ve Tüm Hatta 7/24",
    intro:
      "İstinye'de çilingir arıyorsanız doğru firmadasınız. İstinye Park AVM, İstinye Mahallesi, Yeniköy Caddesi, Baltalimanı ve Sarıyer-İstinye hattına ortalama 10-15 dakikada ulaşıyoruz. İstinye'nin marina çevresindeki konutlarda nem kaynaklı silindir sorunlarına ve AVM içi mağaza kilitlerinde yetki prosedürlerine olan bilgi birikimimiz hız farkı yaratıyor. Gelmeden fiyat, gelince teyit — değişmeyen hizmet anlayışımız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır İstinye'de güvenilir hizmet veriyor.",
    richContent:
      "## İstinye Park AVM'de Mağaza Kilidi Açtırmak\n\nİstinye Park AVM içindeki mağazalar için AVM yönetimi onayı ve mağaza yetkilisinin varlığı şarttır. Ekibimiz bu prosedürü biliyor ve gerekli koordinasyonu sizinle birlikte yönetiyor.\n\n## İstinye'de Deniz Nemine Karşı Kilit Bakımı\n\nBoğaz'a yakın konumda tuzlu nem, silindir mekanizmalarını standarttan hızlı aşındırır. Müdahale sonrası önerdiğimiz bakım adımları kapınızın ömrünü uzatır.\n\n## İstinye-Yeniköy Hattında Yanıt Süresi\n\nYeniköy Caddesi üzerindeki konutlara ve İstinye iç sokaklarına ortalama 12-15 dakikada ulaşıyoruz. Trafik yoğunluğunda alternatif güzergah kullanan ekibimiz süreyi minimize eder.",
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
      "Seyrantepe çilingir arıyorsanız doğru yerdesiniz. Vodafone Park çevresi, Seyrantepe Mahallesi, Seyrantepe Metro ve Beşiktaş-Seyrantepe hattına 15-30 dakikada hizmet veriyoruz. Oda kayıtlı yetkili firma olarak hasarsız garantili çalışıyoruz. Seyrantepe çilingir 0536 940 56 56, Seyrantepe çilingir desteği 7/24 aktiftir.",
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
    title: "Kireçburnu Çilingir 7/24 | Hasarsız | 0536 940 56 56",
    description:
      "Kireçburnu çilingir: 15 dakikada kapınızda, hasarsız garantili. Gelmeden net fiyat, sürpriz yok. 14 yıllık deneyim. Kireçburnu çilingir 0536 940 56 56",
    h1: "Kireçburnu Çilingir — Tarabya, Yeniköy ve Boğaz Hattına 7/24",
    intro:
      "Kireçburnu'nda çilingir arıyorsanız doğru yerdesiniz. Kireçburnu Mahallesi, Tarabya hattı, Yeniköy Caddesi ve Boğaz sahil şeridine ortalama 10-15 dakikada ulaşıyoruz. Boğaz'a sıfır konumdaki bu mahallede nem ve tuz kaynaklı kilit aşınması sıktır — ekibimiz açış sonrası bakım önerileriyle uzun vadeli çözüm sunar. Gelmeden fiyat, gelince teyit. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Kireçburnu'nda güvenilir hizmet veriyor.",
    richContent:
      "## Kireçburnu'nda Kilit Sorunları Neden Sık?\n\nKireçburnu, Boğaz sahiline sıfır konumda bir mahalledir. Tuzlu deniz havası, silindir mekanizmalarını yılda 2-3 kat daha hızlı aşındırır. Bu nedenle yılda bir silindir bakımı önerilir. Müdahale sonrası ücretsiz değerlendirme yapıyoruz.\n\n## Dar Sahil Sokaklarında Ulaşım\n\nKireçburnu'nun bazı sahil sokakları araç girişine kapalı ya da çok dardır. Adresinizi paylaşırken yakın cadde veya iskele noktasını belirtin — ekibimiz bu bölgeyi çok iyi bilir.\n\n## Tarihi Yapılarda Hasarsız Açma\n\nKireçburnu'ndaki yalı ve eski konut kapılarında ahşap ve antika kilit mekanizmaları olabilir. Özel açma teknikleriyle kapınıza zarar vermeden müdahale ediyoruz.",
    responseTime: "10-15 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Kireçburnu hangi mahallelere hizmet veriyorsunuz?",
        answer:
          "Kireçburnu ve çevresindeki Kireçburnu Mahallesi, Tarabya, Yeniköy Caddesi ve Boğaz sahili dahil tüm Kireçburnu semtlerine hizmet veriyoruz. Ortalama 10-15 dakikada kapınızdayız.",
      },
      {
        question: "Kireçburnu'de gece çilingir bulabilir miyim?",
        answer:
          "Evet, Kireçburnu'de 7/24 aktif ekibimiz her gece sahada. Ortalama yanıt süremizi adres netleştikçe paylaşırız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer:
          "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Kireçburnu sahilindeki dar sokaklarda nasıl hızlı ulaşıyorsunuz?",
        answer:
          "Dar Boğaz sokaklarında kompakt araç ve yürüyüş bağlantısı kullanıyoruz; Tarabya-Yeniköy hattında en yakın buluşma noktasını birlikte belirliyoruz.",
      },
      {
        question: "Kireçburnu'nda güvenilir ve yetkili firma olduğunuzu nasıl kanıtlarsınız?",
        answer:
          "İstanbul Anahtarcılar ve Çilingirciler Odası kaydımızı paylaşırız; 14 yıllık deneyimimizle hasarsız ve garantili müdahale yaparız.",
      },
      {
        question: "Boğaz nemi Kireçburnu kilitlerinde neden sık sorun çıkarıyor?",
        answer:
          "Tuzlu nemli hava silindir aşınmasını hızlandırabilir. Kireçburnu-Boğaz hattında müdahale sonrası bakım ve koruyucu önerilerle tekrar arızayı azaltıyoruz.",
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
  {
    slug: "balmumcu-cilingir",
    name: "Balmumcu Çilingir",
    title: "Balmumcu Çilingir | 7/24 Acil Kapı ve Kilit Servisi",
    description: "Balmumcu'da çilingir: ofis, rezidans ve konutlarda acil kapı açılışı. Beşiktaş-Balmumcu hattında hızlı ekip ve şeffaf fiyat.",
    h1: "Balmumcu Çilingir — Ofis ve Konut Hattına 7/24",
    intro: "Balmumcu'da çilingir ihtiyacınız için doğru adrestesiniz. Balmumcu Caddesi, Beşiktaş-Balmumcu ofis hattı, Etiler bağlantısı ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Ofis ve rezidans karışımı yapılarda farklı kilit sistemlerine hakim ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle Balmumcu'da güvenilir çilingir servisidir.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Balmumcu'da ofis katı için yönetim izni şart mı?",
        answer: "Bina yönetimi veya ofis yetkilisinin onayı standart prosedürümüzdür; kimlik teyidi ile birlikte uygulanır.",
      },
      {
        question: "Balmumcu Caddesi üzerinde park zorluğu olursa ne yapılır?",
        answer: "Yan sokak veya en yakın uygun duruş noktasına yönlendiririz; yürüyüş mesafesi kısa tutulur.",
      },
      {
        question: "Gece Balmumcu'da servis var mı?",
        answer: "Evet, 7/24 aktif ekibimizle gece çilingir ihtiyacınızda da yanınızdayız.",
      },
      {
        question: "Aynı gün silindir değişimi yapılabilir mi?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır; özel modellerde süre uzayabilir.",
      },
    ],
  },
  {
    slug: "akatlar-cilingir",
    name: "Akatlar Çilingir",
    title: "Akatlar Çilingir | Site ve Konut Acil Kilit Servisi",
    description: "Akatlar'da çilingir: kapalı siteler ve konutlarda acil kapı açılışı. Etiler-Akatlar hattında hızlı yönlendirme.",
    h1: "Akatlar Çilingir — Site ve Konutlara 7/24",
    intro: "Akatlar'da çilingir arıyorsanız doğru firmadasınız. Akatlar Mahallesi, Etiler-Akatlar bağlantısı, Levazım hattı ve çevre sitelere ortalama 10-15 dakikada ulaşıyoruz. Kapalı sitelerde güvenlik prosedürüne uyumlu çalışan ekibimiz, gelmeden önce fiyat bildirerek sürpriz yaşatmaz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle Akatlar'da güvenilir hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Akatlar sitelerinde güvenlik kaydı süreci uzun mu?",
        answer: "Siteye göre değişir; önceden isim ve plaka bildirmeniz süreci kısaltır.",
      },
      {
        question: "Akatlar ile Etiler arasında fiyat farkı olur mu?",
        answer: "Mesafeye göre tarifede küçük fark olabilir; çağrıda net aralık paylaşılır.",
      },
      {
        question: "Gece Akatlar'a gelinir mi?",
        answer: "Evet, 7/24 aktif ekibimiz Akatlar'da gece de hizmet veriyor.",
      },
      {
        question: "Villa bahçe kapısı için ayrı ücretlendirme olur mu?",
        answer: "İkinci kapı için makul ek işçilik yansıtılabilir; çağrıda kapı sayısını belirtmeniz fiyat netliği sağlar.",
      },
    ],
  },
  {
    slug: "kurucesme-cilingir",
    name: "Kuruçeşme Çilingir",
    title: "Kuruçeşme Çilingir | Boğaz Sahili Konut ve Eğlence Kilit Servisi",
    description: "Kuruçeşme'de çilingir: boğaz sahili konutlar ve eğlence mekânlarında acil kapı açılışı. Hafta sonu yoğunluğunda esnek servis.",
    h1: "Kuruçeşme Çilingir — Boğaz Hattına 7/24",
    intro: "Kuruçeşme'de çilingir ihtiyacınız için doğru adrestesiniz. Kuruçeşme sahil şeridi, Boğaz hattı konutları ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Hafta sonu yoğunluğunda alternatif rota kullanan ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Kuruçeşme'de güvenilir çilingir servisidir.",
    responseTime: "12-20 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Hafta sonu Kuruçeşme'de ne kadar sürede gelirsiniz?",
        answer: "Sahil yoğunluğunda süre uzayabilir; buluşmayı ana cadde üzerine almak hızlandırır.",
      },
      {
        question: "Boğaz nemine bağlı kilit sıkışması için ne önerirsiniz?",
        answer: "Zorlamayın; kontrollü açılış ve bakım sonrası silindir ömrü uzar, gerekirse değişim önerilir.",
      },
      {
        question: "Eğlence mekânı arka kapısı için gece servis var mı?",
        answer: "Evet, işletme yetkilisi yanında olmak şartıyla 7/24 hizmet veriyoruz.",
      },
      {
        question: "Sahil yolunda park kısıtı olursa ne yapılır?",
        answer: "Yan sokak veya yaya buluşması planlanır; ekibimiz kısa mesafeyi yürüyerek tamamlar.",
      },
    ],
  },
  {
    slug: "bebek-cilingir",
    name: "Bebek Çilingir",
    title: "Bebek Çilingir | Boğaz Konutları ve Kafe Çevresi Kilit Servisi",
    description: "Bebek'te çilingir: boğaz manzaralı konutlar ve kafe çevresinde acil kilit hizmeti. Dar sahil sokakları için deneyimli ekip.",
    h1: "Bebek Çilingir — Boğaz Sahili ve Konutlara 7/24",
    intro: "Bebek'te çilingir ihtiyacınız için doğru adrestesiniz. Bebek sahil şeridi, Boğaz hattı konutları, Bebek Parkı çevresi ve iç sokaklara ortalama 10-15 dakikada ulaşıyoruz. Boğaz'a yakın konumdaki konutlarda nem kaynaklı kilit sorunlarına hakim ekibimiz, açış sonrası bakım önerileriyle uzun vadeli çözüm sunar. Gelmeden fiyat, gelince teyit. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Bebek'te güvenilir hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Bebek sahilinde dar sokakta araç giremiyorsa ek ücret olur mu?",
        answer: "Standart işçilik aynı kalır; uzun yürüme gerektiren özel durumlar önceden bildirilir.",
      },
      {
        question: "Boğaz nemine bağlı kilit arızası için öneri nedir?",
        answer: "Yılda bir silindir bakımı önerilir; müdahale sonrası ücretsiz değerlendirme yapıyoruz.",
      },
      {
        question: "Kafe deposu kilidi gece açılır mı?",
        answer: "İşletme yetkilisi yanında olmalıdır; 7/24 hizmet veriyoruz.",
      },
      {
        question: "Bebek'te yüksek güvenlik silindir değişimi yapılır mı?",
        answer: "Evet, yaygın markalarda stok bulunur; nadir modellerde özel sipariş süresi olabilir.",
      },
    ],
  },
  {
    slug: "arnavutkoy-cilingir",
    name: "Arnavutköy Çilingir",
    title: "Arnavutköy Çilingir | Tarihi Yalı ve Konut Kilit Servisi",
    description: "Arnavutköy'de çilingir: tarihi yalılar ve boğaz konutlarında acil kapı açılışı. Ahşap ve antika kapı mekanizmalarında deneyimli ekip.",
    h1: "Arnavutköy Çilingir — Tarihi Yapılar ve Boğaz Hattına 7/24",
    intro: "Arnavutköy'de çilingir arıyorsanız doğru firmadasınız. Arnavutköy sahil şeridi, tarihi yalılar, Boğaz hattı konutları ve iç sokaklara ortalama 12-20 dakikada ulaşıyoruz. Tarihi yapılarda ahşap kapı ve antika kilit mekanizmalarına özel tekniklerle zarar vermeden müdahale eden ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Arnavutköy'de güvenilir hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Tarihi yalı kapısında hasarsız açılış mümkün mü?",
        answer: "Ahşap ve antika kilit mekanizmalarında özel teknikler kullanıyoruz; kapı bütünlüğünü korumayı önceliklendiriyoruz.",
      },
      {
        question: "Arnavutköy sahilinde dar sokakta araç giremez, ne yapılır?",
        answer: "Yaya buluşması planlanır; kısa mesafeyi yürüyerek tamamlarız, ücrete yansımaz.",
      },
      {
        question: "Boğaz nemine bağlı kilit sorunları için öneri nedir?",
        answer: "Düzenli bakım ve grafit sprey önerilir; müdahale sonrası ücretsiz değerlendirme yapıyoruz.",
      },
      {
        question: "Gece Arnavutköy'de servis var mı?",
        answer: "Evet, 7/24 aktif ekibimizle gece de hizmet veriyoruz.",
      },
    ],
  },
  {
    slug: "tesvikiye-cilingir",
    name: "Teşvikiye Çilingir",
    title: "Teşvikiye Çilingir | Lüks Konut ve Butik Mağaza Kilit Servisi",
    description: "Teşvikiye'de çilingir: lüks konut ve butik mağazalarda acil kapı açılışı. Yüksek güvenlik sistemlerine deneyimli müdahale.",
    h1: "Teşvikiye Çilingir — Lüks Konut ve Mağazalara 7/24",
    intro: "Teşvikiye'de çilingir ihtiyacınız için doğru adrestesiniz. Teşvikiye Caddesi, Abdi İpekçi çevresi, lüks rezidanslar ve butik mağazalara ortalama 10-15 dakikada ulaşıyoruz. Yüksek güvenlikli silindir ve elektronik sistemlere hakim ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Teşvikiye'de güvenilir çilingir servisidir.",
    responseTime: "10-15 dakika",
    district: "Şişli",
    priority: 2,
    faqs: [
      {
        question: "Teşvikiye'de yüksek güvenlik silindir açılışı yapılır mı?",
        answer: "Evet, özel açılış setleriyle hasarı minimumda tutarak müdahale ediyoruz; riskli durumda alternatifleri açıklarız.",
      },
      {
        question: "Butik mağaza vitrin kilidi için yetki gerekir mi?",
        answer: "İşletme yetkilisinin yanında olması şarttır; kimlik ve mülkiyet teyidi standarttır.",
      },
      {
        question: "Lüks rezidansta gece servisi var mı?",
        answer: "Evet, 7/24 aktif ekibimizle gece de hizmet veriyoruz; gece tarifesi önceden bildirilir.",
      },
      {
        question: "Aynı gün silindir değişimi mümkün mü?",
        answer: "Stokta uygun model varsa aynı gün değişim yapılır; özel markalarda süre uzayabilir.",
      },
    ],
  },
  {
    slug: "fulya-cilingir",
    name: "Fulya Çilingir",
    title: "Fulya Çilingir | Konut ve Ofis Acil Kilit Servisi",
    description: "Fulya'da çilingir: konut ve ofislerde acil kapı açılışı. Şişli-Fulya hattında hızlı yönlendirme ve net fiyat.",
    h1: "Fulya Çilingir — Konut ve Ofislere 7/24",
    intro: "Fulya'da çilingir arıyorsanız doğru firmadasınız. Fulya Mahallesi, Şişli-Fulya hattı, Harbiye bağlantısı ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Konut ve ofis karışımı bölgede farklı kilit sistemlerine hakim ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Fulya'da güvenilir hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Şişli",
    priority: 2,
    faqs: [
      {
        question: "Fulya'da ofis kapısı için yönetim izni şart mı?",
        answer: "Bina yönetimi veya ofis yetkilisinin onayı standart prosedürümüzdür.",
      },
      {
        question: "Gece Fulya'da servis var mı?",
        answer: "Evet, 7/24 aktif ekibimizle gece de hizmet veriyoruz.",
      },
      {
        question: "Fulya ile Şişli arasında fiyat farkı olur mu?",
        answer: "Mesafeye göre küçük fark olabilir; çağrıda net aralık paylaşılır.",
      },
      {
        question: "Apartman kapısı hasarsız açılır mı?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür; kilit tipine göre yöntem yerinde belirlenir.",
      },
    ],
  },
  {
    slug: "levazim-cilingir",
    name: "Levazım Çilingir",
    title: "Levazım Çilingir | AVM ve Konut Acil Kilit Servisi",
    description: "Levazım'da çilingir: Zorlu Center ve çevre konutlarda acil kapı açılışı. Hızlı yönlendirme ve şeffaf fiyat politikası.",
    h1: "Levazım Çilingir — Zorlu Center ve Konutlara 7/24",
    intro: "Levazım'da çilingir ihtiyacınız için doğru adrestesiniz. Levazım Mahallesi, Zorlu Center çevresi, Etiler-Levazım bağlantısı ve çevre konutlara ortalama 10-15 dakikada ulaşıyoruz. AVM ve rezidans karışımı bölgede güvenlik prosedürlerine hakim ekibimiz, gelmeden önce fiyat bildirerek sürpriz yaşatmaz. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıldır Levazım'da güvenilir çilingir servisidir.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 2,
    faqs: [
      {
        question: "Zorlu Center içindeki mağaza için AVM onayı şart mı?",
        answer: "Evet, AVM yönetimi ve mağaza yetkilisinin onayı olmadan müdahale etmiyoruz.",
      },
      {
        question: "Levazım rezidansında gece servis var mı?",
        answer: "Evet, 7/24 aktif ekibimizle gece de hizmet veriyoruz; gece tarifesi önceden bildirilir.",
      },
      {
        question: "Aynı gün silindir değişimi yapılabilir mi?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      },
      {
        question: "Levazım'da park zorluğu olursa ne yapılır?",
        answer: "AVM otopark veya yan sokak buluşması planlanır; kısa mesafe yürüyerek tamamlanır.",
      },
    ],
  },
  {
    slug: "abbasaga-cilingir",
    name: "Abbasağa Çilingir",
    title: "Abbasağa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Abbasağa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş merkezine yakın, 10-15 dakikada yerinde servis ve şeffaf fiyat.",
    h1: "Abbasağa Çilingir — Beşiktaş Merkezi ve Çevresine 7/24",
    intro: "Abbasağa'da çilingir ihtiyacınız için doğru adrestesiniz. Abbasağa Mahallesi, Beşiktaş Çarşı hattı ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Yoğun konut ve işyeri karışımı mahallede farklı kilit sistemlerine hakim ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle Abbasağa'da güvenilir çilingir servisidir.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Abbasağa'da gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Abbasağa ve Beşiktaş hattında her gece sahada. Ortalama yanıt süremizi adres netleştikçe paylaşırız.",
      },
      {
        question: "Abbasağa dar sokaklarında araç girişi zor, nasıl ulaşıyorsunuz?",
        answer: "Dar sokaklarda en yakın uygun duruş noktasına yönlendiririz; kısa mesafeyi yaya olarak tamamlarız ve bu ücrete yansımaz.",
      },
      {
        question: "Beşiktaş Çarşı çevresinde ne kadar sürede gelirsiniz?",
        answer: "Abbasağa ve Beşiktaş Çarşı hattında genelde 10-15 dakika içinde kapınızdayız; trafik durumunu gerçek zamanlı takip ederiz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız veya minimal müdahaleyle açılış mümkündür; kilit tipine göre yöntemi yerinde değerlendiririz.",
      },
    ],
  },
  {
    slug: "cihannuma-cilingir",
    name: "Cihannüma Çilingir",
    title: "Cihannüma Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Cihannüma'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş'ın yüksek kesiminde 10-15 dakikada servis.",
    h1: "Cihannüma Çilingir — Beşiktaş Yüksek Mahalle 7/24",
    intro: "Cihannüma'da çilingir ihtiyacınız için doğru adrestesiniz. Cihannüma Mahallesi, Beşiktaş yokuş hattı ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Yokuşlu ve dar sokaklarda deneyimli ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Cihannüma yokuşlu sokaklarında araç çıkabilir mi?",
        answer: "Çoğu sokakta araçla ulaşıyoruz; çok dar veya dik yokuşlarda yaya ekip veya motosikletli teknisyen gönderilebilir.",
      },
      {
        question: "Gece Cihannüma'da servis var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Eski apartman kapısında kilit ölçüsü standart mı?",
        answer: "Tarihi binalarda ölçü sapması olabilir; yerinde ölçüm yaparak doğru silindir seçimi sağlarız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
    ],
  },
  {
    slug: "konaklar-cilingir",
    name: "Konaklar Çilingir",
    title: "Konaklar Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Etiler",
    description: "Konaklar'da çilingir: villa ve site kapılarında acil açılış. Etiler-Konaklar hattında 10-15 dakikada hizmet.",
    h1: "Konaklar Çilingir — Etiler ve Villa Sitelerine 7/24",
    intro: "Konaklar'da çilingir arıyorsanız doğru adrestesiniz. Konaklar Mahallesi, Etiler bağlantısı ve çevre villa sitelerine ortalama 10-15 dakikada ulaşıyoruz. Villa ve kapalı site kapılarında deneyimli ekibimiz, gelmeden önce fiyat bildirerek güvenli hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle Konaklar'da hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Konaklar'daki kapalı sitelere giriş için güvenlik kaydı gerekir mi?",
        answer: "Evet, kapalı sitelerde güvenlik kaydı standart; önceden isim ve plaka bildirmeniz süreci hızlandırır.",
      },
      {
        question: "Villa garaj kapısı için de çilingir hizmeti veriyor musunuz?",
        answer: "Evet, garaj ve bahçe kapıları dahil tüm giriş noktalarında hizmet veriyoruz.",
      },
      {
        question: "Gece Konaklar'a geliyor musunuz?",
        answer: "Evet, 7/24 aktif ekibimiz Etiler-Konaklar hattında her gece sahada.",
      },
      {
        question: "Anahtar kırığı silindir içinde kaldı, çıkarılabilir mi?",
        answer: "Çoğu durumda özel çıkarıcılarla parça temizlenir; silindir zarar gördüyse değişim önerilir.",
      },
    ],
  },
  {
    slug: "kultur-cilingir",
    name: "Kültür Çilingir",
    title: "Kültür Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Kültür Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Kültür Mahallesi Çilingir — Beşiktaş Hattına 7/24",
    intro: "Kültür Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Kültür Mahallesi, Beşiktaş iç hattı ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren, kimlik teyitli güvenli hizmet anlayışımızla yanınızdayız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Kültür Mahallesi'nde gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Aynı gün silindir değişimi yapılabilir mi?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      },
    ],
  },
  {
    slug: "mecidiye-cilingir",
    name: "Mecidiye Çilingir",
    title: "Mecidiye Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Mecidiye Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Mecidiye Çilingir — Beşiktaş Mahallelerine 7/24",
    intro: "Mecidiye Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Mecidiye Mahallesi, Beşiktaş merkezi ve çevre sokaklara ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren, kimlik teyitli güvenli hizmet anlayışımızla yanınızdayız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Mecidiye Mahallesi'nde gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      },
    ],
  },
  {
    slug: "muradiye-cilingir",
    name: "Muradiye Çilingir",
    title: "Muradiye Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Muradiye'de çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Muradiye Çilingir — Beşiktaş Mahallelerine 7/24",
    intro: "Muradiye'de çilingir ihtiyacınız için doğru adrestesiniz. Muradiye Mahallesi, Beşiktaş iç sokakları ve çevre hatta ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren, kimlik teyitli güvenli hizmet anlayışımızla yanınızdayız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Muradiye'de gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      },
    ],
  },
  {
    slug: "nisbetiye-cilingir",
    name: "Nisbetiye Çilingir",
    title: "Nisbetiye Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Etiler",
    description: "Nisbetiye'de çilingir: villa ve konutlarda acil kapı açılışı. Etiler-Nisbetiye hattında 10-15 dakikada servis.",
    h1: "Nisbetiye Çilingir — Etiler ve Nisbetiye Caddesi Hattına 7/24",
    intro: "Nisbetiye'de çilingir arıyorsanız doğru adrestesiniz. Nisbetiye Caddesi, Etiler bağlantısı ve çevre villa sokaklarına ortalama 10-15 dakikada ulaşıyoruz. Villa ve lüks konut kapılarında deneyimli ekibimiz, gelmeden önce fiyat bildirerek güvenli hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Nisbetiye Caddesi'nde park zorluğu olursa ne yapılır?",
        answer: "Yan sokak veya en yakın uygun duruş noktasına yönlendiririz; yürüyüş mesafesi kısa tutulur.",
      },
      {
        question: "Gece Nisbetiye'de servis var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Etiler-Nisbetiye hattında her gece sahada.",
      },
      {
        question: "Villa bahçe kapısı için de hizmet veriyor musunuz?",
        answer: "Evet, bahçe ve garaj kapıları dahil tüm giriş noktalarında hizmet veriyoruz.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
    ],
  },
  {
    slug: "sinanpasa-cilingir",
    name: "Sinanpaşa Çilingir",
    title: "Sinanpaşa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Sinanpaşa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş merkezine yakın, 10-15 dakikada servis.",
    h1: "Sinanpaşa Çilingir — Beşiktaş Merkezi ve İskele Hattına 7/24",
    intro: "Sinanpaşa'da çilingir ihtiyacınız için doğru adrestesiniz. Sinanpaşa Mahallesi, Beşiktaş İskele hattı ve Akaretler çevresine ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Sinanpaşa'da gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Beşiktaş İskele çevresinde park zorluğu olursa ne yapılır?",
        answer: "Yan sokak veya en yakın uygun duruş noktasına yönlendiririz.",
      },
      {
        question: "Tarihi apartman kapısında özel müdahale gerekir mi?",
        answer: "Evet, tarihi kapılarda kapı bütünlüğüne zarar vermeden açış için özel teknikler uyguluyoruz.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      }
    ],
  },
  {
    slug: "turkali-cilingir",
    name: "Türkali Çilingir",
    title: "Türkali Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Türkali'de çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Türkali Çilingir — Beşiktaş Mahallelerine 7/24",
    intro: "Türkali'de çilingir ihtiyacınız için doğru adrestesiniz. Türkali Mahallesi ve Beşiktaş iç sokaklarına ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Türkali'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "visnezade-cilingir",
    name: "Vişnezade Çilingir",
    title: "Vişnezade Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Vişnezade'de çilingir: konut ve işyerlerinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Vişnezade Çilingir — Beşiktaş Mahallelerine 7/24",
    intro: "Vişnezade'de çilingir ihtiyacınız için doğru adrestesiniz. Vişnezade Mahallesi ve Beşiktaş iç sokaklarına ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Vişnezade'de gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "yildiz-cilingir",
    name: "Yıldız Çilingir",
    title: "Yıldız Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Yıldız'da çilingir: konut ve park çevresinde acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Yıldız Çilingir — Yıldız Parkı ve Beşiktaş Hattına 7/24",
    intro: "Yıldız'da çilingir ihtiyacınız için doğru adrestesiniz. Yıldız Mahallesi, Yıldız Parkı çevresi ve Beşiktaş bağlantı hattına ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Yıldız'da gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "dolmabahce-cilingir",
    name: "Dolmabahçe Çilingir",
    title: "Dolmabahçe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beşiktaş",
    description: "Dolmabahçe'de çilingir: konut ve sahil hattında acil kapı açılışı. Beşiktaş hattında 10-15 dakikada servis.",
    h1: "Dolmabahçe Çilingir — Saray Çevresi ve Sahil Hattına 7/24",
    intro: "Dolmabahçe'de çilingir ihtiyacınız için doğru adrestesiniz. Dolmabahçe Caddesi, Saray çevresi ve sahil hattına ortalama 10-15 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Dolmabahçe'de gece çilingir bulabilir miyim?",
        answer: "Evet, 7/24 aktif ekibimiz Beşiktaş hattında her gece sahada.",
      },
      {
        question: "Sahil yolu trafiğinde gecikme olur mu?",
        answer: "Yoğun saatlerde alternatif güzergah kullanarak süreyi minimize ederiz.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      }
    ],
  },
  {
    slug: "carsi-cilingir",
    name: "Beşiktaş Çarşı Çilingir",
    title: "Beşiktaş Çarşı Çilingir | 7/24 Acil Kapı ve Kilit Servisi",
    description: "Beşiktaş Çarşı'da çilingir: dükkan ve konutlarda acil kapı açılışı. Merkezi konumda 10-15 dakikada servis.",
    h1: "Beşiktaş Çarşı Çilingir — Merkez ve İskele Hattına 7/24",
    intro: "Beşiktaş Çarşı'da çilingir ihtiyacınız için doğru adrestesiniz. Beşiktaş Çarşı, İskele çevresi ve merkez sokaklarına ortalama 10-15 dakikada ulaşıyoruz. Dükkan, mağaza ve konut kapılarında deneyimli ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-15 dakika",
    district: "Beşiktaş",
    priority: 3,
    faqs: [
      {
        question: "Beşiktaş Çarşı'da dükkan kapısı için gece servis var mı?",
        answer: "Evet, işyeri kepenk ve cam kapı kilitlerinde gece servisimiz bulunur.",
      },
      {
        question: "Çarşı içinde araç girişi kısıtlı, nasıl ulaşıyorsunuz?",
        answer: "En yakın uygun duruş noktasına yönlendiririz; kısa mesafeyi yaya olarak tamamlarız.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Kepenk kilidi ile dükkan kapı kilidi aynı anda bakılır mı?",
        answer: "İki ayrı mekanizma ise süre uzar; çağrıda her iki kapının da arızalı olduğunu belirtin.",
      }
    ],
  },
  {
    slug: "bozkurt-cilingir",
    name: "Bozkurt Çilingir",
    title: "Bozkurt Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Bozkurt Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Şişli hattında 10-18 dakikada servis.",
    h1: "Bozkurt Çilingir — Şişli Mahallelerine 7/24",
    intro: "Bozkurt Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Bozkurt Mahallesi ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Bozkurt Mahallesi'nde gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "cumhuriyet-cilingir",
    name: "Cumhuriyet Çilingir",
    title: "Cumhuriyet Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Cumhuriyet Mahallesi'nde çilingir: konut ve ofislerde acil kapı açılışı. Şişli-Harbiye hattında 10-18 dakikada servis.",
    h1: "Cumhuriyet Çilingir — Şişli ve Harbiye Hattına 7/24",
    intro: "Cumhuriyet Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Cumhuriyet Caddesi, Harbiye bağlantısı ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Cumhuriyet Caddesi üzerinde gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Ofis kapısı için yönetim izni şart mı?",
        answer: "Bina yönetimi veya ofis yetkilisinin onayı standart prosedürümüzdür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "esentepe-cilingir",
    name: "Esentepe Çilingir",
    title: "Esentepe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Esentepe'de çilingir: ofis ve konutlarda acil kapı açılışı. Şişli-Gayrettepe hattında 10-18 dakikada servis.",
    h1: "Esentepe Çilingir — Ofis ve Konutlara 7/24",
    intro: "Esentepe'de çilingir ihtiyacınız için doğru adrestesiniz. Esentepe Mahallesi, Gayrettepe bağlantısı ve Şişli ofis hattına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Esentepe'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Ofis kapısı için yönetim izni şart mı?",
        answer: "Bina yönetimi veya ofis yetkilisinin onayı standart prosedürümüzdür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "gulbahar-cilingir",
    name: "Gülbahar Çilingir",
    title: "Gülbahar Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Gülbahar Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Şişli hattında 10-18 dakikada servis.",
    h1: "Gülbahar Çilingir — Şişli Mahallelerine 7/24",
    intro: "Gülbahar Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Gülbahar Mahallesi ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Gülbahar'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "halaskargazi-cilingir",
    name: "Halaskargazi Çilingir",
    title: "Halaskargazi Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Halaskargazi'de çilingir: konut ve ofislerde acil kapı açılışı. Şişli ana cadde hattında 10-18 dakikada servis.",
    h1: "Halaskargazi Çilingir — Şişli Ana Cadde ve Ofis Hattına 7/24",
    intro: "Halaskargazi'de çilingir ihtiyacınız için doğru adrestesiniz. Halaskargazi Caddesi ve Şişli ofis hattına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Halaskargazi Caddesi'nde gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Ofis kapısı için yönetim izni şart mı?",
        answer: "Bina yönetimi veya ofis yetkilisinin onayı standart prosedürümüzdür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "harbiye-cilingir",
    name: "Harbiye Çilingir",
    title: "Harbiye Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Harbiye'de çilingir: otel, konut ve ofislerde acil kapı açılışı. Şişli-Nişantaşı hattında 10-18 dakikada servis.",
    h1: "Harbiye Çilingir — Otel ve Konutlara 7/24",
    intro: "Harbiye'de çilingir ihtiyacınız için doğru adrestesiniz. Harbiye Mahallesi, Nişantaşı bağlantısı ve otel sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Otel, ofis ve konut kapılarında deneyimli ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Harbiye'de otel odası için çilingir çağrılabilir mi?",
        answer: "Evet, otel resepsiyonu koordinasyonuyla misafir adına hızlı onay akışı kuruyoruz.",
      },
      {
        question: "Harbiye'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "kaptanpasa-cilingir",
    name: "Kaptanpaşa Çilingir",
    title: "Kaptanpaşa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Kaptanpaşa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Şişli hattında 10-18 dakikada servis.",
    h1: "Kaptanpaşa Çilingir — Şişli Mahallelerine 7/24",
    intro: "Kaptanpaşa'da çilingir ihtiyacınız için doğru adrestesiniz. Kaptanpaşa Mahallesi ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Kaptanpaşa'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "kustepe-cilingir",
    name: "Kuştepe Çilingir",
    title: "Kuştepe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Kuştepe'de çilingir: konut ve işyerlerinde acil kapı açılışı. Şişli hattında 10-18 dakikada servis.",
    h1: "Kuştepe Çilingir — Şişli Mahallelerine 7/24",
    intro: "Kuştepe'de çilingir ihtiyacınız için doğru adrestesiniz. Kuştepe Mahallesi ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Kuştepe'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "pangalti-cilingir",
    name: "Pangaltı Çilingir",
    title: "Pangaltı Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Şişli",
    description: "Pangaltı'da çilingir: konut ve hastane çevresinde acil kapı açılışı. Şişli hattında 10-18 dakikada servis.",
    h1: "Pangaltı Çilingir — Hastane Çevresi ve Konutlara 7/24",
    intro: "Pangaltı'da çilingir ihtiyacınız için doğru adrestesiniz. Pangaltı Mahallesi, hastane çevresi ve Şişli iç sokaklarına ortalama 10-18 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "10-18 dakika",
    district: "Şişli",
    priority: 3,
    faqs: [
      {
        question: "Pangaltı'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Şişli hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "caglayan-cilingir",
    name: "Çağlayan Çilingir",
    title: "Çağlayan Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Çağlayan'da çilingir: konut ve Adalet Sarayı çevresinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Çağlayan Çilingir — Adalet Sarayı ve Çevresine 7/24",
    intro: "Çağlayan'da çilingir ihtiyacınız için doğru adrestesiniz. Çağlayan Mahallesi, Adalet Sarayı çevresi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Çağlayan'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "celiktepe-cilingir",
    name: "Çeliktepe Çilingir",
    title: "Çeliktepe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Çeliktepe'de çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Çeliktepe Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Çeliktepe'de çilingir ihtiyacınız için doğru adrestesiniz. Çeliktepe Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Çeliktepe'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "gultepe-cilingir",
    name: "Gültepe Çilingir",
    title: "Gültepe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Gültepe'de çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Gültepe Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Gültepe'de çilingir ihtiyacınız için doğru adrestesiniz. Gültepe Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Gültepe'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "gursel-cilingir",
    name: "Gürsel Çilingir",
    title: "Gürsel Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Gürsel Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Gürsel Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Gürsel Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Gürsel Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Gürsel'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "nurtepe-cilingir",
    name: "Nurtepe Çilingir",
    title: "Nurtepe Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Nurtepe'de çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Nurtepe Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Nurtepe'de çilingir ihtiyacınız için doğru adrestesiniz. Nurtepe Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Nurtepe'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "ortabayir-cilingir",
    name: "Ortabayır Çilingir",
    title: "Ortabayır Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Ortabayır'da çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Ortabayır Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Ortabayır'da çilingir ihtiyacınız için doğru adrestesiniz. Ortabayır Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Ortabayır'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "talatpasa-cilingir",
    name: "Talatpaşa Çilingir",
    title: "Talatpaşa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Talatpaşa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Talatpaşa Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Talatpaşa'da çilingir ihtiyacınız için doğru adrestesiniz. Talatpaşa Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Talatpaşa'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "yahya-kemal-cilingir",
    name: "Yahya Kemal Çilingir",
    title: "Yahya Kemal Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Yahya Kemal Mahallesi'nde çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Yahya Kemal Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Yahya Kemal Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Yahya Kemal Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Yahya Kemal Mahallesi'nde gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "yesilce-cilingir",
    name: "Yeşilce Çilingir",
    title: "Yeşilce Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Kağıthane",
    description: "Yeşilce'de çilingir: konut ve işyerlerinde acil kapı açılışı. Kağıthane hattında 12-20 dakikada servis.",
    h1: "Yeşilce Çilingir — Kağıthane Mahallelerine 7/24",
    intro: "Yeşilce'de çilingir ihtiyacınız için doğru adrestesiniz. Yeşilce Mahallesi ve Kağıthane iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Kağıthane",
    priority: 3,
    faqs: [
      {
        question: "Yeşilce'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Kağıthane hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "bahcekoy-cilingir",
    name: "Bahçeköy Çilingir",
    title: "Bahçeköy Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Bahçeköy'de çilingir: orman içi siteler ve konutlarda acil kapı açılışı. Sarıyer kuzey hattında 15-25 dakikada servis.",
    h1: "Bahçeköy Çilingir — Orman Siteleri ve Konutlara 7/24",
    intro: "Bahçeköy'de çilingir ihtiyacınız için doğru adrestesiniz. Bahçeköy Mahallesi ve Sarıyer kuzey hattına ortalama 15-25 dakikada ulaşıyoruz. Orman içi kapalı sitelerde güvenlik prosedürlerine hakim ekibimiz, gelmeden önce fiyat bildirerek güvenli hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Bahçeköy orman içi sitelere giriş için güvenlik kaydı gerekir mi?",
        answer: "Evet, kapalı sitelerde güvenlik kaydı standart; önceden isim ve plaka bildirmeniz süreci hızlandırır.",
      },
      {
        question: "Gece Bahçeköy'e geliyor musunuz?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Uzak mesafe ek ücrete yansır mı?",
        answer: "Mesafe ve süreye göre tarifede güncelleme olabilir; telefonda ön bilgi verilir.",
      }
    ],
  },
  {
    slug: "cayirbasi-cilingir",
    name: "Çayırbaşı Çilingir",
    title: "Çayırbaşı Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Çayırbaşı'nda çilingir: konut ve sitelerinde acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Çayırbaşı Çilingir — Sarıyer Mahallelerine 7/24",
    intro: "Çayırbaşı'nda çilingir ihtiyacınız için doğru adrestesiniz. Çayırbaşı Mahallesi ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Çayırbaşı'nda gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "darussafaka-cilingir",
    name: "Darüşşafaka Çilingir",
    title: "Darüşşafaka Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Darüşşafaka'da çilingir: kampüs çevresi ve konutlarda acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Darüşşafaka Çilingir — Kampüs Çevresi ve Konutlara 7/24",
    intro: "Darüşşafaka'da çilingir ihtiyacınız için doğru adrestesiniz. Darüşşafaka Mahallesi, kampüs çevresi ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Darüşşafaka'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Kampüs içi konutlar için güvenlik koordinasyonu gerekir mi?",
        answer: "Evet, kampüs güvenliğiyle koordinasyon gerekebilir; kimlik ve kullanım teyidi standarttır.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "derbent-cilingir",
    name: "Derbent Çilingir",
    title: "Derbent Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Derbent'te çilingir: konut ve sitelerinde acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Derbent Çilingir — Sarıyer Mahallelerine 7/24",
    intro: "Derbent'te çilingir ihtiyacınız için doğru adrestesiniz. Derbent Mahallesi ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Derbent'te gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "ferahevler-cilingir",
    name: "Ferahevler Çilingir",
    title: "Ferahevler Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Ferahevler'de çilingir: lüks siteler ve konutlarda acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Ferahevler Çilingir — Lüks Siteler ve Konutlara 7/24",
    intro: "Ferahevler'de çilingir ihtiyacınız için doğru adrestesiniz. Ferahevler Mahallesi ve kapalı lüks sitelere ortalama 15-25 dakikada ulaşıyoruz. Lüks site prosedürlerine hakim ekibimiz, gelmeden önce fiyat bildirerek güvenli hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Ferahevler'deki kapalı sitelere girişte güvenlik kaydı şart mı?",
        answer: "Evet, lüks sitelerde güvenlik kaydı ve araç tescili standart; önceden isim bildirmeniz süreci hızlandırır.",
      },
      {
        question: "Gece Ferahevler'e geliyor musunuz?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Yüksek güvenlik silindir değişimi yapılır mı?",
        answer: "Evet, yaygın markalarda stok bulunur; nadir modellerde özel sipariş süresi olabilir.",
      }
    ],
  },
  {
    slug: "kocatas-cilingir",
    name: "Kocataş Çilingir",
    title: "Kocataş Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Kocataş'ta çilingir: konut ve sitelerinde acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Kocataş Çilingir — Sarıyer Mahallelerine 7/24",
    intro: "Kocataş'ta çilingir ihtiyacınız için doğru adrestesiniz. Kocataş Mahallesi ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Kocataş'ta gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "pinar-cilingir",
    name: "Pınar Çilingir",
    title: "Pınar Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Pınar Mahallesi'nde çilingir: konut ve sitelerinde acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Pınar Çilingir — Sarıyer Mahallelerine 7/24",
    intro: "Pınar Mahallesi'nde çilingir ihtiyacınız için doğru adrestesiniz. Pınar Mahallesi ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Pınar'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "rumelihisari-cilingir",
    name: "Rumelihisarı Çilingir",
    title: "Rumelihisarı Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Rumelihisarı'nda çilingir: tarihi yapılar ve Boğaz konutlarında acil kapı açılışı. Sarıyer hattında 15-22 dakikada servis.",
    h1: "Rumelihisarı Çilingir — Tarihi Yapılar ve Boğaz Hattına 7/24",
    intro: "Rumelihisarı'nda çilingir ihtiyacınız için doğru adrestesiniz. Rumelihisarı Mahallesi ve Boğaz sahil şeridine ortalama 15-22 dakikada ulaşıyoruz. Tarihi kapı ve kilit mekanizmalarında özel teknikler kullanan ekibimiz, gelmeden önce fiyat bildirerek güvenli hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-22 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Rumelihisarı'nda tarihi kapı için hasarsız açılış mümkün mü?",
        answer: "Evet, ahşap ve tarihi kapı mekanizmalarında özel teknikler kullanıyoruz; kapı bütünlüğünü korumayı önceliklendiriyoruz.",
      },
      {
        question: "Boğaz sahilinde dar sokakta araç giremiyorsa ne yapılır?",
        answer: "Yaya buluşması planlanır; kısa mesafeyi yürüyerek tamamlarız, ücrete yansımaz.",
      },
      {
        question: "Gece Rumelihisarı'na geliyor musunuz?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      }
    ],
  },
  {
    slug: "rumelikavagi-cilingir",
    name: "Rumelikavağı Çilingir",
    title: "Rumelikavağı Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Rumelikavağı'nda çilingir: Boğaz sahili konut ve tesislerinde acil kapı açılışı. Sarıyer kuzey hattında 18-28 dakikada servis.",
    h1: "Rumelikavağı Çilingir — Boğaz Sahili ve Konutlara 7/24",
    intro: "Rumelikavağı'nda çilingir ihtiyacınız için doğru adrestesiniz. Rumelikavağı Mahallesi ve Boğaz kuzey sahil hattına ortalama 18-28 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "18-28 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Rumelikavağı'na diğer semtlerden neden daha geç gelinir?",
        answer: "Mesafe ve Boğaz hattı güzergahı toplam süreyi uzatır; çağrıda net adres süreyi iyileştirir.",
      },
      {
        question: "Boğaz nemine bağlı kilit sorunları için öneri nedir?",
        answer: "Yılda bir silindir bakımı önerilir; müdahale sonrası ücretsiz değerlendirme yapıyoruz.",
      },
      {
        question: "Gece Rumelikavağı'na geliyor musunuz?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      }
    ],
  },
  {
    slug: "yenimahalle-sariyer-cilingir",
    name: "Yenimahalle Çilingir",
    title: "Yenimahalle Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Sarıyer",
    description: "Sarıyer Yenimahalle'de çilingir: konut ve sitelerinde acil kapı açılışı. Sarıyer hattında 15-25 dakikada servis.",
    h1: "Yenimahalle Çilingir — Sarıyer Mahallelerine 7/24",
    intro: "Sarıyer Yenimahalle'de çilingir ihtiyacınız için doğru adrestesiniz. Yenimahalle ve Sarıyer iç sokaklarına ortalama 15-25 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "15-25 dakika",
    district: "Sarıyer",
    priority: 3,
    faqs: [
      {
        question: "Sarıyer Yenimahalle'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Sarıyer hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "cihangir-cilingir",
    name: "Cihangir Çilingir",
    title: "Cihangir Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Cihangir'de çilingir: tarihi apartman ve butik işyerlerinde acil kapı açılışı. Beyoğlu hattında 12-20 dakikada servis.",
    h1: "Cihangir Çilingir — Tarihi Apartmanlar ve Butik İşyerlerine 7/24",
    intro: "Cihangir'de çilingir ihtiyacınız için doğru adrestesiniz. Cihangir Mahallesi ve tarihi apartmanlara ortalama 12-20 dakikada ulaşıyoruz. Tarihi binalarda kapı bütünlüğüne zarar vermeden açış için özel teknikler kullanan ekibimiz, gelmeden önce fiyat bildirerek şeffaf hizmet sunar. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Cihangir'de tarihi apartman kapısı hasarsız açılır mı?",
        answer: "Özel açılış teknikleriyle riski azaltırız; çok hassas durumlarda restorasyon uzmanı önerisi verebiliriz.",
      },
      {
        question: "Cihangir dar sokaklarında araç giremiyorsa ne yapılır?",
        answer: "Standart işçilik aynı kalır; kısa mesafeyi yaya olarak tamamlarız.",
      },
      {
        question: "Gece Cihangir'de servis var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      }
    ],
  },
  {
    slug: "sutluce-cilingir",
    name: "Sütlüce Çilingir",
    title: "Sütlüce Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Sütlüce'de çilingir: konut ve işyerlerinde acil kapı açılışı. Beyoğlu-Haliç hattında 12-20 dakikada servis.",
    h1: "Sütlüce Çilingir — Haliç Hattı ve Konutlara 7/24",
    intro: "Sütlüce'de çilingir ihtiyacınız için doğru adrestesiniz. Sütlüce Mahallesi ve Haliç sahil hattına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Sütlüce'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "kasimpasa-cilingir",
    name: "Kasımpaşa Çilingir",
    title: "Kasımpaşa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Kasımpaşa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beyoğlu hattında 12-20 dakikada servis.",
    h1: "Kasımpaşa Çilingir — Beyoğlu Mahallelerine 7/24",
    intro: "Kasımpaşa'da çilingir ihtiyacınız için doğru adrestesiniz. Kasımpaşa Mahallesi ve Beyoğlu iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Kasımpaşa'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "piyalepasa-cilingir",
    name: "Piyalepaşa Çilingir",
    title: "Piyalepaşa Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Piyalepaşa'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beyoğlu hattında 12-20 dakikada servis.",
    h1: "Piyalepaşa Çilingir — Beyoğlu Mahallelerine 7/24",
    intro: "Piyalepaşa'da çilingir ihtiyacınız için doğru adrestesiniz. Piyalepaşa Mahallesi ve Beyoğlu iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Piyalepaşa'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "halicioglu-cilingir",
    name: "Halıcıoğlu Çilingir",
    title: "Halıcıoğlu Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Halıcıoğlu'nda çilingir: konut ve işyerlerinde acil kapı açılışı. Beyoğlu-Haliç hattında 12-20 dakikada servis.",
    h1: "Halıcıoğlu Çilingir — Haliç Hattı ve Konutlara 7/24",
    intro: "Halıcıoğlu'nda çilingir ihtiyacınız için doğru adrestesiniz. Halıcıoğlu Mahallesi ve Haliç hattına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Halıcıoğlu'nda gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "kulaksiz-cilingir",
    name: "Kulaksız Çilingir",
    title: "Kulaksız Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Kulaksız'da çilingir: konut ve işyerlerinde acil kapı açılışı. Beyoğlu hattında 12-20 dakikada servis.",
    h1: "Kulaksız Çilingir — Beyoğlu Mahallelerine 7/24",
    intro: "Kulaksız'da çilingir ihtiyacınız için doğru adrestesiniz. Kulaksız Mahallesi ve Beyoğlu iç sokaklarına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Kulaksız'da gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  },
  {
    slug: "haskoy-cilingir",
    name: "Hasköy Çilingir",
    title: "Hasköy Çilingir | 7/24 Acil Kapı ve Kilit Servisi | Beyoğlu",
    description: "Hasköy'de çilingir: Haliç kıyısı konut ve müze çevresinde acil kapı açılışı. Beyoğlu hattında 12-20 dakikada servis.",
    h1: "Hasköy Çilingir — Haliç Kıyısı ve Konutlara 7/24",
    intro: "Hasköy'de çilingir ihtiyacınız için doğru adrestesiniz. Hasköy Mahallesi ve Haliç kıyısına ortalama 12-20 dakikada ulaşıyoruz. Gelmeden önce fiyat bildiren ekibimizle şeffaf hizmet alırsınız. İstanbul Anahtarcılar ve Çilingirciler Odası kayıtlı firmamız 14 yıllık deneyimiyle hizmet veriyor.",
    responseTime: "12-20 dakika",
    district: "Beyoğlu",
    priority: 3,
    faqs: [
      {
        question: "Hasköy'de gece çilingir var mı?",
        answer: "Evet, 7/24 aktif ekibimiz Beyoğlu hattında her gece sahada.",
      },
      {
        question: "Fiyatı önceden öğrenebilir miyim?",
        answer: "Kesinlikle. Gelmeden önce iş kalemini ve yaklaşık ücret aralığını telefonda netleştiriyoruz.",
      },
      {
        question: "Apartman kapısı hasarsız açılabilir mi?",
        answer: "Çoğu standart silindir ve gömme kilitte hasarsız açılış mümkündür.",
      },
      {
        question: "Kilit değişimi aynı gün yapılır mı?",
        answer: "Stokta uygun ölçü varsa aynı gün değişim yapılır.",
      }
    ],
  }
];

export const REGIONS: Region[] = RAW_REGIONS.map((region) => ({
  ...region,
  technicalArticle:
    TECHNICAL_ARTICLES[region.slug] ?? region.technicalArticle,
})).map(appendDistrictFaqs);

export const getRegionBySlug = (slug: string): Region | undefined =>
  REGIONS.find((r) => r.slug === slug);

export const getPriorityRegions = (priority: number): Region[] =>
  REGIONS.filter((r) => r.priority === priority);

/** Ana sayfa: önce tüm öncelik-1, sonra öncelik-2 bölgeler (REGIONS sırası korunur). */
export function getTopRegionsForHome(limit = 12): Region[] {
  const merged = [...getPriorityRegions(1), ...getPriorityRegions(2)];
  return merged.slice(0, limit);
}
