<template>
  <div>
    {{ lengthMale }}
    {{ lengthFemale }}
    <chartjs-doughnut
      v-bind:labels="labels"
      v-bind:datasets="datasets"
      v-bind:option="option"
    >
    </chartjs-doughnut>
  </div>
</template>

<script>
export default {
  props: ['lengthMale', 'lengthFemale'],

  data() {
    return {
      labels: ['Mujeres Contagiadas', 'Hombres Contagiados'],
      datasets: [
        {
          data: [parseInt(this.lengthMale), parseInt(this.lengthFemale)],
          backgroundColor: ['#aa78a6ff', '#b2ffd6ff'],
          borderWidth: 3,
        },
      ],
      option: {
        title: {
          display: true,
          position: 'bottom',
          text: 'Comparación de contactos',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
