import React, {Component} from "react";
import BookFormComponent from "./BookFormComponent"
import "./SpellBook.scss";

class SpellSlotComponent extends Component {

  constructor() {
    super()
    this.state = {
      keepSpells: false,
      prepareShown: "",
      charLevel: 1,
      classSelected: "All Classes",
      firstSlots: 0,
      secondSlots: 0,
      thirdSlots: 0,
      fourthSlots: 0,
      fifthSlots: 0,
      sixthSlots: 0,
      seventhSlots: 0,
      eigthSlots: 0,
      ninthSlots: 0,
      slotFlash1: "",
      slotFlash2: "",
      slotFlash3: "",
      slotFlash4: "",
      slotFlash5: "",
      slotFlash6: "",
      slotFlash7: "",
      slotFlash8: "",
      slotFlash9: "",
    }
    this.handleKeepSpells = this.handleKeepSpells.bind(this)
  }


  componentDidUpdate() {
    if (this.props.castingFlag == true) {
      if (this.props.castedSpellLevel == 1) {
        if (this.state.firstSlots > 0) {
          this.setState({ firstSlots: this.state.firstSlots - 1 })
        }
        else {
          this.setState({ slotFlash1: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash1: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 2) {
        if (this.state.secondSlots > 0) {
          this.setState({ secondSlots: this.state.secondSlots - 1 })
        }
        else {
          this.setState({ slotFlash2: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash2: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 3) {
        if (this.state.thirdSlots > 0) {
          this.setState({ thirdSlots: this.state.thirdSlots - 1 })
        }
        else {
          this.setState({ slotFlash3: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash3: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 4) {
        if (this.state.fourthSlots > 0) {
          this.setState({ fourthSlots: this.state.fourthSlots - 1 })
        }
        else {
          this.setState({ slotFlash4: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash4: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 5) {
        if (this.state.fifthSlots > 0) {
          this.setState({ fifthSlots: this.state.fifthSlots - 1 })
        }
        else {
          this.setState({ slotFlash5: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash5: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 6) {
        if (this.state.sixthSlots > 0) {
          this.setState({ sixthSlots: this.state.sixthSlots - 1 })
        }
        else {
          this.setState({ slotFlash6: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash6: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 7) {
        if (this.state.seventhSlots > 0) {
          this.setState({ seventhSlots: this.state.seventhSlots - 1 })
        }
        else {
          this.setState({ slotFlash7: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash7: "" })}, 500)
        }
      }
      else if (this.props.castedSpellLevel == 8) {
        if (this.state.eigthSlots > 0) {
          this.setState({ eigthSlots: this.state.eigthSlots - 1 })
        }
        else {
          this.setState({ slotFlash8: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash8: "" })}, 500)

        }
      }
      else if (this.props.castedSpellLevel == 9) {
        if (this.state.ninthSlots > 0) {
          this.setState({ ninthSlots: this.state.ninthSlots - 1 })
        }
        else {
          this.setState({ slotFlash9: "red-flash" })
          setTimeout(() => {this.setState({ slotFlash9: "" })}, 500)
        }
      }
      this.props.handleCastFlag()
    }

    if (this.props.charLevel !== this.state.charLevel || this.props.selectedClass !== this.state.selectedClass || this.props.restFlag == true){
      if (this.props.selectedClass !== "Paladin" && this.props.selectedClass !== "Warlock" &&
          this.props.selectedClass !== "Barbarian" && this.props.selectedClass !== "Fighter" &&
          this.props.selectedClass !== "Monk" && this.props.selectedClass !== "Rogue" && this.props.selectedClass !== "All Classes"){
        if (this.props.charLevel == 1) {
          this.setState({
            firstSlots: 2,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 2) {
          this.setState({
            firstSlots: 3,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 3) {
          this.setState({
            firstSlots: 4,
            secondSlots: 2,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 4) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 5) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 2,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 6) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 7) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 1,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 8) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 2,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 9) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 1,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 10) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 11) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 12) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 13) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 14) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 15) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 1,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 16) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 1,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 17) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 1,
            ninthSlots: 1,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 18) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 1,
            seventhSlots: 1,
            eigthSlots: 1,
            ninthSlots: 1,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 19) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 2,
            seventhSlots: 1,
            eigthSlots: 1,
            ninthSlots: 1,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 20) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 2,
            seventhSlots: 2,
            eigthSlots: 1,
            ninthSlots: 1,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
      }
      else if (this.props.selectedClass == "Warlock") {
        if (this.props.charLevel == 1) {
          this.setState({
            firstSlots: 1,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 2) {
          this.setState({
            firstSlots: 2,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 3) {
          this.setState({
            firstSlots: 0,
            secondSlots: 2,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 4) {
          this.setState({
            firstSlots: 0,
            secondSlots: 2,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 5) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 2,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 6) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 2,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 7) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 2,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 8) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 2,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 9) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 2,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 10) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 2,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 11) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 12) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 13) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 14) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 15) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 16) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 3,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 17) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 4,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 18) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 4,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 19) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 4,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 20) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 4,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
      }
      else if (this.props.selectedClass == "Paladin") {
        if (this.props.charLevel == 1) {
          this.setState({
            firstSlots: 0,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 2) {
          this.setState({
            firstSlots: 2,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 3) {
          this.setState({
            firstSlots: 3,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 4) {
          this.setState({
            firstSlots: 3,
            secondSlots: 0,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 5) {
          this.setState({
            firstSlots: 4,
            secondSlots: 2,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 6) {
          this.setState({
            firstSlots: 4,
            secondSlots: 2,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 7) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 8) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 0,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 9) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 2,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 10) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 2,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 11) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 12) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 0,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 13) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 1,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 14) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 1,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 15) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 2,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 16) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 2,
            fifthSlots: 0,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 17) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 1,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 18) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 1,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 19) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
        else if (this.props.charLevel == 20) {
          this.setState({
            firstSlots: 4,
            secondSlots: 3,
            thirdSlots: 3,
            fourthSlots: 3,
            fifthSlots: 2,
            sixthSlots: 0,
            seventhSlots: 0,
            eigthSlots: 0,
            ninthSlots: 0,
            charLevel: this.props.charLevel,
            selectedClass: this.props.selectedClass
          })
        }
      }
      else if (this.props.selectedClass == "Barbarian" || this.props.selectedClass == "Fighter" ||
                this.props.selectedClass == "Monk" || this.props.selectedClass == "Rogue" || this.props.selectedClass == "All Classes") {
        this.setState({
          firstSlots: 0,
          secondSlots: 0,
          thirdSlots: 0,
          fourthSlots: 0,
          fifthSlots: 0,
          sixthSlots: 0,
          seventhSlots: 0,
          eigthSlots: 0,
          ninthSlots: 0,
          charLevel: this.props.charLevel,
          selectedClass: this.props.selectedClass
        })
      }
      if (this.props.selectedClass == "Cleric" || this.props.selectedClass == "Druid" ||
      this.props.selectedClass == "Paladin" || this.props.selectedClass == "Wizard") {
        this.setState({prepareShown: "show-prepare"})
      }
      else {
        this.setState({prepareShown: ""})
      }
      if (this.props.restFlag == true && this.state.keepSpells == false && (this.props.selectedClass == "Cleric" || this.props.selectedClass == "Druid" ||
      this.props.selectedClass == "Paladin" || this.props.selectedClass == "Wizard")) {
        this.props.unprepareSpells()
      }
      this.props.handleRest(false)
    }
  }

  handleKeepSpells(event){
    this.setState({keepSpells: event.target.checked})
  }

  render() {
    return (
      <div className="book-form-container">
        <div className="class-book">
          <h1> {this.props.selectedClass == "All Classes" ? "" : this.props.selectedClass} Spellbook </h1>
        </div>
        <div className="slot-container">
          <p className="spell-slots"> 1st slots: <span className={"slot-num " + (this.state.firstSlots == 0 ? "empty-slot " : "") + this.state.slotFlash1}> {this.state.firstSlots} </span> </p>
          <p className="spell-slots"> 2nd slots: <span className={"slot-num " + (this.state.secondSlots == 0 ? "empty-slot " : "") + this.state.slotFlash2}> {this.state.secondSlots} </span> </p>
          <p className="spell-slots"> 3rd slots: <span className={"slot-num " + (this.state.thirdSlots == 0 ? "empty-slot " : "") + this.state.slotFlash3}> {this.state.thirdSlots} </span> </p>
          <p className="spell-slots"> 4th slots: <span className={"slot-num " + (this.state.fourthSlots == 0 ? "empty-slot " : "") + this.state.slotFlash4}> {this.state.fourthSlots} </span> </p>
          <p className="spell-slots"> 5th slots: <span className={"slot-num " + (this.state.fifthSlots == 0 ? "empty-slot " : "") + this.state.slotFlash5}> {this.state.fifthSlots} </span> </p>
          <p className="spell-slots"> 6th slots: <span className={"slot-num " + (this.state.sixthSlots == 0 ? "empty-slot " : "") + this.state.slotFlash6}> {this.state.sixthSlots} </span> </p>
          <p className="spell-slots"> 7th slots: <span className={"slot-num " + (this.state.seventhSlots == 0 ? "empty-slot " : "") + this.state.slotFlash7}> {this.state.seventhSlots} </span> </p>
          <p className="spell-slots"> 8th slots: <span className={"slot-num " + (this.state.eigthSlots == 0 ? "empty-slot " : "") + this.state.slotFlash8}> {this.state.eigthSlots} </span> </p>
          <p className="spell-slots"> 9th slots: <span className={"slot-num " + (this.state.ninthSlots == 0 ? "empty-slot " : "") + this.state.slotFlash9}> {this.state.ninthSlots} </span> </p>
        </div>
        <div className="form-buttons">
          <div className="char-level-container">
            <BookFormComponent handleCharLevel={this.props.handleCharLevel} charLevel={this.props.charLevel} />
          </div>
          <div className="rest-btn-container">
            <button className="rest-btn" onClick={() => this.props.handleRest(true)}> {this.props.selectedClass == "Warlock" ? "Long/Short Rest" : "Long Rest"} </button>
            <div className={"keep-spells " + this.state.prepareShown}>
              <input type="checkbox" id="keepSpells" onChange={this.handleKeepSpells} checked={this.state.keepSpells}/>
              <label htmlFor="keepSpells">Keep Prepared Spells?</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpellSlotComponent
