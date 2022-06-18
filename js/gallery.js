// /*	Gallery filter */
// $(document).ready(function(){

//     $(".btn-portfolio").click(function(){
//         var value = $(this).attr('data-filter');

//         if(value == "all")
//         {
//             $('.filter').show('1000');
//         }
//         else
//         {
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
//         }

// 	    if ($(".btn-portfolio").removeClass("active")) {
// 		    $(this).removeClass("active");
// 		}
// 		$(this).addClass("active");
// 	});
// });
/*	end gallery */


// // Show more gallery
// document.querySelectorAll(".hidden").forEach(a=>a.style.display = "none");

// function show() {
//   console.log('show');
//   var text = document.getElementById('more').firstChild;

//   if(text.data == "View more") {
//     text.data = "View less";
//     //filter
//     document.querySelectorAll(".hidden").forEach(a=>a.style.display = "initial");
//   } else {
//       text.data = "View more";
//       document.querySelectorAll(".hidden").forEach(a=>a.style.display = "none");
//   }
// }


$(document).ready(function() {


var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  transitionDuration: '0.5s',
  masonry: {
    columnWidth: ".all"
  }
})

//****************************
  // Isotope Load more button
  //****************************
  var initShow = 6; //number of items loaded on click load more button
  var counter = initShow; //counter for load more button
  var iso = $grid.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");
    console.log('show');

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $grid.isotope('layout');


    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };
  }


  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  $('.btn-portfolio').click(function(){
  $('.btn-portfolio').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

  
  
});