$( "form" ).submit(function( event ) {
    
  event.preventDefault();
    
  if ( $( "input:first" ).val().equals( $( "input:second" ).val() )) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );

    
 alert("222");
    
});