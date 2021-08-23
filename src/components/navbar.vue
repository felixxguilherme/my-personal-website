<template>

    <div id="nav">
        <div class="nav__buttons">
            <div class="nav__buttons_item">
                <router-link class="nav__buttons_item-link" :to="{ name: 'About' }" >
                    sobre
                </router-link>               
            </div>

            <div class="nav__buttons_item">
                <router-link class="nav__buttons_item-link" :to="{ name: 'Experience' }">
                    experiências
                </router-link>
            </div>

            <div class="nav__buttons_item">
                <router-link class="nav__buttons_item-link" :to="{ name: 'Projects' }">
                    projetos
                </router-link>
            </div>

            <div class="nav__buttons_item">
                <router-link class="nav__buttons_item-link" to="/contact">
                    contato
                </router-link>
            </div>
      </div>      
    </div>
  

</template>

<script>
export default {

}
</script>

<style>

</style>