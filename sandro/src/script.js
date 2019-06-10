$(function() {
  
  // Fire syntax highlighter
  hljs.initHighlightingOnLoad();
  
  // Menu toggle variables
  $menuToggle = $('.menu-toggle');
  $siteMain = $('.site-main');
  var toggleMenu = function() {
    $menuToggle.toggleClass('is-toggled');
    $siteMain.toggleClass('menu-open');
  };
  
  // Menu toggle controls
  $menuToggle.click(function() {
    toggleMenu();
  });
  $('.site-content-inside').click(function() {
    if( $('.site-main').hasClass('menu-open') ) {
      event.preventDefault();
      toggleMenu();
    }
  });
  
  // Search box variables
  $searchToggle = $('.search-toggle');
  $siteSearch = $('.site-search');
  var toggleSearch = function() {
    $searchToggle.toggleClass('is-toggled');
    $siteSearch.toggleClass('is-open');
  };
  // Search box controls
  $searchToggle.click(function() {
    toggleSearch();
  })
  $('.search-close').click(function() {
    toggleSearch();
  });
  
});