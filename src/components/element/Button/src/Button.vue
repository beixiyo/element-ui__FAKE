<template>
	<button :type="nativeType"
		:class="[
			'el-button', type && `el-button--${type}`,
			plain && 'is-plain',
			round && 'is-round',
			circle && 'is-circle',
			disabled && 'is-disabled',
			size && `el-button--${size}`
		]"
		:autofocus="autofocus"
		@click="onClick"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'ElButton',
	props: {
		type: {
			type: String,
		},
		plain: {
			type: Boolean,
		},
		handleClick: {
			type: Function,
		},
		round: {
			type: Boolean,
		},
		circle: {
			type: Boolean,
		},
		disabled: {
			type: Boolean,
		},
		size: {
			type: String,
		},
		autofocus: {
			type: Boolean,
		},
		nativeType: {
			type: String,
			default: 'button'
		}
	},
	methods: {
		onClick(e) {
			this.$emit('onClick', e)
		}
	}
};
</script>

<style lang="scss" scoped></style>
