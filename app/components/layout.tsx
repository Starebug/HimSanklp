import Navbar from "./navbar";
const Layout = ({children}:{children:React.ReactNode}) => {
    return( 
        <>
        <Navbar/>
        <main className="">{children}</main>
        </>
    );
}
export default Layout