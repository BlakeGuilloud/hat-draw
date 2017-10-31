const generateRandomIdx = (min = 0, max = 6) =>
  Math.floor(Math.random() * (max - 0)) + 0;

const findUser = (user, data) =>
  data.find(u => u.name === user);

const fetchDrawNameData = (user, data) => ({
  randomUser: findUser(data[generateRandomIdx(0, data.length)].name, data),
  user: findUser(user, data),
});

const drawName = (str, data) => {
  const { randomUser, user } = fetchDrawNameData(str, data);

  if (randomUser.name === user.name) {
    console.log('name is user');
    return drawName(user.name, data);
  } else if (randomUser.name === user.spouse) {
    console.log('name is spouse');
    return drawName(user.name, data);
  } else {
    console.log('WAHOO');
    return randomUser;
  }
};

module.exports = drawName;
