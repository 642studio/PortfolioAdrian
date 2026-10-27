<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../../../i18n/store";
import { portfolio, productImages } from "../../../content/portfolio";
import Link from "../../../components/Link.vue";
const es = computed(() => locale.value === "es");
const c = computed(() => portfolio[es.value ? "es" : "en"]);
const cv = computed(() => "/cv/Adrian-Yepiz-" + (es.value ? "ES" : "EN") + ".pdf");
const otherCv = computed(() => "/cv/Adrian-Yepiz-" + (es.value ? "EN" : "ES") + ".pdf");
const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "REST APIs",
  "n8n",
  "Make",
  "Vercel",
  "Git / GitHub",
];
</script>
<template>
  <div class="portfolio-body">
    <div class="signal-strip">
      <span v-for="item in c.signal" :key="item"><i aria-hidden="true"></i>{{ item }}</span>
    </div>
    <section id="systems" class="section work-section">
      <div class="section-heading">
        <p class="eyebrow">{{ c.workLabel }}</p>
        <h2>{{ c.workTitle }}</h2>
        <p class="intro">{{ c.workIntro }}</p>
      </div>
      <article v-for="p in c.projects" :key="p.slug" class="feature-case">
        <Link
          :to="'/project/' + p.slug"
          class="case-visual"
          :class="'visual-' + p.visual"
          :aria-label="c.caseLabel + ': ' + p.name"
        >
          <div class="visual-top">
            <span>{{ p.category }}</span
            ><span>↗</span>
          </div>
          <div v-if="p.visual === 'cibapac'" class="sport-art">
            <div class="court" aria-hidden="true"><i></i></div>
            <strong>CIBAPAC<span>2026</span></strong>
            <div class="bot-chip"><span class="status-dot"></span>CibaBot / AI</div>
          </div>
          <div v-else-if="p.visual === 'core'" class="core-art">
            <div class="core-node">642<span>CORE</span></div>
            <div class="core-lines" aria-hidden="true"></div>
            <div class="core-modules">
              <span>{{ es ? "Gestión" : "Management" }}</span
              ><span>{{ es ? "Datos" : "Data" }}</span
              ><span>{{ es ? "Integraciones" : "Integrations" }}</span>
            </div>
          </div>
          <div v-else class="paskolas-art">
            <span class="season">NAVOJOA / 2026</span
            ><strong
              >PASKOLAS<span>{{ es ? "FUERA DE LA CANCHA." : "BEYOND THE COURT." }}</span></strong
            >
            <div class="court court-small" aria-hidden="true"><i></i></div>
          </div>
          <div class="visual-bottom">
            <span>642 / {{ p.number }}</span
            ><span>{{ c.caseLabel }} →</span>
          </div>
        </Link>
        <div class="case-copy">
          <p class="eyebrow">
            <span class="accent">{{ p.number }}</span> / {{ p.name }}
          </p>
          <h3>{{ p.headline }}</h3>
          <p>{{ p.description }}</p>
          <dl>
            <div>
              <dt>{{ c.role }}</dt>
              <dd>{{ p.role }}</dd>
            </div>
            <div>
              <dt>{{ c.scope }}</dt>
              <dd>{{ p.scope }}</dd>
            </div>
          </dl>
          <div class="tags">
            <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
          </div>
          <Link :to="'/project/' + p.slug" class="text-link">{{ c.caseLabel }} <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
    </section>
    <section id="veridis" class="section lab-section">
      <div class="section-heading">
        <p class="eyebrow">{{ c.labLabel }}</p>
        <h2>{{ c.labTitle }}</h2>
        <p class="intro">{{ c.labIntro }}</p>
      </div>
      <Link to="/project/veridis" class="veridis-banner"
        ><div>
          <p class="eyebrow">AI / AUTOMATION / MEDIA</p>
          <h3>{{ c.veridisTitle }}<span aria-hidden="true">_</span></h3>
          <p>{{ c.veridisCopy }}</p>
          <span class="text-link">{{ c.veridisCta }} ↗</span>
        </div>
        <div class="event-art" aria-hidden="true">
          <span>INPUT</span><i></i><strong>VERIDIS<br />CORE</strong><i></i><span>ACTIONS</span>
        </div></Link
      >
      <div class="product-grid">
        <Link v-for="p in c.products" :key="p.slug" :to="'/project/' + p.slug" class="product-card"
          ><img
            :src="productImages[p.slug as keyof typeof productImages]"
            :alt="p.title"
            loading="lazy"
            width="720"
            height="420"
          />
          <div>
            <h3>{{ p.title }} <span aria-hidden="true">↗</span></h3>
            <p>{{ p.text }}</p>
          </div></Link
        >
      </div>
    </section>
    <section id="build" class="section approach-section">
      <div class="section-heading">
        <p class="eyebrow">{{ c.approachLabel }}</p>
        <h2>{{ c.approachTitle }}</h2>
        <p class="intro">{{ c.approachIntro }}</p>
      </div>
      <div class="capability-grid">
        <article v-for="cap in c.capabilities" :key="cap.n">
          <span class="cap-number">{{ cap.n }}</span>
          <h3>{{ cap.title }}</h3>
          <p>{{ cap.text }}</p>
        </article>
      </div>
      <div id="stack" class="stack-row">
        <h3>{{ c.stackTitle }}</h3>
        <div class="tags">
          <span v-for="tool in stack" :key="tool">{{ tool }}</span>
        </div>
      </div>
    </section>
    <section id="about" class="section about-section-new">
      <div class="about-grid">
        <div>
          <p class="eyebrow">{{ c.aboutLabel }}</p>
          <h2>{{ c.aboutTitle }}</h2>
          <p>{{ c.aboutText }}</p>
          <p>{{ c.aboutText2 }}</p>
          <a class="text-link" :href="cv" target="_blank" rel="noopener">{{ c.cv }} ↓</a>
        </div>
        <aside class="group-card">
          <img src="/brand/642-logo-white.png" alt="642 Studio" width="160" height="105" loading="lazy" />
          <h3>{{ c.groupTitle }}</h3>
          <p>{{ c.groupText }}</p>
          <ul>
            <li v-for="[name, text] in c.units" :key="name">
              <strong>{{ name }}</strong
              ><span>{{ text }}</span>
            </li>
          </ul>
        </aside>
      </div>
      <div class="journey">
        <h3>{{ c.journeyTitle }}</h3>
        <div class="timeline">
          <article v-for="[date, name, text] in c.timeline" :key="name">
            <p class="eyebrow">{{ date }}</p>
            <h4>{{ name }}</h4>
            <p>{{ text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section talks-section">
      <div class="section-heading">
        <p class="eyebrow">{{ c.talksLabel }}</p>
        <h2>{{ c.talksTitle }}</h2>
      </div>
      <div class="talks-grid">
        <article v-for="[date, name, text] in c.talks" :key="name">
          <p class="eyebrow">{{ date }}</p>
          <h3>{{ name }}</h3>
          <p>{{ text }}</p>
        </article>
      </div>
    </section>
    <section id="contact" class="section contact-section">
      <p class="eyebrow">{{ c.contactLabel }}</p>
      <h2>{{ c.contactTitle }}</h2>
      <p>{{ c.contactText }}</p>
      <div class="contact-buttons">
        <a class="primary-link" href="mailto:adrian@642studio.com">{{ c.email }} ↗</a
        ><a
          class="secondary-link"
          href="https://www.linkedin.com/in/adrianyepizl/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ c.linkedin }} ↗</a
        >
      </div>
      <a class="email-address" href="mailto:adrian@642studio.com">adrian@642studio.com</a>
      <div class="contact-bottom">
        <p>{{ c.location }}</p>
        <div>
          <a :href="cv" target="_blank" rel="noopener">{{ c.cv }} ↓</a
          ><a :href="otherCv" target="_blank" rel="noopener">{{ c.cvOther }} ↓</a
          ><a href="https://github.com/642studio" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.portfolio-body {
  background: #111213;
  color: #f5f0e8;
  --muted: #b9b7b2;
  --line: #ffffff20;
  --red: #ff6565;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  line-height: 1.7;
}
h2,
h3,
h4 {
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.045em;
}
h2 {
  font-size: clamp(34px, 4.4vw, 60px);
  max-width: 20ch;
}
h3 {
  font-size: 26px;
}
p,
dd {
  color: var(--muted);
}
.section {
  padding: 100px max(24px, calc((100vw - 1180px) / 2));
  border-top: 1px solid var(--line);
  scroll-margin-top: 90px;
}
.section-heading {
  max-width: 760px;
  margin-bottom: 54px;
}
.eyebrow {
  font: 11px/1.6 var(--font-mono);
  letter-spacing: 0.09em;
  margin-bottom: 22px;
  color: #c7bfb3;
}
.intro {
  font-size: 18px;
  margin-top: 22px;
  max-width: 63ch;
}
.signal-strip {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 26px max(24px, calc((100vw - 1180px) / 2));
  background: #1b1c1d;
  border-top: 1px solid #fff2;
  font: 11px/1.6 var(--font-mono);
  color: #ccc5bb;
}
.signal-strip span {
  display: flex;
  align-items: center;
  gap: 10px;
}
.signal-strip i {
  width: 5px;
  height: 5px;
  background: var(--red);
  border-radius: 50%;
}
.feature-case {
  display: grid;
  grid-template-columns: 1.12fr 1fr;
  gap: 64px;
  align-items: center;
  margin-bottom: 70px;
}
.feature-case:last-child {
  margin-bottom: 0;
}
.case-visual {
  position: relative;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid #fff2;
  border-radius: 18px;
  transition: transform 0.25s;
}
.case-visual:hover {
  transform: translateY(-5px);
}
.visual-top,
.visual-bottom {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 24px;
  font: 10px/1.5 var(--font-mono);
  letter-spacing: 0.04em;
}
.visual-top span:last-child {
  font-size: 20px;
}
.visual-bottom {
  border-top: 1px solid #ffffff24;
}
.visual-cibapac {
  background: radial-gradient(ellipse at 60% 70%, #6c2222, #241516 70%);
}
.sport-art {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 290px;
}
.sport-art strong {
  z-index: 1;
  font-size: clamp(36px, 4vw, 60px);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.1;
  text-align: center;
}
.sport-art strong span {
  display: block;
  font-size: 100px;
  color: #ff6969;
  letter-spacing: -0.08em;
}
.court {
  position: absolute;
  width: 76%;
  height: 68%;
  border: 1px solid #ff9c9c44;
  transform: rotate(-15deg);
  border-radius: 4px;
}
.court:before {
  content: "";
  position: absolute;
  left: 50%;
  height: 100%;
  border-left: 1px solid #ff9c9c44;
}
.court i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 90px;
  border: 1px solid #ff9c9c44;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.bot-chip {
  position: absolute;
  bottom: 10px;
  right: 24px;
  background: #1c1717;
  border: 1px solid #ff777750;
  border-radius: 30px;
  padding: 9px 14px;
  font: 10px var(--font-mono);
  display: flex;
  gap: 8px;
  align-items: center;
}
.status-dot {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: #ff7777;
}
.visual-core {
  background: radial-gradient(circle at 50% 40%, #303d3b, #152320 80%);
}
.core-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
}
.core-node {
  padding: 22px 40px;
  border: 1px solid #afc6bc80;
  border-radius: 16px;
  font-size: 64px;
  letter-spacing: -0.07em;
  background: #dbe7dc;
  color: #192b24;
  text-align: center;
  box-shadow: 0 0 70px #a4b7aa16;
}
.core-node span {
  display: block;
  font: 12px var(--font-mono);
  letter-spacing: 0.2em;
}
.core-lines {
  height: 38px;
  border-left: 1px solid #99b6ab60;
}
.core-modules {
  display: flex;
  gap: 8px;
}
.core-modules span {
  padding: 12px 10px;
  border: 1px solid #99b6ab60;
  border-radius: 8px;
  font: 10px var(--font-mono);
  background: #1b2924;
}
.visual-paskolas {
  background: radial-gradient(ellipse at 70% 30%, #6d4935, #231c19 80%);
}
.paskolas-art {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 40px 10px;
}
.paskolas-art strong {
  position: relative;
  z-index: 1;
  font-size: clamp(38px, 4vw, 60px);
  font-weight: 700;
  letter-spacing: -0.06em;
}
.paskolas-art strong span {
  display: block;
  font: 10px var(--font-mono);
  letter-spacing: 0.16em;
  margin-top: 10px;
}
.season {
  font: 11px var(--font-mono);
  letter-spacing: 0.24em;
  color: #ffbc8e;
}
.court-small {
  width: 80%;
  height: 160px;
  opacity: 0.45;
  top: 4px;
}
.case-copy .eyebrow {
  margin-bottom: 16px;
}
.accent {
  color: var(--red);
}
.case-copy h3 {
  font-size: clamp(28px, 2.8vw, 38px);
  max-width: 21ch;
  margin-bottom: 20px;
}
.case-copy > p:not(.eyebrow) {
  font-size: 16px;
}
.case-copy dl {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
.case-copy dt {
  font: 10px var(--font-mono);
  color: #eee7df;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 6px;
}
.case-copy dd {
  font-size: 14px;
  line-height: 1.6;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.case-copy .tags {
  margin-top: 22px;
}
.tags span {
  font: 10px/1.5 var(--font-mono);
  border: 1px solid var(--line);
  padding: 7px 10px;
  border-radius: 5px;
  color: #c7c2ba;
}
.text-link {
  display: inline-flex;
  gap: 22px;
  align-items: center;
  font-size: 14px;
  color: #fff;
  border-bottom: 1px solid #ff7777;
  padding-bottom: 8px;
  margin-top: 24px;
}
.text-link:hover {
  color: #ff9999;
}
.lab-section {
  background: #171819;
}
.veridis-banner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  padding: 40px;
  background: linear-gradient(110deg, #201c1c, #191b1d);
  border: 1px solid #ffffff24;
  border-radius: 16px;
}
.veridis-banner h3 {
  font-size: 54px;
  letter-spacing: -0.06em;
  margin-bottom: 20px;
}
.veridis-banner h3 span {
  color: var(--red);
}
.veridis-banner p {
  max-width: 50ch;
}
.event-art {
  display: flex;
  align-items: center;
  justify-content: center;
  font: 10px var(--font-mono);
  color: #aaa;
}
.event-art i {
  width: 26px;
  border-top: 1px solid #ff777780;
}
.event-art strong {
  padding: 32px 16px;
  text-align: center;
  line-height: 1.8;
  border: 1px solid #ff777780;
  border-radius: 50%;
  color: #ffb2b2;
  box-shadow: 0 0 80px #ff777712;
}
.event-art > span {
  padding: 12px;
  border: 1px solid #ffffff30;
  border-radius: 5px;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}
.product-card {
  overflow: hidden;
  background: #121314;
  border: 1px solid var(--line);
  border-radius: 12px;
  transition: border-color 0.2s;
}
.product-card:hover {
  border-color: #ff7777;
}
.product-card img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1.7;
  object-fit: cover;
}
.product-card > div {
  padding: 20px;
}
.product-card h3 {
  font-size: 19px;
  letter-spacing: -0.035em;
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
.product-card h3 span {
  color: #ff8888;
}
.product-card p {
  font-size: 13px;
  margin-top: 12px;
}
.approach-section {
  background: #eee8de;
  color: #202122;
  --muted: #55534f;
  --line: #0002;
}
.approach-section .eyebrow {
  color: #69635b;
}
.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}
.capability-grid article {
  border-top: 1px solid #0003;
  padding-top: 20px;
}
.cap-number {
  font: 12px var(--font-mono);
  color: #a43f3f;
}
.capability-grid h3 {
  font-size: 23px;
  margin-top: 28px;
  margin-bottom: 16px;
}
.capability-grid p {
  font-size: 14px;
}
.stack-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  border-top: 1px solid #0002;
  padding-top: 32px;
  margin-top: 54px;
}
.stack-row h3 {
  font-size: 19px;
  letter-spacing: -0.02em;
}
.stack-row .tags span {
  color: #45433e;
  border-color: #0003;
  background: #ffffff40;
}
.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 80px;
}
.about-grid h2 {
  font-size: clamp(32px, 3.5vw, 48px);
  margin-bottom: 28px;
}
.about-grid p + p {
  margin-top: 18px;
}
.group-card {
  background: #1a1b1c;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 32px;
}
.group-card img {
  display: block;
  width: 125px;
  height: auto;
  margin: -22px 0 -10px -20px;
}
.group-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
}
.group-card p {
  font-size: 14px;
}
.group-card ul {
  margin-top: 24px;
  display: grid;
  gap: 0;
}
.group-card li {
  list-style: none;
  padding: 14px 0;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
.group-card li strong {
  font-size: 13px;
  white-space: nowrap;
  font-weight: 500;
}
.group-card li span {
  font-size: 11px;
  color: var(--muted);
  text-align: right;
}
.journey {
  margin-top: 72px;
}
.journey > h3 {
  font-size: 24px;
}
.timeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-top: 32px;
}
.timeline article {
  border-top: 1px solid var(--line);
  padding-top: 24px;
}
.timeline .eyebrow {
  color: #ff9999;
  margin-bottom: 16px;
}
.timeline h4 {
  font-size: 20px;
  margin-bottom: 12px;
}
.timeline article > p:last-child {
  font-size: 14px;
}
.talks-section {
  background: #1a1b1c;
}
.talks-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}
.talks-grid article {
  padding-left: 24px;
  border-left: 1px solid #ff777780;
}
.talks-grid .eyebrow {
  font-size: 10px;
}
.talks-grid h3 {
  font-size: 23px;
  margin-bottom: 18px;
}
.talks-grid article > p:last-child {
  font-size: 14px;
}
.contact-section {
  background: radial-gradient(ellipse at 90% 100%, #472727, #131414 65%);
}
.contact-section h2 {
  font-size: clamp(42px, 6.5vw, 88px);
  max-width: 15ch;
}
.contact-section > p:not(.eyebrow) {
  max-width: 57ch;
  font-size: 18px;
  margin-top: 28px;
}
.contact-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.primary-link,
.secondary-link {
  display: inline-flex;
  gap: 30px;
  padding: 16px 22px;
  border-radius: 8px;
  font-size: 14px;
}
.primary-link {
  background: #ff5050;
  color: #fff;
}
.secondary-link {
  border: 1px solid #fff4;
}
.email-address {
  display: inline-block;
  margin-top: 28px;
  font-size: 18px;
  color: #ddd4c7;
}
.contact-bottom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-size: 12px;
}
.contact-bottom > div {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.contact-bottom a {
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (min-width: 1500px) {
  .section {
    padding-left: max(40px, calc((100vw - 1280px) / 2));
    padding-right: max(40px, calc((100vw - 1280px) / 2));
  }
}
@media (max-width: 1023px) {
  .feature-case {
    gap: 32px;
  }
  .product-grid,
  .capability-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .about-grid {
    gap: 36px;
  }
  .case-visual {
    min-height: 400px;
  }
  .veridis-banner {
    padding: 28px;
  }
  .event-art > span {
    font-size: 8px;
    padding: 8px;
  }
  .talks-grid {
    gap: 20px;
  }
}
@media (max-width: 699px) {
  .section {
    padding: 64px 22px;
  }
  .section-heading {
    margin-bottom: 32px;
  }
  .eyebrow {
    font-size: 10px;
    margin-bottom: 16px;
  }
  .intro {
    font-size: 16px;
  }
  .signal-strip {
    padding: 22px;
    gap: 10px;
    flex-direction: column;
    font-size: 10px;
  }
  .feature-case {
    grid-template-columns: 1fr;
    gap: 26px;
    margin-bottom: 52px;
  }
  .case-visual {
    min-height: 340px;
  }
  .sport-art {
    min-height: 220px;
  }
  .sport-art strong {
    font-size: 40px;
  }
  .sport-art strong span {
    font-size: 76px;
  }
  .visual-top,
  .visual-bottom {
    padding: 18px;
    font-size: 8px;
  }
  .case-copy h3 {
    font-size: 30px;
    max-width: 22ch;
  }
  .case-copy > p:not(.eyebrow) {
    font-size: 15px;
  }
  .veridis-banner {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 28px;
  }
  .veridis-banner h3 {
    font-size: 46px;
  }
  .event-art {
    padding: 8px 0 14px;
  }
  .product-grid {
    gap: 12px;
  }
  .product-card > div {
    padding: 14px;
  }
  .product-card h3 {
    font-size: 16px;
  }
  .product-card p {
    font-size: 12px;
  }
  .capability-grid {
    gap: 28px 20px;
  }
  .capability-grid h3 {
    font-size: 21px;
  }
  .capability-grid p {
    font-size: 13px;
  }
  .stack-row,
  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .group-card {
    padding: 24px;
  }
  .journey {
    margin-top: 48px;
  }
  .timeline,
  .talks-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .talks-grid article {
    padding-left: 20px;
  }
  .contact-section > p:not(.eyebrow) {
    font-size: 16px;
  }
  .contact-buttons a {
    width: 100%;
    justify-content: space-between;
  }
  .contact-bottom {
    margin-top: 40px;
  }
  .email-address {
    font-size: 17px;
  }
}
</style>
