Hey, scholars. I apologise for the abruptness of these steps, but I hope they are helpful.


1.	Create a google form
2.	Under questions, you can add an JPEG. Convert your CV from PDF into JPEG (I used smallpdf.com for this) and add it here:

![image](https://user-images.githubusercontent.com/98710900/223793295-a186cc79-63fe-4d45-91f7-fa2d6fb3bb62.png)
 
3.	Once this has been set up, you need to set up the code for Google App Scripts. Navigate to the Google App Scripts dashboard as such.
 
![image](https://user-images.githubusercontent.com/98710900/223793392-5b997899-ed33-4bc6-aaa0-1cbfbd0a5ec3.png)

4.	Enter the code and configure it with your details. You’ll find guiding notes in the code as comments. Then, Save.

5.	On the side panel, go to Triggers > Create New Trigger.

6.	Enter:
          a.	 Choose which function to run: sendEmail (which is the name of our function
          b.	Choose which deployment should run: Head
          c.	Select event source: From form
          d.	Select event type: On Form Submit
          e.	Save

7.	You might get a permissions denied. Once that screen opens, click advanced on that window, it should open up a terms and conditions-type form which you will click and allow access.

8.	You are all set. Test out your form, enter your email and see it work out.

9.	Tips: Chances are your email will reach the junk folder, so to mitigate against this, I did the following.
         a.	I added a personalised confirmation message, informing the individual of the email to expect and that it might reach their junk folder if it doesn’t reach             their mailbox in the next few minutes.
         b.	Have a good subject-line. Something not so generic, but maybe states something memorable about you and the expo name.
         c.	Ensure the email isn’t so generic also. Add the name of the Expo and make reference to the conversation you had. Something as simple as:
         “I really enjoyed our conversation at Expo_Name, and I appreciate theopportunity to share my CV with you.”

10.	Your form is now complete. Get the sharable link to your CV and create a QR code to the form.
          a.	I used https://www.qr-code-generator.com/ , select the QR code as a URL.
          b.	Download the QR code to your phone, and have it available. Recruiters and interested parties can scan the QR code and now access you CV and form, should                they wish to have it emailed to you, they can fill the form in with their email.
11.	Enjoy!
