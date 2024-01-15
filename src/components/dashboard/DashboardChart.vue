<script setup lang="ts">
import Chart from 'chart.js/auto'
import chartsService from '@/api/modules/charts'
import { onMounted, ref } from 'vue'

const labels = ref<string[]>([]);
const values = ref<number[]>([]);
const { totalPerMonth } = chartsService()

onMounted(() => {
  const ctx = document.getElementById('myChart');

  totalPerMonth()
    .then((response: any) => {
      response.content.data.forEach((item: any) => {
        labels.value.push(item.month)
        values.value.push(item.total)
      })
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      const data = {
        labels: labels.value,
        datasets: [{
          data: values.value,
          fill: false,
          borderColor: '#4745A4',
          tension: 0.1
        }]
      };

      new Chart(ctx,
        {
          type: 'line',
          data: data,
          options: {
            plugins: {
              legend: {
                display: false
              }
            }
          }
        }
      );
    })
})
</script>

<template>
  <div class="dashboard-chart">
    <div class="dashboard-chart__title">
      Analytics
    </div>
    <div class="dashboard-chart__body">
      <canvas id="myChart" width="1056" height="450"></canvas>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-chart {
  display: flex;
  width: 70%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 24px;
  border-radius: 14px;
  background: var(--color-background);
  .dashboard-chart__title {
    width: 100%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text);
  }
  .dashboard-chart__body {
    width: 100%;
  }
}
</style>