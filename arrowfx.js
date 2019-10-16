// starting with IIFEE - More useful in Front-End only implementations. Using it here to create multiple local scopes. Don't have to worry about using the same function name.

// Most scoping issues are handled in JS Frameworks

(function() {
    function addNumbers(a, b) {
        return a + b;
    }
    console.log(addNumbers(2,2));
})();

(function() {
    /* Arrow Functions: 
        1. Implicit Return
        2. useful for handling 'this' in class methods (doesn't rebind this)
        3. Concise Function
        Note: if multi-line arrow function, need to explicitly write return on the last line and add {}
    */
    const addNumbers = (a, b) => a + b;
    console.log(addNumbers(1,10));
})();