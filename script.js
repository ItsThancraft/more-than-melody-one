const songs = [
    "Everything At Once.mp3",
    "Uptown Funk - Bruno Mars and Mark Ronson.mp3",
    "interlude IV Showtime.mp3",
    "Moral Of The Story - Ashe.mp3",
    "Spirits -The Strumbellas.mp3",
  ];
  const player = document.getElementById("player");
  
  const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
  };
  
  const songList = document.getElementById("songList");
  songList.appendChild(createSongList());
  
  songList.onclick = function(e) {
    const source = document.getElementById('source');
    source.src = "songs/"+e.target.innerText;

    document.getElementById("currentSong" ).innerText = `Now Playing:  ${e.target.innerText}`;

player.load();
player.play();
document.querySelector('#headphones').classlist.add('pulse');

  };

  function playAudio() {
    if (player.readyState) {
      player.play();
    }
  }
  
  function pauseAudio() {
    player.pause();
  }

    const slider = document.getElementById('volumeSlider')
    slider.oninput = function(e) {
      console.log(e);
      const volume = e.target.value;
      player.volume = volume;
    }

    function updateProgress() {
    if(player.currentTime > 0) {  const progressBar = document.getElementById('progress');
    progressBar.value = (player.currentTime / player.duration) * 100;}
    }