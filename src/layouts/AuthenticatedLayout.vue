<script setup lang="ts">
import IconLogoVertical from '@/components/icons/IconLogoVertical.vue';
import IconDashboard from '@/components/icons/menu/IconDashboard.vue';
import IconWallet from '@/components/icons/menu/IconWallet.vue';
import IconChart from '@/components/icons/menu/IconChart.vue';
import IconUser from '@/components/icons/menu/IconUser.vue';
import IconSetting from '@/components/icons/menu/IconSetting.vue';
import IconInfoCircle from '@/components/icons/menu/IconInfoCircle.vue';
import IconLogout from '@/components/icons/menu/IconLogout.vue';
import authService from '@/api/modules/auth';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const { logout } = authService()
const router = useRouter()

const logoutAction = () => {
  logout();
  router.push({ name: 'login' });
};

</script>

<template>
    <div class="authenticated-layout">
        <div class="side-bar-menu">
            <div class="side-bar-menu__top">
                <IconLogoVertical
                    class="side-bar-menu-logo"
                    logo-color-secondary="#0D163A"
                    name-color="#0D163A"
                />
                <div class="side-bar-menu-links">
                    <RouterLink to="/dashboard" class="side-bar-menu-link">
                        <IconDashboard />
                        Dashboard
                    </RouterLink>
                    <RouterLink to="/wallet" class="side-bar-menu-link">
                        <IconWallet />
                        Wallet
                    </RouterLink>
                    <RouterLink to="/transactions" class="side-bar-menu-link">
                        <IconChart />
                        Transactions
                    </RouterLink>
                    <RouterLink to="profile" class="side-bar-menu-link">
                        <IconUser />
                        Profile
                    </RouterLink>
                    <RouterLink to="/settings" class="side-bar-menu-link">
                        <IconSetting />
                        Settings
                    </RouterLink>
                </div>
            </div>
            <div class="side-bar-menu__bottom">
                <RouterLink to="/help" class="side-bar-menu-link">
                    <IconInfoCircle />
                    Help
                </RouterLink>
                <div @click="logoutAction" class="side-bar-menu-link">
                    <IconLogout />
                    Logout
                </div>
            </div>
        </div>
    
        <slot />
    </div>
</template>

<style scoped lang="scss">
.authenticated-layout {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    min-height: 100vh;
    background-color: #f5f5f5;
    .side-bar-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        height: 100vh;
        padding: 1.5rem 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        .side-bar-menu__top {
            display: flex;
            flex-direction: column;
            height: 100%;
            .side-bar-menu-logo {
                width: 100%;
                margin-top: -180px;
            }
            .side-bar-menu-links {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: -180px;
                padding: 0 45px;
                .side-bar-menu-link {
                    display: flex;
                    align-items: center;
                    height: 64px;
                    color: #0d163a;
                    font-weight: 600;
                    gap: 16px;
                    text-decoration: none;
                }
            }
        }
        .side-bar-menu__bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 1.5rem;
            padding: 0 45px;
            .side-bar-menu-link {
                display: flex;
                align-items: center;
                height: 64px;
                color: #0d163a;
                font-weight: 600;
                text-decoration: none;
                gap: 16px;
            }
        }
    }
}
</style>
