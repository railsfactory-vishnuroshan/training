# Fresher Training Exercise: 20 Core Problems

This exercise is designed to test your fundamental problem-solving skills and understanding of core JavaScript concepts. It should take approximately 6 hours to complete.

---

## Category 1: Array Manipulation

### 1. Max Consecutive Ones (Easy)

Find the maximum number of consecutive `1`s in a binary array.

- **Constraints:** The array will only contain `0`s and `1`s. Maximum length of 10^5.
- **Example:** `[1,1,0,1,1,1]` returns `3`.
- **Test Cases:**
  - `[1,0,1,1,0,1]` -> `2`
  - `[0,0,0]` -> `0`
  - `[1,1,1,1]` -> `4`

### 2. Missing Number (Easy)

Given an array containing `n` distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

- **Constraints:** Array length between 1 and 10^4.
- **Example:** `[3,0,1]` returns `2`.
- **Test Cases:**
  - `[0,1]` -> `2`
  - `[9,6,4,2,3,5,7,0,1]` -> `8`
  - `[0]` -> `1`

### 3. Contains Duplicate (Easy)

Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.

- **Constraints:** Array length between 1 and 10^5.
- **Example:** `[1,2,3,1]` returns `true`.
- **Test Cases:**
  - `[1,2,3,4]` -> `false`
  - `[1,1,1,3,3,4,3,2,4,2]` -> `true`
  - `[]` -> `false`

### 4. Remove Duplicates from Sorted Array (Easy)

Remove the duplicates in-place such that each element appears only once and returns the new length.

- **Constraints:** Array is sorted in non-decreasing order. Modify the array in-place with O(1) extra memory.
- **Example:** `[1,1,2]` modifies array to `[1,2,_]` and returns `2`.
- **Test Cases:**
  - `[0,0,1,1,1,2,2,3,3,4]` -> returns `5`, array is `[0,1,2,3,4,...]`
  - `[1]` -> returns `1`, array is `[1]`

### 5. Product of Array Except Self (Medium)

Return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

- **Constraints:** You must write an algorithm that runs in O(n) time and without using the division operation.
- **Example:** `[1,2,3,4]` returns `[24,12,8,6]`.
- **Test Cases:**
  - `[-1,1,0,-3,3]` -> `[0,0,9,0,0]`
  - `[2,3]` -> `[3,2]`

---

## Category 2: String Manipulation

### 6. Reverse String (Easy)

Write a function that reverses a string.

- **Constraints:** String length between 1 and 10^5. Do not use the built-in `String.prototype.reverse()`.
- **Example:** `"hello"` returns `"olleh"`.
- **Test Cases:**
  - `"Hannah"` -> `"hannaH"`
  - `"a"` -> `"a"`
  - `"12345"` -> `"54321"`

### 7. Valid Palindrome (Easy)

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

- **Constraints:** String length between 1 and 2 \* 10^5.
- **Example:** `"A man, a plan, a canal: Panama"` returns `true`.
- **Test Cases:**
  - `"race a car"` -> `false`
  - `" "` -> `true`
  - `"0P"` -> `false`

### 8. Longest Common Prefix (Easy)

Write a function to find the longest common prefix string amongst an array of strings.

- **Constraints:** If there is no common prefix, return an empty string `""`. Array length up to 200.
- **Example:** `["flower","flow","flight"]` returns `"fl"`.
- **Test Cases:**
  - `["dog","racecar","car"]` -> `""`
  - `["interspecies","interstellar","interstate"]` -> `"inters"`
  - `["a"]` -> `"a"`

### 9. Defanging an IP Address (Easy)

Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period `.` with `[.]`.

- **Constraints:** The given string is a valid IPv4 address.
- **Example:** `"1.1.1.1"` returns `"1[.]1[.]1[.]1"`.
- **Test Cases:**
  - `"255.100.50.0"` -> `"255[.]100[.]50[.]0"`
  - `"0.0.0.0"` -> `"0[.]0[.]0[.]0"`

### 10. First Unique Character in a String (Easy)

Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.

- **Constraints:** String contains only lowercase English letters.
- **Example:** `"leetcode"` returns `0`.
- **Test Cases:**
  - `"loveleetcode"` -> `2`
  - `"aabb"` -> `-1`
  - `"z"` -> `0`

---

## Category 3: Hash Table

### 11. Two Sum (Easy)

Given an array of integers and a target integer, return indices of the two numbers such that they add up to the target.

