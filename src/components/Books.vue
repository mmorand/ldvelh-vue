<template>
    <div class="books">
        <b-container>
            <b-row>
                <ul>
                    <li v-for="(book, key) in bookList"
                        v-bind:key="key">
                        <b-button v-b-modal="'character-creation'">{{ book.title }}</b-button>
                    </li>
                </ul>
            </b-row>
        </b-container>
        <b-modal id="character-creation" title="Création de personnage">
            <CharacterCreation />
        </b-modal>
    </div>
</template>

<script>
  import bookList from './data/books.vue'
  import {
    BContainer,
    BRow,
    BButton
  } from 'bootstrap-vue'
  import CharacterCreation from '../views/CharcterCreation'

  export default {
    name: 'Books',
    data: () => ({
      bookList
    }),
    components: {
      BContainer,
      BRow,
      BButton,
      CharacterCreation
    }
  }
</script>

<style scoped>
</style>