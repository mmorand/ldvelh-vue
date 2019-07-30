<template>
    <div class="books">
        <ModalCharacterCreation ref="characterModal"
                                :book-id="bookId" />
        <b-container>
            <b-row>
                <ul>
                    <li v-for="(book, key) in bookList"
                        v-bind:key="key" class="mb-1">
                        <b-button @click="openCharacterCreationModal(book.id)">
                            {{ book.title }}
                        </b-button>
                    </li>
                </ul>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  import bookList from './data/books.vue'
  import {
    BContainer,
    BRow,
    BButton
  } from 'bootstrap-vue'
  import ModalCharacterCreation from './ModalCharacterCreation'

  export default {
    name: 'Books',
    data: () => ({
      bookList,
      bookId: null
    }),
    components: {
      BContainer,
      BRow,
      BButton,
      ModalCharacterCreation
    },
    methods: {
      openCharacterCreationModal(id) {
        this.bookId = id
        this.$refs.characterModal.show()
      }
    }
  }
</script>

<style scoped>
    li {
        list-style: none;
        display: grid;
    }
</style>