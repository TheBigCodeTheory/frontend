"use client";

import * as Form from "@radix-ui/react-form";

type FormContainerProps = {
  children: React.ReactNode;
}

export const FormContainer = ({children}: FormContainerProps) => {
  return (
    <Form.Root>
      {children}
    </Form.Root>
  )
};