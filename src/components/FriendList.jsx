import Friend from "./Friend";

const FriendList = ({
  friends,
  handleShowFriend,
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
            handleShowFriend={handleShowFriend}
            selectedFriend={selectedFriend}
            handleRemoveFriend={handleRemoveFriend}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
