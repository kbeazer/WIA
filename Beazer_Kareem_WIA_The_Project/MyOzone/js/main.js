console.log('im working');
$(document).ready(function(){

	$('.members').hover(function(){
		$(this).css('color','#fff')
	},function(){
		$(this).css('color','#a5b1dd')
	})
	$('.signLink, .slideShow').hover(function(){
		$(this).css('color','#f49c55')
	},function(){
		$(this).css('color','#a5b1dd')
	})
	$('#logButton, #regButton').hover(function(){
		$(this).css('color','#fff');
		$(this).css('background', '#a5b1dd');
	},function(){
		$(this).css('color','#a5b1dd');
		$(this).css('background', '#2c3e83');
	})
	$('#outButton').hover(function(){
		$(this).css('color','#fff')
	},function(){
		$(this).css('color','#a5b1dd')
	})
	$('.gNav').hover(function(){
		$(this).css('color','#a5b1dd')
	},function(){
		$(this).css('color','#2c3e83')
	})
	$('.fadeOut').hover(function(){
		$(this).animate({opacity: .5})
	},function(){
		$(this).animate({opacity: 1})
	})
	$('.venueListings a').hover(function(){
		$(this).css('color','#2c3e83')
	},function(){
		$(this).css('color','#a5b1dd')
	})
	
	$('#logButton').click(function(e){
		var user = $('#user').val();
		var pass = $('#pass').val();

		if(user == '' || pass == ''){
			console.log('input field test working');	
		}else{
			window.location.assign('welcome.html');	
		}
		e.preventDefault();
	});

	$('#regButton').click(function(e){
		var firstname= $('#fName').val(),
			lastname= $('#lName').val(),
			username= $('#uName').val(),
			email= $('#email').val(),
			password = $('#password').val();

		if(firstname == '' || lastname == '' || username == '' || email == '' || password == ''){
			console.log('registration field test working');
		}else{
			window.location.assign('welcome.html');	
		}
		e.preventDefault();
	});

    $('#yesButton').click(function(){
    	window.location.assign('index.html');
    });
    $('#noButton').click(function(){
    	window.location.reload(true);
    });

    $('#links').click(function(event){
    	event = event || window.event;
    	var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    	blueimp.Gallery(links, options);
	});

	$('#videos a').click(function(e){
		e.preventDefault();
    	blueimp.Gallery([ 
     
        {
            title: 'JaWaan Larue - Change The World',
            href: 'https://www.youtube.com/player_api',
            type: 'text/html',
            youtube: 'Jhw4x-peo5M',
            poster: 'img/change.jpg'          
        },
        {
            title: 'JLit - Keep Talking',
            href: 'https://www.youtube.com/player_api',
            type: 'text/html',
            youtube: 'wKdpW5TGccE',
            poster: 'img/talking.jpg'
        },
        {
            title: 'Souljah Bless ft. Skyy High - Babylon Beware',
            href: 'https://www.youtube.com/player_api',
            type: 'text/html',
            youtube: 'x-7KLWTAh3g',
            poster: 'img/babylon.jpg'
        },
        {
            title: 'JaWaan Larue ft. Skyy High - Gone Away',
            href: 'https://www.youtube.com/player_api',
            type: 'text/html',
            youtube: 'Wyza4cF3_F4',
            poster: 'img/gone.jpg'
        },
        {
            title: "Skyy High - Everything's Alright",
            href: 'https://www.youtube.com/player_api',
            type: 'text/html',
            youtube: 'Fy07f1D4reY',
            poster: 'img/skyy.jpg'
        },
        {
            title: 'Souljah Bless - Rock My Soul',
            href: 'https://www.youtube.com/player_api"',
            type: 'text/html',
            youtube: 'dgnsIuuuJ3A',
            poster: 'img/rock.jpg'
        }
	    ], 
	    {
	        container: '#blueimp-gallery'
	        
	    });
    });

	// YouTube Player API ------start------
	// Load the IFrame Player API code asynchronously.
  	var tag = document.createElement('script');
  	tag.src = "https://www.youtube.com/player_api";
  	var firstScriptTag = document.getElementsByTagName('script')[0];
  	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  	var player;
  	function onYouTubePlayerAPIReady(){
	    player = new YT.Player('ytplayer', {
	      height: '390',
	      width: '640',
	      videoId: 'x-7KLWTAh3g'
	    });
  	}	
	var youTubeOptions = {
    // The list object property (or data attribute) with the YouTube video id:
    youTubeVideoIdProperty: 'youtube',
    // Optional object with parameters passed to the YouTube video player:
    // https://developers.google.com/youtube/player_parameters
    youTubePlayerVars: undefined,
    // Require a click on the native YouTube player for the initial playback:
    youTubeClickToPlay: true
	};
	// YouTube Player API ------end------

	$("#map3").geolocate({
		lat: "#lat3",
		lng: "#lng3",
		address: ["#address3"]
	});

	// Canvas --start--
	$('#peacock').click(function(){
		$('.venueNames2, .venueNames3, .venueNames4, .venueNames5, .venueNames6, .venueNames7').hide();
		$('.graphHide2, .graphHide3, .graphHide4, .graphHide5, .graphHide6, .graphHide7').hide();
		$('.graphHide1').css('display', 'inline-block');
		$('.graphHide1').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide1, .venueNames1').show();
		$("#map3").geolocate({
			lat: "#lat4",
			lng: "#lng4",
			address: ["1321 N Mills Ave, Orlando, FL"]
		});
	});
	$('#austins').click(function(){
		$('.venueNames1, .venueNames3, .venueNames4, .venueNames5, .venueNames6, .venueNames7').hide();
		$('.graphHide1, .graphHide3, .graphHide4, .graphHide5, .graphHide6, .graphHide7').hide();
		$('.graphHide2').css('display', 'inline-block');
		$('.graphHide2').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide2, .venueNames2').show();
		$("#map3").geolocate({
			lat: "#lat5",
			lng: "#lng5",
			address: ["929 W Fairbanks Ave, Winter Park, FL"]
		});
	});
	$('#haven').click(function(){
		$('.venueNames1, .venueNames2, .venueNames4, .venueNames5, .venueNames6, .venueNames7').hide();
		$('.graphHide1, .graphHide2, .graphHide4, .graphHide5, .graphHide6, .graphHide7').hide();
		$('.graphHide3').css('display', 'inline-block');
		$('.graphHide3').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide3, .venueNames3').show();
			$("#map3").geolocate({
			lat: "#lat6",
			lng: "#lng6",
			address: ["6700 Aloma Ave, Winter Park, FL"]
		});
	});
	$('#beacham').click(function(){
		$('.venueNames1, .venueNames2, .venueNames3, .venueNames5, .venueNames6, .venueNames7').hide();
		$('.graphHide1, .graphHide2, .graphHide3, .graphHide5, .graphHide6, .graphHide7').hide();
		$('.graphHide4').css('display', 'inline-block');
		$('.graphHide4').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide4, .venueNames4').show();
			$("#map3").geolocate({
			lat: "#lat7",
			lng: "#lng7",
			address: ["46 N Orange Ave, Orlando, FL"]
		});
	});
	$('#firestone').click(function(){
		$('.venueNames1, .venueNames2, .venueNames3, .venueNames4, .venueNames6, .venueNames7').hide();
		$('.graphHide1, .graphHide2, .graphHide3, .graphHide4, .graphHide6, .graphHide7').hide();
		$('.graphHide5').css('display', 'inline-block');
		$('.graphHide5').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide5, .venueNames5').show();
			$("#map3").geolocate({
			lat: "#lat8",
			lng: "#lng8",
			address: ["578 N Orange Ave, Orlando, FL"]
		});
	});
	$('#vain').click(function(){
		$('.venueNames1, .venueNames2, .venueNames3, .venueNames4, .venueNames5, .venueNames7').hide();
		$('.graphHide1, .graphHide2, .graphHide3, .graphHide4, .graphHide5, .graphHide7').hide();
		$('.graphHide6').css('display', 'inline-block');
		$('.graphHide6').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide6, .venueNames6').show();
		$("#map3").geolocate({
			lat: "#lat9",
			lng: "#lng9",
			address: ["22 S Magnolia Ave, Orlando, FL"]
		});
	});
	$('#bullet').click(function(){
		$('.venueNames1, .venueNames2, .venueNames3, .venueNames4, .venueNames5, .venueNames6').hide()
		$('.graphHide1, .graphHide2, .graphHide3, .graphHide4, .graphHide5, .graphHide6').hide();
		$('.graphHide7').css('display', 'inline-block');
		$('.graphHide7').css({
			paddingLeft: 10,
			margin: 0
		});
		$('.graphHide7, .venueNames7').show();
		$("#map3").geolocate({
			lat: "#lat10",
			lng: "#lng10",
			address: ["33 E Pine St, Orlando, FL"]
		});
	});
	// Canvas --end--
});