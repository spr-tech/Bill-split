import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import AddSplitBill from "./components/AddSplitBill";

{
  /*const initialFriends = [
  {
    id: nanoid(),
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: nanoid(),
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: nanoid(),
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
;*/
}

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("friendList")) || [],
  );
  const [newFriend, setNewFriend] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=default");
  const [appear, setAppear] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSetAndSave = (saved) => {
    localStorage.setItem("friendList", JSON.stringify(saved));
    setItems(saved);
  };

  const handleNewFriend = (img, nam) => {
    const nf = {
      id: nanoid(),
      name: nam,
      image: img,
      balance: 0,
    };

    const existingFriends = [...items, nf];
    handleSetAndSave(existingFriends);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFriend) return;
    handleNewFriend(image, newFriend);
  };

  const handleToggle = () => {
    setAppear((prev) => !prev);
  };

  const handleShowFriend = (friend) => {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setAppear(false);
  };

  const handleSplitBill = (value) => {
    const billSplit = items.map((item) =>
      item.id === selectedFriend.id
        ? { ...item, balance: item.balance + value }
        : item,
    );
    handleSetAndSave(billSplit);
    setSelectedFriend(null);
  };

  const handleRemoveFriend = (id) => {
    const deletedProfile = items.filter((fri) => fri.id !== id);
    handleSetAndSave(deletedProfile);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={items}
          handleShowFriend={handleShowFriend}
          selectedFriend={selectedFriend}
          handleRemoveFriend={handleRemoveFriend}
        />
        {appear && (
          <AddFriend
            setNewFriend={setNewFriend}
            handleSubmit={handleSubmit}
            newFriend={newFriend}
            image={image}
            setImage={setImage}
          />
        )}

        <div className="button">
          <Button handleToggle={handleToggle}>
            {appear ? "Hide" : "Add friend"}{" "}
          </Button>
        </div>
      </div>

      {selectedFriend && (
        <AddSplitBill
          friends={items}
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
