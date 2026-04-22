import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** `/_next/*` dahil tüm yollara verilmez — dev’de chunk/CSS 404 + text/html MIME hatasını önler. */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    return [
      { source: "/", headers: securityHeaders },
      { source: "/blog", headers: securityHeaders },
      { source: "/blog/:path*", headers: securityHeaders },
      { source: "/bolgeler", headers: securityHeaders },
      { source: "/bolgeler/:path*", headers: securityHeaders },
      { source: "/hizmetler", headers: securityHeaders },
      { source: "/hizmetler/:path*", headers: securityHeaders },
      { source: "/iletisim", headers: securityHeaders },
      { source: "/hakkimizda", headers: securityHeaders },
      { source: "/yetki-belgeleri", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      // Hizmet redirectleri
      {
        source: "/hizmet-kapi-cilingir-1",
        destination: "/hizmetler/kapi-cilingir",
        permanent: true,
      },
      {
        source: "/hizmet-multlock-kilit-11",
        destination: "/hizmetler/multlock-kilit",
        permanent: true,
      },
      {
        source: "/hizmet-kale-kilit-12",
        destination: "/hizmetler/kale-kilit",
        permanent: true,
      },
      {
        source: "/hizmet-ojmar-kilitleri-13",
        destination: "/hizmetler/ojmar-kilitleri",
        permanent: true,
      },
      // Bölge redirectleri
      {
        source: "/bolge-maslak-cilingir-113",
        destination: "/bolgeler/maslak-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-sariyer-cilingir-120",
        destination: "/bolgeler/sariyer-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-ayazaga-cilingir-121",
        destination: "/bolgeler/ayazaga-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-tarabya-cilingir-122",
        destination: "/bolgeler/tarabya-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-resitpasa-cilingir-123",
        destination: "/bolgeler/resitpasa-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-yenikoy-cilingir-124",
        destination: "/bolgeler/yenikoy-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-zekeriyakoy-cilingir-125",
        destination: "/bolgeler/zekeriyakoy-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-buyukdere-cilingir-126",
        destination: "/bolgeler/buyukdere-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-levent-cilingir-127",
        destination: "/bolgeler/levent-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-besiktas-cilingir-128",
        destination: "/bolgeler/besiktas-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-zincirlikuyu-cilingir-129",
        destination: "/bolgeler/zincirlikuyu-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-gayrettepe-cilingir-130",
        destination: "/bolgeler/gayrettepe-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-baltalimani-cilingir-131",
        destination: "/bolgeler/baltalimani-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-dikilitas-cilingir-132",
        destination: "/bolgeler/dikilitas-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-mecidiyekoy-cilingir-133",
        destination: "/bolgeler/mecidiyekoy-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-ortakoy-cilingir-134",
        destination: "/bolgeler/ortakoy-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-beyoglu-cilingir-135",
        destination: "/bolgeler/beyoglu-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-taksim-cilingir-136",
        destination: "/bolgeler/taksim-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-emirgan-cilingir-137",
        destination: "/bolgeler/emirgan-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-seyrantepe-cilingir-138",
        destination: "/bolgeler/seyrantepe-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-kagithane-cilingir-139",
        destination: "/bolgeler/kagithane-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-nisantasi-cilingir-148",
        destination: "/bolgeler/nisantasi-cilingir",
        permanent: true,
      },
      {
        source: "/bolge-sisli-cilingir-154",
        destination: "/bolgeler/sisli-cilingir",
        permanent: true,
      },
      // Blog redirectleri
      {
        source: "/blog-evin-kapisi-kapandi-ne-yapmaliyim-1",
        destination: "/blog/evin-kapisi-kapandi-ne-yapmaliyim",
        permanent: true,
      },
      {
        source: "/blog-kasanin-icinde-anahtar-kirildi-acilir-mi-4",
        destination: "/blog/kasanin-icinde-anahtar-kirildi",
        permanent: true,
      },
      {
        source: "/blog-anahtarimi-kaybettim-ne-yapmaliyim-5",
        destination: "/blog/anahtarimi-kaybettim-ne-yapmaliyim",
        permanent: true,
      },
      {
        source: "/blog-alarmli-kilit-nedir-ne-ise-yarar-6",
        destination: "/blog/alarmli-kilit-nedir",
        permanent: true,
      },
      {
        source: "/blog-tuzakli-kapi-kilidi-nedir-7",
        destination: "/blog/tuzakli-kapi-kilidi-nedir",
        permanent: true,
      },
      // Kurumsal sayfa redirectleri
      {
        source: "/sayfa-hakkimizda-1",
        destination: "/hakkimizda",
        permanent: true,
      },
      {
        source: "/sayfa-misyonumuz-2",
        destination: "/hakkimizda",
        permanent: true,
      },
      {
        source: "/sayfa-vizyonumuz-3",
        destination: "/hakkimizda",
        permanent: true,
      },
      {
        source: "/hizmet-bolgeleri",
        destination: "/bolgeler",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
