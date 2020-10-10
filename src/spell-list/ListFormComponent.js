import React from "react"

function ListFormComponent(props) {
  return (
    <main>
      <form className="list-form-flex" onSubmit={e => { e.preventDefault(); }}>
        <label className="filter-component"> Spell Level:
          <select value={props.data.spellLevel} onChange={props.handleChange} name="spellLevel">
            <option defaultValue value="Any Level">Any Level</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </label>
        <label className="filter-component"> School:
          <select value={props.data.value} onChange={props.handleChange} name="spellSchool">
            <option defaultValue value="Any School">Any School</option>
            <option value="Abjuration">Abjuration</option>
            <option value="Conjuration">Conjuration</option>
            <option value="Divination">Divination</option>
            <option value="Enchantment">Enchantment</option>
            <option value="Evocation">Evocation</option>
            <option value="Illusion">Illusion</option>
            <option value="Necromancy">Necromancy</option>
            <option value="Transmutation">Transmutation</option>
          </select>
        </label>
        <label className="filter-component"> Ritual:
          <select value={props.data.ritual} onChange={props.handleChange} name="ritual">
            <option defaultValue value="Both">Both</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label className="filter-component"> Concentration:
        <select value={props.data.concentration} onChange={props.handleChange} name="concentration">
          <option defaultValue value="Both">Both</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        </label>
        <label className="filter-component"> Search:
          <input
            name="search"
            type="text"
            value={props.data.search}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </main>
  )
}

export default ListFormComponent
