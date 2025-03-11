import * as yup from "yup";
import { EMAIL_FORMAT, MIN_LENGTH, REQUIRED } from "../../constants/schemeMessages";

export const FeedBackValidationScheme = yup.object({
    name: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    surname: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    fatherName: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    email: yup.string().required(REQUIRED).email(EMAIL_FORMAT)
});

export type FeedBackScheme = yup.InferType<
    typeof FeedBackValidationScheme
>