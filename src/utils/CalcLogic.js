class CalcLogic {

    static sum(a, b){ return Number(a) + Number(b) }

    static divide(a, b){ return (a / b).toFixed(10) }

    static remainderOfDivision(a, b){ return a % b }

    static highestPrimeNumber(a, b){
        //Add check last number
        b++;
        let maxPrime = 2
        let k
        let flag
        for (let i = a; i < b; i++) {
            // Odd number
            if ((i % 2 !== 0))
            {
                k = Math.round(Math.sqrt(i))
                flag = false

                for(let j=3; j<k+1; j+=2)
                    if(i % j === 0)
                    {
                        flag = true
                        break
                    }

                if (flag === false)
                    maxPrime = i
            }
        }

        return maxPrime
    }
}

export default CalcLogic
