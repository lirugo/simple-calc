<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <template v-if="$vuetify.breakpoint.smAndUp">
                    <v-switch
                            color="white"
                            class="ma-2"
                            v-model="$vuetify.theme.dark"
                            append-icon="mdi-weather-night"
                            prepend-icon="mdi-white-balance-sunny"
                    />
                </template>
            </v-container>
            <calculator/>
        </v-content>
    </v-app>
</template>

<script>
    import Calculator from './components/Calculator';

    export default {
        name: 'App',

        components: {
            Calculator,
        },

        data: () => ({
            //
        }),
    };
</script>
