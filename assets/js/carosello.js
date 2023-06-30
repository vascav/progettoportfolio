window.addEventListener('DOMContentLoaded', function() {
    var words = document.getElementsByClassName('word');
    var currentWordIndex = 0;
  
    setInterval(function() {
      words[currentWordIndex].classList.remove('active');
      currentWordIndex = (currentWordIndex + 1) % words.length;
      words[currentWordIndex].classList.add('active');
    }, 700);
  });
  