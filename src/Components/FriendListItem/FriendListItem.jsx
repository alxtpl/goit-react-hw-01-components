import './FriendListItem.css';
import { SpanStyled } from "./FriendListItem.styled";


const FriendListItem = (props) => {
    const { id, isOnline, avatar, name } = props;
    //    model, price, currency
    return (

        <li class="item" key={id}>
            <SpanStyled class="status" isOnline={ isOnline}></SpanStyled>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
};



export default FriendListItem;