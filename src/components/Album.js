import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });
    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: false
    };
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }
  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }


     onMouseEnter(index) {
       this.setState({isHovered: index});


     }
     onMouseLeave() {
       this.setState({isHovered: false});
     }
    handleSongHover(song) {
      this.setState({ isHovered: song });
    }
  
    handleIcon(song, index) {
      let styles = {
        margin: '300px'

      }; 
      if(this.state.currentSong === song && this.state.isPlaying) {
        return <ion-icon name={"pause"} style={{styles}}></ion-icon>
      } else if (this.state.isHovered === song && !this.state.isPlaying) {
        return <ion-icon name="play"></ion-icon>
      } else {
        return index + 1 + '. ';
      }
    }



  render() {
    
    
    return (
      <section className="album">
      <section id="album-info">
      <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
      <div className ="album-details">
       <h1 id="album-title">{this.state.album.title}</h1>
       <h2 className="artist">{this.state.album.artist}</h2>
       <div id="release-info">{this.state.album.releaseInfo}</div>
       </div>
       </section>
       <table align="center" id="song-list">
            <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>

            <tbody>
           
{this.state.album.songs.map( ( song, index) =>
  <tr className="song" key = {index} title ={this.state.album.songs.title} duration={this.state.album.songs.duration} onClick= { () => this.handleSongClick(song)}>
    <td className="song-index" onMouseEnter={ () => this.handleSongHover(song)} onMouseLeave={ () => this.handleSongHover(null)}>
        {this.handleIcon(song, index)}
    </td>
    <td>
      { song.title }
    </td>
    <td>
      { song.duration }
    </td>
  </tr>
)}

</tbody>
</table>
</section>
);
}
}

export default Album;

