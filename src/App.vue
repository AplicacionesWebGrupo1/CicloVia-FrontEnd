<script>
import FooterContent from "./public/components/footer-content.component.vue";
import LanguageSwitcher from "./public/components/language-switcher.component.vue";

export default {
  name: 'App',
  components: {LanguageSwitcher, FooterContent},
  data() {
    return {
      drawer: false,
      items: [
        {label: 'option.home',       to: '/home'},
        {label: 'option.parking', to: '/parking'},
        {label: 'option.routes', to: '/routes'}
      ]
    }
  }
}
</script>

<template>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <h2>CicloVia</h2>
      </template>
      <template #center>
        <div>
          <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
            <router-link :to="item.to" :class="slotProps['class']">{{ $t(item.label) }}</router-link>
          </pv-button>
        </div>
      </template>
      <template #end>
        <language-switcher/>
      </template>
    </pv-toolbar>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <footer-content/>
  </footer>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

header {
  position: sticky;
  width: 100%;
  margin: 0;
  background-color: #535bf2;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  left: 0;
}
</style>