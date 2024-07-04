import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main>
        <div className="w-64  md:block fixed">
        <SideNav/>
        </div>
        <div className="ml-64 ">
            <Header/>
        {children}
        </div>
        </main>
    );
  }
  