<template>
  <div class="ads-show">
    <Head :title="campaign?.name || 'Kampanya'" />

    <header class="ads-show__header">
      <h1 class="ads-show__title">{{ campaign?.name || 'Reklam kampanyası' }}</h1>
      <nav class="ads-show__tabs" role="tablist" aria-label="Kampanya sekmeleri">
        <button
          v-for="t in tabs"
          :key="t.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === t.id"
          :class="['ads-show__tab', { 'ads-show__tab--active': activeTab === t.id }]"
          @click="activeTab = t.id"
        >
          {{ t.label }}
        </button>
      </nav>
    </header>

    <!-- TAB 1 — Strateji -->
    <section
      v-show="activeTab === 'strategy'"
      class="ads-show__panel"
      role="tabpanel"
      aria-labelledby="tab-strategy"
    >
      <h2 id="tab-strategy" class="sr-only">Strateji</h2>

      <div v-if="platformConfig && hasPlatformConfig" class="platform-config">
        <h3 class="platform-config__title">Platform ayarları</h3>

        <div v-if="platformConfig.google" class="platform-block">
          <h4>Google Ads</h4>
          <ul class="platform-block__list">
            <li v-if="platformConfig.google.keywords?.length">
              <strong>Anahtar kelimeler:</strong>
              <span
                v-for="(kw, i) in platformConfig.google.keywords"
                :key="'gk'+i"
                class="tag"
              >
                {{ kw.text }} <em>({{ kw.match_type || 'broad' }})</em>
              </span>
            </li>
            <li v-if="platformConfig.google.negative_keywords?.length">
              <strong>Negatif:</strong>
              <span
                v-for="(nk, i) in platformConfig.google.negative_keywords"
                :key="'nk'+i"
                class="tag tag--neg"
              >{{ nk }}</span>
            </li>
            <li v-if="platformConfig.google.audiences?.length">
              <strong>Kitle:</strong> {{ platformConfig.google.audiences.join(', ') }}
            </li>
            <li v-if="platformConfig.google.bid_strategy">
              <strong>Teklif:</strong> {{ platformConfig.google.bid_strategy }}
            </li>
            <li v-if="platformConfig.google.budget_allocation != null">
              <strong>Bütçe payı:</strong> {{ platformConfig.google.budget_allocation }}%
            </li>
          </ul>
        </div>

        <div v-if="platformConfig.meta" class="platform-block">
          <h4>Meta Ads</h4>
          <ul class="platform-block__list">
            <li v-if="platformConfig.meta.audiences?.length">
              <strong>Kitle:</strong> {{ platformConfig.meta.audiences.join(', ') }}
            </li>
            <li v-if="platformConfig.meta.placements?.length">
              <strong>Yerleşim:</strong> {{ platformConfig.meta.placements.join(', ') }}
            </li>
            <li v-if="platformConfig.meta.bid_strategy">
              <strong>Teklif:</strong> {{ platformConfig.meta.bid_strategy }}
            </li>
            <li v-if="platformConfig.meta.budget_allocation != null">
              <strong>Bütçe payı:</strong> {{ platformConfig.meta.budget_allocation }}%
            </li>
          </ul>
        </div>
      </div>
      <p v-else class="muted">Platform yapılandırması yok.</p>

      <div class="strategy-editor">
        <label class="strategy-editor__label" for="strategy-editor">Strateji metni</label>
        <div
          id="strategy-editor"
          ref="strategyEditorRef"
          class="strategy-editor__area"
          contenteditable="true"
          spellcheck="true"
          @input="onStrategyInput"
          v-html="strategyLocal"
        />
        <button type="button" class="btn btn--primary" :disabled="strategySaving" @click="saveStrategy">
          💾 Kaydet
        </button>
      </div>
    </section>

    <!-- TAB 2 — Copy Havuzu -->
    <section
      v-show="activeTab === 'copy'"
      class="ads-show__panel"
      role="tabpanel"
    >
      <div class="copy-toolbar">
        <h2>Copy havuzu</h2>
        <button type="button" class="btn btn--primary" @click="openCopyModal">+ Copy Ekle</button>
      </div>

      <div v-for="(items, format) in copiesGrouped" :key="format" class="copy-group">
        <h3 class="copy-group__title">{{ formatLabel(format) }}</h3>
        <div class="copy-cards">
          <article v-for="c in items" :key="c.id" class="copy-card">
            <header class="copy-card__head">
              <span v-if="c.source === 'ai'" class="badge badge--ai">AI</span>
              <span class="copy-card__title-text">{{ c.title || 'Başlıksız' }}</span>
              <div class="stars" :aria-label="'Skor ' + (c.score ?? 0)">
                <button
                  v-for="n in 5"
                  :key="n"
                  type="button"
                  class="stars__btn"
                  :class="{ 'stars__btn--on': n <= (c.score ?? 0) }"
                  @click="setCopyScore(c, n)"
                >
                  ★
                </button>
                <span class="stars__votes">
                  <button type="button" class="linkish" @click="voteCopy(c, -1)">−</button>
                  <button type="button" class="linkish" @click="voteCopy(c, 1)">+</button>
                </span>
              </div>
            </header>
            <div class="copy-card__body">
              <div v-for="(h, i) in (c.headlines || [])" :key="'h'+i" class="field-line">
                <span class="field-line__label">H{{ i + 1 }}</span>
                <span :class="lineClass(h, HEADLINE_MAX)">{{ h }}</span>
                <span :class="countClass(h, HEADLINE_MAX)">{{ (h || '').length }}/{{ HEADLINE_MAX }}</span>
              </div>
              <div v-for="(d, i) in (c.descriptions || [])" :key="'d'+i" class="field-line">
                <span class="field-line__label">D{{ i + 1 }}</span>
                <span :class="lineClass(d, DESC_MAX)">{{ d }}</span>
                <span :class="countClass(d, DESC_MAX)">{{ (d || '').length }}/{{ DESC_MAX }}</span>
              </div>
              <p v-if="c.cta" class="copy-card__cta"><strong>CTA:</strong> {{ c.cta }}</p>
            </div>
          </article>
        </div>
      </div>

      <div v-if="!Object.keys(copiesGrouped).length" class="muted">Henüz copy yok.</div>

      <Teleport to="body">
        <div v-if="copyModalOpen" class="modal-overlay" @click.self="copyModalOpen = false">
          <div class="modal" role="dialog" aria-modal="true" aria-labelledby="copy-modal-title">
            <h2 id="copy-modal-title">Yeni copy</h2>
            <form class="modal-form" @submit.prevent="submitNewCopy">
              <label>Format <input v-model="newCopy.format" required class="input" placeholder="feed, story, search..." /></label>
              <label>Başlık <input v-model="newCopy.title" class="input" /></label>
              <label>Headline 1 <input v-model="newCopy.headline1" class="input" maxlength="60" /></label>
              <label>Headline 2 <input v-model="newCopy.headline2" class="input" maxlength="60" /></label>
              <label>Açıklama 1 <textarea v-model="newCopy.desc1" class="input" rows="2" /></label>
              <label>Açıklama 2 <textarea v-model="newCopy.desc2" class="input" rows="2" /></label>
              <label>CTA <input v-model="newCopy.cta" class="input" /></label>
              <div class="modal-actions">
                <button type="button" class="btn" @click="copyModalOpen = false">İptal</button>
                <button type="submit" class="btn btn--primary">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      </Teleport>
    </section>

    <!-- TAB 3 — Görevler -->
    <section v-show="activeTab === 'tasks'" class="ads-show__panel" role="tabpanel">
      <div class="copy-toolbar">
        <h2>Görevler</h2>
        <button type="button" class="btn btn--primary" @click="addTask">+ Görev Ekle</button>
      </div>
      <ul class="task-list">
        <li v-for="task in localTasks" :key="task.id" class="task-row" :class="{ 'task-row--done': task.done }">
          <span class="priority-dot" :class="'priority-dot--' + (task.priority || 'medium')" :title="'Öncelik: ' + (task.priority || 'medium')" />
          <span v-if="task.ai_generated" class="badge badge--ai">AI</span>
          <label class="task-toggle">
            <input type="checkbox" :checked="task.done" @change="toggleTask(task)" />
            <span>{{ task.title }}</span>
          </label>
        </li>
      </ul>
      <p v-if="!localTasks.length" class="muted">Görev yok.</p>
    </section>

    <!-- TAB 4 — Metrikler -->
    <section v-show="activeTab === 'metrics'" class="ads-show__panel" role="tabpanel">
      <div class="copy-toolbar">
        <h2>Metrikler</h2>
        <button type="button" class="btn btn--primary" @click="openMetricForm">+ Metrik Ekle</button>
      </div>

      <form v-if="metricFormOpen" class="metric-form" @submit.prevent="submitMetric">
        <label>Tarih <input v-model="metricDraft.date" type="date" required class="input" /></label>
        <label>Gösterim <input v-model.number="metricDraft.impressions" type="number" min="0" class="input" /></label>
        <label>Tıklama <input v-model.number="metricDraft.clicks" type="number" min="0" class="input" /></label>
        <label>Dönüşüm <input v-model.number="metricDraft.conversions" type="number" min="0" step="0.01" class="input" /></label>
        <label>Harcama (₺) <input v-model.number="metricDraft.spend" type="number" min="0" step="0.01" class="input" /></label>
        <label>Gelir (₺) <input v-model.number="metricDraft.revenue" type="number" min="0" step="0.01" class="input" /></label>
        <div class="metric-calc">
          <span>CTR: <strong>{{ previewCtr }}%</strong></span>
          <span>CPC: <strong>₺{{ previewCpc }}</strong></span>
          <span>ROAS: <strong>{{ previewRoas }}</strong></span>
        </div>
        <button type="submit" class="btn btn--primary">Kaydet</button>
      </form>

      <div class="metrics-table-wrap">
        <table class="metrics-table">
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Gösterim</th>
              <th>Tıklama</th>
              <th>Dönüşüm</th>
              <th>Harcama</th>
              <th>Gelir</th>
              <th>CTR %</th>
              <th>CPC ₺</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in metricsWithCalc" :key="m.id || m.date">
              <td>{{ m.date }}</td>
              <td>{{ m.impressions }}</td>
              <td>{{ m.clicks }}</td>
              <td>{{ m.conversions }}</td>
              <td>{{ formatMoney(m.spend) }}</td>
              <td>{{ formatMoney(m.revenue) }}</td>
              <td>{{ m.ctr }}</td>
              <td>{{ m.cpc }}</td>
              <td>{{ m.roas }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="chart-block">
        <h3 class="chart-block__title">Haftalık harcama vs gelir</h3>
        <div class="bar-chart">
          <div
            v-for="row in chartRows"
            :key="row.label"
            class="bar-chart__group"
          >
            <div class="bar-chart__label">{{ row.label }}</div>
            <div class="bar-chart__bars">
              <div class="bar-chart__track">
                <div
                  class="bar-chart__fill bar-chart__fill--spend"
                  :style="{ height: row.spendPct + '%' }"
                  :title="'Harcama ' + row.spend"
                />
              </div>
              <div class="bar-chart__track">
                <div
                  class="bar-chart__fill bar-chart__fill--revenue"
                  :style="{ height: row.revenuePct + '%' }"
                  :title="'Gelir ' + row.revenue"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bar-chart__legend">
          <span><i class="swatch swatch--spend" /> Harcama</span>
          <span><i class="swatch swatch--revenue" /> Gelir</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Head, router } from '@inertiajs/vue3'
