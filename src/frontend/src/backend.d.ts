import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EmailSignup {
    email: string;
    signedUpAt: bigint;
}
export interface SubmitContactRequest {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface ContactSubmission {
    id: bigint;
    subject: string;
    name: string;
    submittedAt: bigint;
    email: string;
    message: string;
}
export interface backendInterface {
    listContactSubmissions(): Promise<Array<ContactSubmission>>;
    listEmailSignups(): Promise<Array<EmailSignup>>;
    submitContactForm(request: SubmitContactRequest): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    submitEmailSignup(email: string): Promise<void>;
}
