### 1a 
1. "values added: 20"
2. "final result: 20"
3. "values added: 20"
4. Error, with the let declaration, it will only exist inside the if block. Outside the scope, it will see that the variable was never defined
5. Error. result was already defined on line 5 and is being reassigned on line 7. 
6. Error, same reason as above, you can't reassign a *const* variable.
### 1b
1. It will print out **3**. Since var has no block scope, you can access it. Variable *i* was initialized in the loop, it will increase with each iteration until it is not less than the length of prices. Since the length is 3, *i* will reach 3 and terminate there. It then prints on line 12.
2. It will print out **150**. *var* ignores block scope so we are able to access the discountedPrice variable from the loop. From line 13, we can access the last assignment of discountPrice which would be `prices[2] * (1-0.5)` which assigns discountedPrice to 150.
3. It will print out **150**. *var* ignores block scope so we are able to access the finalPrice variable from outside the loop. we perform `Math.round(150 * 100) / 100` where *150* was the last value of discountedPrice and performed in the last iteration of the loop. The computed is 150 where it is able to be accessed from line 14 and printed. 
4. It would return an array with the values 50,100,150. `[50,100,150]`.
5. **error**. The variable *i* is defined with *let* and in a for loop. This means that the variable *i* is in scope only inside the for-loop meaning that anything outside(including line 12) is not able to reference it. Error saying something like *i* does not exist. 
6. **error**. Similar to answer 5. *dicountedPrice* is defined with *let* inside the for-loop. *let* pays attention to scope meaning that *discountedPrice* will only be accessible within the loop scope. Since line 13 is not in scope, will result in error. 
7. It will print out **150**. The variable is defined inside the function with *let*. This means it is scoped within the function. The loop is able to change the value of *finalPrice* because it is inside the scope of the function. In the last iteration of the loop, *finalPrice* is assigned to the value 150. Since it is defined outside the loop and the loop as terminated, it stays with the value still able to be accessed within the function scope. Since line 14 is within the function scope, it is able to print the last assigned value of *finalPrice*.
8. Returns array with values 50,100,150. `[50, 100, 150]`. The two variables *discounted* and *finalPrice* are declared in the scope of the function, meaning it can be accessed from anywhere within the function. There is a for-loop with an *i* variable declared with *let* which means it is scoped to the loop. Within the loop, it will run 3 times with *i* being incremented. It performs the operations with values given the the passed array and assigned to the *discounted* array. After the operations are done, it will return *discounted*. None of the scope restrictions with the variables are violated making this program run as instructed with no errors. 
9. **error**. For the same reason as question 5. The variable is defined with *let* in the for-loop meaning it is only accessible from the loop since *let* observes scope. Since line 11 is not in scope, it cannot refer to *i* and result in error. 
10. It will print the value **3**. The variable is defined as *const* within the function. Similar to *let* const is block-scoped. Since it is a *const*, it must also not be assigned to a new value at any point in the scope. Looking through the function, we see that it is only assigned once, It is assigned to the length of the *prices* parameter that is passed in. When called, it has a 3-length array which means it will print *3* since line 12 is in the scope of the function. 
11. It will return the array `[50, 100, 150]`. There are two *const* variables, array *discounted* and *length*,which means they are both scoped to the function and only declared once/ cannot change. Throughout the program, the variable *length* is only declared once to the length of the *prices* parameter. Looking at the for-loop, there is an *i* variable declared in the scope. It is scoped to the loop, meaning that *i* can only be referred to in the loop. Inside the loop, we have a *const* variable inside the loop which is only declared once in the loop and referred, which does not have any scope violations. We can also declare it in the loop as a loop finishes, it will start the loop "fresh" and act as if we are declaring the variable for the first time again. Line 8 does not violate the *const* declaration on line 3 as it is not being redeclared, it is only adding to the array it is assigned to, not assigning to declaring to a new array as specified by the docs we cant do. It then returns the *discounted* array which is in scope. There are no errors which runs the code as written. 
12. Notation
    * `student.name;`
    * `student["Grad Year"];`
    * `student.greeting()`
    * `student["Favorite Teacher"].name;`
    * `student.courseLoad[0];`
13. Arithmetic
    * `'32'`. Becomes a string conversion. `2` cast to string and concatenates to the string `'3'`
    *  `1`. Becomes a numeric conversion because of subtraction with `-`. `'3'` typecast to number.  
    * `3`. Becomes numeric conversion because of mathematical operation. Rules state that `null` becomes 0 so its `3+0`.
    * `'3null'`. Becomes a string conversion as concatenation. Rules say that its read "as-is" for most, so `null` becomes `'null'` and is concatenated to string 3.
    * `4`. Becomes numeric conversion because of mathematical operation to number. Rules state `true` mapped to `1`. 
    * `0`. Becomes numeric conversion due to numeric operation. From rules, both values map to a `0`.
    * `3undefined`. String conversion. `undefined` is cast to string as-is. 
    *  `NaN`. Becomes a numeric conversion due to operation. `'3'` is cast as is while undefined is `NaN`. Based on rules, "arithmetic operations involving `NaN` result in `NaN`" - GOOGLE, magicplot.com
14. Comparison
    * `true`. `2` is a numeric conversion since comparison to a number. 2 is greater than 1.
    * `false`. Both are strings so you are doing a string comparison, which runs a small algorithm. You go character by character starting by the left and seeing if one is greater than the other. You compare `2` to `1` is is then compared as a numeric comparison `2<1` which is false. 
    * `true`. Numeric comparison since you are comparing a number. `'2'` cast to a number and checks for equality. 
    * `false`. This does a strict comparison without the type conversion. They are different types so it is an automatic false. 
    * `false`. This is a numeric comparison which converts `true` to a `1`. `1==2` is false. 
    * `true`. This is a strict boolean expression, which means they must be the same type and equal value to be true. The right side of the expression creates a Boolean object that returns true as long as 0, -0, null, false, NaN, undefined, or empty string are NOT passed in. Since it passes in a 2, it will return a true boolean object which matches the left side in type and value. 
15. `==` does a comparison while doing any conversion if needed. `===` is called a strict comparison. It checks if the objects compared are the same type, if not returns false right away, and then compares the value. 
16. check `part1b-question16.js`
17. Returns array `[2,4,6]`. The function is defined with 2 parameters, an *array* and a function *callback*. We declare *newArr* to an empty array and we then go into a loop that iterates the length of the variable *array*. For each iteration, *newArr* pushes on whatever is a result of calling the callback function on each element of *array* as it increases *i*.
Another function is then declared that takes in a variable *num* that then returns a number as it returns the result of a numeric expression, which doubles the value of *num*.
The function *modifyModify* is then called on a 3 long array and with the call back function *doSomething*. Since the function has *newArr* push on the result of the callback function on the element of the passed in array, we have *doSomething* as that callback function meaning that we are performing the `num*2` operation on each element of the passed in *array* parameter. So as *modifyModify* is being run, it is multiplying each element by 2 as a numeric expression. 
18. Check `part1b-question18.js`
19. 1, 4, 3, 2. Each on a new line;