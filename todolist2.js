
// todolist is text that you sumbmit, new item is were you type, and form is the overral to do list
  var todo = document.querySelector( '#todolist' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#newitem' );
    // retrieves data
  form.addEventListener( 'submit', function( ev ) {
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    field.focus();
    ev.preventDefault();
  }, false);
// When click eaither add, or delete, delete would look for child and remove
// and add would add a child to the list
  todo.addEventListener( 'click', function( ev ) {
    var t = ev.target;
    if ( t.tagName === 'LI' ) {
      if ( t.classList.contains( 'done' ) ) {
        t.parentNode.removeChild( t );
      } else {  
        t.classList.add( 'done' );
      }
    };
    ev.preventDefault();
  }, false);

// clear all, would delete the todolist, but if i were to leave it as 
// #todolist it would earase the whole thing, instead its #todolist
// if i were to removeChild not much would happen therefore i have to earase most of it
$(document).ready(function(){
    $("#clear").click(function(){
        $(" #todolist li").remove("");
    });
});


