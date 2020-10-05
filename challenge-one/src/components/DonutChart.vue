<template>
  <apexchart type="donut" :options="options" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'DonutChart',
  props: ['seriesSelected', 'labelsSelected', 'colorsSelected'],
  data: function() {
    return {
      options: {
        plotOptions: {
          pie: {
            donut: {
              size: '53%',
              marginTop: 200,
            },
          },
        },
        labels: this.labelsSelected,
        colors: this.colorsSelected,
      },
      series: this.seriesSelected,
    }
  },
}
</script>

<style lang="scss" scoped></style>
