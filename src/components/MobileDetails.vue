<template>
	<div class="details pt-5">
  	<h1>MobileDetails</h1>
		<pre>current: {{current.description}}</pre>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data() {
		return {

		}
	},

	computed:{
		...mapGetters({
			current: 'getCurrent'
		})
	}
}
</script>

<style lang="scss" scope>
.details {
	padding-top: 42px;
}
</style>
