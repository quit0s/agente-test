import { search_medic_by_id , search_medic_by_id_description} from "./search_medic.mjs";
import { create_turno, create_turno_description} from "./create_turno.mjs";



const tools_handlers = {
    search_medic_by_id: search_medic_by_id,
    create_turno: create_turno,
};

const tools_descriptions = [
  search_medic_by_id_description,
  create_turno_description,
];

export {tools_descriptions, tools_handlers}