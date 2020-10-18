import React, {Component} from "react";
import Spell from "./Spell"
import  LoadingIcon from "../side-nav/icons/D20Icon.svg"
import "./SpellList.scss"

class SpellList extends Component {

  constructor() {
    super()
    this.state = {
      spells: [],
      spellHolder: [],
      index: 0,
      idArray: [],
      nameSortFlag: 0,
      levelSortFlag: 0,
      schoolSortFlag: 0,
      isLoading: true,
    }
  }

  async componentDidMount() {
    let spellURLArray = []
    const urlData = await fetch("https://www.dnd5eapi.co/api/spells");
    const metaData = await urlData.json();
    await Object.values(metaData.results).forEach(spell =>
      spellURLArray.push(spell.url)
    )
    await spellURLArray.forEach(spellURL =>
      this.FetchSpellData(spellURL, spellURLArray.length))
  }

  async FetchSpellData(URL, arrayLength) {
    const spellData = await fetch(`https://www.dnd5eapi.co${URL}`);
    const spellAttr = await spellData.json();
    await this.setState({index: this.state.index + 1});
    this.setState({spellHolder: [...this.state.spellHolder, spellAttr]})
    if (this.state.index === arrayLength) {
      this.setState({spells: this.state.spellHolder})
      this.setState({isLoading: false})
    }
  }

  checkFilters(spellArray) {
    let filteredSpells = spellArray;
    let knownSpells = [];

    if (this.props.knownIDArray.length !== 0) {
      knownSpells = spellArray.filter(spell =>
        this.props.knownIDArray.includes(spell.index)
      )

      filteredSpells = filteredSpells.filter(spell =>
        !this.props.knownIDArray.includes(spell.index)
      )
    }

    if (this.props.selectedClass !== "All Classes") {
      filteredSpells = filteredSpells.filter(spellClasses =>
          spellClasses.classes.some(spellName =>
            spellName.name.includes(this.props.selectedClass)
        )
      )
    }

    if (this.props.spellLevel !== "Any Level") {
      filteredSpells = filteredSpells.filter(spell =>
        spell.level <= this.props.spellLevel
      )
    }

    if (this.props.spellSchool !== "Any School") {
      filteredSpells = filteredSpells.filter(spell =>
        spell.school.name.includes(this.props.spellSchool)
      )
    }

    if (this.props.ritual !== "Both") {
      let ritualBool = (this.props.ritual == "true")
      filteredSpells = filteredSpells.filter(spell =>
        spell.ritual === ritualBool
      )
    }

    if (this.props.concentration !== "Both") {
      let concBool = (this.props.concentration == "true")
      filteredSpells = filteredSpells.filter(spell =>
        spell.concentration === concBool
      )
    }

    if (this.props.search !== "") {
      filteredSpells = filteredSpells.filter(spell =>
        spell.name.toLowerCase().includes(this.props.search.toLowerCase())
      )
    }

    return [filteredSpells, knownSpells]
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
    let filteredSpellComponent;
    let finalSpellComponent;
    let sortedFinalSpellComponent;
    let knownSpellComponent;

    if (Object.keys(this.state.spells).length !== 0) {
      filteredSpellComponent = this.checkFilters(this.state.spells)
      finalSpellComponent = filteredSpellComponent[0]
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

        handleSpell={this.props.handleLearnSpell}
        known={false}
      />)

      sortedFinalSpellComponent = this.sortComponents(finalSpellComponent)

      knownSpellComponent = filteredSpellComponent[1]

      this.props.handleSpellBook(knownSpellComponent)

    }
    //<div className={"spell-list " + (this.state.isLoading == true ? "" : "final-height")}>

    return (
      <div className="list-container">
        <div className="sort-bar noselect">
          <h1 className="sort-text sort-name" onClick={() => this.nameSortFlag()}> Name {(this.state.nameSortFlag == 1 ? "\uD83E\uDC53" : (this.state.nameSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
          <h1 className="sort-text sort-level" onClick={() => this.levelSortFlag()}> Level {(this.state.levelSortFlag == 1 ? "\uD83E\uDC53" : (this.state.levelSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
          <h1 className="sort-text sort-school" onClick={() => this.schoolSortFlag()}> School {(this.state.schoolSortFlag == 1 ? "\uD83E\uDC53" : (this.state.schoolSortFlag == 2 ? "\uD83E\uDC51" : "-"))}</h1>
        </div>
        <div className="spell-list">
          {this.state.isLoading == true ? <img src={LoadingIcon} className="loading-icon"/> : finalSpellComponent}
        </div>
      </div>
    )
  }

}

export default SpellList
