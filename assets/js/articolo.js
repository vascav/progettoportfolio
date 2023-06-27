function toggleArticle(button) {
    var contentDiv = button.previousElementSibling;
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
      contentDiv.style.display = 'block';
      button.textContent = 'CHIUDI';
    } else {
      contentDiv.style.display = 'none';
      button.textContent = 'APRI';
    }
  }
  