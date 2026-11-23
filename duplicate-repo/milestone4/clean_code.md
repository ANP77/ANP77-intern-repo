# Understanding Clean Code Principles

1. Simplicity
Simplicity means keeping code as straightforward as possible without adding unnecessary complexity. Code should focus on solving the problem using simple logic and avoiding unnecessary functions, conditions, or features. Simpler code is generally easier to understand, debug, and maintain.

2. Readability
Readability means writing code that is easy for other developers to understand. Using meaningful variable and function names, proper indentation, and a clear structure makes the code easier to follow. Comments can also help explain complex logic when necessary, but the code itself should be understandable without too many comments.

3. Maintainability
Maintainability refers to how easily code can be updated, fixed, or improved in the future. Writing reusable functions, avoiding duplicated code, and keeping different responsibilities separate can make maintenance easier. This is important because developers may need to modify code long after it was originally written.

4. Consistency
Consistency means following the same coding style, naming conventions, and formatting throughout a project. Developers should follow the project's coding standards or style guides so that the code looks consistent. This is especially important when multiple developers are working on the same codebase.

5. Efficiency
Efficiency means writing code that performs its tasks effectively without wasting unnecessary time or resources. Developers should consider performance when choosing algorithms and data structures, especially when working with large amounts of data. However, it is also important to avoid premature optimization that makes the code unnecessarily complicated.

## Example messy code
```javascript
def calc(x):
    t=0
    for i in x:
        t=t+i
    if t>100:
        t=t-(t*0.1)
    return t

a=[50,30,40]
print(calc(a))
```

### Why is this code difficult to read?
This code is difficult to read because it uses unclear variable names such as `x`, `t`, and `a`, which do not explain their purpose. The function name `calc` is also too general. The code uses inconsistent spacing and includes hardcoded values without explaining what they represent. Although the program works, it could be difficult for another developer to understand or modify.

## Rewrite the example messy code in a cleaner way
```javascript
DISCOUNT_RATE = 0.10

DISCOUNT_THRESHOLD = 100

def calculate_total(prices):
    subtotal = sum(prices)

    if subtotal > DISCOUNT_THRESHOLD:
        return subtotal * (1 - DISCOUNT_RATE)

    return subtotal

item_prices = [50, 30, 40]

total_price = calculate_total(item_prices)

print(total_price)
```

### Why is the rewritten code better?
The rewritten code is easier to understand because it uses meaningful variable and function names, such as `calculate_total`, `subtotal`, and `item_prices`. It also follows consistent formatting and uses constants for the discount rate and threshold instead of hardcoded values. Using the built-in `sum()` function makes the code simpler and avoids an unnecessary loop. These improvements make the code more readable, maintainable, and easier to modify in the future.

# Code Formatting & Style Guides Reflection

## Why is code formatting important?
Code formatting is important because it makes code easier to read, understand, and maintain. Following consistent formatting and coding conventions also helps developers collaborate more effectively, especially when working on the same project. It also makes it easier to identify mistakes and understand the structure of the code.

## What issues did the linter detect?
To test ESLint, I created a simple JavaScript file with a function that calculates the total price after applying a discount. I intentionally included some coding issues to see how ESLint would identify them. When I first ran ESLint, it detected 7 errors, including using var instead of const, declaring unused variables and functions, and using let for variables that were never reassigned. After fixing these issues, ESLint detected another error because console was not recognised in the configuration. I resolved this by configuring ESLint to recognise Node.js global variables. After making these changes, I ran ESLint again, and it completed without any errors.

## Did formatting the code make it easier to read?
Yes, using Prettier made the code easier to read by automatically correcting spacing and making the formatting more consistent. It made the code look cleaner and more organised. I also found it useful because it reduces the need for manual formatting and helps maintain a consistent coding style.

# Naming Variables & Functions

## Example code

### Code with unclear variables
```javascript
function calc(a, b) {
  let x = a * b;
  let y = x * 0.1;
  return x - y;
}

let p = 50;
let q = 3;
let z = calc(p, q);
```

### Refactored code
```javascript
function calculateDiscountedTotal(itemPrice, quantity) {
  const subtotal = itemPrice * quantity;
  const discountAmount = subtotal * 0.1;

  return subtotal - discountAmount;
}

const itemPrice = 50;
const quantity = 3;
const finalPrice = calculateDiscountedTotal(itemPrice, quantity);
```

## Variable changed before and after
| Before | After |
| ------ | ----- |
| calc | calculateDiscountedTotal |
| a | itemPrice |
| b | quantity |
| x | subtotal |
| y | discountAmount |
| z | finalPrice |

## Reflection

### What makes a good variable or function name?
A good variable or function name should be clear, descriptive, and meaningful so that other developers can easily understand its purpose. Variable names should explain what kind of data they store, while function names should describe what the function does. Following consistent naming conventions, such as camelCase in JavaScript, also makes the code easier to read and maintain.

### What issues can arise from poorly named variables?
Poorly named variables can make code confusing and difficult to understand, especially when working with unfamiliar code. For example, names like a, b, or x do not explain what the variables represent. This can make debugging and modifying the code more difficult because developers may need to spend extra time understanding how the variables are used.

### How did refactoring improve code readability?
For this task, I created a simple JavaScript function that calculates the total price after applying a discount. Initially, I used unclear variable and function names such as calc, a, b, x, and y. I then refactored the code using more descriptive names such as calculateDiscountedTotal, itemPrice, quantity, subtotal, and discountAmount. These changes made the code easier to follow because the names clearly explain what each variable represents and what the function does. It also made the code more understandable without needing additional comments.