<template>
  <div class="card card-pagination">
    <div class="overflow-auto">
      <p class="mt-3 mb-0 titleTable">Listado de Casos {{ typeSelect }}</p>
      <p>Pagina {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemsSelect', 'typeSelect'],

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: this.itemsSelect,
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
  watch: {
    itemsSelect: function(val) {
      this.items = val
    },
  },
}
</script>

<style lang="scss">
@import '../assets/_variables.scss';
.card-pagination {
  p {
    font-size: 0.8rem;
  }

  .titleTable {
    color: $male-color;
    font-size: 1.3rem;
  }

  .page-link {
    color: $male-color;
  }
  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: $male-color;
    border-color: $male-color;
  }
}
</style>
