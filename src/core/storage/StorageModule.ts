import { connect } from 'mongoose';
import { IStorageModule } from './interfaces';

class StorageModule implements IStorageModule{
    
    async init(){
        await connect('mongodb://mongodbinfra:9090/scryfalldb');
    }
}

export default StorageModule;

