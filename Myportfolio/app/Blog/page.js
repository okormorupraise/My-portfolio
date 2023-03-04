import React from 'react'
import Dreamproject from '../dreamproject'
import Newsletter from '../newsletter'
import Bigblogcards from './bigblogcards'
import Headerandlandingpage from './headerandlandingpage'
import Landingpage from './Landingpage'
import Smallblogcards from './smallblogcards'
import { gql, ApolloClient, InMemoryCache} from '@apollo/client'
import Bottomnavbar from '../bottomnavbar'
import Footer from '../footer'
export const revalidate = 60;
const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/cleanbmhq290501tb12yb9x0m/master",
    cache:new InMemoryCache()
});
async function getSerbverSideProps() {
  const { data } = await client.query({
    query: gql`
    query PostTs {
      postTs {
        title
        id
        tag
        date
        body
        slug
        img {
          id
          url
        }
        
      }
    }
  `,
  });

  return {
    props: {
      data,
     

     
    },
  };
}
const  Page = async  () => {
  const data = await getSerbverSideProps()
  return (
    <>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <Headerandlandingpage/>
      <Bigblogcards data={data}/>
      <Smallblogcards  data={data}/>
      <div className='flex justify-center'>
        <div className='max-w-[1128px] px-[20px] w-full'>
                    <Newsletter/>
                    <hr className='bg-[#F3D1BF] outline-none border-none text-[#ff5900] h-[1px]  mt-[35px]'/>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className='bg-[#EF6D58] rounded-[6px] mt-[111px] mb-[139px] px-0 sm:px-[20px] max-w-[1128px] w-full '>
      <Dreamproject text="white" second="rgba(255,255,255,0.64)" but="#391400"/>
      </div>
      </div>
<Footer/>

    </>
  )
}

export default Page
