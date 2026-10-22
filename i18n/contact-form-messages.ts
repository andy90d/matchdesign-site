import { getTranslations } from "next-intl/server";
import type { ContactFormMessages } from "@/components/contact-form/contact-form";

export async function getContactFormMessages(): Promise<ContactFormMessages> {
  const t = await getTranslations("Contact.form");

  return {
    name: t("name"),
    email: t("email"),
    message: t("message"),
    honeypot: t("honeypot"),
    privacyPrefix: t("privacyPrefix"),
    privacyLink: t("privacyLink"),
    submit: t("submit"),
    sending: t("sending"),
    success: t("success"),
    errors: {
      serviceNotConfigured: t("errors.serviceNotConfigured"),
      invalidRequest: t("errors.invalidRequest"),
      requiredFields: t("errors.requiredFields"),
      invalidEmail: t("errors.invalidEmail"),
      fieldTooLong: t("errors.fieldTooLong"),
      consentRequired: t("errors.consentRequired"),
      sendFailed: t("errors.sendFailed"),
    },
  };
}
