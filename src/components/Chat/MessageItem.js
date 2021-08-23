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
      {user.id === msg.reciverId && (
        <li class="you">
          <div class="entete">
            <span class="status green"></span>
            <h3>10:12AM, Today</h3>
          </div>
          <div class="triangle"></div>
          <div class="message">{msg.content}</div>
        </li>
      )}

      {user.id === msg.senderId && (
        <li class="me">
          <div class="entete">
            <h3>10:12AM, Today</h3>
            <h2>Vincent</h2>
            <span class="status blue"></span>
          </div>
          <div class="triangle"></div>
          <div class="message">{msg.content}</div>
        </li>
      )}
    </>
  );
};

export default MessageItem;
