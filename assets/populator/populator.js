$(document).ready(function () {
    $.getJSON('assets/populator/data.json', function (population) {
      // LINE 1: Variable  Name & JSON Object Pairing
      // LINE 2: HTML Pairing & Variable Pairing
      /* var h1title = population.h1title;
      $( "headertitle1" ).append(h1title);
      var h2title = population.h2title;
      $( "headertitle2" ).append(h2title);
      var h3title = population.h3title;
      $( "headertitle3" ).append(h3title);
      var abouttxt = population.abouttxt;
      $( "abouttxt" ).append(abouttxt);
      var h4title = population.h4title;
      $( "headertitle4" ).append(h4title);
      var footertxt = population.footertxt;
      $( "footertxt" ).append(footertxt); */

       // LINE 1: Family Name (doc.category)
       // LINE 2: HTML Pairing & Variable Pairing (Use 'this.object' where object is the section title within the Category)
       $.each(population.works, function (works) {
        $( "#project-list" ).append(
          "<div class= project ><img src=" + this.img + "  class= pj-graphic /><div class= pj-title >" + this.title + "</div><div class=pj-subtitle>" + this.subtitle + "</div><a href=" + this.link + "><div class= pj-expand ><i class= material-icons id= pj-icon >remove_red_eye</i> View Project</div></a></div>"
        );

    });
});
});
