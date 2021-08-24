import moment from "moment";

const AllInvTransaction = ({ ideaivs }) => {
  return (
    <tr>
      <td>investment</td>
      <td>{moment(ideaivs.createdAt).format("lll")}</td>
      <td>{ideaivs.amount}</td>
    </tr>
  );
};

export default AllInvTransaction;
