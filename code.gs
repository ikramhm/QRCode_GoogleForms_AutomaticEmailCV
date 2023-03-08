function sendEmail(e) {
  var emailAddress = e.response.getItemResponses()[0].getResponse();
  var subject = "Add a non-generic Subject Line";
  var message = "Add your message here. Leverage \n\n to render a line break before starting next sentence.";
  var file = DriveApp.getFileById("add ID of your Google Drive link to your CV");
  //upload your CV to a google drive, and get the shareable link. Ensure its open to All. The Id of the CV will be the numbers, eg: in https://drive.google.com/file/d/1eEKcCm2jY7YW1IvGhdhd7ydydbGZqk_d8v1NSCEyMt/view?usp=sharing, the ID will be 1eEKcCm2jY7YW1IvGhdhd7ydydbGZqk_d8v1NSCEyMt.   
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: message,
    attachments: [file.getAs(MimeType.PDF)]
  });
}
