const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return the name of the employee", () => {
        expect(new Employee("First Last", 1, "email@email.com").getName()).toBe("First Last");
    });

    it("should return the ID of the employee", () => {
        expect(new Employee("First Last", 1, "email@email.com").getId()).toBe(1);
    });

    it("should return the email of the employee", () => {
        expect(new Employee("First Last", 1, "email@email.com").getEmail()).toBe("email@email.com");
    });

    it("should return the role of the employee", () => {
        expect(new Employee("First Last", 1, "email@email.com").getRole()).toBe("Employee");
    });
});