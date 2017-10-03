$(document).ready(function () {
    $.getJSON('assets/populator/population.json', function (data) {
      $( "#block" ).append( this.title);
    });
});
