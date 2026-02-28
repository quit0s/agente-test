
import {models} from '../../db/models/index.mjs';


function search_medic_by_id(id){
    const result = models.medics_model.get_medic_by_id(id);
    return result
}

export {search_medic_by_id};