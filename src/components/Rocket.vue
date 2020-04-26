<template>
    <div class="rocket">
        <div class="block">
            <div class="card" v-for="(core, index) in first_stage_cores" :key="index">
                <div class="card-inner">
                    <h4 class="uppercase">Land Success</h4>
                    <p>{{ makeStatus(core.land_success) }}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Core Serial</h4>
                    <p>{{core.core_serial}}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Gridfins</h4>
                    <p>{{ makeStatus(core.gridfins)}}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Reused</h4>
                    <p>{{ makeStatus(core.reused) }}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Land Intent</h4>
                    <p>{{ makeStatus(core.land_intent) }}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Land Type</h4>
                    <p>{{ makeStatus(core.land_type) }}</p>
                </div>
                <div class="card-inner">
                    <h4 class="uppercase">Land Vehicle</h4>
                    <p>{{ makeStatus(core.land_vehicle) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.rocket {
    @apply flex flex-1 p-4 flex-col w-full;

    .block {
        @apply flex;
        border-color: var(--border-color);
        @apply border-b;

        // Fixes declaration width 50%
        @apply flex-wrap;

        .card {
            @apply flex items-center justify-start w-1/2 flex-col;
            @apply py-3 pt-3 pr-2;
            // height: 90px;

            .card-inner {
                @apply flex flex-row w-full justify-between p-3 border-b border-grey-darkest;
                --bg-color: #191919;
                background: var(--bg-color);
                opacity: .95;
            }

            p {
                @apply uppercase;
            }
        }
    }
}
</style>

<script>
import get from 'lodash/get'
import forEach from 'lodash/forEach'
import head from 'lodash/head'

export default {
    name: 'Rocket',
    props: ['details'],
    data() {
        return { }
    },

    computed: {
        info() {
            return this.details.rocket
        },

        first_stage_cores() {
            return get( this.details.rocket, 'first_stage.cores' )
        },

        second_stage_payloads () {
            return get( this.details.rocket, 'second_stage.payloads' )
        },

        rocket_name() {
            return  this.details.rocket.rocket_name
        },

    },

    methods: {
        getArrayLength( arr ) {
            return arr.length
        },

        makeStatus (params) {
            return params ? 'Yes' : 'No'
        }
    }
}
</script>