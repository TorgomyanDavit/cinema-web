import { createSlice } from "@reduxjs/toolkit";
import { SideBarRouteChildrenType } from "../sidebar/type";
// import homeRouteImg from '../../../../src/assets/icons/Group 46.png';

import HomeIcon from "../../../assets/icons/Group 46.png"
import TvShowsIcon from '../../../../src/assets/icons/Group 56.png'
import MoviesIcon from '../../../../src/assets/icons/Group 54.png'
import GenresIcon from '../../../../src/assets/icons/Group 53.png'
import WatchLaterIcon from '../../../../src/assets/icons/Group 47.png'




export interface SideBarInterface {
  childrenRoute: SideBarRouteChildrenType[];
}

const initialState: SideBarInterface = {
  childrenRoute: [
    {
      id: 0,
      icon: HomeIcon,
      path: "/",
      name: "Home",
    },
    {
      id: 1,
      icon: TvShowsIcon,
      path: "/tv-list",
      name: "TV Shows",
    },
    {
      id: 2,
      icon:MoviesIcon ,
      path: "/movies",
      name: "Movies",
    },
    {
      id: 3,
      icon:GenresIcon,
      path: "/genres",
      name: "Genres",
    },
    {
      id: 4,
      icon: WatchLaterIcon,
      path: "/watch-later",
      name: "Watch Later",
    },
  ],
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState,
  reducers: {},
});

export const {} = sideBarSlice.actions;
export default sideBarSlice.reducer;
