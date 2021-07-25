<script>
import { inject, getCurrentInstance, watchEffect, computed, ref } from "vue";

export default {
    name: "TabPanel",
        // eslint-disable-next-line no-unused-vars
    setup() {
        const instance = getCurrentInstance();
        const { panels, active } = inject("tabsPanelState", {
            panels: ref([]),
            active: ref(null),
        });
        const index = computed(() =>
            panels.value.findIndex((target) => target.uid === instance.uid)
        );
        const isActive = computed(() => active.value === index.value);

        watchEffect(() => {
            if (index.value === -1) {
                panels.value.push(instance);
            }
        });

        return {
            isActive,
        };
    },
};
</script>

<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>
