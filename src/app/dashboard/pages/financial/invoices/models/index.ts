export interface Invoice {
    id: number;
    cod_factura: number;
    num_factura: string;
    fecha_factura: Date;
    periodo: string;
    tipo_servicio: string;
    cliente: string;
    importe: number;
    fecha_pago: Date;
    cod_cliente: number;
    cod_servicio: number;
    fecha_hoy: Date;
    fin_contrato: Date;
}