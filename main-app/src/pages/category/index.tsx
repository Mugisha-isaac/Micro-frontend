import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';

const ProductsCategory = dynamic(() => import('shop_app/category'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });


  export default function Index(){
    return(
        <main className='flex flex-col bg-white'>
      <Navbar />
      <ProductsCategory />
      <Footer />
    </main>
    )
  }