import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  __nextSubmissionId: async () => BigInt(1),
  __submissions: async () => [],
  __emailSignups: async () => [],
  listContactSubmissions: async () => [
    {
      id: BigInt(1),
      subject: "Booking Inquiry",
      name: "Jane Doe",
      submittedAt: BigInt(Date.now()),
      email: "jane@example.com",
      message: "Interested in booking for a private event.",
    },
  ],
  submitContactForm: async () => ({ __kind__: "ok", ok: null }),
  listEmailSignups: async () => [],
  submitEmailSignup: async () => {},
};
