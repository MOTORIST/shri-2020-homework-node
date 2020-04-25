declare module 'express-swagger-generator' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Swagger = (app: any) => (options: any) => void;
    const swagger: Swagger;
    
    export default swagger;
}