export interface LoginResponse {
    message: string;
    data:    Data;
}

export interface Data {
    id:     string;
    nombre: string;
    token:  string;
}
