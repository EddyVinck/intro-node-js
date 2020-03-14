const users = new Array(20).fill(0).map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`
  };
});
// simulate async db call with promise
const findUser = id =>
  new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);
    if (user) {
      return resolve(user);
    }
    reject(new Error(`No user with id "${id}"`));
  });

const fixId = id => Number(id);

// simulate async db call with promise
const deleteUser = deleteId =>
  new Promise((resolve, reject) => {
    const id = fixId(deleteId);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) {
      return reject(new Error(`No user with id "${id}"`));
    }

    users.splice(userIndex, 1);
    resolve({ id });
  });

module.exports = {
  findUser,
  fixId,
  deleteUser,
  users
};
