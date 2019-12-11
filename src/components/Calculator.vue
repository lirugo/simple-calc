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
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      operandA: null,
      operandB: null,
      selectedAction: null,
      actions: [
              { action: '+', title: '+ (sum)' },
              { action: '/', title: '/ (divide)' },
              { action: '%', title: '% (remainder of a division)' },
              { action: '>', title: 'Highest prime number between A and B' },
      ],
      result: null,
    }),
    methods: {
      calculate(){
        switch (this.selectedAction) {
          case '+' : this.result = this.sum(this.operandA, this.operandB); break
          case '/' : this.result = this.divide(this.operandA, this.operandB); break
          case '%' : this.result = this.remainderOfDivision(this.operandA, this.operandB); break
          case '>' : this.result = this.highestNumber(this.operandA, this.operandB); break
          default : this.result = 'Select action'; break
        }
      },
      sum(a, b){
        return Number(a) + Number(b)
      },
      divide(a, b){
        return (a / b).toFixed(10)
      },
      remainderOfDivision(a, b){
        return a % b
      },
      highestNumber(a, b){
        return a > b ? a : b
      },
    },
  }
</script>

<style>
  .v-text-field__details {
    display: none !important;
  }
</style>
