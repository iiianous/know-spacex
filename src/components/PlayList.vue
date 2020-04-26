<template>
	<div class="flex-1">
		<div class="flex-1 overflow-hidden overflow-y-scroll ">
			<div class="component-full relative">
				<div class="playlist">
					<template v-if="all_flights.length">
						<div
							v-for="(item, index) in all_flights"
							:key="index"
							@click="setCurrent( item.flight_number )"
							:class="{ active: is_active == index+1 }"
							class="playlist-item">
								<div class="item-number">
									<h2 class="text-xl" v-text="item.flight_number" />
								</div>
								<div class="item-details text-left flex-1">
									<h4 v-text="item.mission_name" class="uppercase"/>
									<p class="item-text" v-text="item.details" v-if="item.details"/>
									<p class="item-text" v-else>
										No details provided on this flight.
									</p>
								</div>
						</div>
					</template>
					<div v-else class="flex items-center justify-center">
						<p>Loading..</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'PlayList',

	data() {
		return {
			is_active: '',
		}
	},

	computed: {
		...mapGetters({
			all_flights: 'getAllFlights',
		}),
	},

	methods: {
		...mapActions(['fetchData', 'findFlightNumber']),

		async setCurrent( flight_number ) {
			this.is_active = flight_number

			await this.findFlightNumber( flight_number )
			this.$router.push({ path: `/video/${flight_number}` });
		},
	}
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/_breakpoint.scss';

.playlist {
	@include breakpoint-max(sm) {
		// height: 94vh;
	}

	.playlist-item {
		@apply flex items-center py-6 p-2 border-b cursor-pointer;
		@apply border-l;
		height: 70px;
		color: var(--font-color);
		border-color: var(--border-color);

		&:hover {
			--bg-color: #191919;
			color: var(--secondary-color);
			background: var(--bg-color);
			opacity: .95;
		}

		.item-number {
			width: 65px;
			@apply text-2xl text-center;
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

		.item-details {
			@apply flex items-center flex-col items-start;
		}
	}

	.active {
		--bg-color: #191919;
		color: var(--secondary-color);
		background: var(--bg-color);
		opacity: .95;
	}
}
</style>
