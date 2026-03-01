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

export {create_turno};
