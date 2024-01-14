<script setup lang="ts">
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const data = {
  labels: labels,
  datasets: [{
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#4745A4',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

onMounted(() => {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, config);
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