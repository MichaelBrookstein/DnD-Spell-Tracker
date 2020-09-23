import React from 'react';
import icon from "./icons/iconComponents.js"
import './SideNav.scss';

const ClassIconComponents = {
  AllClassIcon: icon.AllClassIcon,
  BarbarianIcon: icon.BarbarianIcon,
  BardIcon: icon.BardIcon,
  ClericIcon: icon.ClericIcon,
  DruidIcon: icon.DruidIcon,
  FighterIcon: icon.FighterIcon,
  MonkIcon: icon.MonkIcon,
  PaladinIcon: icon.PaladinIcon,
  RangerIcon: icon.RangerIcon,
  RogueIcon: icon.RogueIcon,
  SorcererIcon: icon.SorcererIcon,
  WarlockIcon: icon.WarlockIcon,
  WizardIcon: icon.WizardIcon,
};

function ClassTab(props) {

  let isActive = "";
  let classBG = props.classLabel.replace(/\s+/g, '-').toLowerCase();
  const ClassIcon = ClassIconComponents[props.iconName]

  if (props.classLabel == props.selectedClass) {
    isActive = "active";
  }


  return (
    <div className={isActive + " tabContainer " + classBG} id={props.classLabel}>
      <ClassIcon className="icon"/>
      <div className="classLabel noselect"> {props.classLabel} </div>
    </div>
  )
}

export default ClassTab
