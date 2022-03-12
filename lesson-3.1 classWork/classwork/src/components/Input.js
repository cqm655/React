

function Input(props){
 const num1 = props.num1;
 const num2 = props.num2;
 const total = props.total;
 const handleChange1 = props.submit1;
 const handleChange2 = props.submit2;

  function handleSubmit(e) {
    total(Number(num1) + Number(num2));
    
    e.preventDefault(); // prevent reseting to default
  }
 

    return(
<div className="Calculator">
<form onSubmit={handleSubmit}>
  <input type="number" value={num1} onChange={handleChange1} placeholder="0"/>
  <input type="number" value={num2} onChange={handleChange2} placeholder="0"/>
  <input type="submit" value="total" />
  <p> Sum is {total} </p>
  </form>
</div>
    );
}

export default Input;

