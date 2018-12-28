import React, { Component } from "react";

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handlePrevClick}>
            <ion-icon name="skip-backward"></ion-icon>
          </button>
          <button id="play-pause" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handleSongClick} >
          {this.props.isPlaying ? <ion-icon name="pause"></ion-icon> : <ion-icon name="play"></ion-icon>}
          </button>
          <button id="next" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handleNextClick}>
          <ion-icon name="skip-forward"></ion-icon>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.currentTime}</div>
          <input 
          type="range" 
          className="seek-bar mdl-slider mdl-js-slider" 
          value={(this.props.currentTime / this.props.duration) || 0}
          max="1"
          min="0"
          step="0.01"
          onChange={this.props.handleTimeChange}
        />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
        <ion-icon name="volume-low"></ion-icon>

          <input type="range" 
          className="seek-bar mdl-slider mdl-js-slider" 
          value={this.props.currentVolume}
          max="1"
          min="0"
          step="0.01"
          onChange={this.props.handleVolumeChange}
        />
          
          <ion-icon name="volume-high"></ion-icon>
        
        </section>
      </section>
    );
  }
}

export default PlayerBar;
