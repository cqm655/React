import Wish from "./Wish";

const ShowWishList = (props) => {
    const   wishes = props.wishes;
    return (

        <div className="wishlist">
            {
                wishes.map((wish, idx) => (  ///paranteze rotunde pentru a a dauga cod html, idx =locatia fiecarui element
                     <Wish wish={wish} idx={idx} key={wish.id} deleteAWish={props.deleteAWish}/>
                ))
            }
        </div>
    );
}

export default ShowWishList;