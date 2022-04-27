/* eslint-disable @typescript-eslint/naming-convention */
export class Solicitudes {
  models =  [
        {
            id: '1',
            nombre: 'Solicitud Préstamos',
            campos_data: [
                {
                    nombre: 'Monto',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Plazo',
                    tipo: 'number',
                    extra: 'Meses'
                },
                {
                    nombre: 'Información del Garante',
                    tipo: 'select',
                    extra: 'Persona Fisica'
                },
                {
                    nombre: 'Nombres (Garante)',
                    tipo: 'text',
                    extra: ''
                },
                {
                    nombre: 'Apellidos (Garante)',
                    tipo: 'text',
                    extra: ''
                },
                {
                    nombre: 'Numero Cédula (Garante)',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Direccion (Garante)',
                    tipo: 'text',
                    extra: ''
                },
                {
                    nombre: 'Sueldo (Garante)',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Monto Ahorrado (Garante)',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Monto a Garantizar',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Copia Cédula',
                    tipo: 'file',
                    extra: 'jpg'
                },
                {
                    nombre: 'Copia Cédula (Garante)',
                    tipo: 'file',
                    extra: 'jpg'
                },
                {
                    nombre: 'Este préstamos será utilizado para',
                    tipo: 'text',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '2',
            nombre: 'Solicitud Préstamo Gerencial',
            campos_data: [
                {
                    nombre: 'MontoRD$',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '3',
            nombre: 'Solicitud De Servicio De Tienda',
            campos_data: [
                {
                    nombre: 'Nombre de Tienda',
                    tipo: 'text',
                    extra: ''
                },
                {
                    nombre: 'Monto',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '4',
            nombre: 'Orden De Compras (Farmacia)',
            campos_data: [
                {
                    nombre: 'Monto',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuota',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Nombre de Farmacia',
                    tipo: 'text',
                    extra: 'Farmacia'
                }
            ],
            activo: 'si'
        },
        {
            id: '5',
            nombre: 'Solicitud de Inscripción En El Ahorro Educativo',
            campos_data: [
                {
                    nombre: 'Monto Ahorrar',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '6',
            nombre: 'Solicitud de Inscripción Ahorro Navideño',
            campos_data: [
                {
                    nombre: 'Monto Ahorrar',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '7',
            nombre: 'Aumento de Aportación',
            campos_data: [
                {
                    nombre: 'Aumento a:',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Efectivo a partir del mes de:',
                    tipo: 'date',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '8',
            nombre: 'Plan Funeral (FSF)',
            campos_data: [
                {
                    nombre: 'Datos Personales de los Dependientes a Incluir',
                    tipo: 'textarea',
                    extra: ''
                },
                {
                    nombre: 'Familiares Directos',
                    tipo: 'select',
                    extra: '1 | 2 | 3 | 4 | 5 | 6 | 7'
                }
            ],
            activo: 'si'
        },
        {
            id: '10',
            nombre: 'Pago',
            campos_data: [
                {
                    nombre: 'Nombre del Servicio:',
                    tipo: 'text',
                    extra: 'Prestamo,Gerencial, Farmacia y Orden de Compra'
                },
                {
                    nombre: 'Monto:',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Copia del Pago:',
                    tipo: 'file',
                    extra: 'JPG'
                },
                {
                    nombre: 'No. Prestamo:',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '11',
            nombre: 'Carta Consular',
            campos_data: [
                {
                    nombre: 'Embajada',
                    tipo: 'text',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '12',
            nombre: 'Solicitud Préstamo Pignorado',
            campos_data: [
                {
                    nombre: 'Monto',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Plazo',
                    tipo: 'number',
                    extra: 'Meses'
                },
                {
                    nombre: 'Copia Cédula',
                    tipo: 'file',
                    extra: 'JPG'
                },
                {
                    nombre: 'Este préstamos será utilizado para',
                    tipo: 'text',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '13',
            nombre: 'Solicitud San Coopdgii',
            campos_data: [
                {
                    nombre: 'Monto Ahorar',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '15',
            nombre: 'Solicitud Tour Operador',
            campos_data: [
                {
                    nombre: 'Nombre del Tour Operador',
                    tipo: 'text',
                    extra: ''
                },
                {
                    nombre: 'Monto',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Cuotas',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '18',
            nombre: 'Disminución de Aportación',
            campos_data: [
                {
                    nombre: 'Disminuir A:',
                    tipo: 'number',
                    extra: ''
                },
                {
                    nombre: 'Efectivo a partir del mes de:',
                    tipo: 'date',
                    extra: ''
                }
            ],
            activo: 'si'
        },
        {
            id: '19',
            nombre: 'Solicitud de Cancelacion San Coopdgii',
            campos_data: [
                {
                    nombre: 'Monto a Cancelar',
                    tipo: 'number',
                    extra: ''
                }
            ],
            activo: 'si'
        }
    ];
}
