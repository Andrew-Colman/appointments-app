import React from 'react';

import { FormControl, FormLabel } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

type ControlledFormInputProps = {
    id: string;
    label: string | (() => any);
    control;
    renderFunction: () => any;
    defaultValue?: any;
    errors?: any;
    errorAlertComponent?: any;
    optional?: boolean;
};

export default function ControlledFormInput({
    id,
    label,
    control,
    renderFunction,
    defaultValue = '',
    errors,
    errorAlertComponent,
    optional,
}: ControlledFormInputProps) {
    return (
        <FormControl>
            <FormLabel htmlFor={id}>
                {typeof label === 'function' ? label() : label}{' '}
                {optional && (
                    <span className="text-gray-400 text-sm ml-2 font-normal">
                        Optional
                    </span>
                )}
            </FormLabel>
            <Controller
                name={id}
                control={control}
                defaultValue={defaultValue}
                render={renderFunction}
            />
            {id &&
                errors &&
                errors[id] &&
                errorAlertComponent &&
                errorAlertComponent()}
        </FormControl>
    );
}
