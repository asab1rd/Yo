import faker from "faker/locale/fr";
const MAX_USERS = 10; //Max number of fake user
const users = [];
for (let i = 0; i < MAX_USERS; i++) {
  const user = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    lastIp: faker.internet.ip(),
    status: "online",
  };
  users.push(user);
}

export default users;
