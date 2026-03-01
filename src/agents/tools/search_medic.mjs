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

export {search_medic_by_id};