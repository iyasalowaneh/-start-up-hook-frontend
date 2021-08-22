//react
import { useDispatch, useSelector } from "react-redux";
//Styling
import "./Chat.css";
import { ChatImage, ChatImageR } from "../../style";
import { NoteTwoTone } from "@material-ui/icons";
const MessageItem = ({ msg }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);
  const users = useSelector((state) => state.users.users);

  const userImage = users
    .filter((user) => user.id === msg.senderId)
    .map((user) => user.profilePicture);
  console.log(userImage);
  console.log(user.profilePicture);

  return (
    <>
      {user.id === msg.senderId && (
        <div class="container22">
          <ChatImage
            src={user.profilePicture}
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <p>{msg.content}</p>
          <span class="time-right"></span>
        </div>
      )}

      {user.id === msg.reciverId && (
        <div class="container darker">
          <ChatImageR
            src={userImage}
            alt="Avatar"
            class="right"
            style={{ width: "100%" }}
          />
          <p>{msg.content}</p>
          <span class="time-left"></span>
        </div>
      )}
    </>
  );
};

export default MessageItem;