import { computed, ref, watch, onMounted, nextTick } from 'vue'

const HEADLINE_MAX = 30
const DESC_MAX = 90

const props = defineProps({
  campaign: { type: Object, default: () => ({}) },
  /** Gruplu: { feed: [...], story: [...] } veya düz dizi (format alanı ile) */
  copies: { type: [Object, Array], default: () => ({}) },
  tasks: { type: Array, default: () => [] },
  metrics: { type: Array, default: () => [] },
})

const tabs = [
  { id: 'strategy', label: '📋 Strateji' },
  { id: 'copy', label: '✍️ Copy Havuzu' },
  { id: 'tasks', label: '✅ Görevler' },
  { id: 'metrics', label: '📊 Metrikler' },
]

const activeTab = ref('strategy')
const strategyEditorRef = ref(null)
const strategyLocal = ref('')
const strategySaving = ref(false)

const platformConfig = computed(() => props.campaign?.platform_config || null)
const hasPlatformConfig = computed(() => {
  const p = platformConfig.value
  if (!p) return false
  return Boolean(p.google || p.meta)
})

watch(
  () => props.campaign?.strategy_html,
  (v) => {
    strategyLocal.value = v || ''
    nextTick(() => {
      if (strategyEditorRef.value && strategyEditorRef.value.innerHTML !== strategyLocal.value) {
        strategyEditorRef.value.innerHTML = strategyLocal.value
      }
    })
  },
  { immediate: true }
)

