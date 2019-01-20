import React from "react";

const ChangeSynthTexture = props => {
  const {changeTexture} = props;
  return (
    <div className="change-synth-container">
      <h3 className="chord-text">Synth Texture</h3>
      <p className="synth-option" onClick={() => changeTexture("Synth")}>
        Synth
      </p>
      <p className="synth-option" onClick={() => changeTexture("DuoSynth")}>
        Duo Synth
      </p>
      <p className="synth-option" onClick={() => changeTexture("AMSynth")}>
        AM Synth
      </p>
      <p className="synth-option" onClick={() => changeTexture("FMSynth")}>
        FM Synth
      </p>
      <p className="synth-option" onClick={() => changeTexture("MonoSynth")}>
        Mono Synth
      </p>
    </div>
  );
};

export default ChangeSynthTexture;
