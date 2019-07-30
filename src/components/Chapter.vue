<template>
    <div class="chapter">
        <p>Livre {{ bookId }}</p>
        <p>Chapitre {{ chapterId }}</p>
    </div>
</template>

<script>
  export default {
    name: 'Chapter',
    props: {
      bookId: {
        type: String,
        default: null
      },
      chapterId: {
        type: String,
        default: null
      }
    }
  }
</script>
