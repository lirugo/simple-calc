<template>
  <v-container fill-height>
    <v-row
            justify="center"
            align="center"
    >
      <v-col>
        <v-card
                class="mx-auto"
                max-width="344"
                outlined
        >
          <v-card-text>
            <div class="text-right">
              <small>
                *Use dot as decimal separator
              </small>
            </div>
            <v-text-field v-model="operandA" type="number" class="mb-3" outlined label="Operand A"/>
            <v-text-field v-model="operandB" type="number" class="mb-3" outlined label="Operand B"/>
            <v-select v-model="selectedAction"
                      class="mb-3"
                      :items="actions"
                      item-text="title"
                      item-value="action"
                      outlined
                      label="Select Action"
            />
            <v-text-field v-model="result" outlined label="Result" disabled/>

          </v-card-text>

          <v-divider/>
          <v-btn text large block @click="calculate()">Calculate</v-btn>
        </v-card>
      </v-col>

      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CalcLogic from '../utils/CalcLogic';

  export default {
    data: () => ({
      operandA: null,
      operandB: null,
      selectedAction: null,
      result: null,
      actions: [
        { action: '+', title: '+ (sum)' },
        { action: '/', title: '/ (divide)' },
        { action: '%', title: '% (remainder of a division)' },
        { action: '>', title: 'Highest prime number between A and B' },
      ],

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
      calcHistory: [],
    }),
    methods: {
      calculate(){
        //Get result
        switch (this.selectedAction) {
          case '+' : this.result = new CalcLogic().sum(this.operandA, this.operandB); break
          case '/' : this.result = new CalcLogic().divide(this.operandA, this.operandB); break
          case '%' : this.result = new CalcLogic().remainderOfDivision(this.operandA, this.operandB); break
          case '>' : this.result = new CalcLogic().highestPrimeNumber(this.operandA, this.operandB); break
          default : this.result = 'Select action'; break
        }

        //Save to history
        this.saveToHistory()
      },
      saveToHistory(){
        let actionTitle
        this.actions.forEach(a => {
          a.action === this.selectedAction ? actionTitle = a.title : ''
        })

        this.calcHistory.unshift({
          id: this.calcHistory.length + 1,
          operandA: this.operandA,
          operandB: this.operandB,
          action: actionTitle,
          result: this.result,
        })
      },
    },
  }
</script>

<style>
  .v-text-field__details {
    display: none !important;
  }
</style>
