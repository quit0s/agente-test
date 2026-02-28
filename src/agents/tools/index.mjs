import { search_medic_by_id } from "./search_medic.mjs";
import { create_turno } from "./create_turno.mjs";



const tool_handlers = {
    search_medic_by_id : search_medic_by_id,
    create_turno : create_turno,
};
const tools = [
    {
    type: 'function',
    name: 'search_medic_by_id',
    description: 'Busca al medico a traves de su identificador(id) de la tabla medics',
    parameters: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          description: 'Identificador (id) unico, dentro de la tabla medics.',
        },
      },
      required: ['id'],
      additionalProperties: false,
    },
  },
  {
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
  },
]
export {tools, tool_handlers}