import {models} from '../../db/models/index.mjs';


async function create_turno(dni,fecha){
    await models.turnos_model.create_turno(dni,fecha);
    return { ok: true };
}

export {create_turno};
