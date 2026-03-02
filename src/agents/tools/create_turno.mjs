import {models} from '../../db/models/index.mjs';

async function create_turno({dni,fecha}){
    try {
        await models.turnos_model.create_turno(dni,fecha);
        return { 
            success: true, 
        };
    } catch (error) {
        console.error("create_turno error:", error.message);
        return {
            success: false,
            error: error.message,
        };
    }
}

const create_turno_description = {
    type: 'function',
    name: 'create_turno',
    description: 'Crea un turno, neceista el dni del usuario y la fehca en la que se va a llevar acabo el turno',
    parameters: {
      type: 'object',
      properties: {
        dni: {
          type: 'integer',
          description: 'DNI del usuario',
        },
        fecha: {
          type: 'string',
          format: "date",
          description: 'Fecha del turno (YYYY-MM-DD)',
        },
      },
      required: ['dni','fecha'],
      additionalProperties: false,
    },
}

export {create_turno,create_turno_description};