function onStrategyInput() {
  if (strategyEditorRef.value) {
    strategyLocal.value = strategyEditorRef.value.innerHTML
  }
}

const adBase = computed(() => `/ads/${props.campaign?.id ?? ''}`)

function saveStrategy() {
  strategySaving.value = true
  const url =
    typeof window !== 'undefined' && typeof window.route === 'function'
      ? window.route('ads.strategy.update', props.campaign.id)
      : `${adBase.value}/strategy`
  router.patch(
    url,
    { strategy_html: strategyLocal.value },
    {
      preserveScroll: true,
      onFinish: () => { strategySaving.value = false },
    }
  )
}

const copiesGrouped = computed(() => {
  const c = props.copies
  if (Array.isArray(c)) {
    const out = {}
    for (const item of c) {
      const f = item.format || 'genel'
      if (!out[f]) out[f] = []
      out[f].push(item)
    }
    return out
  }
  return c && typeof c === 'object' ? c : {}
})

function formatLabel(key) {
  const labels = { feed: 'Feed', story: 'Story', search: 'Arama', genel: 'Genel' }
  return labels[key] || key
}

function lineClass(text, max) {
  const len = (text || '').length
  return ['field-line__text', { 'field-line__text--over': len > max }]
}

function countClass(text, max) {
  const len = (text || '').length
  return ['char-count', { 'char-count--over': len > max }]
}

