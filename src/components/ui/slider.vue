<template>

    <div class="slides__content">

        <vueper-slides fixed-height="20em">
            <vueper-slide
            v-for="(slide, i) in slides"
            :key="i" :title="slide.title"
            :content="slide.content"
            :image="slide.imagem"/>
        </vueper-slides>

    </div>

</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

    components: { VueperSlides, VueperSlide },

    props: ['slides']

}
</script>

<style scoped>

</style>