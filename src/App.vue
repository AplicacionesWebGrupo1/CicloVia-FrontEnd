<template>
  <div id="app">
    <pv-toolbar>
      <template #start>
        <h1 class="app-title">Ciclovía - Rutas para Ciclistas</h1>
        <nav class="nav-menu">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/routes">Routes</RouterLink>
        </nav>
      </template>
      <template #end>
        <language-switcher />
      </template>
    </pv-toolbar>

    <router-view />

    <footer-content />
    <pv-toast />
  </div>
</template>

<script>
import FooterContent from '@/public/components/footer-content.component.vue';
import LanguageSwitcher from '@/public/components/language-switcher.component.vue';

export default {
  name: 'App',
  components: {
    FooterContent,
    LanguageSwitcher,
  },
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-title {
  margin: 0 1rem 0 0;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-block;
}

.nav-menu {
  display: inline-flex;
  gap: 1rem;
  align-items: center;
}

.nav-menu a {
  color: #b80a0a;
  text-decoration: none;
  font-weight: 500;
}

.nav-menu a.router-link-exact-active {
  text-decoration: underline;
}
</style>
