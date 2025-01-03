# TypeScript Type Coercion Runtime Error

This example demonstrates a common error in TypeScript where type coercion during runtime leads to unexpected behavior.  While the TypeScript compiler doesn't flag this as an error, the JavaScript runtime interprets the operation differently. 

The `add` function is declared to accept two numbers and return a number. However, the call to `add` passes a string and a number, which results in string concatenation instead of addition.

The solution addresses this by performing runtime type checking and throwing an error if the input types are not as expected. This prevents unexpected behavior at runtime.