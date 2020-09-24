import React, {Component} from "react";
import BookForm from "./BookForm"
import SpellBookList from "./SpellBookList"
import "./SpellBook.scss";

class SpellBookContainer extends Component {

  constructor() {
    super()
    this.state = {
      castSpellLevel: 0,
      isCasting: false,
      isResting: false,
      charLevel: 1

    }
    this.handleCast = this.handleCast.bind(this)
    this.handleCastFlag = this.handleCastFlag.bind(this)
    this.handleRest = this.handleRest.bind(this)
    this.handleCharLevel = this.handleCharLevel.bind(this)
  }

  handleCast(event) {
    const spellLevel = event.target.spellSlotNum.value
    this.setState({castSpellLevel: spellLevel})
    this.setState({isCasting: true})
    event.preventDefault()
  }

  handleCastFlag() {
    this.setState({isCasting: false})
  }

  handleRest(restFlag) {
    if (this.state.isResting !== restFlag) {
      this.setState({isResting: restFlag})
    }
  }

  handleCharLevel(event) {
    const {name, value} = event.target;
    console.log(value)
    if (value == "") {
      this.setState({[name]: 1})
    }
    else {
      this.setState({[name]: value})
    }
  }


  render() {
    return (
      <div className="spell-book-container">
        <BookForm
          handleRest={this.handleRest}
          restFlag = {this.state.isResting}
          handleCastFlag={this.handleCastFlag}
          castedSpellLevel={this.state.castSpellLevel}
          castingFlag={this.state.isCasting}
          selectedClass={this.props.selectedClass}
          unprepareSpells={this.props.unprepareSpells}
          charLevel={this.state.charLevel}
          handleCharLevel={this.handleCharLevel}
        />
        <SpellBookList
          handleCast={this.handleCast}
          handleUnlearnSpell={this.props.handleUnlearnSpell}
          knownSpells={this.props.knownSpells}
          charLevel={this.state.charLevel}
        />
      </div>
    )
  }
}

export default SpellBookContainer
