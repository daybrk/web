
list.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('chill_pleylist');

  var source = document.getElementById('chill_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

neffex.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('neffex_pleylist');

  var source = document.getElementById('neffex_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

chart.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('chart_pleylist');

  var source = document.getElementById('chart_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};


abstract.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('abstract_pleylist');

  var source = document.getElementById('abstract_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

razn.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('razn_pleylist');

  var source = document.getElementById('razn_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

dark.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('dark_pleylist');

  var source = document.getElementById('dark_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

road.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('road_pleylist');

  var source = document.getElementById('road_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};

love.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;

  var audio = document.getElementById('love_pleylist');

  var source = document.getElementById('love_source');
  source.src = elm.getAttribute('data-value');

  if (!audio.paused) {
    audio.pause();
  }else {
    audio.load();
    audio.play();
  }

};





$('#request-form').submit(function(e){

  e.preventDefault();
  $.get('https://script.google.com/macros/s/AKfycbygonnCVYm-mzoRwCb9yR6fs_Eq2yKy1K-K89sn8mBVLkC3iT-pnv23bA/exec?'+$(this).serialize());

});
