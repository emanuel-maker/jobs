
import Bootstrap from './core/Bootstrap';
import { Collection } from './entitities';

Bootstrap.run().then(async () => {
    const jobs = Bootstrap.initJobs();

    if(!jobs){
        console.log('No jobs configured');
        return;
    }

    try{
        console.log('# Loading extractor...');
        await jobs.extractor.execute([
            Collection.Ikoria, 
            Collection.GuildsOfRavnica, 
            Collection.Innistrad
        ]);

        console.log('# Finished');
        process.exit();
    }catch(error){
        console.log(error)
    }
});


