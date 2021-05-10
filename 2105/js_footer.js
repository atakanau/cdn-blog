( function( $ ) {

	var debounce = function( func, wait ) {
		var timeout, args, context, timestamp;
		return function() {
			context = this;
			args = [].slice.call( arguments, 0 );
			timestamp = new Date();
			var later = function() {
				var last = ( new Date() ) - timestamp;
				if ( last < wait ) {
					timeout = setTimeout( later, wait - last );
				} else {
					timeout = null;
					func.apply( context, args );
				}
			};
			if ( ! timeout ) {
				timeout = setTimeout( later, wait );
			}
		};
	};

	function menuDropdownToggle() {
		$( '.main-navigationnbt .page_item_has_children > a, .main-navigationnbt .menu-item-has-children > a' ).each( function() {
			if ( ! $( this ).find( '.dropdown-togglenbt' ).length ) {
				$( this ).append( '<button class="dropdown-togglenbt" aria-expanded="false"/>' );
			}
		} );

		if ( $( window ).width() > 959 ) {
			$( '.main-navigationnbt .dropdown-togglenbt' ).remove();
		}
	}

	$( window ).load( menuDropdownToggle ).resize( debounce( menuDropdownToggle, 500 ) );

	$( window ).load( function() {
		var menu = $( '#mastheadnbt' ).find( 'div' );
		if ( ! menu || ! menu.children().length ) {
			return;
		}

		$( '.dropdown-togglenbt' ).click( function( event ) {
			event.preventDefault();
			$( this ).toggleClass( 'togglednbt' );
			$( this ).parent().next( '.children, .sub-menu' ).toggleClass( 'togglednbt' );
			$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		} );

		if ( 'ontouchstart' in window ) {
			menu.find( '.menu-item-has-children > a' ).on( 'touchstart', function( e ) {
				var el = $( this ).parent( 'li' );

				if ( ! el.hasClass( 'focus' ) ) {
					e.preventDefault();
					el.toggleClass( 'focus' );
					el.siblings( '.focus' ).removeClass( 'focus' );
				}
			} );
		}

		menu.find( 'a' ).on( 'focus blur', function() {
			$( this ).parents( '.menu-item' ).toggleClass( 'focus' );
		} );
	} );

} )( jQuery );
( function() {

	var container, button, menu;

	container = document.getElementById( 'site-navigationnbt' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}
	menu.setAttribute( 'aria-expanded', 'false' );

	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'togglednbt' ) ) {
			container.className = container.className.replace( ' togglednbt', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' togglednbt';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

} )();

( function( $ ) {

	$( window ).load( function() {

		function searchAddClass() {
			$( this ).closest( '.search-formnbt' ).addClass( 'hover' );
		}
		function searchRemoveClass() {
			$( this ).closest( '.search-formnbt' ).removeClass( 'hover' );
		}
		var searchSubmit = $( '.search-submitnbt' );
		searchSubmit.hover( searchAddClass, searchRemoveClass );
		searchSubmit.focusin( searchAddClass );
		searchSubmit.focusout( searchRemoveClass );

	} );

} )( jQuery );
( function() {

	var container, button, form, siteHeaderInner, siteNavigation, div;

	container = document.getElementById( 'search-headernbt' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	form = container.getElementsByTagName( 'form' )[0];
	if ( 'undefined' === typeof form ) {
		button.style.display = 'none';
		return;
	}
	form.setAttribute( 'aria-expanded', 'false' );

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'togglednbt' ) ) {
			document.body.className = document.body.className.replace( ' search-togglednbt', '' );
			container.className = container.className.replace( ' togglednbt', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			form.setAttribute( 'aria-expanded', 'false' );
		} else {
			document.body.className += ' search-togglednbt';
			container.className += ' togglednbt';
			button.setAttribute( 'aria-expanded', 'true' );
			form.setAttribute( 'aria-expanded', 'true' );
		}
	};

} )();

( function() {

	var sidebar, button, footer;

	sidebar = document.getElementById( 'secondarynbt' );
	if ( ! sidebar ) {
		return;
	}

	button = document.getElementsByClassName( 'sidebar-togglenbt' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	sidebar.setAttribute( 'aria-expanded', 'false' );

	button.onclick = function() {
		if ( -1 !== sidebar.className.indexOf( 'togglednbt' ) ) {
			sidebar.className = sidebar.className.replace( ' togglednbt', '' );
			button.className = button.className.replace( ' togglednbt', '' );
			sidebar.setAttribute( 'aria-expanded', 'false' );
			button.setAttribute( 'aria-expanded', 'false' );
		} else {
			sidebar.className += ' togglednbt';
			button.className += ' togglednbt';
			sidebar.setAttribute( 'aria-expanded', 'true' );
			button.setAttribute( 'aria-expanded', 'true' );
		}
	};

} )();

( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();
