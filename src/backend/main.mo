import List "mo:core/List";
import MixinViews "mo:caffeineai-data-viewer/MixinViews";
import Types "types/email";
import EmailMixin "mixins/email-api";

actor {
  let submissions : List.List<Types.ContactSubmission>;
  let nextSubmissionId : { var value : Nat };
  let emailSignups : List.List<Types.EmailSignup>;

  include MixinViews();
  include EmailMixin(submissions, nextSubmissionId, emailSignups);
};
