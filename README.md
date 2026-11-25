# [Equal Sums Quiz](https://jordanprojects28.github.io/mathematical-quiz/)

The objective of this puzzle is to arrange nine unique integers, ranging from -10 to 10, into three groups of three numbers.
The challenge is to find an arrangement where all three groups have exactly the same sum.

**Quiz Rules**

Rules:

• You must use all nine numbers.

• Each number must be unique.

• Numbers must be integers between -10 and 10.

• All three groups must have the same sum.

Try to solve the puzzle yourself before pressing the Solve button to reveal all possible solutions.
Feel free to change the nine numbers and try to find a solution.

**JavaScript Mathematical Functions**

The problem object contains the mathematical functions used to solve the puzzle, 
as well as two additional utility functions that may be useful in other projects: totalCombinations(numbers, r) and findDuplicates(array).

**--Utility Functions**

**-totalCombinations(numbers, r)**

Where numbers is an array of numbers and r represents the number of elements in each combination. 
Calculates the total number of possible combinations using the following mathematical formula:

**C = n! / ((n-r)! * r! )** 

The function does not consider the order of the elements. For example, [1, 2, 3] and [3, 2, 1] are considered the same combination.

**-findDuplicates(array)**

Identifies duplicate numbers in an array and counts how many times each number appears.
Returns an object containing the duplicated values and their respective frequencies.

**--Puzzle-Solving Functions**

**-combinationFounder(index, numbers, r, data, result)**

A recursive function that generates all possible combinations of a specified size.

Arguments:\
• index (Number): The current position in the numbers array. Determines which element will be considered next.\
• numbers (Array of Numbers): The original array containing the numbers from which combinations will be generated.\
• r (Number): The required number of elements in each combination.\
• data (Array of Numbers): A temporary array that stores the elements of the combination currently being constructed.\
• result (Array of Arrays): Stores all completed combinations.

-**printTotalCombinations(numbers, r)**

Generates and returns all possible combinations of a specified size by calling combinationFounder().

Arguments:\
• numbers (Array of Numbers): The original array containing the available numbers.\
• r (Number): The required number of elements in each combination.

-**sumCombinations(array)**

Calculates the sum of each individual combination in an array of combinations.
It returns a new array containing the sum of each combination.

Arguments:\
• array (Array of Arrays of Numbers): Contains the combinations whose sums need to be calculated.

-**findPositions(array)**

Identifies repeated values in an array and records the positions (indexes) where they appear.
It returns an object containing only repeated values as keys and their positions as values of the object.

Arguments:\
• array (Array of Numbers): The array in which repeated values will be identified.

-**numbersToArray(array)**

Groups combinations that produce identical sums. First, calls sumCombinations() to calculate the sum of every combination.
Then, calls findPositions() to identify which combinations have identical sums. Finally, uses the returned indexes to group the original combinations into an object. 
Each key represents a common sum, and its value contains the combinations that produce that sum.

Arguments:\
•array (Array of Arrays of Numbers): Contains the combinations that will be grouped according to their sums.
