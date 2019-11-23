## Ch. 10.Handling & Debugging pgs 449 - 486 Error ##  
**Error Objects**  
These can help you find your mistakes. 7 different built-in objects inclue:  
1. Error - Generic Error  
2. SyntaxError - syntax not followed
3. Reference Error - tried to reference a variable that has not been declared.
4. TypeError - unexpected data type. Caused often by trying to use an object/methos that doesn't exist.
5. RangeError - number not acceptable in range
6. URIError - `encodeURI()` and `decodeURI()` and other methods not used correctly
7. `eval()` func not used correctly.

**How to deal with errors**
1. Debugging workflow  
- Debugging is about narrowing down where the problem might be. 
- Where and what is the problem?
     - break down parts of your code in smaller pieces. Write values of variables in the console, call functions, check if objects exist and have methods/properties they are supposed to.
