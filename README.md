Where numbers is an array of numbers and r represents the number of elements in each combination. 
Calculates the total number of possible combinations using the following mathematical formula:
C = n! / ((n-r)! * r! ). 
The function does not consider the order of the elements. For example, [1, 2, 3] and [3, 2, 1] are considered the same combination.

-findDuplicates(array)
Identifies duplicate numbers in an array and counts how many times each number appears.
Returns an object containing the duplicated values and their respective frequencies.

Now the functions that solve the quiz :

**-combinationFounder(index, numbers, r, data, result)**

A recursive function that generates all possible combinations of a specified size.

Arguments:

index (Number): The current position in the numbers array. Determines which element will be considered next.

numbers (Array of Numbers): The original array containing the numbers from which combinations will be generated.

r (Number): The required number of elements in each combination.

data (Array of Numbers): A temporary array that stores the elements of the combination currently being constructed.

result (Array of Arrays): Stores all completed combinations.


-**printTotalCombinations(numbers, r)**

Generates and returns all possible combinations of a specified size by calling combinationFounder().
Hey

Arguments:

numbers (Array of Numbers): The original array containing the available numbers.

r (Number): The required number of elements in each combination.
