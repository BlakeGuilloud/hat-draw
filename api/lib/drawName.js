const generateRandomIdx = (min = 0, max = 6) =>
  Math.floor(Math.random() * (max - 0)) + 0;

const findUser = (user, data) =>
  data.find(u => u.name === user);

const fetchDrawNameData = (user, data) => ({
  randomUser: findUser(data[generateRandomIdx(0, data.length)].name, data),
  user: findUser(user, data),
});

const drawName = (str, data, drawCount = 0) => {
  const drawCountClone = drawCount + 1;
  
  const { randomUser, user } = fetchDrawNameData(str, data);

  if (drawCountClone === 10) {
    throw new Error('too many tries..');
  } else if (randomUser.name === user.name) {
    console.log('name is user');
    return drawName(user.name, data, drawCountClone);
  } else if (randomUser.name === user.spouse) {
    console.log('name is spouse');
    return drawName(user.name, data, drawCountClone);
  } else if (randomUser.drawnBy) {
    console.log('drawn!');
    return drawName(user.name, data, drawCountClone)
  } else {
    return { randomUser, user };
  }
};

module.exports = drawName;
