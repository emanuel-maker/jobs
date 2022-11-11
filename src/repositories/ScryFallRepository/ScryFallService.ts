
import axios from 'axios';
import ICard from '../../entitities/Card';
import { ICardPayload, ICollectionParam, IScryFallRepository, Status } from './interfaces';

class ScryFallRepository implements IScryFallRepository{
    async getAllCardsByCollection({ collection } : ICollectionParam): Promise<ICard[]> {
        let cards : Array<ICard> = [];
        let hasMore = true;
        const conditionEncoded = encodeURIComponent(`set:${collection} not:reprint`);
        let url = `https://api.scryfall.com/cards/search?order=released&q=${conditionEncoded}`;

        while(hasMore){
            const { data : payload, status } = await axios.get(url);
    
            if(status != Status.Ok){
                throw Error('Request failed');
            }
            
            const cardsMapped = payload.data.map((card : ICardPayload) => {
                return {
                    name : card.name,
                    lang : card.lang,
                    released_date : card.released_at,
                    image_uris : card.image_uris,
                    collection_name: collection,
                    legalities: card.legalities
                }
            });
           
    
            cards = [ ...cards, ...cardsMapped];
            hasMore = payload.has_more;
            url = payload.next_page;
        }

        return cards;
    }
}


export default ScryFallRepository;