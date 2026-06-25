import List "mo:core/List";

module {
  type OldActor = {
    submissions : List.List<{
      id : Nat;
      name : Text;
      email : Text;
      subject : Text;
      message : Text;
      submittedAt : Int;
    }>;
    nextSubmissionId : { var value : Nat };
  };

  type NewActor = {
    submissions : List.List<{
      id : Nat;
      name : Text;
      email : Text;
      subject : Text;
      message : Text;
      submittedAt : Int;
    }>;
    nextSubmissionId : { var value : Nat };
    emailSignups : List.List<{
      email : Text;
      signedUpAt : Int;
    }>;
  };

  public func migration(old : OldActor) : NewActor {
    {
      submissions = old.submissions;
      nextSubmissionId = old.nextSubmissionId;
      emailSignups = List.empty<{
        email : Text;
        signedUpAt : Int;
      }>();
    };
  };
};
