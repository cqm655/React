import wishList  from "./wishList";
import React, {useState} from "react";  //orice hook se scrie in acolada
import ShowWishList from "./ShowWishList";


function App() {
  // const wishes = wishList;
  const [wishes, setWishes] = useState(wishList);

  function deleteAWish(id){
    setWishes(wishes.filter((wishes) => {
       return wishes.id !== id;
     }));
     ///tabloul salvat il reapelam si incarcam din nou, ca sa avem deja noul tablou fara elementul sters
  }
  return (
    <div className="App">
       <h3>{
       
       }</h3>
           <ShowWishList wishes = {wishes} deleteAWish={deleteAWish}/>      
    </div>
  );
}

export default App;
