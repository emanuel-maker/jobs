import Extractor from "../domain/Extractor";
import CardRepository from "../repositories/CardRepository";
import ScryFallService from "../repositories/ScryFallRepository";
import { IParamsJobs, IStorageModule } from "./storage/interfaces";
import StorageModule from "./storage/StorageModule";

class Boostrap{

    private storageModule : IStorageModule | null = null;

    constructor(){}
    
    async run(){
        this.storageModule =  new StorageModule();
        await this.storageModule.init();
    }

    initJobs() : IParamsJobs {

        if(!this.storageModule){
            throw Error('Storage not defined');
        }

        const scryFallService = new ScryFallService();
        const cardRepository = new CardRepository();
        const extractor = new Extractor(scryFallService,cardRepository);

        return {
            extractor
        }
    }
}

export default new Boostrap();