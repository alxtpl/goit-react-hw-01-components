import FriendtsListItem from "../FriendListItem/FriendListItem";
import s from  "./FriendList.module.scss";
import friends from "../../data/friends.json";



const FriendsList = () => {
    return (
        <section>

            <ul className={s["friend-list"]}>
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