const copyModalOpen = ref(false)
const newCopy = ref({
  format: '',
  title: '',
  headline1: '',
  headline2: '',
  desc1: '',
  desc2: '',
  cta: '',
})

function openCopyModal() {
  copyModalOpen.value = true
}

function submitNewCopy() {
  const headlines = [newCopy.value.headline1, newCopy.value.headline2].filter(Boolean)
  const descriptions = [newCopy.value.desc1, newCopy.value.desc2].filter(Boolean)
  const url =
    typeof window !== 'undefined' && typeof window.route === 'function'
      ? window.route('ads.copies.store', props.campaign.id)
      : `${adBase.value}/copies`
  router.post(
    url,
    {
      format: newCopy.value.format,
      title: newCopy.value.title,
      headlines,
      descriptions,
      cta: newCopy.value.cta,
      source: 'manual',
    },
    {
      preserveScroll: true,
      onSuccess: () => {
        copyModalOpen.value = false
        newCopy.value = { format: '', title: '', headline1: '', headline2: '', desc1: '', desc2: '', cta: '' }
      },
    }
  )
}

/** Shallow `ads.copies`: güncelleme URI’si genelde `PATCH /copies/{copy}` */
function copyUpdateUrl(copyId) {
  if (typeof window !== 'undefined' && typeof window.route === 'function') {
    try {
      return window.route('ads.copies.update', copyId)
    } catch {
      /* fall through */
    }
  }
  return `/copies/${copyId}`
}

function setCopyScore(copy, n) {
  router.patch(copyUpdateUrl(copy.id), { score: n }, { preserveScroll: true })
}

