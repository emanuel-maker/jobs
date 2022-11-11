import ICard from "../../entitities/Card";

export interface IParamsBulkCards{
   cards : Array<ICard>;
}

export interface ICardRepository{
    bulkCards(params : IParamsBulkCards): Promise<boolean>;
}