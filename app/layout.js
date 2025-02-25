import "./globals.css";

export const metadata = {
    title: "Мое резюме",
    description: "Резюме в формате веб-страницы",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto mt-20 p-4">{children}</main>
        </body>
        </html>
    );
}