import { Greeter } from './Greeter';

describe('greeter test', () => {
    test("JavaScript Greeter greeting", () => {
    let test = new Greeter("Hello");

    expect(test.greet("Grant")).toBe("Hello, Grant!");
    
    });
    
});