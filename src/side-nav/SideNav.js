import React, {Component} from "react";
import ClassTab from "./ClassTab";
import './SideNav.scss';

class SideNavBar extends Component {

  constructor() {
      super()
      this.state = {
          mini: true,
          sideSize: ""
      }
  }

  toggleSidenav = () => {
    this.setState({ mini: !this.state.mini})
    if (this.state.mini){
      this.setState({sideSize: "side-expand"})
    }
    else {
      this.setState({sideSize: ""})
    }
  }

  render() {
    return (
      <div className={"sidenav " + this.state.sideSize} onMouseEnter={this.toggleSidenav} onMouseLeave={this.toggleSidenav} onClick={this.props.handleClass}>
          <ClassTab iconName="AllClassIcon" classLabel="All Classes" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="BarbarianIcon" classLabel="Barbarian" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="BardIcon" classLabel="Bard" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="ClericIcon" classLabel="Cleric" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="DruidIcon" classLabel="Druid" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="FighterIcon" classLabel="Fighter" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="MonkIcon" classLabel="Monk" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="PaladinIcon" classLabel="Paladin" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="RangerIcon" classLabel="Ranger" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="RogueIcon" classLabel="Rogue" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="SorcererIcon" classLabel="Sorcerer" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="WarlockIcon" classLabel="Warlock" selectedClass={this.props.selectedClass}/>
          <ClassTab iconName="WizardIcon" classLabel="Wizard" selectedClass={this.props.selectedClass}/>
      </div>
    )
  }
}

export default SideNavBar
