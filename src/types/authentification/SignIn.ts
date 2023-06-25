interface LoginForm {
    email: string;
    password: string;
}

interface LoginApiResponse {
    success: boolean;
    message?: string;
    token?: string;
}

export type {
    LoginForm,
    LoginApiResponse,
}