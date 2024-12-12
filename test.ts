// Deliberate issues added for testing CodeGuru Reviewer

// Unused variable
const unusedVariable = "I am not used anywhere";

// Function with potential performance issue
function inefficientLoop(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // Inefficient access pattern
        sum += numbers[numbers.length - 1 - i];
    }
    return sum;
}

// Function with missing error handling
function riskyOperation(input: string): string {
    // Risky operation without error handling
    const result = JSON.parse(input);
    return result.key;
}

// Function with hardcoded secrets (not secure)
function connectToApi(): void {
    const apiKey = "12345-ABCDE"; // Hardcoded secret
    console.log(`Connecting with API key: ${apiKey}`);
}

// Function with no type annotations (bad practice)
function add(a, b) {
    return a + b;
}

// Function that could cause null pointer exception
function greet(user: { name: string } | null): string {
    return `Hello, ${user.name}`; // Possible null access
}

