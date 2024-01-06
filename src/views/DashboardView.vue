<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import IconWallet from '@/components/icons/dashboard/IconWallet.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
</script>

<template>
  <AuthenticatedLayout>
    <div class="dashboard-view">
      <div class="dashboard-view__top">
        <div class="dashboard-overview">
          <div class="dashboard-overview__title">Overview</div>
          <div class="dashboard-overview__info">
            <div class="dashboard-overview__info-item focus">
              <div class="dashboard-overview__info-item-title">
                <IconWallet />
                Balance
              </div>
              <div class="dashboard-overview__info-item-value">
                R$ 28,891.138
                <IconArrow />
              </div>
            </div>
            <div class="dashboard-overview__info-item">
              <div class="dashboard-overview__info-item-title">Total</div>
              <div class="dashboard-overview__info-item-value">
                R$ 1,050.44
                <IconArrow color="#0D163A"/>
              </div>
            </div>
            <div class="dashboard-overview__info-item">
              <div class="dashboard-overview__info-item-title">Total</div>
              <div class="dashboard-overview__info-item-value">
                R$ 200.31
                <IconArrow color="#0D163A"/>
              </div>
            </div>
            <div class="dashboard-overview__info-item">
              <div class="dashboard-overview__info-item-title">Total</div>
              <div class="dashboard-overview__info-item-value">
                R$ 21,121.0
                <IconArrow color="#0D163A"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="scss">
.dashboard-view {
  .dashboard-view__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    .dashboard-overview {
      display: flex;
      width: 717px;
      padding: 16px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 24px;
      flex-shrink: 0;

      border-radius: 14px;
      background: #FFF;
      .dashboard-overview__title {
        font-size: 20px;
        font-weight: 600;
        color: #0d163a;
      }
      .dashboard-overview__info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 18px;
        .dashboard-overview__info-item {
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          flex: 1 0 0;
          align-self: stretch;
          gap: 24px;

          border-radius: 14px;
          border: 1px solid rgba(222, 222, 222, 0.70);
          background: #FFF;

          &.focus {
            background: #4745A4;
            border: none;

            .dashboard-overview__info-item-title {
              color: #FFF;
              border-bottom: 1px solid rgba(255, 255, 255, 0.20);
            }
            .dashboard-overview__info-item-value {
              color: #FFF;
            }
          }
          .dashboard-overview__info-item-title {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 9px;

            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            color: #0d163a;
            border-bottom: 1px solid #0D163A33;
            padding-bottom: 18px;
          }
          .dashboard-overview__info-item-value {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;

            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -2px;
            font-family: Plus Jakarta Sans;
            color: #0d163a;
          }
        }
      }
    }
  }
}
</style>