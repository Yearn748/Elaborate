import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";
import SideBarWrapper from "@/components/sideBarWrapper";
import Footer from "@/components/footer";
import BodyScrollBar from "@/components/bodyScrollBar";
import BackToTop from "@/components/backToTop";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BodyScrollBar></BodyScrollBar>
            {/* navbar */}
            <NavBar></NavBar>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-[auto_17.5rem] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] gap-4 px-0 md:px-4 mt-24">
                <main className="col-span-2 lg:col-span-1 overflow-hidden">
                    <div>
                        {children}

                        <div className="footer col-span-2 onload-animation hidden lg:block">
                            <Footer></Footer>
                        </div>
                    </div>
                </main>
                <SideBarWrapper className="row-start-2 col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:max-w-[17.5rem] min-w-[0px]">
                    <SideBar className="row-start-2 col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:max-w-[17.5rem] min-w-[0px]"></SideBar>
                </SideBarWrapper>

                <div className="footer col-span-2 onload-animation block lg:hidden">
                    <Footer></Footer>
                </div>
            </div>

            <BackToTop></BackToTop>
        </>
    );
}
