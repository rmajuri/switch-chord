import React, { Component } from "react";

class RythmMaker extends Component {
  constructor() {
    super();
    this.toggleCheckedColor = this.toggleCheckedColor.bind(this);
  }

  componentDidMount() {
    this.props.startSequencer()
  }

  componentWillUnmount() {
    this.props.stopSequencer()
  }

  toggleCheckedColor(targetedInput) {
    const clickedDrum = document.querySelector(`#${targetedInput}`);
    if (clickedDrum.className === "drum-checkbox-clicked") {
      clickedDrum.className = "drum-checkbox";
    } else {
      clickedDrum.className = "drum-checkbox-clicked";
    }
  }

  render() {
    const drumSteps = new Array(this.state.timeCount).fill("_");
    const kicks = drumSteps.map((step, i) => {
      return (
        <label key={"kick-label" + i} className="check-container">
          <span
            key={"kick-span" + i}
            className="drum-checkbox"
            id={"kick-span" + i}
          >
            <input
              type="checkbox"
              id={"kick" + i}
              onClick={() => this.toggleCheckedColor("kick-span" + i)}
            />
          </span>
        </label>
      );
    });
    const snares = drumSteps.map((step, i) => {
      return (
        <label key={"snare-label" + i} className="check-container">
          <span
            key={"snare-span" + i}
            className="drum-checkbox"
            id={"snare-span" + i}
          >
            <input
              type="checkbox"
              key={"snare" + i}
              id={"snare" + i}
              onClick={() => this.toggleCheckedColor("snare-span" + i)}
            />
          </span>
        </label>
      );
    });
    const hats = drumSteps.map((step, i) => {
      return (
        <label key={"hat-label" + i} className="check-container">
          <span
            key={"hat-span" + i}
            className="drum-checkbox"
            id={"hat-span" + i}
          >
            <input
              type="checkbox"
              key={"hat" + i}
              id={"hat" + i}
              onClick={() => this.toggleCheckedColor("hat-span" + i)}
            />
          </span>
        </label>
      );
    });

    return (
      <div className="rythm-maker">
        <h1 className="rythm-maker-header">Rythm Maker</h1>
        <div className="kick-container">
          <p className="drum-tag">Kick</p>
          {kicks}
        </div>
        <div className="snare-container">
          <p className="drum-tag">Snare</p>
          {snares}
        </div>
        <div className="hat-container">
          <p className="drum-tag">Hi-Hat</p>
          {hats}
        </div>
      </div>
    );
  }
}

export default RythmMaker;
