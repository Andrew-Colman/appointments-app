import ControlledFormInput from '@components/ControlledFormInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AppointmentSchema } from '../utils/appointment.validation';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from '@chakra-ui/react';
import useAppointmentActions from '../useAppointmentActions';
import DateDisplay from '@components/DateDisplay';

export default function AppointmentForm({}) {
    const {
        handleCreateEvent,
        handleEditEvent,
        selectedEvent,
    } = useAppointmentActions();
    const {
        control,
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(AppointmentSchema),
    });

    const isEditMode = !!selectedEvent;

    function onSubmit(data) {
        const submitData = {
            ...data,
        };

        if (!isEditMode) {
            handleCreateEvent(submitData);
        }

        if (isEditMode) {
            handleEditEvent(selectedEvent, submitData, true);
        }
    }

    if (isEditMode) {
        setValue('title', selectedEvent?.title);
        setValue('description', selectedEvent?.description);
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <DateDisplay date={selectedEvent?.start} />
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <ControlledFormInput
                    id="title"
                    label="Event Title"
                    control={control}
                    renderFunction={() => <Input {...register('title')} />}
                    errors={errors}
                    errorAlertComponent={() => (
                        <p className="text-red-500">Title is required</p>
                    )}
                />
                <br />
                <ControlledFormInput
                    id="description"
                    label="Event description"
                    control={control}
                    renderFunction={() => (
                        <Input {...register('description')} />
                    )}
                    errors={errors}
                    optional
                />
                <br />
                <Button type="submit" colorScheme={'green'}>
                    {isEditMode ? 'Save' : 'Create Event'}
                </Button>
            </form>
        </>
    );
}
