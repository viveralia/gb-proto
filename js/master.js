// ProgressBar
var bar = new ProgressBar.Line(goal, {
strokeWidth: 4,
easing: 'easeInOut',
duration: 1400,
color: '#FFEA82',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'},
from: {color: '#3bcc39'},
to: {color: '#3bcc39'},
step: (state, bar) => {
  bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.1213);  // Number from 0.0 to 1.0

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// Mobile CTA
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

// Stickyfill
$('.sticky').Stickyfill();
$('.mobile-sticky').Stickyfill();


// Graph JS
$(document).ready(function(){
  var datos = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          60,
          30,
          10,
        ],
        backgroundColor: [
          "#003c58",
          "#00c6d8",
          "#20f6cb",
        ],
      }],
      labels : [
        "Pago de capital e intereses",
        "Reserva y segundo pago a Citizen",
        "Gastos de operación",
      ]
    },
    options : {
      responsive : true,
    }
  };
  var canvas = document.getElementById('chart').getContext('2d');
  window.pie = new Chart(canvas, datos);

  var datos = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          50,
          10,
          5,
          35,
        ],
        backgroundColor: [
          "#00c6d8",
          "#921eff",
          "#ff9d1e",
          "#3bcc39",
        ],
      }],
      labels : [
        "Costo de producción",
        "Gastos de mercadotecnia y publicidad",
        "Gastos de generales y de operación",
        "Utilidad"
      ]
    },
    options : {
      responsive : true,
    }
  };
  var canvas = document.getElementById('chart2').getContext('2d');
  window.pie = new Chart(canvas, datos);

});
