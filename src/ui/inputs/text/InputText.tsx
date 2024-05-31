"use client";

import { UseFormRegister, Path } from "react-hook-form";
import { Caps } from "@/ui/texts/Caps/Caps"
import { RegisterFormValues, TextInputsHtmlFor } from "@/types/forms";

type InputTextProps = {
  htmlFor: TextInputsHtmlFor
  labelText: string
  placeholder: string
  register: UseFormRegister<RegisterFormValues>
}

export const InputText = ({ labelText, placeholder, htmlFor, register}: InputTextProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="block mb-2">
        <Caps text={labelText} />
      </label>
      
      <input
        type="text"
        id={htmlFor}
        placeholder={placeholder}
        className="appearance-none block w-full font-sans text-white text-sm lg:text-base py-3 px-4  placeholder:text-gray-300 bg-gray-700 border border-gray-500 rounded-full focus:outline-none focus:border-darkPurple focus:ring-1 focus:ring-darkPurple hover:bg-gray-900"
        {...register(`${htmlFor}`, {
          required: true,
          min: 2,
          max: 30,
        })}
      />
    </>
  )
}