import List "mo:core/List";

module {
  type OldActor = {};

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
  };

  public func migration(_old : OldActor) : NewActor {
    {
      submissions = List.empty<{
        id : Nat;
        name : Text;
        email : Text;
        subject : Text;
        message : Text;
        submittedAt : Int;
      }>();
      nextSubmissionId = { var value = 0 };
    };
  };
};
