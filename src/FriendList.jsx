import Friend from "./components/Friend";

const FriendList = ({
  friends,
  handleToggle,
  selectedFriend,
  handleRemoveFriend,
}) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            handleToggle={handleToggle}
            selectedFriend={selectedFriend}
            handleRemoveFriend={handleRemoveFriend}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
