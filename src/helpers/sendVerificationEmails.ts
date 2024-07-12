import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystrey Message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return {
            success: true, message: 'Verification mail sent successfully'
        }

    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {
            success: false, message: 'Failed to send Verification mail'
        }

    }
}