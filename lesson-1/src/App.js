import Header from './Header';

function App() {
  const text = "Hello world";
  const number = 17;
  const sayGoodbye = () => {
    console.log('Goodbye');
  }
  const sayMyName = (myName) => {
    console.log(myName);
  }

  return(
    <div className="app">
      <h1>Text din App</h1>
      <Header text={text} num={number} sG={sayGoodbye} myName={sayMyName} name="Tristan" />
    </div>
  );






























  // let text = "Tristan";
  // const number = 5;
  // const arr = [1, 2, 3, 4, 5];

  // const sayHello = () => {
  //   console.log('Hello');
  // }

  // const sayMyName = (myName) => {
  //   console.log(myName);
  // }

  // const showCountries = (country1, country2, country3) => {
  //   console.log(country1, country2, country3);
  // }

  // return (
  //   <div className="app-body">
  //     <h1 style={
  //       {
  //         color: "red",
  //         backgroundColor: "blue"
  //       }
        
  //     }>Hello {text}</h1>
  //     {/* verde, brown, 5px(margin-left) */}
  //     <p style={
  //       {
  //         color: "green",
  //         backgroundColor: "brown",
  //         marginLeft: "15px"
  //       }
  //     }>It's {number} o'clock, tea time</p>
  //     <small>{arr}</small>
  //     <br />
  //     <small>{Math.round(Math.random() * 25)}</small>
  //     <button onClick={sayHello}>Say Hello</button>
  //     <button onClick={() => {sayMyName('Tristan')}}>Say my name</button>
  //     <button onClick={() => {showCountries('Moldova', 'Romania', 'Ucraina')}}>Show countries</button>
  //   </div>
  // );
}

export default App;