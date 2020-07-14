import faker from "faker/locale/fr";
import users from "../users";
const MSG_NUMBERS = 55; // Amount of messages per conversation
const conversations = [];
/**
 * Creating a sort of Message Database
 * Assuming that Each User has taked to his friends
 *  */
for (let s = 0; s < users.length; s++) {
  const sender = users[s];

  for (let i = s + 1; i < users.length; i++) {
    const conversation = {};
    const receiver = users[i];
    // Even if sometimes we do talk to ourself :)
    if (sender !== receiver) {
      conversation.id = faker.random.uuid();
      conversation.users = [sender, receiver];
      conversation.messages = [];
      // MESSAGES SEED could have used a while loop
      for (let m = 0; m < MSG_NUMBERS; m++) {
        const sentMessage = {
          id: faker.random.uuid(),
          convoId: conversation.id,
          sender: sender,
          receiver: receiver,
          type: "text",
          date: faker.date.recent(),
          content: faker.lorem.sentence(Math.random() * 44),
        };
        const receivedMessage = {
          id: faker.random.uuid(),
          convoId: conversation.id,
          sender: receiver,
          receiver: sender,
          type: "text",
          date: faker.date.recent(),
          content: faker.lorem.sentence(Math.random() * 44).length,
        };
        // We push this message into the current created conversation
        conversation.messages.push(sentMessage, receivedMessage);
      }
    }
    conversations.push(conversation);
  }
}

export default conversations;
