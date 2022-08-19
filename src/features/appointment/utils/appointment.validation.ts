import * as yup from 'yup';

export const AppointmentSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
});
