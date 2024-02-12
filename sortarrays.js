function sortStringsIgnoreCase(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

// Test cases
console.log(sortStringsIgnoreCase(["Hello", "there", "I'm", "fine"]));  // Output: ["fine", "Hello", "I'm", "there"]
console.log(sortStringsIgnoreCase(["C", "d", "a", "B"]));              // Output: ["a", "B", "C", "d"]
