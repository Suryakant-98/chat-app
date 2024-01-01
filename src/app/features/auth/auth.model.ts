export interface SigninCredentials {
    name: string;
    password: string;
}

export interface SignupCredentials extends SigninCredentials {
    displayName: string;
}