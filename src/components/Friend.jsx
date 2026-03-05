import React from "react";
import Button from "./Button";

const Friend = ({
  friend,
  handleToggle,
  selectedFriend,
  handleRemoveFriend,
}) => {
  const choosen = selectedFriend?.id === friend.id;
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button
          handleToggle={() => handleToggle(friend)}
          className={choosen ? "selected" : ""}
        >
          {choosen ? "Close" : "Select"}
        </Button>

        <Button
          handleToggle={() => handleRemoveFriend(friend.id)}
          type="delete"
        >
          Remove
        </Button>
      </li>
    </>
  );
};

export default Friend;
