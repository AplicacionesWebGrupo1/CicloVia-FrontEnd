<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLanguage">
      <option v-for="(label, key) in locales" :key="key" :value="key">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n();

    const locales = {
      en: 'English',
      es: 'Español'
    };

    const currentLocale = locale;

    function changeLanguage(event) {
      locale.value = event.target.value;
    }

    return {
      locales,
      currentLocale,
      changeLanguage
    };
  }
};
</script>

<style scoped>
.language-switcher select {
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
