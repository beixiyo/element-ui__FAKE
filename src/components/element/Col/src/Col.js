export default {
    name: 'ElCol',
    data() {
        return {
            classArr: Object.freeze(['span', 'offset', 'push', 'pull']),
            mediaArr: Object.freeze(['xs', 'sm', 'md', 'lg', 'xl'])
        };
    },
    render(h) {
        return h(this.tag, {
            class: this.classList,
            style: this.style
        }, this.$slots.default);
    },
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            default: 24,
            type: Number,
        },
        offset: {
            default: 0,
            type: Number,
        },
        push: {
            default: 0,
            type: Number,
        },
        pull: {
            default: 0,
            type: Number,
        },
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },
    computed: {
        classList() {
            const list = [];
            this.classArr.forEach((key) => {
                if (key in this.$props && this[key] !== 0) {
                    list.push(
                        key === 'span'
                            ? `el-col-${this[key]}`
                            : `el-col-${key}-${this[key]}`
                    );
                }
            });

            this.mediaArr.forEach((size) => {
                if (typeof this[size] === 'number') {
                    list.push(`el-col-${size}-${this[size]}`);
                }
                else {
                    const props = this[size];
                    for (const key in props) {
                        if (!Object.hasOwnProperty.call(props, key)) continue;

                        const val = props[key];
                        list.push(
                            key === 'span'
                                ? `el-col-${size}-${val}`
                                : `el-col-${size}-${key}-${val}`
                        );
                    }
                }
            });

            return list.concat('el-col');
        },
        style() {
            const style = {};
            if (this.gutter) {
                const padding = this.gutter / 2 + 'px';
                style.padding = `0 ${padding} 0 ${padding}`;
            }

            return style;
        },
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.name !== 'ElRow') {
                parent = parent.$parent;
            }

            return parent ? parent.gutter : 0;
        },
    },
};
