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

  // toggleSidenav = () => {
  //   this.setState({ mini: !this.state.mini})
  //   if (this.state.mini){
  //     this.setState({sideSize: ""})
  //   }
  //   else {
  //     this.setState({sideSize: "side-expand"})
  //   }
  // }

  // onMouseEnter={this.props.showNav == "showNav" ? this.toggleSidenav : () => {} } onMouseLeave={this.props.showNav == "showNav" ? this.toggleSidenav : () => {} }
  //^^^ Goes in outter Div


  render() {
    return (
      <div className={this.props.showNav + " sidenav noselect"}>
        <ClassTab iconName="AllClassesIcon" classLabel="All Classes" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="BarbarianIcon" classLabel="Barbarian" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="BardIcon" classLabel="Bard" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="ClericIcon" classLabel="Cleric" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="DruidIcon" classLabel="Druid" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="FighterIcon" classLabel="Fighter" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="MonkIcon" classLabel="Monk" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="PaladinIcon" classLabel="Paladin" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="RangerIcon" classLabel="Ranger" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="RogueIcon" classLabel="Rogue" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="SorcererIcon" classLabel="Sorcerer" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="WarlockIcon" classLabel="Warlock" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="WizardIcon" classLabel="Wizard" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
        <ClassTab iconName="RibbonIcon" classLabel="Ribbon" selectedClass={this.props.selectedClass} handleNavClick={this.props.handleNavClick}/>
      </div>
    )
  }
}

export default SideNavBar
