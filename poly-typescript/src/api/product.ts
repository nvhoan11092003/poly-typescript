
import instance from ".";
import { Iproduct, updateForm } from "../models";

export const getall = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getbyid = (id: String) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};

export const update = (id: String, body: updateForm) => {
  const uri = "/products/" + id;
  return instance.put(uri, body);
};
export const delete_product = (id: String) => {
  const uri = "/products/" + id;
  return instance.delete(uri);
};

export const create_product = (body: updateForm) => {
  const uri = "/products";
  return instance.post(uri, body);
};
