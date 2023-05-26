// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function handleFocus() {
    console.log("Good!");
  }
  function handleBlur() {
    console.log("Hey! Eyes on me!");
  }
  return (
    <main>
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </main>
  );
}

export default EyesOnMe;
