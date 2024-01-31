export interface BusinessCustomer{
    id: number;
    cod_cliente: number;
    nombre_cliente: string;
    ciudad: string;
    direccion: string;
    cuit: number;
    tipo_contratacion: string;
    servicio_nuevo: string | null;
    contrato: string | null;
}