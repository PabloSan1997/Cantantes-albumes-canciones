

export function tiempoConvertir(data:string|Date){
    if(typeof data !='string') data=data.toLocaleString();
    const tiempo = Date.parse(data);
    const nuevo = new Date(tiempo);
    return nuevo.toLocaleDateString();
}