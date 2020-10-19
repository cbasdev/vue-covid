<template>
  <div class="container">
    <h1>Este es un titulo: {{ title }}</h1>
    <Subtitle :subtitle="subtitle" />
    <p>
      Ullamco duis aute ut aute. Pariatur et magna aliqua culpa aute Lorem id
      non velit sit culpa consequat. Ullamco non pariatur cillum sunt excepteur
      eiusmod nisi et ipsum dolore non qui officia.
    </p>
  </div>
</template>

<script>
import Subtitle from './Subtitle.vue'
export default {
  props: ['title'],
  components: {
    Subtitle,
  },
  data() {
    return {
      subtitle: 'SUBTITLE SUCCESS',
    }
  },
}
</script>

<style></style>
