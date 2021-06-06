const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return the name of the manager", () => {
        expect(new Manager("First Last", 1, "email@email.com", "555-5555").getName()).toBe("First Last");
    });

    it("should return the ID of the manager", () => {
        expect(new Manager("First Last", 1, "email@email.com", "555-5555").getId()).toBe(1);
    });

    it("should return the email of the manager", () => {
        expect(new Manager("First Last", 1, "email@email.com", "555-5555").getEmail()).toBe("email@email.com");
    });

    it("should return the office number", () => {
        expect(new Manager("First Last", 1, "email@email.com", "555-5555").getOfficeNumber()).toBe("555-5555");
    });

    it("should return the role of the manager", () => {
        expect(new Manager("First Last", 1, "email@email.com", "555-5555").getRole()).toBe("Manager");
    });
});