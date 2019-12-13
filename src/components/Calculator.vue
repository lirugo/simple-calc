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
        <calc-history :calcHistory="calcHistory"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CalcLogic from '../utils/CalcLogic';
  import CalcHistory from '../components/CalcHistory'

  export default {
    components: {
      CalcHistory,
    },
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
