import {models} from '../../db/models/index.mjs';

async function search_medic_by_id({id}){
    try {
        const result = await models.medics_model.get_medic_by_id(id);
        if(!result){
            return {
                success: false,
                error: `There was no match for id: ${id} in table medics`,
                };
        }else{
            return {
                success: true,
                result,
            }; 
        }
    } catch (error) {
        console.error("search_medic_by_id error:", error.message);
        return {
            success: false,
            error: error.message,
        };
    }
}

const search_medic_by_id_description = {
     
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
  
}

export {search_medic_by_id, search_medic_by_id_description};