// how long to show the splash screen
var stage_delay = 10 * 1000;
// initial url for display
var stage_url   = "http://live.almacinnissportscentre.com/";


$(document).ready(function(){
  delayed_load_stage();
})


// delay the load
function delayed_load_stage(){
  setTimeout(function(){load_stage();},stage_delay);
}

// load the remote stage content
function load_stage(){
  $.ajax({
    url: stage_url,
    cache: false
  }).done(function( html ) {
    transition_stage(html);
  }).fail(function(){
    delayed_load_stage();
  });
}

// transition from splash screen to stage content
function transition_stage(html){
  $('#pre_stage').fadeOut('slow', function(){
    $("#stage").html(html).fadeIn();
  });
}