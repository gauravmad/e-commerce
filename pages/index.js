import React from 'react';
import { Navbar, Product, Footer, HeroBanner, FooterBanner } from '../components';
import { client } from '../lib/client';

export default function Home({products, bannerData}) {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {/* {console.log(bannerData)} */}
      {/* {console.log(products)} */}
      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speakers there are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product)=> 
          <Product key={product._id} product={product}/>
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
};

export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const contactformQuery = '*[_type == "contactus"]';
  const contactformData = await client.fetch(contactformQuery);

  return{ 
    props:{ products, bannerData }
  }
}
