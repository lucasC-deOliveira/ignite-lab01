export interface AuthUser {
    sub: string;
}
export declare const currentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
