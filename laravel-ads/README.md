# Laravel Ads — Inertia sayfası (P15)

Bu klasör, ana Next.js projesinden **ayrı** tutulan **Laravel + Inertia + Vue** parçasıdır.

- **Vue sayfası:** `resources/js/Pages/Ads/Show.vue`
- **Örnek rotalar:** `routes/ads-routes.stub.php` → kendi `routes/web.php` dosyanıza uygun şekilde ekleyin.

## Beklenen Inertia props

| Prop | Açıklama |
|------|-----------|
| `campaign` | `id`, `name`, `platform_config` (opsiyonel), `strategy_html` |
| `copies` | Obje (`{ feed: [...] }`) veya dizi; her öğe: `id`, `format`, `title`, `headlines[]`, `descriptions[]`, `cta`, `source` (`ai` \| …), `score` (0–5) |
| `tasks` | `id`, `title`, `done`, `priority` (`high`\|`medium`\|`low`), `ai_generated` |
| `metrics` | `id`, `date`, `impressions`, `clicks`, `conversions`, `spend`, `revenue` |

## Ziggy

İsimli rotalar için [Ziggy](https://github.com/tighten/ziggy) önerilir; yoksa sayfa göreli `/ads/{id}/...` yollarına düşer.
