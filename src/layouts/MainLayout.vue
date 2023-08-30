<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
         History of philosophy
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
     <q-footer>
     <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        class="bg-primary text-white shadow-2"
      >
        <q-route-tab to="/" name="mails" icon="home"/>
        <q-route-tab to="/themes" name="alarms" icon="list" label="Themes" />
        <q-route-tab to="/literatures" name="mails" icon="assignment" label="Literatures"/>
         <q-route-tab to="/about" name="mails" icon="info_outline"/>
      </q-tabs>
      </div>
      </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/#'
  },
  {
    title: 'Themes',
    icon: 'list',
    link: '/#themes'
  },
   {
    title: 'Literatures',
    icon: 'assignment',
    link: '/#literatures'
  },
        {
    title: 'Authors',
    icon: 'info',
    link: '/#about'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
