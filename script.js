const problem = {

    totalCombinations : function(numbers,r) {

        const n = numbers.length;
        const s = n-r;

        if(n < 0 || r < 0 || s < 0) { return "It is impossible to calculate the factorial of a negative number";}
        if(n < r) {return "The length of the numbers array cannot be smaller than the number of combination";}

        //The formula to find all the possible combinations is this one : n! / [(n-r)! * r! ]

        const factorialFounder = (x) => {

         if(x == 0){ return 1; }

         let product = 1;

            for(let i = 1; i<=x; i++){

                product = product * i;

            }

         return product;

        };

        const nFactorial = factorialFounder(n);
        const rFactorial = factorialFounder(r);
        const sFactorial = factorialFounder(s);

        const totalCombinations = nFactorial / (sFactorial * rFactorial);
        return totalCombinations;

    },

        findDuplicates : function(array) {

        const counts ={};
        const duplicates = {};

        for(let num of array){

            if (counts[num] !== undefined) {
                counts[num] = counts[num] + 1;
            }else{
                counts[num] = 1;
            }

        }

        for(let num in counts){

            if(counts[num] > 1){
                duplicates[num] = counts[num];
            }

        }

        return duplicates;

    },

    combinationFounder : function(index,numbers,r,data,result) {

        if(data.length === r) {
            result.push([...data]);
            return;
        }

        if(index >= numbers.length){
            return;
        }

        data.push(numbers[index]);

        this.combinationFounder(index + 1,numbers,r,data,result);

        data.pop();

        this.combinationFounder(index + 1,numbers,r,data,result);
        
    },

    printTotalCombinations : function(numbers,r) {

        const data = [];
        const result = [];

        this.combinationFounder(0,numbers,r,data,result);

        return result;

    },

    sumCombinations : function(array) {
        
        const sumArray = array.map((arr) => {
            let sum = 0;
            for ( let num of arr){

                sum = num + sum;

            }

            return sum;

        });

        return sumArray;

    },

    findPositions : function(array) {

        const positions ={};
        const duplicatesPos = {};

        for(let index = 0; index < array.length; index++){

            const num = array[index];

            if(positions[num] !== undefined){
                positions[num].push(index);
            }else{
                positions[num] = [index];
            }

        }

        for (let num in positions){

            if(positions[num].length > 1){
                duplicatesPos[num] = positions[num];
            }

        }

        return duplicatesPos;

    },

    numbersToArray : function(array) {

        const sum = this.sumCombinations(array);
        const object = this.findPositions(sum);
        const result = {};

        for(let numArray in object){

            result[numArray] =  [];

            for(let num of object[numArray]){

                result[numArray].push(array[num]);

            }

        }

        return result;

    },

    solve : function(array,combinations){

        const totalCombinations = this.printTotalCombinations(array,combinations);
        const object = this.numbersToArray(totalCombinations);
        const solutions = {};

        for(let sum in object){

            const currentCombinations = object[sum];

            solutions[sum] = [];

            const data = [];

            const combinationFounder = (index) => {

                if(data.length === combinations){

                    solutions[sum].push([...data]);
                    return;

                }

                if(index >= currentCombinations.length) {

                    return;

                }

                const currentArray = currentCombinations[index];


                const hasDuplicates = data.some(existingArray =>
                    existingArray.some(num => currentArray.includes(num))
                );

                if(!hasDuplicates) {

                    data.push(currentArray);

                    combinationFounder(index + 1);

                    data.pop();

                }

                combinationFounder(index + 1);
            };

            combinationFounder(0);

        }

        for (let key in solutions){
            if (solutions[key].length === 0){
                delete solutions[key];
            }
        }

        return solutions;
    }
};

const filter = {
   
    bigDigits : function(){
        
        Array.from(inputs).forEach((input) => { 
          if(input.value > 10){input.value = "10"};
          if(input.value < -10){input.value = "-10"};
        }); 

    },

    emptyCells: function(){

        Array.from(inputs).forEach((input) => { 
          if(input.value === ""){input.value = "0"};
        }); 

    },

    sameValues: function(array){
    
        const duplicatesArray = [];

        array.forEach((number, index) => {

            for(let j = index + 1; j < array.length; j++){
                if(number==array[j] && !duplicatesArray.includes(number)){duplicatesArray.push(number)}
            }

        }) 

        

        inputs.forEach((input) => {

            if(duplicatesArray.includes(Number(input.value))) {
                input.style.borderColor = "var(--error-color)";
            }else {
                input.style.borderColor = "var(--border-color)";
            }

        })

        return duplicatesArray.length > 0;  

    },

    removeDecimals: function(){

        Array.from(inputs).forEach((input) => { 
          input.value = Number(input.value).toFixed(0);
        }); 

    }

};

const getNumbersArray = () =>{

    return Array.from(inputs).map(input => Number(input.value));    

};

const solve = () => {
    
    filter.bigDigits();
    filter.removeDecimals();         
    filter.emptyCells();
    

    const numbersArray = getNumbersArray();
    

    if(filter.sameValues(numbersArray)){
        error.innerText = "Each number must be unique !";
        displaySolutions({})
        return;
    }else{
        error.innerText = "";
    }
    
    const resultArray = problem.solve(numbersArray,r);

    if (Object.keys(resultArray).length === 0) {
        error.innerText = "No Result Found";
    }else{
        error.innerText = "";
    }

    displaySolutions(resultArray);

};

function displaySolutions(solutions) {

    const originalSection = document.querySelector(".solution");

    document.querySelectorAll(".solution").forEach(section => {
        section.style.display = "none";
    });

    document.querySelectorAll(".solution[data-generated]")
        .forEach(section => section.remove());

    const solutionGroups = Object.values(solutions).flat();

    solutionGroups.forEach((solution, index) => {

        const section = index === 0
            ? originalSection
            : originalSection.cloneNode(true);

        if (index > 0){
            section.dataset.generated = "true";

            section.querySelectorAll("input").forEach(input => {
                input.removeAttribute("id");
            });

            originalSection.after(section);
        }

        section.style.display = "block";

        const equations = section.querySelectorAll(".equation");

        equations.forEach((equation, i) =>{

            const numbers = equation.querySelectorAll(".solution-number");
            const sum = equation.querySelector(".sum-input");

            numbers.forEach((input, j) => {
                input.value = solution[i][j];
            });

            sum.value = solution[i].reduce((a, b) => a + b, 0);

        });

    });
}

const r = 3;
const inputs = document.querySelectorAll(".number-input");

inputs.forEach(input => {

    input.addEventListener("paste", e => e.preventDefault());
    input.addEventListener("drop", e => e.preventDefault());

});

const solveBtn = document.getElementById("solveBtn");
const error = document.getElementById("error");
solveBtn.addEventListener("click", solve);
