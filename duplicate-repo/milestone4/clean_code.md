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
To test ESLint, I took a simple JavaScript file with a function that calculates the total price after applying a discount. When I first ran ESLint, it detected 7 errors, including using var instead of const, declaring unused variables and functions, and using let for variables that were never reassigned. After fixing these issues, ESLint detected another error because console was not recognised in the configuration. I resolved this by configuring ESLint to recognise Node.js global variables. After making these changes, I ran ESLint again, and it completed without any errors.

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
For this task, I used a simple JavaScript function that calculates the total price after applying a discount. Initially, the code had unclear variable and function names such as calc, a, b, x, and y. I then refactored the code using more descriptive names such as calculateDiscountedTotal, itemPrice, quantity, subtotal, and discountAmount. These changes made the code easier to follow because the names clearly explain what each variable represents and what the function does. It also made the code more understandable without needing additional comments.

# Writing Small, Focused Functions

## Example code

### Code with long, complex function
```javascript
function processOrder(items, customerType) {
  let subtotal = 0;

  for (const item of items) {
    subtotal += item.price * item.quantity;
  }

  let discount = 0;

  if (customerType === 'premium') {
    discount = subtotal * 0.2;
  } else if (customerType === 'regular') {
    discount = subtotal * 0.1;
  }

  const discountedTotal = subtotal - discount;

  let shipping = 10;

  if (discountedTotal > 100) {
    shipping = 0;
  }

  const finalTotal = discountedTotal + shipping;

  return {
    subtotal,
    discount,
    shipping,
    finalTotal,
  };
}
```

### Refactored code
```javascript
function calculateSubtotal(items) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function calculateDiscount(subtotal, customerType) {
  if (customerType === 'premium') {
    return subtotal * 0.2;
  }

  if (customerType === 'regular') {
    return subtotal * 0.1;
  }

  return 0;
}

function calculateShipping(discountedTotal) {
  return discountedTotal > 100 ? 0 : 10;
}

function processOrder(items, customerType) {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, customerType);
  const discountedTotal = subtotal - discount;
  const shipping = calculateShipping(discountedTotal);

  return {
    subtotal,
    discount,
    shipping,
    finalTotal: discountedTotal + shipping,
  };
}
```

## Reflection

### Why is breaking down functions beneficial?
Breaking down large functions into smaller, single-purpose functions makes code easier to read, understand, and maintain. Each function focuses on a specific task, making it easier to identify errors, test individual parts of the code, and make changes without affecting unrelated functionality. It also improves code reusability, as smaller functions can be used in different parts of a project.

### How did refactoring improve the structure of the code?
For this task, I used a JavaScript function called processOrder that calculates the subtotal, applies discounts based on customer type, determines shipping costs, and calculates the final total. Initially, all these calculations were handled within a single function, which made the code longer and more difficult to follow. I refactored the code into smaller functions, including calculateSubtotal, calculateDiscount, and calculateShipping, each responsible for a specific calculation. The processOrder function now combines these smaller functions to calculate the final result. This made the code more organised and easier to understand, as each function has a clear responsibility. It also makes future changes easier because individual calculations can be modified without rewriting the entire function.

# Avoiding Code Duplication Reflection

## What were the issues with duplicated code?
Duplicated code can make a project harder to maintain because the same logic is repeated in multiple places. When changes are needed, developers have to update each occurrence separately, which can be time-consuming and increase the risk of errors or inconsistencies.

## How did refactoring improve maintainability?
Refactoring duplicated code into reusable functions can improve maintainability by reducing repetition and keeping related logic in one place. This makes future updates easier because changes only need to be made once rather than in multiple sections. It also makes the code more consistent, organised, and easier to understand.

# Refactoring Code for Simplicity

## Example of overly complicated code

### Before refactoring
```javascript
function checkDiscount(age, isMember) {
  let result = false;

  if (age >= 18) {
    if (isMember === true) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (isMember === true) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
}
```

### Refactored code
```javascript
function checkDiscount(isMember) {
  return isMember;
}
```

## Reflection

### What made the original code complex?
For this task, I used a JavaScript function called checkDiscount that determines whether someone qualifies for a discount based on their membership status. The original code contained multiple nested if-else statements, repeated conditions, and unnecessary variable assignments. Although the function worked, the additional conditions made the code longer and more difficult to follow than necessary.

### How did refactoring improve it?
I refactored the function by removing the unnecessary conditions and variable assignments and returning the membership status directly. This reduced the amount of code while maintaining the same functionality. The refactored version is simpler, easier to read, and easier to maintain because it focuses only on the condition needed to determine the result.

# Commenting & Documentation

## Example of poorly commented code

### Before improving comments
```javascript
// Function to calculate
function calc(p, q) {
  // Multiply p and q
  const x = p * q;

  // Multiply x by 0.1
  const y = x * 0.1;

  // Subtract y from x
  return x - y;
}
```

### Improved code and comments
```javascript
function calculateDiscountedTotal(itemPrice, quantity) {
  const subtotal = itemPrice * quantity;

  // Apply a 10% discount to the total purchase price.
  const discountAmount = subtotal * 0.1;

  return subtotal - discountAmount;
}
``` 

## Reflection

### When should you add comments?
Comments should be added when the purpose or reasoning behind a section of code is not immediately clear. They are especially useful for explaining complex logic, important decisions, business rules, or unusual behaviour that other developers may not easily understand. Comments can also be used to document functions, including their parameters and return values, to help other developers understand how to use them.

### When should you avoid comments and instead improve the code?
Comments should be avoided when they simply repeat what the code already explains. For example, adding a comment to describe a basic calculation or assignment does not provide much additional information. In these situations, using meaningful variable and function names or simplifying the code can make it easier to understand without unnecessary comments.

For this task, I used a JavaScript function that calculates a discounted total. Initially, the code contained unclear variable names and comments that only described individual calculations. I improved it by using more descriptive names and replacing the unnecessary comments with a single comment explaining the discount rule. This made the code easier to understand without relying on excessive comments.

# Handling Errors & Edge Cases

## Original function without error handling
```javascript
function divide(a, b) {
  return a / b;
}
```

## Refactored function
```javascript
function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Inputs must be valid numbers.');
  }

  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return a / b;
}
```

## Reflection

### What was the issue with the original code?
For this task, I used a simple JavaScript function that divides two numbers. The original function performed the calculation without checking whether the inputs were valid. This meant that dividing by zero or providing non-numeric values could produce unexpected results such as Infinity or NaN.

### How does handling errors improve reliability?
Handling errors improves reliability by preventing invalid inputs from producing unexpected results and making problems easier to identify and debug. I refactored the function by adding guard clauses to check whether the inputs were valid numbers and to prevent division by zero. Instead of continuing with invalid inputs, the function now throws an error with a clear message. This makes the code more reliable and easier to understand.

# Writing Unit Tests for Clean Code Reflection

## How do unit tests help keep code clean?
Unit tests help keep code clean by checking whether individual functions work as expected. They make it easier to identify errors, verify that changes do not break existing functionality, and improve code reliability. Unit tests also make refactoring safer because developers can test whether the code still produces the expected results after making changes.

## What issues did you find while testing?
For this task, I used Jest to write unit tests for a JavaScript function called divide. I tested the function with valid numbers, negative numbers, division by zero, and invalid inputs. The tests helped me verify that the function performs calculations correctly and handles invalid inputs by throwing appropriate errors. All four tests passed, showing that the function behaved as expected for the tested cases.


