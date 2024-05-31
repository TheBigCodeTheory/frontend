"use client";

import { RegisterFormValues, TextInputsHtmlFor } from "@/types/forms";
import { InputEmail, InputText } from "@/ui";
import { useForm } from "react-hook-form";

const textInputOne = {
  htmlFor: "name" as TextInputsHtmlFor,
  labelText: "Nombre *",
  placeholder: "Cosme",
};

const textInputTwo = {
  htmlFor: "surname" as TextInputsHtmlFor,
  labelText: "Apellido *",
  placeholder: "Fulanito",
};

const emailInputOne = {
  labelText: "Email *",
  placeholder: "cosme.fulanito@google.com",
}

export const RegisterForm = () => {

  const { register, handleSubmit } = useForm<RegisterFormValues>();

  return (
    <>
      <InputText {...textInputOne} register={register}/>
      <InputText {...textInputTwo} register={register}/>
      <InputEmail {...emailInputOne} register={register}/>
    </>
  )
};
