const Header = ({text, num, sG, myName, name}) => {
    // const a = bus.text;
    // const b = bus.num;
    // const c = bus.sG;
    // const d = bus.myName;

    return(
        <div className="header">
            <h1>{text}{num}</h1>
            <button onClick={sG}>Say Goodbye</button>
            {/* {c()} */}
            <button onClick={() => {myName(name)}}>Say My Name</button>
        </div>
    );
}

export default Header;