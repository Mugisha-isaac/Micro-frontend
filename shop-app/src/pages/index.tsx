import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-[100vh] flex justify-center items-center">
       Hello shop app
    </main>
  );
}
