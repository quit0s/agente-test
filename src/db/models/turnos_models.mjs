import {query} from '../connection.mjs';

async function create_turno(dni, fecha){

    const sql = 'INSERT INTO turnos (id_turno,dni,fecha) VALUES (32132155 ,$1 , $2)';
    await query(sql,[dni,fecha]);

}

const turnos_model = {create_turno};

export {turnos_model};