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
    title:
      "Levent Çilingir 7/24 | Büyükdere, Metrocity, Kanyon, 4.Levent | Hasarsız",
    description:
      "Levent çilingir hizmeti: Büyükdere Cad, Metrocity, Kanyon ve 4. Levent'e 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Levent çilingir 0536 940 56 56",
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
    title:
      "Maslak Çilingir 7/24 | Vadistanbul, Maslak 1453, Skyland | Hasarsız",
    description:
      "Maslak çilingir hizmeti: Vadistanbul, Maslak 1453, Skyland ve Nidapark'a 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Maslak çilingir 0536 940 56 56",
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
    title:
      "Vadistanbul Çilingir 7/24 | Vadi AVM, Rezidans, Ayazağa | Hasarsız",
    description:
      "Vadistanbul çilingir hizmeti: Vadi AVM, rezidans ve ofis bloklarına 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Vadistanbul çilingir 0536 940 56 56",
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
    title:
      "Tarabya Çilingir 7/24 | Tarabya Marina, Kireçburnu, Boğaz | Hasarsız",
    description:
      "Tarabya çilingir hizmeti: Tarabya Marina, Kireçburnu ve Boğaz sahiline 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Tarabya çilingir 0536 940 56 56",
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
    title:
      "Ayazağa Çilingir 7/24 | Metro, Şişli Ayazağa, Levent Hattı | Hasarsız",
    description:
      "Ayazağa çilingir hizmeti: Ayazağa Metro, Şişli Ayazağa ve Levent hattına 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Ayazağa çilingir 0536 940 56 56",
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
    title:
      "Reşitpaşa Çilingir 7/24 | İTÜ, Maslak Sanayi, Ayazağa | Hasarsız",
    description:
      "Reşitpaşa çilingir hizmeti: İTÜ Kampüsü, Maslak Sanayi ve Ayazağa hattına 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Reşitpaşa çilingir 0536 940 56 56",
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
    title:
      "Emirgan Çilingir 7/24 | Emirgan Korusu, Boğaz, Tarabya Hattı | Hasarsız",
    description:
      "Emirgan çilingir hizmeti: Emirgan Korusu, Boğaz sahili ve Tarabya hattına 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Emirgan çilingir 0536 940 56 56",
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
    title:
      "İstinye Çilingir 7/24 | İstinye Park, Yeniköy, Baltalimanı | Hasarsız",
    description:
      "İstinye çilingir hizmeti: İstinye Park AVM, Yeniköy ve Baltalimanı'na 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. İstinye çilingir 0536 940 56 56",
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
    title:
      "Kireçburnu Çilingir 7/24 | Tarabya, Yeniköy, Boğaz Hattı | Hasarsız",
    description:
      "Kireçburnu çilingir hizmeti: Tarabya, Yeniköy ve Boğaz hattına 10-15 dk. Oda kayıtlı yetkili firma, hasarsız garantili. Kireçburnu çilingir 0536 940 56 56",
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
