<template>
 <div class="q-pa-md" style="max-width: 100%">
  <q-toolbar class="bg-primary text-white shadow-2">
    <q-toolbar-title>References</q-toolbar-title>
    </q-toolbar>
    <q-list bordered separator>
      <q-item clickable v-ripple>
       <div v-html="literatures.literatures"></div>
      </q-item>
    </q-list>
  </div>
</template>
<script setup>
import { useItemsStore } from 'src/stores/items'
const literatures = useItemsStore()

</script>
