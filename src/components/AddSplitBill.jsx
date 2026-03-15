import React, { useState } from "react";

const AddSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const friendPay = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmitBill = (e) => {
    e.preventDefault();

    if (!bill || !whoIsPaying) return;
    handleSplitBill(whoIsPaying === "user" ? friendPay : -paidByUser);
  };

  return (
    <form className="form-split-bill " onSubmit={(e) => handleSubmitBill(e)}>
      <h2>SPLIT BILL WITH {selectedFriend.name}</h2>
      <label>💸Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👌Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          )
        }
      />
      <label>🫂{selectedFriend.name} expense</label>
      <input disabled value={friendPay} />
      <label>🛫Who's paying the bill</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
};

export default AddSplitBill;
