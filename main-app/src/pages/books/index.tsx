import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Books = dynamic(() => import("shop_app/books"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Index() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <Books />
      <Footer />
    </main>
  );
}
