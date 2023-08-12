import React from "react";
import { Outlet } from "react-router-dom";

export function LayoutView() {
  return (
    <div>
      <div>LayoutView</div>
      <Outlet />
    </div>
  );
}
