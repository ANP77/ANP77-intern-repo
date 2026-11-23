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
def calc(x):
    t=0
    for i in x:
        t=t+i
    if t>100:
        t=t-(t*0.1)
    return t

a=[50,30,40]
print(calc(a))


### Why is this code difficult to read?
This code is difficult to read because it uses unclear variable names such as `x`, `t`, and `a`, which do not explain their purpose. The function name `calc` is also too general. The code uses inconsistent spacing and includes hardcoded values without explaining what they represent. Although the program works, it could be difficult for another developer to understand or modify.

## Rewrite the example messy code in a cleaner way
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

### Why is the rewritten code better?
The rewritten code is easier to understand because it uses meaningful variable and function names, such as `calculate_total`, `subtotal`, and `item_prices`. It also follows consistent formatting and uses constants for the discount rate and threshold instead of hardcoded values. Using the built-in `sum()` function makes the code simpler and avoids an unnecessary loop. These improvements make the code more readable, maintainable, and easier to modify in the future.