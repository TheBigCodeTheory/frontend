"use client";

import * as Form from '@radix-ui/react-form';
import { InputType } from '@/types/ui';
import { Caps } from '@/ui/texts/Caps/Caps';
import { Small } from '@/ui/texts/Small/Small';

type TextInputProps = {
	name: string;
	inputType: InputType;
	wrongValueError: string;
	emptyValueError: string;
}

export const TextInput = ({ name, inputType, wrongValueError, emptyValueError }: TextInputProps) => {
	return (
		<Form.Field name={name}>

			<Form.Label>
				<Caps text={name} />
			</Form.Label>

			<Form.Control asChild>
				<input className="Input" type={inputType} required />
			</Form.Control>

			<Form.Message match="valueMissing">
				<Small text={emptyValueError} color='text-redError' />
			</Form.Message>

			{/* Validation for input type email */}

			{
				inputType === "email" &&
				(<Form.Message match="typeMismatch">
					<Small text={wrongValueError} color='text-redError' />
				</Form.Message>)
			}

			{/* Validation for input type text */}

			{
				inputType === "text" && (
					<Form.Message match={(value) => value.length < 2}>
						<Small text={wrongValueError} color="text-redError"/>
					</Form.Message>
				)
			}
		</Form.Field>
	)
}