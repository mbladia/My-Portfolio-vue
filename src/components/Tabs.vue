<template>
    <div class="tabs-header">
        <slot />
    </div>
    <div></div>
</template>

<script>
import { provide, computed, ref } from "vue";

export default {
    name: "Tabs",
    props: {
        modelValue: {
            type: [String, Number],
        },
    },
    emits: ["update:modelValue"],
    // eslint-disable-next-line no-unused-vars
    setup(props, { emit }) {
        const active = computed(() => props.modelValue);
        const tabs = ref([]);

        function selectTab(tab) {
            emit("update:modelValue", tab);
        }

        provide("tabsState", {
            active,
            tabs,
            selectTab,
        });
    },
};
</script>


<style lang="scss">
    .tabs-header{
        display: flex;
        // width: 100%;
        overflow: auto;
        @media screen and(min-width: $tablet) {
            // width: 100%;
            flex-direction: column;
            overflow: visible;
        }
    }
</style>
