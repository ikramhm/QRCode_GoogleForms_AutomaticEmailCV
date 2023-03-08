#if you wish to test the function out from the app script runner, enter the following code.
#if you test the function from the app-script dashboard, it will usually return an error as the email to send to requires a form submit.
#therefore, mere clicks will return an error.

function sendEmail(e, test) {
  Logger.log('sendEmail function triggered');
  var emailAddress = (test || 'enter your CV');
  var subject = "your_subject";
  var message = "your_email";
  var file = DriveApp.getFileById("ID_number"); 
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: message,
    attachments: [file.getAs(MimeType.PDF)]
  });
}
