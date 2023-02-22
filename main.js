$(document).ready(function() {
    console.log(document.querySelector('header button'));
    console.log($('header button'));
    Document.querySelector('header button').addEventList('click', function() {

    })

    $('header button').click(function() {
        alert("Expandir formulário")
    })
})