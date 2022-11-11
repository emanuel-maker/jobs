export interface IJob{
    execute(params: any) : Promise<any>;
}

export interface IParamsJobs{
    [job : string]  : IJob;
}

export interface IStorageModule{
    init(): Promise<void>;
}