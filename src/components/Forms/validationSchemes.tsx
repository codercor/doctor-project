import * as Yup from "yup";
export const multiSelectValidationSchema = Yup.array()
  .of(Yup.string())
  .required("Zorunlu alan")
  .min(1, "Zorunlu alan");
export const singleSelectValidationSchema =
  Yup.string().required("Zorunlu alan");
export const textValidationSchema = Yup.string().required("Zorunlu alan");
