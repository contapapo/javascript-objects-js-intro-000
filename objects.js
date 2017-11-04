var playlist = {
  tchan: 'no hawai',
  spc: 'barata'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist = {
    [artistName]:songTitle;
  }
  return playlist;
}