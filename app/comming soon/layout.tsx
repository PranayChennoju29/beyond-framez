import "./globals.css";
import SplashCursor from "../../components/SplashCursor";




export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-black text-white">

                <SplashCursor />
                {children}
            </body>
        </html>
    );
}
