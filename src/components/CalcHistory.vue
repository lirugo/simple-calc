<template>
    <v-card
            class="mx-auto"
            max-width="700"
            outlined
    >
        <v-card-text>
            <div class="text-right">
                <small>
                    *Data will release after page refresh
                </small>
            </div>
            <v-data-table
                    :headers="calcHeaders"
                    :items="calcHistory"
                    :items-per-page="5"
            />
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: ['calcHistory'],
        data: () => ({
            calcHeaders: [
                { text: '#', value: 'id', align: 'center',},
                { text: 'Operand A', value: 'operandA', align: 'right',},
                { text: 'Action', value: 'action', align: 'center',},
                { text: 'Operand B', value: 'operandB' },
                {
                    text: 'Result',
                    align: 'left',
                    value: 'result',
                },
            ],
        })
    }
</script>