<template>
	<div class="fold">
		<Navigation/>
		<div data-js="video-block" class="video">
			<div class="left">
				<!-- Video Embed -->
				<div class="iframe-wrapper" :style="cssProps">
					<iframe
						border="0"
						frameBorder="0"
						allowfullscreen
						allow="autoplay"
						:src="video"
					>
					</iframe>
				</div>

				<!-- Details for current view -->
				<div class="flex flex-col items-start justify-start text-left">
					<div class="flex flex-1 uppercase text-grey-dark text-base">
						<div
							v-for="(item, index) in tabMenus"
							:key="index"
							:class="{'text-white': item == currentComponent}"
							class="flex-1 px-4 py-3 cursor-pointer" v-text="item"
							@click="currentComponent = item"
						/>
					</div>
					<!-- Toggles component: Details, Rocket, Links -->
					<keep-alive>
						<component :is="currentComponent" :details="current" />
					</keep-alive>
				</div>
			</div>
			<Playlist />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Playlist from '@/components/PlayList.vue'
import Navigation from '@/components/Navigation.vue'
import Details from '@/components/Details.vue'
import Rocket from '@/components/Rocket.vue'
import Links from '@/components/Links.vue'
// 	https://github.com/redxtech/vue-plyr

export default {
	data() {
		return {
			flight_number: this.$route.params.id,
			tabMenus: ['Details', 'Rocket', 'Links'],
			currentComponent: 'Details',
			scrollWatchHeight: 0,
			// image: '../assets/tvstatic.gif',
			cssProps: {
				backgroundImage: `url( ${require('@/assets/tvstatic.gif')} )`
			}
		}
	},

	computed: {
		...mapGetters({
			current: 'getCurrent',
			all_flights: 'getAllFlights',
			video_id: 'getVideo',
		}),

		video() {
			return this.video_id ? `https://www.youtube.com/embed/${this.video_id}?iv_load_policy=3&modestbranding=1&showinfo=0&enablejsapi=1&rel=0&autoplay=1` : ''
		},
	},

	watch: {
		'all_flights': function() {
			this.findFlightNumber( this.flight_number );
		}
	},

	mounted() {
		let video_block = document.querySelector('[data-js="video-block"]');

		window.addEventListener('scroll', function(e) {
			if ( document.documentElement.scrollTop > 60 ) {
				// nav_block.classList.add('freeze');
				video_block.classList.add('____test___-');
			}
		})
	},

	components: {
		Playlist,
		Navigation,
		Details,
		Rocket,
		Links,
  	},

	async created() {
		await this.fetchData();
	},

	methods: {
		...mapActions(['fetchData', 'findFlightNumber']),
	}
}
</script>

<style lang=scss>
@import '@/assets/styles/scss/_breakpoint.scss';

.fold {
	@apply flex flex-col;
	@apply h-full flex-1;

	.video {
		@apply flex flex-col;

		@include breakpoint-min(lg) {
			flex-direction: row;
		}

		.left {
			@apply flex-1 flex-col;

			@include breakpoint-min(lg) {
				flex: none;
				width: 60%;
			}

			.iframe-wrapper {
				@apply relative;
				height: 0;
				padding-bottom: 56.25%; /* 16:9 */
				top: -2px;

				iframe {
					@apply absolute pin-t pin-l w-full h-full;
				}
			}
		}

		.right {

		}
	}
}
</style>

