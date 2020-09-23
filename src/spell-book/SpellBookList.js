import React, {Component} from "react";
import Spell from "../spell-list/Spell"
import "./SpellBook.scss";

class SpellBookList extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let learnedSpellComponent;
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
    return (
      <div className="spell-book-list">
        {learnedSpellComponent}
      </div>
    )
  }
}

export default SpellBookList
