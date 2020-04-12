var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 14.857868,
      lng: 120.819762
    },
    zoom: 14
  });
};


AOS.init({
  offset: 400,
  duration: 1000
});


$(function () {
  $(".hovered").mouseenter(function () {
    $("i.logo").css("filter", "grayscale(0)");
  });

  $(".hovered").mouseleave(function () {
    $("i.logo").css("filter", "grayscale(100)");
  });
});


$('#send-sms').click(function () {
  alert("Sorry for the inconvenience we can't send the message right now. PHP Script is Under Development!");
});


//   
//		(function() {
//			// Add event listener
//			document.addEventListener("mousemove", parallax);
//			const elem = document.querySelector("#parallax");
//			// Magic happens here
//			function parallax(e) {
//				let _w = window.innerWidth / 2;
//				let _h = window.innerHeight / 2;
//				let _mouseX = e.clientX;
//				let _mouseY = e.clientY;
//				let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.0001}%`;
//				let _depth2 = `${175 - (_mouseX - _w) * 0.001}% ${110 - (_mouseY - _h) * 0.0001}%`;
//				let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.0001}%`;
//				let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//				console.log(x);
//				elem.style.backgroundPosition = x;
//			}
//		})();
//	