# Simple-calc
![dark](http://i.imgur.com/DZidxuE.png)
![light](http://i.imgur.com/Prhs5OF.png)

## Project stack
- Vue.js
- Vuetify
- Mocha

### How run project
```
yarn install
yarn run serve
```

### How run tests
```
yarn run test
```
>  Test results 
- sum
  - ✓ 1 + 1 should be equals to 2
  - ✓ -1 + 1 should be equals to 0
  - ✓ 11 + 22 should be equals to 33
    
- divide
  - ✓ 1 / 1 should be equals to 1
  - ✓ -1 / 5 should be equals to -0.2
  - ✓ 1 / 0 should be equals to Infinity
  - ✓ 0 / 1 should be equals to 0
    
- remainder of division
  - ✓ 1 % 1 should be equals to 0
  - ✓ 7 % 2 should be equals to 1
  
- highest prime number
  - ✓ Max prime number from 0 to 100 is 97
  - ✓ Max prime number from 0 to 1 000 is 997
  - ✓ Max prime number from 0 to 1 999 999 is 1 999 993 (313ms)
  - ✓ Max prime number from 0 to 9 999 999 is 9 999 991 (3019ms)
  - ✓ Max prime number from 17 000 000 to 17 999 999 is 17 999 987 (533ms)
  - ✓ Max prime number from 10 000 000 to 19 999 998 is 19 999 981 (4930ms)

15 passing (9s)
 
>  !!! highest prime number tested until 20 millions
