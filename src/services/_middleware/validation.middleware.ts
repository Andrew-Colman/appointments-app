export default function validateRequest(req, session) {
    const id = req?.body?.id;
    const email = session?.user?.email;

    if (!email) return { validationError: 'no email present, required' };
    if (!id) return { validationError: 'no id present, required' };

    return { id, email };
}

export function validateLength(value, expectedLength) {
    return value >= expectedLength;
}
