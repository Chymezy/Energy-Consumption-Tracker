/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);


// // main.js

// import { getAuthToken, refreshToken } from './tokenManager.js';

// function fetchData() {
//   const token = getAuthToken();

//   // Example API request
//   $.ajax({
//     url: 'http://localhost:4444/api/data',
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`
//     },
//     success: function(response) {
//       // Handle successful data retrieval
//       console.log('Data:', response);
//     },
//     error: function(xhr, status, error) {
//       console.error('Data request failed:', error);
//       // Handle error (e.g., check if token expired and refresh)
//       if (xhr.status === 401) {
//         refreshToken(); // Refresh token if unauthorized
//       }
//     }
//   });
// }

// // Example function using fetchData()
// $(document).ready(function() {
//   fetchData();
// });

// (function($) {

//   var $window = $(window),
//       $banner = $('#banner'),
//       $body = $('body');

//   // Breakpoints.
//   breakpoints({
//     default:   ['1681px',   null       ],
//     xlarge:    ['1281px',   '1680px'   ],
//     large:     ['981px',    '1280px'   ],
//     medium:    ['737px',    '980px'    ],
//     small:     ['481px',    '736px'    ],
//     xsmall:    ['361px',    '480px'    ],
//     xxsmall:   [null,       '360px'    ]
//   });

//   // Play initial animations on page load.
//   $window.on('load', function() {
//     window.setTimeout(function() {
//       $body.removeClass('is-preload');
//     }, 100);
//   });

//   // Menu.
//   $('#menu')
//     .append('<a href="#menu" class="close"></a>')
//     .appendTo($body)
//     .panel({
//       target: $body,
//       visibleClass: 'is-menu-visible',
//       delay: 500,
//       hideOnClick: true,
//       hideOnSwipe: true,
//       resetScroll: true,
//       resetForms: true,
//       side: 'right'
//     });

// })(jQuery);
