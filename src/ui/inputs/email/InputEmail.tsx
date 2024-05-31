import { RegisterFormValues } from "@/types/forms"
import { Caps } from "@/ui/texts/Caps/Caps"
import { UseFormRegister } from "react-hook-form"

type InputEmailProps = {
  labelText: string
  placeholder: string
  register: UseFormRegister<RegisterFormValues>
};

export const InputEmail = ({labelText, placeholder, register}: InputEmailProps) => {
  return (
    <>
      <label htmlFor="email" className="block mb-2">
        <Caps text={labelText}/>
      </label>

      <input 
        type="email" 
        id="email"
        placeholder={placeholder}
        className="appearance-none block w-full font-sans text-white text-sm lg:text-base py-3 px-4  placeholder:text-gray-300 bg-gray-700 border border-gray-500 rounded-full focus:outline-none focus:border-darkPurple focus:ring-1 focus:ring-darkPurple hover:bg-gray-900"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/
        })}
      />
    </>
  )
}