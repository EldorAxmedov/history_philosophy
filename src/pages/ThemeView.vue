<template>
  <q-page padding>
     <section id="blog" class="blog">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row">

          <div class="entries">

            <article class="entry entry-single">
                <h2 class="entry-title text-center">
                <a href="#">Theme: {{theme.id}} - {{theme.name}}</a>
              </h2>
             <div class="entry-content" >
                       {{theme.name}}
              </div>
              <div class="entry-content" v-html="theme.vocabulary.list">
              </div>
              <hr/>
              <div class="entry-content" >
                       {{theme.grammar.name}}
              </div>
              <div class="entry-content" v-html="theme.grammar.description">
              </div>
              <hr/>
              <div class="entry-content" >
                       {{theme.writing.name}}
              </div>
              <div class="entry-content" v-html="theme.writing.description">
              </div>
              <hr/>
              <div class="entry-content" >
                       {{theme.speaking.name}}
              </div>
              <div class="entry-content" v-html="theme.speaking.description">
              </div>
              <hr/>

              <div class="entry-content" v-html="theme.reading.description">
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
const storeCounter = useItemsStore()
const route = useRoute()
const themeId = Number.parseInt(route.params.id)
const theme = computed(() => storeCounter.getItemsById(themeId))
console.log(theme)


</script>
