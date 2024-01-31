export interface CashMove {
    id: number;
    cod_operacion: number;
    fecha: Date;
    operadora: string;
    operacion: string;
    importe: number;
    cliente: string;
    tipo_pago: string;
    nota: string;
    comprobante: Blob;
    ciudad: string;
}

