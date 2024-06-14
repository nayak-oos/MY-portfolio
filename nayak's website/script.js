function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
  var data = e.parameter;
  sheet.appendRow([data.FirstName, data.LastName, data.Email, data.PhoneNumber, data.Feedback]);
  return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}


  const contactFormButton = document.querySelector('.contact-form-button');
  contactFormButton.addEventListener('click', function() {
    window.open('YOUR_GOOGLE_FORM_LINK', '_blank');
  });
