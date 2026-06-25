import Time "mo:core/Time";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Types "../types/email";
import EmailLib "../lib/email";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  nextSubmissionId : { var value : Nat },
  emailSignups : List.List<Types.EmailSignup>,
) {
  public func submitContactForm(request : Types.SubmitContactRequest) : async { #ok; #err : Text } {
    let result = await EmailLib.sendContactEmail(request);
    switch (result) {
      case (#ok) {
        let id = nextSubmissionId.value;
        nextSubmissionId.value += 1;
        let submission = EmailLib.createSubmission(id, request, Time.now());
        submissions.add(submission);
        #ok;
      };
      case (#err(error)) {
        #err(error);
      };
    };
  };

  public query func listContactSubmissions() : async [Types.ContactSubmission] {
    submissions.toArray();
  };

  public func submitEmailSignup(email : Text) : async () {
    let signup = EmailLib.createEmailSignup(email, Time.now());
    emailSignups.add(signup);
  };

  public query func listEmailSignups() : async [Types.EmailSignup] {
    emailSignups.toArray();
  };
};
