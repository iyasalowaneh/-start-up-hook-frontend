import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//actions
import { addMessage, fetchMessage } from "../../store/actions/messageActions";

//Components
import MessageItem from "./MessageItem";
//Styling
import { BsFillCursorFill } from "react-icons/bs";
import InvestorList from "../User/InvestorList";
import "./Chat.css";
import { TextArea, SendButton, Mdiv } from "../../style";
const MessageList = ({ ideaOwnerSlug }) => {
  const messages = useSelector((state) => state.messages.messages);
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);

  // const ideaOwnerSlug = useParams().ideaOwnerSlug;
  // console.log(ideaOwnerSlug);
  const ideaOwner = users.find((user) => user.slug === ideaOwnerSlug);
  console.log(ideaOwner);
  // console.log(user);

  const invMessages = messages
    .filter(
      (message) =>
        (message.senderId === user.id && message.reciverId === ideaOwner.id) ||
        (message.reciverId === user.id && message.senderId === ideaOwner.id)
    )
    .map((msg) => <MessageItem msg={msg} key={msg.id} />);

  const dispatch = useDispatch();
  const [message, SetMessage] = useState({
    reciverId: ideaOwner.id,
    content: "",
  });

  const handleChange = (event) => {
    SetMessage({ ...message, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    SetMessage({ ...message, content: "" });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("here");
      dispatch(fetchMessage());
    }, 3000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      {/* <InvestorList /> */}
      <div className="msg">
        <main>
          <header>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Chat with Vincent Porter</h2>
              <h3>already 1902 messages</h3>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
              alt=""
            />
          </header>

          <div className="chat">
            <ul id="chat">{invMessages}</ul>
          </div>
          <footer>
            <form onSubmit={handleSubmit}>
              <textarea
                onChange={handleChange}
                name="content"
                value={message.content}
                placeholder="Type your message"
              ></textarea>

              <button type="submit">Send</button>
            </form>
          </footer>
        </main>
      </div>
    </>
  );
};

export default MessageList;
