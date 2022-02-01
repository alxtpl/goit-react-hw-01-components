import FriendtsListItem from "../FriendListItem/FriendListItem";
import "./FriendList.css";
import friends from "../../data/friends.json";



const FriendsList = () => {
    return (
        <section>

            <ul class="friend-list">
                      {friends.map((el) => {
                    return (
                        <FriendtsListItem
                            key={el.id}
                            isOnline={el.isOnline}
                            name={el.name}
                            avatar={el.avatar}
                           
                        />
                    
                    );
                })}
            </ul>
        </section>
    );
};

export default FriendsList;