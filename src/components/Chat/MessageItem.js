import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//Styling
import "./Chat.css";
import { ChatImage, ChatImageR } from "../../style";
const MessageItem = ({ msg }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);

  return (
    <>
      {user.id === msg.senderId && (
        <div class="container">
          <ChatImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU"
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <p>{msg.content}</p>
          <span class="time-right">11:00</span>
        </div>
      )}

      {user.id === msg.reciverId && (
        <div class="container darker">
          <ChatImageR
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="Avatar"
            class="right"
            style={{ width: "100%" }}
          />
          <p>{msg.content}</p>
          <span class="time-left">11:01</span>
        </div>
      )}
    </>
  );
};

export default MessageItem;
