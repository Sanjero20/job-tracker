import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <main className="container m-auto h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
