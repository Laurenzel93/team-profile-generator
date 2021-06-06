const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the name of the engineer", () => {
        expect(new Engineer("First Last", 1, "email@email.com", "Github").getName()).toBe("First Last");
    });

    it("should return the ID of the engineer", () => {
        expect(new Engineer("First Last", 1, "email@email.com", "Github").getId()).toBe(1);
    });

    it("should return the email of the engineer", () => {
        expect(new Engineer("First Last", 1, "email@email.com", "Github").getEmail()).toBe("email@email.com");
    });

    it("should return the Github of the engineer", () => {
        expect(new Engineer("First Last", 1, "email@email.com", "Github").getGithub()).toBe("Github");
    });

    it("should return the role of the engineer", () => {
        expect(new Engineer("First Last", 1, "email@email.com", "Github").getRole()).toBe("Engineer");
    });
});