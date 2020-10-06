import React, {Component} from 'react';
import './App.scss';
import SideNavBar from "./side-nav/SideNav"
import SpellListContainer from "./spell-list/SpellListContainer"
import SpellBookContainer from "./spell-book/SpellBookContainer"
import FooterComponent from "./FooterComponent"

class App extends Component {

  constructor() {
    super()
    this.state = {
      class: "All Classes",
      showNav: "",
      knownIDArray: [],
      spellBookArray: []
    }
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleLearnSpell = this.handleLearnSpell.bind(this)
    this.handleUnlearnSpell = this.handleUnlearnSpell.bind(this)
    this.handleSpellBook = this.handleSpellBook.bind(this)
    this.unprepareSpells = this.unprepareSpells.bind(this)
  }

  handleNavClick(event) {
    const currClass = event.target.id
    if (currClass !== "Ribbon") {
      if (currClass !== "") {
        this.setState({class: currClass})
        this.setState({showNav: ""})
      }
    }
    else {
      this.setState({showNav: "showNav"})
    }
    event.stopPropagation();
  }

  handleLearnSpell(event) {
    let addSpellID = this.state.knownIDArray.concat(event.target.id);
    this.setState({ knownIDArray: addSpellID })
  }

  handleUnlearnSpell(event) {
    let SpellIDindex = this.state.knownIDArray.indexOf(event.target.id)
    if (SpellIDindex > -1) {
      let removeSpellID = this.state.knownIDArray
      removeSpellID.splice(SpellIDindex, 1)
      this.setState({ knownIDArray: removeSpellID })
    }
  }

  handleSpellBook(spellArray) {
    if (spellArray.length !== this.state.spellBookArray.length) {
      this.setState({ spellBookArray: spellArray})
    }
  }

  unprepareSpells() {
    let cantrips;
    let cantripID;
    cantrips = this.state.spellBookArray.filter(spell =>
      spell.level == 0
    )
    cantripID = cantrips.map(spell => spell.index);
    this.setState({ knownIDArray: cantripID })
  }

  render() {
    return (
      <div>
        <div className="content">
          <SideNavBar selectedClass={this.state.class} showNav={this.state.showNav} handleNavClick={this.handleNavClick}/>
          <SpellListContainer selectedClass={this.state.class} handleLearnSpell={this.handleLearnSpell} knownIDArray={this.state.knownIDArray} handleSpellBook={this.handleSpellBook}/>
          <SpellBookContainer selectedClass={this.state.class} handleUnlearnSpell={this.handleUnlearnSpell} unprepareSpells={this.unprepareSpells} knownSpells={this.state.spellBookArray} />
          <FooterComponent />
        </div>
        <div className="mobile-placeholder">
          <h1> Smaller Resolutions Still Under Development </h1>
        </div>
      </div>
    )
  }
}

export default App;
