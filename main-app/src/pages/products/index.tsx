import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const ProductsList = dynamic(() => import('shop_app/Products'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  });

export default function Index(){
    return(
        <main className="flex flex-col bg-white">
           <Navbar/>
           <ProductsList/>
           <Footer/>
        </main>
    )
}  