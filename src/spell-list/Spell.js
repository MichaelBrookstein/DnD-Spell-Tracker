import React, {useState, useEffect} from "react"
import "./Spell.scss"

function Spell(props) {


  const [tabSize, setTabSize] = useState("")
  const [expandedHeader, setExpandedHeader] = useState([])
  const [slotLevel, setSlotLevel] = useState(props.level)
  const [activeSlotArray, setActiveSlotArray] = useState(["", "", "", "", "", "", "", "", "", ""])

  function handleClick() {
    if (tabSize.length === 0) {
      setTabSize("spell-open")
      setExpandedHeader("head-open")
    }
    else {
      setTabSize("")
      setExpandedHeader("")
    }
  }

  useEffect(() => {
    let newSlotArray = ["", "", "", "", "", "", "", "", "", ""]
    newSlotArray[slotLevel] = "active-slot"
    setActiveSlotArray(newSlotArray)
  }, [slotLevel]);

  const known = props.known
  let desc = props.desc.join("\n\n");
  let CastBtn = null
  let materials = "None";
  let higher_level = "";
  let classes = props.classes.map(classes => classes.name);
  let spell_head;
  let spell_val;
  let table_title = "";

  if (typeof props.material !== "undefined") {
    materials = props.material
  }

  if (typeof props.higher_level !== "undefined") {
    higher_level = props.higher_level
  }

  if (known == true) {
    if (typeof props.damage !== "undefined") {
      if (typeof props.damage.damage_at_slot_level !== "undefined") {
        spell_head = Object.keys(props.damage.damage_at_slot_level).map((key, index) =>
          <th key={key} className="val-cell"> {key} </th>
        )
        spell_val = Object.keys(props.damage.damage_at_slot_level).map((key, index) =>
          <td key={key} className={"val-cell " + activeSlotArray[key]}> {props.damage.damage_at_slot_level[key]} </td>
        )
        table_title = "Damage at Slot Level"
      }
      else if (typeof props.damage.damage_at_character_level !== "undefined") {
        let activeLevelArray = new Array(Object.keys(props.damage.damage_at_character_level).length).fill("")
        for (let i = 0; i < Object.keys(props.damage.damage_at_character_level).length; i++) {
           if ((props.charLevel >= parseInt(Object.keys(props.damage.damage_at_character_level)[i]) && props.charLevel < parseInt(Object.keys(props.damage.damage_at_character_level)[i+1])) ||
               (props.charLevel >= parseInt(Object.keys(props.damage.damage_at_character_level)[i]) && typeof Object.keys(props.damage.damage_at_character_level)[i+1] == "undefined")) {
                 activeLevelArray[i] = "active-slot"
           }
        }
        spell_head = Object.keys(props.damage.damage_at_character_level).map((key, index) =>
          <th key={key} className="val-cell"> {key} </th>
        )
        spell_val = Object.keys(props.damage.damage_at_character_level).map((key, index) =>
          <td key={index} className={"val-cell " + activeLevelArray[index]}> {props.damage.damage_at_character_level[key]} </td>
        )
        table_title = "Damage at Character Levels"
      }
    }
    else if (typeof props.heal !== "undefined") {
      spell_head = Object.keys(props.heal).map((key, index) =>
        <th key={key} className="val-cell"> {key} </th>
      )
      spell_val = Object.keys(props.heal).map((key, index) =>
        <td key={key} className={"val-cell " + activeSlotArray[key]}> {props.heal[key]} </td>
      )
      table_title = "Healing at Slot Level"
    }

    CastBtn = (
      <div className="cast-div">
          <form className="cast-btn" onChange={event => setSlotLevel(event.target.value)} onSubmit={props.handleCast}>
            <label> Slot Level:
              <input
                name="spellSlotNum"
                type="number"
                defaultValue={props.level}
                min={props.level}
                max="9"
              />
              </label>
            <input
              type="submit"
              value="CAST"
            />
          </form>
          <table className="dmg-table">
            <caption> {table_title} </caption>
            <tbody>
              <tr>
                {spell_head}
              </tr>
              <tr>
                {spell_val}
              </tr>
            </tbody>
          </table>
        </div>
      )
    }


  return (
    <div className={"spell " + tabSize}>
      <div className={"spell-header " + expandedHeader} onClick={() => handleClick()}>
        <h1 className="spell-name" > {props.name}  </h1>
        <h1 className="spell-level"> {props.level} </h1>
        <h1 className="spell-school"> {props.school} </h1>
        <h1 className="learn-spell-btn" id={props.spell_id} onClick={props.handleSpell}> {known ? "-" : "+"} </h1>
      </div>
      <div className="spell-subhead">
        <p className="spell-info"> <b>Components:</b> {props.components.toString()} </p>
        <p className="spell-info"> <b>Materials:</b> {materials} </p>
      </div>
      <div className="spell-subhead">
        <p className="spell-info"> <b>Range:</b> {props.range} </p>
        <p className="spell-info"> <b>Duration:</b> {props.duration} </p>
        <p className="spell-info"> <b>Casting Time:</b> {props.casting_time} </p>
      </div>
      <p className="spell-desc"> {desc} </p>
      <p className="spell-higher-level"> {higher_level} </p>
      <p className="spell-classes"> <b>Classes:</b> {classes.join(', ')} </p>
      {CastBtn}
    </div>
  )
}

export default Spell
