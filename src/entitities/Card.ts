export default interface ICard {
    name: string;
    lang: string;
    released_date: Date;
    image_uris?: {
        [name: string] : string
    };
    collection_name: string;
    legalities?:  {
        [name: string] : string
    };
}