function voteCopy(copy, delta) {
  const next = Math.min(5, Math.max(0, (copy.score ?? 0) + delta))
  setCopyScore(copy, next)
}

const localTasks = ref([])

watch(
  () => props.tasks,
  (t) => { localTasks.value = (t || []).map((x) => ({ ...x })) },
  { immediate: true, deep: true }
)

function addTask() {
  const title = window.prompt('Görev başlığı')
  if (!title) return
  const url =
    typeof window !== 'undefined' && typeof window.route === 'function'
      ? window.route('ads.tasks.store', props.campaign.id)
      : `${adBase.value}/tasks`
  router.post(url, { title, priority: 'medium', done: false }, { preserveScroll: true })
}

function toggleTask(task) {
  const url =
    typeof window !== 'undefined' && typeof window.route === 'function'
      ? window.route('ads.tasks.toggle', { ad: props.campaign.id, task: task.id })
      : `${adBase.value}/tasks/${task.id}/toggle`
  router.patch(url, {}, { preserveScroll: true })
}

const metricFormOpen = ref(false)
const metricDraft = ref({
  date: '',
  impressions: 0,
  clicks: 0,
  conversions: 0,
  spend: 0,
  revenue: 0,
})

function openMetricForm() {
  metricFormOpen.value = true
  const d = new Date()
  metricDraft.value.date = d.toISOString().slice(0, 10)
}

const previewCtr = computed(() => {
  const imp = Number(metricDraft.value.impressions) || 0
  const clk = Number(metricDraft.value.clicks) || 0
  if (imp <= 0) return '0.00'
  return ((clk / imp) * 100).toFixed(2)
})

const previewCpc = computed(() => {
  const clk = Number(metricDraft.value.clicks) || 0
  const sp = Number(metricDraft.value.spend) || 0
  if (clk <= 0) return '—'
  return (sp / clk).toFixed(2)
})

const previewRoas = computed(() => {
  const sp = Number(metricDraft.value.spend) || 0
  const rev = Number(metricDraft.value.revenue) || 0
  if (sp <= 0) return '—'
  return (rev / sp).toFixed(2)
})

function submitMetric() {
  const url =
    typeof window !== 'undefined' && typeof window.route === 'function'
      ? window.route('ads.metrics.store', props.campaign.id)
      : `${adBase.value}/metrics`
  router.post(
    url,
    { ...metricDraft.value },
    {
      preserveScroll: true,
      onSuccess: () => {
        metricFormOpen.value = false
      },
    }
  )
}

function calcRow(m) {
  const imp = Number(m.impressions) || 0
  const clk = Number(m.clicks) || 0
  const sp = Number(m.spend) || 0
  const rev = Number(m.revenue) || 0
  const ctr = imp > 0 ? ((clk / imp) * 100).toFixed(2) : '0.00'
  const cpc = clk > 0 ? (sp / clk).toFixed(2) : '—'
  const roas = sp > 0 ? (rev / sp).toFixed(2) : '—'
  return { ...m, ctr, cpc, roas }
}

const metricsWithCalc = computed(() => (props.metrics || []).map(calcRow))

const chartRows = computed(() => {
  const rows = metricsWithCalc.value.map((m) => ({
    label: m.date,
    spend: Number(m.spend) || 0,
    revenue: Number(m.revenue) || 0,
  }))
  const maxVal = Math.max(1, ...rows.flatMap((r) => [r.spend, r.revenue]))
  return rows.map((r) => ({
    ...r,
    spendPct: (r.spend / maxVal) * 100,
    revenuePct: (r.revenue / maxVal) * 100,
  }))
})

function formatMoney(n) {
  const x = Number(n)
  if (Number.isNaN(x)) return '—'
  return x.toFixed(2)
}

