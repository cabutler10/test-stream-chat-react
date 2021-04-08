import React from "react";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelListMessenger,
  ChannelPreviewMessenger,
  Chat,
  MessageInput,
  MessageInputFlat,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

const apiKey = "z6cfpdzya8qb";
const userId = "fancy-feather-7";
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktZmVhdGhlci03In0.GbmsXHJJQu19xEo5CzFL-euKvzFEGow4RrtqGo9vqMs";
const theme = "light";

const filters = { type: "messaging" };
const options = { state: true, presence: true, limit: 10 };
const sort = {
  cid: 1,
  last_message_at: -1,
  updated_at: -1,
};

const chatClient = StreamChat.getInstance(apiKey);

if (process.env.REACT_APP_CHAT_SERVER_ENDPOINT) {
  chatClient.setBaseURL(process.env.REACT_APP_CHAT_SERVER_ENDPOINT);
}

if (typeof window !== "undefined") {
  chatClient.connectUser({ id: userId }, userToken);
}

const App = () => (
  <Chat client={chatClient} theme={`messaging ${theme}`}>
    <ChannelList
      filters={filters}
      List={ChannelListMessenger}
      options={options}
      Preview={ChannelPreviewMessenger}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput focus Input={MessageInputFlat} />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
