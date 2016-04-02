$( "form" ).submit(function( event ) {
    
  event.preventDefault();

  var firstString = $( "#first_string" ).val();
  var secondString = $( "#second_string" ).val();
  
  //firstString = firstString.split("").sort().join("");
  secondString = secondString.split("").sort().join("");      
    
  alert("a "+ firstString.split(""));
    alert("b "+ firstString.split("").sort());
    alert("c "+ firstString.split("").sort().join(""));
  alert(secondString);    
    
  if ( firstString === secondString) {
    $( "span" ).text( "Valid Anagrams" ).show().fadeOut( 3000 );
    return;
  }
  $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );
    
});