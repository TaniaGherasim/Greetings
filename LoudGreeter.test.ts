import { LoudGreeter } from "./LoudGreeter";

describe('greeter test', () => {
    test("Loud Greeter greeting", () => {
    let test = new LoudGreeter("Hello");

    expect(test.greet("Grant")).toBe("Hello, Grant!!");
    test.addVolume

    expect(test.greet("Grant")).toBe("Hello, Grant!!!");
    
    });
    
});