import mongoose, { Schema } from "mongoose";
import { ICardRepository, IParamsBulkCards } from "./interfaces";

const CardSchema = new Schema({
    name: { type: String, required: true },
    lang: { type: String, required: true },
    released_date: { type: Date, required: true },
    image_uris: { type: Object, required: false },
    collection_name: { type: String, required: true },
    legalities: { type: Object, required: false },
});

class CardRepository implements ICardRepository{

    private cardModel = mongoose.model("Card", CardSchema);

    async bulkCards(params: IParamsBulkCards): Promise<boolean> {
        
        if(!this.cardModel){
            throw new Error(`Error CardModel`);
        }
        await this.cardModel.insertMany(params.cards);
        return true;
    }
}

export default CardRepository;