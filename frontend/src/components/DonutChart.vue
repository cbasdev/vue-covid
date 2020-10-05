<template>
  <div>
    <apexchart
      width="380"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'DonutChart',
  props: ['lengthMale', 'lengthFemale'],
  data: function() {
    return {
      options: {
        labels: ['Casos Masculinos', 'Casos Femeninos'],
      },
      series: [this.lengthMale, this.lengthFemale],
    }
  },
  mounted() {
    console.log('Male', this.lengthMale)
    console.log('Felame', this.lengthFemale)
  },
}
</script>

<style lang="scss" scoped></style>
