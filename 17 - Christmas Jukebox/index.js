const player = document.getElementById("player")
const songs = document.getElementById('songs')

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1&controls=0`
  event.target.id = id
  let children = songs.childNodes
  for(const node of children){
    node.id === id ? node.className = 'button-selected' : node.className = ''
  }
}
