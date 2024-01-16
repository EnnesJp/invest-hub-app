<script setup lang="ts">
import Chart from 'chart.js/auto'
import StringHelper from '@/helpers/StringHelper'
import chartsService from '@/api/modules/charts'
import { onMounted, ref } from 'vue'

const labels = ref<string[]>([]);
const values = ref<number[]>([]);
const { totalPerMonth } = chartsService()

const fontConfig = {
  size: 14,
  family: 'Plus Jakarta Sans',
}

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
          borderColor: '#3BBB6E ',
          tension: 0.1
        }]
      };

      new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  return StringHelper.formatCurrencyBR(context.parsed.y)
                }
              },
              bodyFont: fontConfig,
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#999',
                font: fontConfig,
                padding: 20,
              },
              border: {
                display: false,
              }
            },
            y: {
              ticks: {
                callback: function (value: any) {
                  return 'R$ ' + value / 1000 + 'k'
                },
                color: '#999',
                font: fontConfig,
                padding: 20,
              },
              border: {
                display: false,
              }
            },
          },
        },
      });
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