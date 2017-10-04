$(document).ready(function () {
    $.getJSON('assets/populator/population.json', function (population) {
      // LINE 1: Variable  Name & JSON Object Pairing
      // LINE 2: HTML Pairing & Variable Pairing
      var h1title = population.h1title;
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
      $( "footertxt" ).append(footertxt);

       // LINE 1: Family Name (doc.category)
       // LINE 2: HTML Pairing & Variable Pairing (Use 'this.object' where object is the section title within the Category)
       $.each(population.works, function (works) {
        $( "wkcard" ).append(
          "<a data-remodal-target=" + this.id +"><div class=wk-card><div class=wk-img  style=background-image:url(" + this.img + ")></div><div class=wk-title>" + this.title + "</div><div class=wk-tag>" + this.tag + "</div></div></a><div class=remodal data-remodal-id=" + this.id + "><div class=wk-content>" + this.content + "</div><br><a class=btn href=" + this.link + ">VIEW PROJECT</a></div>"
        );

    });
});
});
