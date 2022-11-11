
import { IJob } from "../core/storage/interfaces";
import { Collection } from "../entitities";
import { ICardRepository } from "../repositories/CardRepository/interfaces";
import { IScryFallRepository } from "../repositories/ScryFallRepository/interfaces";

class Extractor implements IJob{
    constructor(
        private scryFallService : IScryFallRepository, 
        private cardRepository : ICardRepository 
    ){}
    
    async execute(collections : Array<Collection>) : Promise<Boolean> {
    
        // Get cards from API
        const allCards = await Promise.all(collections.map( async (collection) => {
            return await this.scryFallService.getAllCardsByCollection({ collection });
        }));
        
        // Invalidate olds cards
        // TO-DO

         // Populated new cards in DB
        await Promise.all(allCards.map( async (cards) => {
            await this.cardRepository.bulkCards({ cards }); 
        }));

        return true;
    }
}

export default Extractor;