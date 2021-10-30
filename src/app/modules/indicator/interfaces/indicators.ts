export interface IIndicatorObject {
    data: IIndicator[];
    info?: {
        autor: string;
        fecha: string;
        version: string;
    }
}

export interface IIndicator {
    codigo: string;
    fecha: string;
    nombre: string;
    unidad_medida: string;
    valor: number;

    detail: IIndicatorDetail;
}

export interface IIndicatorDetail {
    version: string;
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie: {
        fecha: string;
        valor: number;
    }[];
}
