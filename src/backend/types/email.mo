module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    submittedAt : Int;
  };

  public type SubmitContactRequest = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  public type EmailSignup = {
    email : Text;
    signedUpAt : Int;
  };
};
