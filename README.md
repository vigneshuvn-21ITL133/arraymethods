# JavaScript Array Prototype Methods (Educational)

A collection of custom implementations of JavaScript's built-in **Array Prototype Methods** created for educational purposes. This project helps developers understand how native array methods work internally by recreating them using `Array.prototype`.

> **Note:** These implementations are intended for learning and practice only. In production applications, always use JavaScript's built-in array methods.

---

## 📚 Purpose

The goal of this project is to:

- Understand JavaScript prototype inheritance.
- Learn how built-in array methods are implemented.
- Improve JavaScript problem-solving skills.
- Practice callback functions and array iteration.
- Explore how native methods handle different scenarios.

---

## ✨ Implemented Methods

- ✅ `myForEach()`
- ✅ `myMap()`
- ✅ `myFilter()`
- ✅ `myFind()`
- ✅ `mySome()`
- ✅ `myEvery()`
- ✅ `myReduce()`

---

## Project Structure

```
array-prototype-methods/
│
├── arrayMethods.js
├── README.md
```

---

## Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.myMap(num => num * 2);

console.log(doubled);
// Output:
// [2, 4, 6, 8, 10]
```

---

## Implemented Methods

### myForEach()

Executes a callback function once for each array element.

```javascript
numbers.myForEach((value, index) => {
    console.log(index, value);
});
```

---

### myMap()

Creates a new array containing the results of calling a callback function on every element.

```javascript
const squared = numbers.myMap(num => num * num);
```

---

### myFilter()

Returns a new array containing elements that satisfy a given condition.

```javascript
const even = numbers.myFilter(num => num % 2 === 0);
```

---

### myFind()

Returns the first element that matches a condition.

```javascript
const result = numbers.myFind(num => num > 3);
```

---

### mySome()

Returns `true` if at least one element satisfies the condition.

```javascript
numbers.mySome(num => num > 4);
```

---

### myEvery()

Returns `true` only if all elements satisfy the condition.

```javascript
numbers.myEvery(num => num > 0);
```

---

### myReduce()

Reduces the array into a single accumulated value.

```javascript
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
```

---

## Learning Concepts

This project demonstrates:

- JavaScript Prototypes
- Prototype Inheritance
- Callback Functions
- Higher-Order Functions
- Array Iteration
- Context (`this`)
- `call()` Method
- Error Handling
- Custom Polyfills

---

## Future Improvements

Additional methods planned for implementation:

- myIncludes()
- myIndexOf()
- myLastIndexOf()
- myFindIndex()
- myFlat()
- myFlatMap()
- mySlice()
- mySplice()
- myConcat()
- myReverse()
- mySort()
- myFill()
- myCopyWithin()
- myEntries()
- myKeys()
- myValues()

---

## Disclaimer

These methods are simplified implementations designed for educational purposes. They may not cover every edge case or behavior defined in the official ECMAScript specification.

---

## License

This project is open source and available for learning, experimentation, and educational use.

---

## Author

Created for learning JavaScript internals and understanding how native array methods work behind the scenes.
