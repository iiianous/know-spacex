<template>
    <div class="navigation">
        <div class="box box-a">
            <h2 class="title">
                <router-link to="/">
                    <span class="thin">Know</span>
                    <span class="bold">SpaceX</span>
                </router-link>
            </h2>
        </div>
        <div class="box box-b">
            <div class="burger" data-js="burger" @click="toggleView">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <Sidebar ref="sidebar"/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
    data() {
        return { }
    },

    components: {
        Sidebar,
    },

    methods: {
        toggleView(e) {
            e.stopPropagation()
            // console.log('e.target',e.target)
            // console.log('e.currentTarget',e.currentTarget)
            let sidebar = document.querySelector('[data-js="burger"]')

            if ( e.target != sidebar ) return

            this.$refs.sidebar.toggle()
        }
    }
}
</script>

<style lang=scss>
    .navigation {
        @apply flex flex-1;
        @apply items-center z-10 relative;
        height: 60px;
        background: var(--primary-color);

        .box {
            &.box-a {
                @apply flex-1 flex justify-start pl-4;

                .title {
                    @apply uppercase text-red;
                }

                a {
                    @apply no-underline;
                }

                .bold {
                    @apply text-orange-dark font-extrabold;
                }

                .thin {
                    @apply text-white font-thin;
                }
            }

            &.box-b {
                @apply flex-1 flex justify-end pr-4 pt-1;
            }
        }
    }

    .burger {
        @apply flex flex-col relative;
        @apply justify-center cursor-pointer;
        width: 30px;
        height: 30px;

        .burger-line {
            @apply flex-1;
            background: #eee;
            margin-bottom: 8px;

            &:last-child {
                width: 20px;
            }
        }
    }
</style>

<style></style>