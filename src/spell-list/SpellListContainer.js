import React, {Component} from "react";
import ListFormComponent from "./ListFormComponent"
import SpellList from "./SpellList"
import "./SpellList.scss";

class SpellListContainer extends Component {

  constructor() {
    super()
    this.state = {
      spellLevel: "Any Level",
      spellSchool: "Any School",
      ritual: "Both",
      concentration: "Both",
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className={"spell-list-container " + (this.props.switchShow == "show-list" ? "show-list" : "")}>
        <div className="list-form">
          <ListFormComponent
            handleChange={this.handleChange}
            data={this.state}
          />
        </div>
        <SpellList
          selectedClass={this.props.selectedClass}
          spellLevel={this.state.spellLevel}
          spellSchool={this.state.spellSchool}
          ritual={this.state.ritual}
          concentration={this.state.concentration}
          search={this.state.search}
          handleLearnSpell={this.props.handleLearnSpell}
          knownIDArray={this.props.knownIDArray}
          handleSpellBook={this.props.handleSpellBook}
        />
      </div>
    )
  }
}

export default SpellListContainer
