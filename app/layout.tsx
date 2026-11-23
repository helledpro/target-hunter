import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"BlackMedia AI TargetHunter",description:"Внутренний инструмент анализа аудиторий VK"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}