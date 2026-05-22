<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { transitions } from "../../../animations";
import Social from "../../../components/Social.vue";
import Link from "../../../components/Link.vue";
import Button from "../../../components/Button.vue";
import { social } from "../../../content/social";
import { useHomeContent } from "../../../content/home";
import { locale } from "../../../i18n/store";

const contactElement = ref<HTMLElement | null>(null);
const content = computed(() => useHomeContent().contact);
const mailLink = computed(
  () => social.find((item) => item.name === "mail")?.url ?? "mailto:adrian@642studio.com?cc=contacto@642studio.com",
);
const personalMailLink = "mailto:adrian@642studio.com";
const companyMailLink = "mailto:contacto@642studio.com";
const labels = computed(() =>
  locale.value === "es"
    ? {
        email: "Enviar correo",
        personal: "Personal",
        company: "Empresa",
      }
    : {
        email: "Send email",
        personal: "Personal",
        company: "Company",
      },
);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <section class="contact" ref="contactElement">
    <div class="grid">
      <div class="contact-content">
        <h2 class="contact-title">{{ content.title }}</h2>
        <p class="contact-description">{{ content.description }}</p>
        <div class="contact-actions">
          <Link :href="mailLink" external class="children-unclickable" data-cursor="arrow-external" data-sound="click" data-hoversound="hover">
            <Button renderAs="div" variant="accent">{{ labels.email }}</Button>
          </Link>
        </div>
        <p class="contact-emails">
          <span>{{ labels.personal }}: <a :href="personalMailLink">adrian@642studio.com</a></span>
          <span>{{ labels.company }}: <a :href="companyMailLink">contacto@642studio.com</a></span>
        </p>
        <Social variant="background" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: 120px var(--space-outer);
  background: var(--color-background-400);

  &-content {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("md") {
      grid-column: 2 / 8;
      gap: var(--space-lg);
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);
    color: var(--color-text-100);

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-description {
    color: var(--color-text-200);
    line-height: var(--line-height-copy);
    max-width: 60ch;
  }

  &-actions {
    display: flex;
    gap: var(--space-sm);
  }

  &-emails {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--color-text-300);
    font-size: var(--font-size-sm);

    a {
      color: var(--color-text-200);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>
