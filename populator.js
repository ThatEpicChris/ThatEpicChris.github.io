console.log('active');
$(document).ready(function () {
    $.getJSON('home.json', function (population) {
      console.log('successfully imported');
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
       $.each(population.slider, function (slider) {
        $( ".sliderControl" ).append(
          "<div id=" + this.bannerId + " style= visibility: hidden; ><div class= homeBanner  style= background-image:url(" + this.img + ")></div></div><a id=outlink href=" + this.link + "><div id= sliderElection class= election ><div id=" + this.id + " class= sliderTimer ></div><div class= sliderTitle >" + this.title + "</div><div class= sliderSubtitle >" + this.subtitle + "</div></div></a>"
        );

    });
});
});
