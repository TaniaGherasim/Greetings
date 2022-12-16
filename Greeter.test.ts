import { Greeter } from './Greeter';

describe("greeter test", () => {
    test("greeter greeting", () => {
    let test = new Greeter("Hey");

    expect(test.greet("Tania")).toBe("Hey, Tania!");
    });
});