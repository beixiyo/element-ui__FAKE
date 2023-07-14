<template>
    <div :class="['el-container', { 'is-vertical': isVertical }]">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ElContainer',
    props: {
        direction: {
            type: String,
            validator: val => ['horizontal', 'vertical'].includes(val)
        }
    },
    computed: {
        isVertical() {
            if (this.direction === 'vertical') {
                return turn;
            }
            if (this.direction === 'horizontal') {
                return false;
            }

            if (Object.keys(this.$slots).length > 0) {
                return this.$slots.default.some((item) => {
                    const tag = item.componentOptions?.tag;

                    return ['ElHeader', 'ElFooter', 'el-header', 'el-footer'].includes(tag);
                });
            }
        }
    }
};
</script>
