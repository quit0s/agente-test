import {query} from '../connection.mjs';

async function get_medic_by_id(id){

    const sql = 'SELECT * FROM medics WHERE id=$1';
    const result = await query(sql,[id]);

    return result.rows[0] ?? null;
}

const medics_model = {get_medic_by_id};

export {medics_model};