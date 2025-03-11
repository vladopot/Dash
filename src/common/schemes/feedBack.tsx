import * as yup from "yup";
import { REQUIRED, MIN_LENGTH, EMAIL_FORMAT } from "../constants/schemeMessages";


export const FeedBackValidationScheme = yup.object({
    name: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    surname: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    fatherName: yup.string().trim().required(REQUIRED).min(3, MIN_LENGTH),
    email: yup.string().required(REQUIRED).email(EMAIL_FORMAT)
});

export type FeedBackScheme = yup.InferType<
    typeof FeedBackValidationScheme
>