<template>
	<div
		class="el-aside"
		:style="{ width }"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ElAside',
	props: {
		width: {
			type: String,
			default: '300px'
		}
	}
};
</script>

<style lang="scss" scoped></style>
