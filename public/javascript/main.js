$( "form" ).submit(function( event ) {
    
  event.preventDefault();
    
  if ( $( "#first_string" ).val() === $( "#second_string" ).val() ) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );

    
 alert("222");
    
});