<template>
	<div class="playlist">
		<div
			v-for="(item, index) in all_flights"
			:key="index"
			@click="handleFlightNum( item.flight_number )"
			:class="{ active: current_play == index+1 }"
			class="video-thumbs item flex items-center py-2 p-2 border-b border-grey-light cursor-pointer">
				<div class="item-number">
					<h2 class="text-xl" v-text="item.flight_number" />
				</div>
				<div class="flex-1 text-left">
					<h4 v-text="item.mission_name" />
					<p class="item-text" v-text="item.details" />
				</div>
				<div class="text-right px-2">
					Actions
				</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			current_play: '',
		}
	},

	computed: {
		...mapGetters({
			all_flights: 'getAllFlights',
		}),
	},

	created() {
		this.fetchData()
	},

	methods: {
		...mapActions(['fetchData', 'findFlighNumber']),

		handleScroll() {
			console.log('scroll!!!')
		},

		handleFlightNum( flight_number ) {
			let value 			 = parseInt( flight_number )
			this.current_play = value

			this.findFlighNumber(flight_number)
			this.$router.push( { name: 'video', params: { id: value }} )
		},
	}
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/_breakpoint.scss';
.video-thumbs {
	.item-number {
		width: 65px;
	}

	.item-text {
		width: 24ch;
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		text-overflow: ellipsis;

		@include breakpoint-min(sm) {
			width: 44ch;
		}
	}
}

.playlist {
	padding-top: 42px;

	.active {
		@apply bg-grey-light;
	}
}

</style>
