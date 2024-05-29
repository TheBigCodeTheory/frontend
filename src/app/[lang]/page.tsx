import { PageTitle } from '@/components/PageTitle'
import { InputType } from '@/types/ui'
import { FormContainer, TextInput } from '@/ui'

const textInputOne = {
  name: "email",
  inputType: "email" as InputType,
  emptyValueError: "Completa tu email",
  wrongValueError: "El email ingresado es inválido",
};

const textInputTwo = {
  name: "name",
  inputType: "text" as InputType,
  emptyValueError: "Completa tu Nombre",
  wrongValueError: "El nombre debe tener al menos 2 caracteres",
};

export default function HomePage() {
  return (
    <div>
      <PageTitle>Home Page</PageTitle>
      <FormContainer>
        <TextInput {...textInputOne}/>
        <TextInput {...textInputTwo}/>
      </FormContainer>
    </div>
  )
}
