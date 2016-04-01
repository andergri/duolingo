$( "form" ).submit(function( event ) {
    
  if ( $( "input:first" ).val() === $( "input:second" ).val() ) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );
  event.preventDefault();
});