- **Constraints:** Exactly one solution exists. You may not use the same element twice. Should be done in O(n) time using a Hash Map.
- **Example:** `nums = [2,7,11,15], target = 9` returns `[0, 1]`.
- **Test Cases:**
  - `nums = [3,2,4], target = 6` -> `[1, 2]`
  - `nums = [3,3], target = 6` -> `[0, 1]`

### 12. Majority Element (Easy)

Given an array of size `n`, find the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times.

- **Constraints:** You may assume that the majority element always exists in the array.
- **Example:** `[3,2,3]` returns `3`.
- **Test Cases:**
  - `[2,2,1,1,1,2,2]` -> `2`
  - `[1]` -> `1`

### 13. Valid Anagram (Easy)

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

- **Constraints:** Strings contain only lowercase English letters.
- **Example:** `s = "anagram", t = "nagaram"` returns `true`.
- **Test Cases:**
  - `s = "rat", t = "car"` -> `false`
  - `s = "a", t = "ab"` -> `false`
  - `s = "listen", t = "silent"` -> `true`

### 14. Jewels and Stones (Easy)

You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Return how many of the stones you have are also jewels.

- **Constraints:** Letters are case sensitive (`"a"` is considered a different type of stone from `"A"`).
- **Example:** `jewels = "aA", stones = "aAAbbbb"` returns `3`.
- **Test Cases:**
  - `jewels = "z", stones = "ZZ"` -> `0`
  - `jewels = "abc", stones = "cba"` -> `3`

### 15. Ransom Note (Easy)

Given two strings `ransomNote` and `magazine`, return true if `ransomNote` can be constructed by using the letters from `magazine` and false otherwise.

- **Constraints:** Each letter in `magazine` can only be used once in `ransomNote`.
- **Example:** `ransomNote = "a", magazine = "b"` returns `false`.
- **Test Cases:**
  - `ransomNote = "aa", magazine = "ab"` -> `false`
  - `ransomNote = "aa", magazine = "aab"` -> `true`

---

## Category 4: JavaScript Concepts

### 16. Custom Array Filter (Easy)

Write a function `customFilter` that behaves exactly like `Array.prototype.filter()`.

- **Constraints:** Do not use the built-in `.filter()` method.
- **Example:** `customFilter([1, 2, 3, 4], num => num % 2 === 0)` returns `[2, 4]`.
- **Test Cases:**
  - `customFilter([10, 20, 30], x => x > 15)` -> `[20, 30]`
  - `customFilter(["a", "b", "c"], char => char === "z")` -> `[]`

### 17. Closure Counter (Easy)

Create a function `createCounter` that takes an initial integer `n` and returns an object with three methods: `increment()`, `decrement()`, and `reset()`.

- **Constraints:** Must use closures to maintain state. Cannot use global variables.
- **Example:** `const counter = createCounter(5); counter.increment();` returns `6`.
- **Test Cases:**
  - `counter.decrement()` -> `5`
  - `counter.reset()` -> `5`

### 18. Strict Type Checker (Easy)

Write a function `getType` that returns the exact type of a variable as a lowercase string.

- **Constraints:** Must correctly differentiate between `array`, `null`, `object`, and standard primitives.
- **Example:** `getType([])` returns `"array"`.
- **Test Cases:**
  - `getType(null)` -> `"null"`
  - `getType({})` -> `"object"`
  - `getType(42)` -> `"number"`

### 19. Sleep / Delay Function (Easy)

Write an asynchronous function `sleep(millis)` that pauses execution for a given number of milliseconds.

- **Constraints:** Must return a Promise.
- **Example:** `await sleep(100)` pauses execution for 100ms.
- **Test Cases:**
  - `let t = Date.now(); await sleep(500); console.log(Date.now() - t >= 500)` -> `true`

### 20. Flatten a Nested Object (Easy)

Write a function to flatten a deeply nested JavaScript object into a single-level object. Keys should be concatenated with a dot `.`.

- **Constraints:** Assume the object only contains primitive values at the leaves. No arrays.
- **Example:** `flatten({ a: { b: 1 } })` returns `{ "a.b": 1 }`.
- **Test Cases:**
  - `flatten({ x: 10, y: { z: 20 } })` -> `{ "x": 10, "y.z": 20 }`
  - `flatten({ a: { b: { c: { d: 5 } } } })` -> `{ "a.b.c.d": 5 }`
