export default CalcLogic

class CalcLogic {

    static sum(a, b){ return Number(a) + Number(b) }

    static divide(a, b){ return (a / b).toFixed(10) }

    static remainderOfDivision(a, b){ return a % b }

    //TODO implement Atkin sieve
    static highestPrimeNumber(a, b){
        let prime = 1
        for(let n=a; n<=b; n++){
            if(
                this.isPrime(n) &&
                n > prime
            ){
                prime = n
            }
        }
        return prime
    }

    static isPrime(n){
        for (let i = 2; i<Math.sqrt(n); i++) {
            if (n % i === 0) {
                return 0
            }
        }
        return 1
    }

}

