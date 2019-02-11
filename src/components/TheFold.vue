<template>
	<div class="fold flex flex-col">
		<div class="">
			<div class="navigation flex flex-1 items-center bg-black z-10 relative">
				<div class="flex-1 flex justify-start pl-4">
					<h2 class="uppercase text-red">
						Know<span class="text-white">SpaceX</span>
					</h2>
				</div>
				<div class="flex-1 flex justify-end pr-4 pt-1">
					<div class="burger flex flex-col justify-center cursor-pointer">
						<span class="burger-line flex-1"></span>
						<span class="burger-line flex-1"></span>
						<span class="burger-line flex-1"></span>
					</div>
				</div>
			</div>
			<div class="flex-1">
				<div class="yt-wrapper z-0">
					<iframe width="700" height="435" border="0" frameBorder="0"
						:src="video">
					</iframe>
				</div>
			</div>
		</div>
		<div
			@scroll="handleScroll"
			class="flex-1 overflow-hidden overflow-y-scroll ">
			<div class="componenth-full relative">
				<TheTab @tab="currentTab = $event"/>
				<keep-alive>
					<component v-bind:is="currentTabComponent"></component>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TheTab from '@/components/TheTab.vue'
import Playlist from '@/components/PlayList.vue'
import Mobiledetails from '@/components/MobileDetails.vue'
// 	https://github.com/redxtech/vue-plyr

export default {
	data() {
		return {
			currentTab: 'playlist'
		}
	},

	computed: {
		...mapGetters({
			current: 'getCurrent',
			raw_video: 'getVideo',
		}),

		video() {
			let clean = this.raw_video.replace('watch?v=', 'embed/')
			return `${clean}?autoplay=1&cc_load_policy=1&showinfo=0`
		},

		currentTabComponent() {
			return this.currentTab.toLowerCase()
		}
	},

	components: {
		TheTab,
		Playlist,
		Mobiledetails
	},

	methods: {
		...mapActions(['findFlighNumber']),

		handleScroll() {
			console.log('scroll!!!')
		},
	}
}
</script>

<style lang="scss" scoped>
.fold {
	@apply h-full flex-1;

	.navigation {
		height: 50px;
	}

	.burger {
		width: 34px;
		height: 30px;
		line-height: 6px;

		.burger-line {
			background: #eee;
			margin-bottom: 7px;

			&:last-child {
				width: 28px;
			}
		}
	}
}

.yt-wrapper {
	position: relative;
	background-color: #1e1e1e;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
	top: -2px;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>

