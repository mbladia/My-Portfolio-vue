<script>
import { ref, provide, computed } from "vue";

export default {
    name: "TabPanels",
    props: {
        modelValue: [String, Number],
    },
    setup(props) {
        provide("tabsPanelState", {
            active: computed(() => props.modelValue),
            panels: ref([]),
        });
    },
};
</script>

<template>
    <div >
        <slot />
    </div>
</template>
