<template>
  <div class="card">
    <div class="rowList">
      <input type="text" value="Nota" />
      <input type="text" value="John" />
      <input type="text" value="John" />
      <button>Guardar Cambios</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditableList',
  props: ['listCases'],
  mounted() {
    console.log('hola', this.listCases)
  },
  data() {
    return {
      title: 0,
    }
  },
}
</script>

<style></style>
