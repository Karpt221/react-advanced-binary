type ApiConstructor<T, U> = Readonly<{
    baseUrl: string;
    paths: Record<keyof T, string>;
    http: U;
}>;

export { type ApiConstructor };
