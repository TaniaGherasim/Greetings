import { HtmlGreeter } from "./HtmlGreeter";    

describe('greeter test', () => {
    test("Html greeter", () => {
    let test = new HtmlGreeter("<h1>Hello</h1>")
    
    expect(test.greet("Grant")).toBe("Hello, Grant!");
    test.tagName

    expect(test.greet("Grant")).toBe("<h1>Hello, Grant!</h1>");
    });
});