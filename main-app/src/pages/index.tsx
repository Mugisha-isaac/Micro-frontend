import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <div className="h-[75vh] py-4">
        <h1 className="text-3xl font-bold font-mono h-[100%] flex justify-center items-center text-black">
          Welcome to the Main Application
        </h1>
      </div>
      <Footer/>
    </main>
  );
}
