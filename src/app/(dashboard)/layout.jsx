import "../globals.css";

export default function DashboardPageLayout({children}){
    return (
        <html lang="en">

            <body>    
        <h1 className="text-amber-400 font-bold ">Hello</h1>
                {children}
            </body>
        </html>
    )
}