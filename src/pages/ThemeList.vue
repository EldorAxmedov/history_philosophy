<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="max-width: 100%">
     <q-toolbar class="bg-primary text-white shadow-2">
    <q-toolbar-title>Mavzular</q-toolbar-title>
    </q-toolbar>
      <q-item clickable v-ripple v-for="theme in themes" :key="theme.id">
        <q-item-section avatar top>
           <q-avatar color="primary" text-color="white"> {{ theme.id }}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">
          <router-link :to="'/theme/' + theme.id">{{ theme.name }}</router-link>
          </q-item-label>
          <q-item-label caption>{{theme.name}}</q-item-label>
        </q-item-section>
       </q-item>
    </q-list>
  </div>
</template>
<script setup>

import { useItemsStore } from 'src/stores/items'

const storeItem = useItemsStore()
const themes = storeItem.items
</script>
