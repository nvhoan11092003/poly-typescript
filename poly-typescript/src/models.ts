import * as yup from "yup";

export interface Iproduct {
  name: string;
  trademark: string;
  description: string;
  price: number;
  origin: string;
}

export const updateSchema = yup.object({
  name: yup.string().required("trường dữ liệu bắt buộc"),
  trademark: yup.string().required("trường dữ liệu bắt buộc"),
  description: yup.string().required("trường dữ liệu bắt buộc"),
  price: yup.number().required("trường dữ liệu bắt buộc"),
  origin: yup.string().required("trường dữ liệu bắt buộc"),
});

export type updateForm = yup.InferType<typeof updateSchema>;
