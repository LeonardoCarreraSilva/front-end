import {http} from "./config";

export default{
    listar: () =>http.get('filme'),

    salvar:(filme) =>http.post('filme', filme),

    atualizar:(filme) =>http.put('filme', filme),
    
    apagar:(id)=>http.delete(`filme/${id}`),
}