import React, {Component} from "react";
import Spell from "../spell-list/Spell"
import "./SpellBook.scss";

class SpellBookList extends Component {

  constructor() {
    super()
    this.state = {
      nameSortFlag: 0,
      levelSortFlag: 0,
      schoolSortFlag: 0
    }
  }

  nameSortFlag() {
    if (this.state.nameSortFlag == 0 || this.state.nameSortFlag == 2) {
      this.setState({nameSortFlag: 1})
    }
    else if (this.state.nameSortFlag == 1) {
      this.setState({nameSortFlag: 2})
    }
    this.setState({levelSortFlag: 0})
    this.setState({schoolSortFlag: 0})
  }

  levelSortFlag() {
    if (this.state.levelSortFlag == 0 || this.state.levelSortFlag == 2) {
      this.setState({levelSortFlag: 1})
    }
    else if (this.state.levelSortFlag == 1) {
      this.setState({levelSortFlag: 2})
    }
    this.setState({nameSortFlag: 0})
    this.setState({schoolSortFlag: 0})
  }

  schoolSortFlag() {
    if (this.state.schoolSortFlag == 0 || this.state.schoolSortFlag == 2) {
      this.setState({schoolSortFlag: 1})
    }
    else if (this.state.schoolSortFlag == 1) {
      this.setState({schoolSortFlag: 2})
    }
    this.setState({nameSortFlag: 0})
    this.setState({levelSortFlag: 0})
  }

  sortComponents(spellComponents) {
    if (this.state.nameSortFlag == 1) {
      spellComponents.sort((a, b) => (a.props.name > b.props.name) ? 1 : -1)
    }
    else if (this.state.nameSortFlag == 2) {
      spellComponents.sort((a, b) => (a.props.name > b.props.name) ? -1 : 1)
    }
    if (this.state.levelSortFlag == 1) {
      spellComponents.sort((a, b) => (a.props.level > b.props.level) ? 1 : -1)
    }
    else if (this.state.levelSortFlag == 2) {
      spellComponents.sort((a, b) => (a.props.level > b.props.level) ? -1 : 1)
    }
    if (this.state.schoolSortFlag == 1) {
      spellComponents.sort((a, b) => (a.props.school > b.props.school) ? 1 : -1)
    }
    else if (this.state.schoolSortFlag == 2) {
      spellComponents.sort((a, b) => (a.props.school > b.props.school) ? -1 : 1)
    }
    return spellComponents
  }

  render() {
    let learnedSpellComponent;
    let sortedLearnedSpellComponent;
    learnedSpellComponent = this.props.knownSpells
    .map(spell => <Spell
      key={spell.index}
      spell_id={spell.index}
      name={spell.name}
      level={spell.level}
      school={spell.school.name}
      desc={spell.desc}

      components={spell.components}
      material={spell.material}
      higher_level={spell.higher_level}
      range={spell.range}
      duration={spell.duration}
      casting_time={spell.casting_time}
      classes={spell.classes}
      damage={spell.damage}
      heal={spell.heal_at_slot_level}
      charLevel={this.props.charLevel}

      handleSpell={this.props.handleUnlearnSpell}
      handleCast={this.props.handleCast}
      known={true}
    />)

    sortedLearnedSpellComponent = this.sortComponents(learnedSpellComponent)

    return (
      <div className="book-list-container">
        <div className="sort-bar noselect">
          <h1 className="sort-text sort-name" onClick={() => this.nameSortFlag()}> Name {(this.state.nameSortFlag == 1 ? "\uD83E\uDC53" : (this.state.nameSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
          <h1 className="sort-text sort-level" onClick={() => this.levelSortFlag()}> Level {(this.state.levelSortFlag == 1 ? "\uD83E\uDC53" : (this.state.levelSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
          <h1 className="sort-text sort-school" onClick={() => this.schoolSortFlag()}> School {(this.state.schoolSortFlag == 1 ? "\uD83E\uDC53" : (this.state.schoolSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
        </div>
        <div className="spell-book-list">
          {sortedLearnedSpellComponent}
        </div>
      </div>
    )
  }
}

export default SpellBookList
