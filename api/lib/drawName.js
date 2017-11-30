const generateRandomIdx = (min = 0, max = 6) =>
  Math.floor(Math.random() * (max - min)) + min;

const fetchRandomUser = data =>
  data[generateRandomIdx(0, data.length)].name;

const findUser = (user, data) =>
  data.find(u => u.name === user);

const fetchDrawNameData = (user, data) => ({
  randomUser: findUser(fetchRandomUser(data), data),
  user: findUser(user, data),
});

const isInvalidUser = (randomUser, user) =>
  randomUser.name === user.name ||
  randomUser.name === user.spouse ||
  randomUser.drawn

const drawName = (str, data, drawCount = 0) => {
  const drawCountClone = drawCount + 1;
  
  const { randomUser, user } = fetchDrawNameData(str, data);

  if (drawCountClone === 30) {
    throw new Error('too many tries..');
  } else if (isInvalidUser(randomUser, user)) {
    return retry();
  } else {
    return { randomUser, user };
  }

  function retry() {
    return drawName(user.name, data, drawCountClone);
  }
};

module.exports = drawName;
