import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("z6cfpdzya8qb");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktZmVhdGhlci03In0.GbmsXHJJQu19xEo5CzFL-euKvzFEGow4RrtqGo9vqMs";

chatClient.connectUser(
  {
    id: "fancy-feather-7",
    name: "fancy-feather-7",
    image:
      "https://getstream.io/random_png/?id=fancy-feather-7&name=fancy-feather-7",
  },
  userToken
);

const channel = chatClient.channel("messaging", "fancy-feather-7", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["fancy-feather-7"],
});

const App = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
