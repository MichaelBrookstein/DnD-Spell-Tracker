import React, {Component} from "react";
import BookFormComponent from "./BookFormComponent"
import SpellSlotComponent from "./SpellSlotComponent"
import "./SpellBook.scss";

class BookForm extends Component {

  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="book-form">
        <SpellSlotComponent
          handleCastFlag={this.props.handleCastFlag}
          castedSpellLevel={this.props.castedSpellLevel}
          castingFlag={this.props.castingFlag}
          charLevel={this.props.charLevel}
          selectedClass={this.props.selectedClass}
          handleRest={this.props.handleRest}
          restFlag={this.props.restFlag}
          unprepareSpells={this.props.unprepareSpells}
        />
        <BookFormComponent handleCharLevel={this.props.handleCharLevel} charLevel={this.props.charLevel} />
      </div>
    )
  }
}

export default BookForm
