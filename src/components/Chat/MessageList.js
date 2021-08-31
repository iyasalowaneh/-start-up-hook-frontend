import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

//actions
import { addMessage, fetchMessage } from "../../store/actions/messageActions";

//Components
import MessageItem from "./MessageItem";

//Styling
import "./Chat.css";
const MessageList = ({ ideaOwnerSlug }) => {
  const messages = useSelector((state) => state.messages.messages);
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);

  const ideaOwner = users.find((user) => user.slug === ideaOwnerSlug);

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
      <div className="msg">
        <main>
          <header>
            <div>
              <h2>
                I don't buy or sell relationships, so let's talk business.
              </h2>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
              alt="start icon"
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
