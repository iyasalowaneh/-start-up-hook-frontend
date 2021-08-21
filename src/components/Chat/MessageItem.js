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

	return (
		<>
			{user.id === msg.senderId && (
				<div class="container22">
					<ChatImage
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU"
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
						src={user.profilePicture}
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
