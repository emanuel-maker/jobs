import ICard from "../../entitities/Card";

export interface ICollectionParam{
    collection : string;
}

export interface ICardPayload extends ICard{
    released_at: string;
}

export interface IScryFallRepository{
    getAllCardsByCollection(param : ICollectionParam): Promise<ICard[]>;
}

export enum Status{
    Ok = 200
}