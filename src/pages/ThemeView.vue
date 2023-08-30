<template>
  <q-page padding>
     <section id="blog" class="blog">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row">
          <div class="entries">
            <article class="entry entry-single">
                <h4 class="entry-title text-center">
               Theme: {{theme.id}} - {{theme.name}}
              </h4>
             <div class="entry-content" >
                       <div v-html="theme.description"></div>
              </div>
              <div class="entry-footer">
                <i class="bi bi-folder"></i>
              </div>
             </article><!-- End blog entry -->
          </div><!-- End blog entries list -->
        </div>
      </div>
   </section>
  </q-page>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useItemsStore } from 'src/stores/items'
const storeItems = useItemsStore()
const route = useRoute()
const themeId = Number.parseInt(route.params.id)
const theme = computed(() => storeItems.getItemsById(themeId))
console.log(theme)


</script>
