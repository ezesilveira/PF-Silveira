export interface CustomersServiceEntry {
    id: number;
    cod_cliente: number;
    nombre_cliente: string;
    cod_servicio: number;
    servicio: string;
    ciudad: string;
    direccion: string;
    tipo_servicio: string;
    nombre_contacto: string;
    tel_contacto: number;
    mail_contacto: number;
    fecha_inicio: Date;
    medio_cobro: string;
    permanencia_contrato: Date;
    valor_inicial: number;
}