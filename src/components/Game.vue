<template>
    <div class="game">
        <b-button>
            <router-link to="/books">
                Commencer une aventure
            </router-link>
        </b-button>
    </div>
</template>

<script>
  import { BButton } from 'bootstrap-vue'
  export default {
    name: 'Game',
    components: {
      BButton
    }
  }
</script>

<style scoped>
    a {
        color: white
    }
    a:hover {
        text-decoration: none;
    }
</style>

