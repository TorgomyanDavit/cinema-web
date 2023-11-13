import React from "react";
import SideBarComponent from "../sideBar";

function MainLayout({ children }: { children: React.ReactElement }) {
  // const { general, campaign, billing } = useAppSelector((state:any) => state.sideBarSlice);

  return (
    <div className="outlet_container">
      <SideBarComponent />
      {children} 
    </div>
  );
}

export default MainLayout;
