//FOR JAVASCRIPT DEMONSTRATION PURPUSES ONLY, NEVER DISCLOSE YOUR KEYS TO THIRD PARTIES!
      
var client_id = 'b8117ce78fac41789788f6187b01e9b3';
      
var app_key   = 'd0be41358ae54a11b1e3e56fb00f2988';

var ajaxRequest = new XMLHttpRequest();

var bottles = ['#male_millenial', '#female_millenial', '#male_traditional', '#female_traditional'];
var comments = ['#comment-male-millenial', '#comment-female-millenial', '#comment-male-traditional', '#comment-female-traditional'];
var shouldSendRequest = true;

var requestInterval;

function success( result ) {

  if (!shouldSendRequest)
    return;

  if( result.persons.length > 0 ) {
    age        = result.persons[0].age.value;
    gender     = result.persons[0].gender.value;
    happy      = result.persons[0].expressions.happiness.value;
    sad	       = result.persons[0].expressions.sadness.value;
    neutral    = result.persons[0].expressions.neutral.value;
    surprise   = result.persons[0].expressions.surprise.value;
//    mood       = result.persons[0].mood.value;    

    confidence = result.persons[0].mood.confidence;

    if (confidence < 1) 
      return

      // return $('#advertisement').attr( 'src', 'generic.jpeg' )

    // ajaxRequest.open("GET", "http://172.20.10.4:3000/open", true);
    // ajaxRequest.send();
    if ( happy > 30) {
	animateBottle(1);
    }
    else if ( surprise > 30) {
	animateBottle(2);
    }
    else if ( sad > 30) {
	animateBottle(3);
    }
    else {
	animateBottle(0);
    }
	}
}
  
function animateBottle (index) {
  $('#status').html('Picking out in-flight entertainment');
  setTimeout(function () {
    $('#status').addClass('transparent');
    // $('audio')[index].play();
  }, 5000);
  shouldSendRequest = false;
  clearInterval(requestInterval);
  $(comments[index]).css('display', 'flex').addClass('animated fadeIn');
  for (var i = 0, l = bottles.length; i < l; i++) {
    if (i == index) {
      $(bottles[i]).css('animation-iteration-count', '3').addClass('animated bounce');

    } else {
      $(bottles[i]).addClass('animated fadeOut');

    }
  }
}     

function failure( error ) {
  // alert( error );
}
  
      
function sendDetectRequest() {
  var img = document.querySelector( "#img_snapshot" );
	if( img.naturalWidth == 0 ||  img.naturalHeight == 0 ) // Check if a snapshot has been taken
    return;
	var imgBlob = FACE.util.dataURItoBlob( img.src );
	FACE.sendImage( imgBlob, success, failure, app_key, client_id, 'age,gender,mood,expressions' );
}
  

function startCapture() {
  FACE.webcam.startPlaying( "webcam_preview" );
  requestInterval = setInterval( function () {
    FACE.webcam.takePicture( "webcam_preview", "img_snapshot" );
    sendDetectRequest();
  }, 5000);
}

      
// Trigger the start
$( document ).ready( function() {
  if( client_id =='' ) {
    alert( 'Please specify your keys in the source' );
  } else {
    startCapture();
  }
  $(document).keypress(function (event) {
    if (event.which > 48 && event.which < 53) {
      animateBottle(event.which - 49);
    }
  })
  $('audio').on('pause', function (target) {
    // alert('playback ended')
    $('#status').removeClass('transparent').html('Detecting ...');
    $('.beer-comment').css('display', 'none').removeClass('animated fadeIn');
    shouldSendRequest = true;
    $('.beer_container').children().css('animation-iteration-count', '1').removeClass('animated fadeOut bounce');
    $('.ico_container').css('display', 'none').removeClass('animated fadeIn');
    requestInterval = setInterval( function () {
      FACE.webcam.takePicture( "webcam_preview", "img_snapshot" );
      sendDetectRequest();
    }, 5000);
  });
});
