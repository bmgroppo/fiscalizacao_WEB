// remover do objeto as propriedades que estão vazias
export function removerVazios(obj: any): any {  
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined && value !== '')
  );
}