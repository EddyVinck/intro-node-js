const { fixId, findUser, deleteUser, users } = require("./users");

// write some tests
describe("users", () => {
  test("fixId", () => {
    expect(fixId("200")).toBe(200);
  });
  test("findUser", async () => {
    const user = await findUser(5);
    expect(user.id).toBe(5);
  });
  test("deleteUser", async () => {
    // console.log(JSON.stringify(users, null, 2));
    const originalUserCount = users.length;
    await deleteUser(5);
    expect(users.length).toBe(originalUserCount - 1);
  });
});
