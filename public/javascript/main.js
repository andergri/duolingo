$( "form" ).submit(function( event ) {
    
  event.preventDefault();

  var firstString = $( "#first_string" ).val().split(",").sort().join(",");
  var secondString = $( "#second_string" ).val().split(",").sort().join(",");      
    
  alert("a"+ $( "#first_string" ).val().split(","));
    alert("b"+ $( "#first_string" ).val().split(",").sort());
    alert("c"+ $( "#first_string" ).val().split(",").sort().join(","));
  alert(secondString);    
    
  if ( firstString === secondString) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );
    
});