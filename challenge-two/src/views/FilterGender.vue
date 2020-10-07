<template>
  <div class="filter-gender">
    <div v-if="!loading">cargando...</div>
    <div class="pagination" v-if="loader">
      <editable-list :listCases="data" />
    </div>
  </div>
</template>

<script>
import EditableList from '../components/EditableList'
import { mapGetters } from 'vuex'

export default {
  name: 'FilterGender',
  components: {
    EditableList,
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapGetters(['data', 'loader']),
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
