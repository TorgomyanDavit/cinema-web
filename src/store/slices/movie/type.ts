export type SideBarRouteChildrenType = {
    id:number,
    icon:any,
    path:string,
    name:string
}


export type FeaturedItemType = {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
};

export type TendingNowItemType = {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl?: string;
    Description: string;
};