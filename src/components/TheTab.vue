<template>
	<div class="flex justify-center items-center border-b border-grey-light w-full fixed bg-white">
		<div
			@click="action('mobiledetails')"
			class="flex-1 py-3 uppercase font-medium border-r border-grey-light">
				Details
		</div>
		<div
			@click="action('playlist')"
			class="flex-1 py-3 uppercase font-medium">
				Playlist
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},

	methods: {
		action( tabName ) {
			this.$emit('tab', tabName)
		}
	}
}
</script>

