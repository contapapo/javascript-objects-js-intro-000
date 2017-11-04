var playlist = {
  tchan: 'no hawai',
  spc: 'barata'
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist,{
    artistName:songTitle
  }
  return playlist;
}
