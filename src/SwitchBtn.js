import React from "react"
import "./App.scss";

function SwitchBtn(props) {
  return (
    <div className={props.switchShow == "show-list" ? "switch-btn-fwd" : "switch-btn-rev"} onClick={props.handleSwitch}>
    </div>
  )
}

export default SwitchBtn
