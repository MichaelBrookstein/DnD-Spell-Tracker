import React from "react"
import "./SpellBook.scss";

function BookFormComponent(props) {
  return (
    <main>
      <form className="char-level" onSubmit={e => { e.preventDefault(); }}>
      <label> Character Level:
        <input
          name="charLevel"
          type="number"
          value={props.charLevel}
          onChange={props.handleCharLevel}
          min="1"
          max="20"
        />
      </label>
      </form>
    </main>
  )
}

export default BookFormComponent
