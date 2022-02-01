import { SpanStyled } from "./FriendListItem.styled";
import { LiStyled } from "./FriendListItem.styled";


const FriendListItem = (props) => {
    const { id, isOnline, avatar, name } = props;
    //    model, price, currency
    return (

        <LiStyled className="item" key={id}>
            <SpanStyled className="status" isOnline={ isOnline}></SpanStyled>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </LiStyled>
    );
};



export default FriendListItem;