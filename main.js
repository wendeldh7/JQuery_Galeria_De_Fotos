$(document).ready(function() {
    console.log(document.querySelector('header button'));
    console.log($('header button'));
    Document.querySelector('header button').addEventListener('click', function() {

    })

    $('header button').click(function() {
        alert("Expandir formulário")
    })
})