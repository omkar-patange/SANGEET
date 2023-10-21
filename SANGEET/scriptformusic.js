		var all_songs = document.getElementsByClassName('all_songs')[0];
		var artist_tab = document.getElementsByClassName('artist_tab')[0];
		var current_song = document.getElementsByClassName('current_song')[0];
		all_songs.style.marginLeft = '-310px';
		artist_tab.style.marginLeft = '310px';

		function showhome(){
			all_songs.style.marginLeft = '0px';
			current_song.style.marginLeft = '310px';
			artist_tab.style.marginLeft = '620px';
			$(document).on("click", ".cards .fa-play", function(){
		$('.tabs_b .fa-home').addClass('activet').siblings().removeClass('activet');
		});
		}

		function showsong(){
			all_songs.style.marginLeft = '-310px';
			current_song.style.marginLeft = '0px';
			artist_tab.style.marginLeft = '310px';
			$(document).on("click", ".cards .fa-play", function(){
		$('.tabs_b .fa-music').addClass('activet').siblings().removeClass('activet');
		});
		}

		function showartist(){
			all_songs.style.marginLeft = '-620px';
			current_song.style.marginLeft = '-360px';
			artist_tab.style.marginLeft = '0px';
			
		}

	
	$(document).ready(function(){
 	$(".center").scroll(function(){
 	if($(this).scrollTop() > 20){
 	$(".u_tabs").addClass('solid');
 	}
 	else{
 	$(".u_tabs").removeClass('solid');
 	}	
 	});	
 	});
		$(document).on("click", ".tabs_b i", function(){
		$(this).addClass('activet').siblings().removeClass('activet');
		});
		$(document).on("click", ".other_music .cards", function(){
		$(this).addClass('active').siblings().removeClass('active');
		});
		
		// first create an arry of song that you want to play...

		//  C:/Ringtones/Hold up.mp3

		var songs = ["C:/Entertainment/fav_songs/Something_Just_Like_This_-_Coldplay___Chainsmokers_-_Luciana_Zogbi_Cover.mp3","C:/Entertainment/fav_songs/ZAYN_-_Dusk_Till_Dawn_ft._Sia.m4a","C:/Entertainment/fav_songs/avicii the night.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/high on life.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/without me.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/there you are.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Perfect.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/One_Direction_-_Steal_My_Girl.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/One_Direction_-_Story_of_My_Life(1).mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Passenger___Let_Her_Go_(Official_Video).mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Rachel_Platten_-_Fight_Song_(Official_Video).mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Sasha_Sloan_-_Older_(Lyric_Video).mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Taio_Cruz_-_Break_Your_Heart_ft._Ludacris.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Taylor_Swift_-_Love_Story.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/The_Chainsmokers_-_Don_t_Let_Me_Down_ft._Daya.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Wiz_Khalifa_-_See_You_Again_ft._Charlie_Puth_[Official_Video]_Furious_7_Soundtra.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Zedd,_Grey_-_The_Middle_(Lyrics)_ft._Maren_Morris.mp3","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music/Zara Zara Behekta Hai.mp3"];

		// now create an array of poster you want to use...


		var poster = ["C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/1.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/2.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/5.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/4.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/3.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/6.jpeg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/perfect.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/One_Direction_-_Steal_My_Girl.png","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/Story_of_My_Life.png","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/let her go.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/fight song.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/older.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/break your heart.png","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/love story.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/don't let me down.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/see you again.jpg","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/the middle.png","C:/Users/Omkar Patange/Desktop/All  web pages/Playing with Css/music_photos/zara zara.jpg"];

		var songTitle = document.getElementById("songTitle");
		var singer_name = document.getElementById("singer");
		var fillBar = document.getElementById("fill");

		// now create an array of song names you want to use...

		var song_names = ["Something just like this","Dusk Till Down","The Nights","High on Life","Without Me","There you are","Perfect","Steal my girl","Story of my life","Let her go","Fight song","Older","Break your heart","Love story","Don't let me down","See you again","The middle","Zara zara behekta hai"];
		var singer_names = ["Coldplay","Zayn","Avicii","DJ Martin","Halsey","Zayn","One Direction","One Direction","One Direction","Passenger","Rachel Platten","Sasha Sloan","Taiz Cruz","Taylor Swift","The Chainsmokers","Wiz Khalifa","Zedd Grey","Omkar ft.Aditya Bharwaj"];

		// now create a object of Audio class...

		var song = new Audio();
		var currentSong = 0;	// it point to the current song

		// now i want to play the song when window or body is load....

		 window.onload = playSong();	// it will call the function playSong when window is loaded...

		function playSong(){
			song.src = songs[currentSong];	// set the source of 0th song

			songTitle.textContent = song_names[currentSong];	//set the title of song..
			singer_name.textContent = singer_names[currentSong];
					//set the singer name

			song.play();	// play the song
			$("#play").attr("class","fas fa-play");

		}

		function playOrpausesong(){
			if(song.paused){
				song.play();
				$("#play").attr("class","fa fa-pause");
			}
			else{
				song.pause();
				$("#play").attr("class","fas fa-play");
			}
		}

		// ok now call the function on button click event...

		// now access the seek bar...

		song.addEventListener('timeupdate', function(){

			var position = song.currentTime / song.duration;

			fillBar.style.width = position * 100 + '%';
			positions = position * 100;
			console.log(positions);
			if(positions == 100){
				next();
			}
		});

		// now work on next button...

		function next(){
			currentSong++;
			if(currentSong > 5){
				currentSong = 0;
			}
			playSong();
			$("#play").attr('class','fa fa-pause');
			// now set the poster..
			$(".song img").attr('src',poster[currentSong]);
		}

		// ok we need to call this function on button click...

		// now for previous button...

		function pre(){
			currentSong--;
			if(currentSong < 0){
				currentSong = 5;
			}
			playSong();
			$("#play").attr('class','fa fa-pause');
			// now set the poster..
			$(".song img").attr('src',poster[currentSong]);
		}
		function playsong(a){
			song.src = songs[a];	// set the source of 0th song

			songTitle.textContent = song_names[a];	//set the title of song..
			singer_name.textContent = singer_names[a];
					//set the singer name

			song.play();	// play the song
			$("#play").attr("class","fas fa-play");
			$("#play").attr('class','fa fa-pause');
			// now set the poster..
			$(".song img").attr('src',poster[a]);
		}

		$(document).ready(function(){
			$('.fa-bars').click(function(){
				$('.content').slideToggle();
			});
		});

		function nextsong(){
			
		var song_end = document.getElementById('fill').clientWidth;
		console.log(song_ends);
		if(song_end == 200){
			next();
		}
	}		
