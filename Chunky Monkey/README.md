# Objective
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

# Example Returns
* yourfunction chunkArrayInGroups(["a", "b", "c", "d"], 2) will return **[["a", "b"], ["c", "d"]]**.
* yourfunction chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) will return **[[0, 1, 2], [3, 4, 5]]**.
* yourfunction chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) will return **[[0, 1], [2, 3], [4, 5], [6, 7], [8]]**.

# How I Solved It Hints
* Array.prototype.push()
* Array.prototype.slice()