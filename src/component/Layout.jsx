import Navbar from "../navigation/Navbar";

 
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="flex-1 w-full overflow-x-clip">
        {children}
      </main>
    </div>
  );
};
export default Layout