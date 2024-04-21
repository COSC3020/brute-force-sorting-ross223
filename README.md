[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of my version of Brute Sort is $\Theta (n * n!)$. As my algorithm
is implemented with some for loops we can analyze the complexity using loop logic.
The first loop will run n times where n is the length of the array, as seen in the loop
conditions. Then it will call the permutation function which will be called using a starting
index that is one greater. This results in something reminicent of n(n-1)(n-2)... which is
n!. Then a second loop is called inside the for loop which runs over the whole array to see
if it is sorted so it has a runtime of n. So the total runtime can be calculated by 
multiplying these together resulting in the runtime complexity is $\Theta (n*n!)$.

The best case input would be an array with zero elements as there is a condition at the 
beginning of the function checking for this specifically. This would result in a 
runtime of $\Theta (1)$ since there is only constant processes.

The worst case would be the program having to run through every permutation before 
finding the correct sorted list, which would result in the runtime complexity of 
$\Theta (n*n!)$ as described above.

If permutations were generated randomly without memory there is the possiblity of
the program never ending albiet small. So the best case would still be the array
has zero elements, but in the worst case the program would run infinitely.
