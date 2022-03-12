const Wish = (props) => {
return (
<div className="wish" >
    <small>{props.idx +1 }. </small>
    <small>{props.wish.body} </small>
    <button className="del-btn" onClick={()=>{props.deleteAWish(props.wish.id)}}>&times;</button>
</div>
);
}

export default Wish;