onMounted(() => {
  nextTick(() => {
    if (strategyEditorRef.value && strategyLocal.value) {
      strategyEditorRef.value.innerHTML = strategyLocal.value
    }
  })
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.ads-show {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}
.ads-show__header {
  margin-bottom: 1rem;
}
.ads-show__title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}
.ads-show__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.ads-show__tab {
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  border-radius: 8px;
  cursor: pointer;
}
.ads-show__tab--active {
  background: #1e293b;
  color: #fff;
  border-color: #1e293b;
}
.ads-show__panel {
  padding: 1rem 0;
}
.platform-config {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 8px;
}
.platform-block {
  margin-top: 0.75rem;
}
.platform-block__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.platform-block__list li {
  margin: 0.35rem 0;
}
.tag {
  display: inline-block;
  margin: 0.15rem;
  padding: 0.15rem 0.4rem;
  background: #e2e8f0;
  border-radius: 4px;
  font-size: 0.85rem;
}
.tag--neg {
  background: #fee2e2;
}
.strategy-editor__area {
  min-height: 160px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  background: #fff;
}
.strategy-editor__area:focus {
  outline: 2px solid #3b82f6;
}
.btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
}
.btn--primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.copy-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.copy-group {
  margin-bottom: 1.5rem;
}
.copy-group__title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.copy-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.copy-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.75rem;
  background: #fff;
}
.copy-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.badge {
  font-size: 0.7rem;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  background: #e0e7ff;
}
.badge--ai {
  background: #ddd6fe;
  font-weight: 700;
}
.field-line {
  display: grid;
  grid-template-columns: 2rem 1fr auto;
  gap: 0.5rem;
  align-items: start;
  font-size: 0.9rem;
  margin: 0.25rem 0;
}
.field-line__text--over {
  color: #dc2626;
  font-weight: 600;
}
.char-count {
  font-size: 0.75rem;
  color: #64748b;
  white-space: nowrap;
}
.char-count--over {
  color: #dc2626;
  font-weight: 700;
}
.stars__btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #cbd5e1;
  font-size: 1.1rem;
  padding: 0 0.1rem;
}
.stars__btn--on {
  color: #f59e0b;
}
.linkish {
  background: none;
  border: none;
  cursor: pointer;
  color: #2563eb;
  margin-left: 0.25rem;
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.modal {
  background: #fff;
  padding: 1.25rem;
  border-radius: 12px;
  max-width: 420px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
}
.modal-form label {
  display: block;
  margin: 0.5rem 0;
}
.input {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.4rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.modal-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
}
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}
.task-row--done span:last-child {
  text-decoration: line-through;
  opacity: 0.7;
}
.priority-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.priority-dot--high { background: #dc2626; }
.priority-dot--medium { background: #f59e0b; }
.priority-dot--low { background: #22c55e; }
.task-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.metric-form {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
}
.metric-form label {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
}
.metric-calc {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
}
.metrics-table-wrap {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
.metrics-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.metrics-table th,
.metrics-table td {
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.5rem;
  text-align: right;
}
.metrics-table th:first-child,
.metrics-table td:first-child {
  text-align: left;
}
.chart-block {
  margin-top: 1rem;
}
.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  min-height: 180px;
  padding: 0.5rem 0;
}
.bar-chart__group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.bar-chart__label {
  font-size: 0.65rem;
  color: #64748b;
  writing-mode: horizontal-tb;
  text-align: center;
}
.bar-chart__bars {
  display: flex;
  gap: 4px;
  height: 140px;
  align-items: flex-end;
}
.bar-chart__track {
  width: 16px;
  height: 100%;
  background: #f1f5f9;
  border-radius: 4px 4px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
.bar-chart__fill {
  width: 100%;
  min-height: 2px;
  border-radius: 4px 4px 0 0;
  transition: height 0.2s ease;
}
.bar-chart__fill--spend {
  background: #f97316;
}
.bar-chart__fill--revenue {
  background: #22c55e;
}
.bar-chart__legend {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}
.swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 0.25rem;
  vertical-align: middle;
  border-radius: 2px;
}
.swatch--spend { background: #f97316; }
.swatch--revenue { background: #22c55e; }
.muted {
  color: #64748b;
  font-size: 0.9rem;
}
</style>
