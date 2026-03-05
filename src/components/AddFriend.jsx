import React from "react";
import Button from "./Button";

const AddFriend = ({
  setNewFriend,
  handleSubmit,
  newFriend,
  image,
  setImage,
}) => {
  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={newFriend}
        onChange={(e) => setNewFriend(e.target.value)}
      />

      <label>🧑 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};

export default AddFriend;
