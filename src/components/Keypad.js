// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <main>
      <input type="password" onChange={handleChange} />
    </main>
  );
}

export default Keypad;
