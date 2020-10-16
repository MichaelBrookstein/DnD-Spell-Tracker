import React from 'react';
import icon from "./icons/iconComponents.js"
import './SideNav.scss';

const ClassIconComponents = {
  AllClassesIcon: icon.AllClassIcon,
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
  RibbonIcon: icon.RibbonIcon
};

function ClassTab(props) {

  let isActive = "";
  let classBG = props.classLabel.replace(/\s+/g, '-').toLowerCase();
  let ClassIcon;
  let image_map;
  let classLabel = "";
  let classRibbon = "";

  //   <!-- Image Map Generated by http://www.image-map.net/ -->
  // <img src="ribbon_bg.png" usemap="#image-map">
  //
  // <map name="ribbon-map">
  //     <area target="" alt="" title="" href="" coords="0,0,600,0,599,799,302,605,2,799" shape="poly">
  // </map>
  // Image Map of Ribbon

  if (props.iconName !== "RibbonIcon") {
    ClassIcon = ClassIconComponents[props.iconName]
    classLabel = props.classLabel
  }
  else {
    let activeIcon = props.selectedClass.split(" ").join("") + "Icon"
    classRibbon = props.selectedClass.replace(/\s+/g, '-').toLowerCase() + "-ribbon "
    ClassIcon = ClassIconComponents[activeIcon]
    image_map = (
      <img className="image-map"
            src="../img/placeholder.jpg"
            useMap="#ribbon-map"/>
    )
  }




  return (
    <div className={"tabContainer " + classRibbon + classBG} id={props.classLabel} onClick={props.iconName !== "RibbonIcon" ? props.handleNavClick : () => {}}>
      <map name="ribbon-map">
        <area target="" alt="" title="" onClick={props.handleNavClick} coords="0,0,85,0,85,115,43,85,2,115" shape="poly" id="Ribbon"/>
      </map>
      {image_map}
      <ClassIcon className={props.iconName !== "RibbonIcon" ? "icon" : "ribbon-icon"}/>
      <div className="classLabel noselect"> {classLabel} </div>
    </div>
  )
}

export default ClassTab
