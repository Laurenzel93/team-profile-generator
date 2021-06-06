const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the name of the intern", () => {
        expect(new Intern("First Last", 1, "email@email.com", "School Name").getName()).toBe("First Last");
    });

    it("should return the ID of the intern", () => {
        expect(new Intern("First Last", 1, "email@email.com", "School Name").getId()).toBe(1);
    });

    it("should return the email of the intern", () => {
        expect(new Intern("First Last", 1, "email@email.com", "School Name").getEmail()).toBe("email@email.com");
    });

    it("should return the name of the intern's school", () => {
        expect(new Intern("First Last", 1, "email@email.com", "School Name").getSchool()).toBe("School Name");
    });

    it("should return the role of the intern", () => {
        expect(new Intern("First Last", 1, "email@email.com", "School Name").getRole()).toBe("Intern");
    });
});