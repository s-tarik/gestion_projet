export interface Tache{
    projectId?: number;
    id?:number,
    nom?:string,
    description?:string,
    etat?: string,
    responsable?:string,
    dateDebut?:Date,
    dateFin?:Date
}