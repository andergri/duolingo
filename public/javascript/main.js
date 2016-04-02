$( "form" ).submit(function( event ) {
    
    alert("111");
    
  if ( $( "input:first" ).val().equals( $( "input:second" ).val() )) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );
  event.preventDefault();
    
 alert("222");
    
});