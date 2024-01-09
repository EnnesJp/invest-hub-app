<script setup lang="ts">
import IconLogoVertical from '@/components/icons/IconLogoVertical.vue';
import IconDashboard from '@/components/icons/menu/IconDashboard.vue';
import IconWallet from '@/components/icons/menu/IconWallet.vue';
import IconChart from '@/components/icons/menu/IconChart.vue';
import IconUser from '@/components/icons/menu/IconUser.vue';
import IconSetting from '@/components/icons/menu/IconSetting.vue';
import IconInfoCircle from '@/components/icons/menu/IconInfoCircle.vue';
import IconLogout from '@/components/icons/menu/IconLogout.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import authService from '@/api/modules/auth';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const { logout } = authService()
const router = useRouter()
const authStore = useAuthStore();

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
    
        <div class="application-body">
            <div class="application-top-bar">
                <div class="search-bar">
                    <IconSearch />
                    <input class="search-bar-input" type="text" placeholder="Search here..." />
                </div>

                <div class="top-bar__right">
                    <div class="top-bar__right__user">
                        <div class="top-bar__right__user__avatar">
                            <img src="https://i.pravatar.cc/150?img=68" alt="avatar" />
                        </div>
                        <div class="top-bar__right__user__name">{{ authStore.user?.name }}</div>
                    </div>
                </div>
            </div>

            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.authenticated-layout {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    min-height: 100vh;
    background-color: var(--color-background-soft);
    .side-bar-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        height: 100vh;
        padding: 1.5rem 0;
        background-color: var(--color-background-menu);
        box-shadow: 0 0 10px var(--color-shadow);
        .side-bar-menu__top {
            display: flex;
            flex-direction: column;
            height: 100%;
            .side-bar-menu-logo {
                width: 100%;
                margin-top: -215px;
            }
            .side-bar-menu-links {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: -180px;
                .side-bar-menu-link {
                    display: flex;
                    align-items: center;
                    height: 64px;
                    color: var(--color-text);
                    font-weight: 600;
                    gap: 16px;
                    text-decoration: none;
                    padding: 0 45px;
                    &:hover {
                        border-left: 4px solid var(--color-border-menu);
                    }
                }
            }
        }
        .side-bar-menu__bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 1.5rem;
            .side-bar-menu-link {
                display: flex;
                align-items: center;
                height: 64px;
                color: var(--color-text);
                font-weight: 600;
                text-decoration: none;
                gap: 16px;
                cursor: pointer;
                padding: 0 45px;
                &:hover {
                    border-left: 4px solid var(--color-border-menu);
                }
            }
        }
    }
    .application-body {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        flex: 1;
        .application-top-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
            .search-bar {
                display: flex;
                flex-direction: row;
                align-items: center;
                background-color: var(--color-background-menu);
                border-radius: 100px;
                padding: 13px 20px;
                width: 722px;
                height: 64px;
                gap: 10px;
                .search-bar-input {
                    border: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    color: var(--color-text);
                    &::placeholder {
                        color: var(--color-text);
                        opacity: 0.5;
                    }
                }
            }
            .top-bar__right {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 16px;
                background-color: var(--color-background-menu);
                border-radius: 100px;
                padding: 13px 20px;
                height: 64px;
                .top-bar__right__user {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
                    .top-bar__right__user__avatar {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .top-bar__right__user__name {
                        font-size: 14px;
                        color: var(--color-text);
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>
