$( "form" ).submit(function( event ) {
    
  event.preventDefault();

  getSortedString( $( "#first_string" ).val() );    
    
  if ( $( "#first_string" ).val() === $( "#second_string" ).val() ) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );
    
});

function getSortedString(str) {
    
    str = str.split('');

    str.sort();
    
    /**
    str = str.sort(function (a,b) {
        if (a === '0' || b === '0')
            return (b === a) ?  0 : (a < b) ? 1 : -1;
        return (a < b) ? -1 : (a === b) ? 0 : 1;
    });**/

    alert(Arrays.toString(str));
    
    return Arrays.toString(str);
}