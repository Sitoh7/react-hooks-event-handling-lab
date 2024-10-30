// Code Keypad Component Here

function Keypad (){
  function changeEvent(){
    console.log("Entering password...")
  }
    return (
        <div>
          <input type="password"  onChange={()=>changeEvent()}/>
        </div>
    )
}

export default Keypad;
