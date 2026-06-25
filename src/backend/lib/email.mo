import Int "mo:core/Int";
import EmailClient "mo:caffeineai-email/emailClient";
import Types "../types/email";

module {
  public type ContactSubmission = Types.ContactSubmission;
  public type SubmitContactRequest = Types.SubmitContactRequest;
  public type EmailSignup = Types.EmailSignup;

  public func sendContactEmail(request : SubmitContactRequest) : async EmailClient.SendResult {
    let htmlBody =
      "<h2>New Contact Form Submission</h2>" #
      "<p><strong>Name:</strong> " # request.name # "</p>" #
      "<p><strong>Email:</strong> " # request.email # "</p>" #
      "<p><strong>Subject:</strong> " # request.subject # "</p>" #
      "<p><strong>Message:</strong></p>" #
      "<p>" # request.message # "</p>";

    await EmailClient.sendServiceEmail(
      "contact",
      ["booking@example.com"],
      "Contact Form: " # request.subject,
      htmlBody,
    );
  };

  public func createSubmission(id : Nat, request : SubmitContactRequest, now : Int) : ContactSubmission {
    {
      id;
      name = request.name;
      email = request.email;
      subject = request.subject;
      message = request.message;
      submittedAt = now;
    };
  };

  public func createEmailSignup(email : Text, now : Int) : EmailSignup {
    { email; signedUpAt = now };
  };
};
