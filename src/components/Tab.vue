<script>
import { computed, inject, watchEffect, getCurrentInstance } from "vue";

export default {
    name: "Tab",
        // eslint-disable-next-line no-unused-vars
    setup() {
        const instance = getCurrentInstance();
        const { tabs, selectTab, active } = inject("tabsState", {
            tabs: [],
            selectTab: () => {},
        });
        const index = computed(() =>
            tabs.value.findIndex((target) => target.uid === instance.uid)
        );
        const isActive = computed(() => index.value === active.value);

        const activeteTab = () => {
            selectTab(index.value);
        };

        watchEffect(() => {
            if (index.value === -1) {
                tabs.value.push(instance);
            }
        });

        return {
            activeteTab,
            isActive,
        };
    },
};
</script>

<template>
    <div ref="tabs" class="tabs"
        :class="
            isActive
                ? 'active'
                : ''
        "
        @click="activeteTab"
    >
        <slot />
    </div>
</template>


<style lang="scss">
    .tabs{
        width: 100%;
        padding: 10px;
        font-size: 20px;
        border: none;
        // background-color: #3e633e;
        cursor: pointer;
        border-bottom: 3px solid #619461;
        color: white;
        white-space: nowrap;

        // &:hover{
        //     background-color: #507a50;
        // }

        @media(min-width: 728px) {
            white-space: normal;
            border-bottom: none;
            border-left: 3px solid #619461;
        }
    }
</style>