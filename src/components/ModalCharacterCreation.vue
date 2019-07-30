<template>
    <b-modal ref="cCModal" title="Création de personnage">
        <b-container fluid>
            <b-row class="mb-1 text-center">
                <label for="name" class="control-label">Nom</label>
                <input id="name" type="text" class="form-control">
            </b-row>
        </b-container>

        <div slot="modal-footer" class="w-100">
            <b-button variant="primary" class="ml-1 float-right" @click="start(bookId)">
                Créer
            </b-button>
            <b-button class="float-right" @click="hide()">
                Annuler
            </b-button>
        </div>
    </b-modal>
</template>

<script>
  import {
    BButton,
    BRow,
    BContainer
  } from 'bootstrap-vue'

  export default {
    components: {
      BButton,
      BRow,
      BContainer
    },
    props: {
      bookId: Number
    },
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      show() {
        this.$refs.cCModal.show()
      },
      start(bookId) {
        window.location.href = '/book/' + bookId + '/chapter/1'
      },
      hide() {
        this.$refs.cCModal.hide()
      }
    }
  }
</script>