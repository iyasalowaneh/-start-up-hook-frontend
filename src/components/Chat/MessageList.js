import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

//actions
import { addMessage } from "../../store/actions/messageActions";

//Components
import MessageItem from "./MessageItem";
//Styling
import "./Chat.css";
import { TextArea, SendButton, Mdiv } from "../../style";
const MessageList = () => {
	const messages = useSelector((state) => state.messages.messages);
	const users = useSelector((state) => state.users.users);
	const user = useSelector((state) => state.user.user);

	const ideaOwnerSlug = useParams().ideaOwnerSlug;
	console.log(ideaOwnerSlug);
	const ideaOwner = users.find((user) => user.slug === ideaOwnerSlug);
	console.log(ideaOwner);

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

	return (
		<Mdiv>
			{invMessages}
			<form onSubmit={handleSubmit}>
				<div>
					<TextArea
						class="input-group mb-3"
						onChange={handleChange}
						name="content"
						value={message.content}
						placeholder="Type your message..."
					></TextArea>
					<SendButton class="btn btn-outline-secondary" type="submit">
						send
					</SendButton>
				</div>
			</form>
		</Mdiv>
	);
};

export default MessageList;
