interface RegistrationForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface RegistrationApiResponse {
    success: boolean;
    message?: string;
    token?: string;
}

export type {
    RegistrationForm,
    RegistrationApiResponse,
}