import moment from "moment";

const AllDonTransaction = ({ ideadon }) => {
  return (
    <tr>
      <td>donation</td>
      <td>{moment(ideadon.createdAt).format("lll")}</td>
      <td>{ideadon.amount}</td>
    </tr>
  );
};

export default AllDonTransaction;
