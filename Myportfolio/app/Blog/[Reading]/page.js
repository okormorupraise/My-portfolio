import Header from '@/app/header'
import React from 'react'
import Body from './body'
import Imagme from './image'
import {notFound} from "next/navigation"
import Readingtitle from './Readingtitle'
import RelatedArticle from './RelatedArticle'
import { gql, ApolloClient, InMemoryCache} from '@apollo/client'
import Landingpage from './landingpage'
import Footer from '@/app/footer'
export const revalidate = 60;

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cleanbmhq290501tb12yb9x0m/master",
  cache: new InMemoryCache(),
});
async function getSerbverSideProps() {
  const { data } = await client.query({
    query: gql`
      query PostTs {
        postTs {
          title
          id
          slug
          body
     date
     tag
          img {
            id
            url
          }
          
        }
      }
    `,
  },{next:{revalidate : 10}, cache:"no-store"});

  return {
    props: {
      data,
      revalidate : 60
    },
  };
}
const client2 = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cleanbmhq290501tb12yb9x0m/master",
  cache: new InMemoryCache(),
});
async function getSerbverSideProps2() {
  const { data } = await client2.query({
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
  },{next:{revalidate : 10}, cache:"no-store"});

  return {
    props: {
      data, 
       revalidate : 60
    },
  };
}
const Page = async ({params}) => {

  if(params.Reading === 'null')  {
    return notFound()
  }
  
 const data = await getSerbverSideProps()
 const data2 = await getSerbverSideProps2()
 const FilteredData = data.props.data.postTs.filter(thu => thu.slug == params.Reading)

 if(FilteredData == ''){
  return notFound()
 }
  return (
    
    <>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <div className='bg-[#28293E]'>     
             <Landingpage/>

        </div>
        {FilteredData.map(thu=>{
          return(
                    <Readingtitle title={thu.title} date={thu.date} tag={thu.tag} key={thu.id}/>
          )
        })}

{FilteredData.map(thu=>{
          return(
                    <Imagme image={thu.img.url} key={thu.id}/>
          )
        })}
        
{FilteredData.map(thu=>{
          return(
            <Body body={thu.body} key={thu.id}/>
          )
        })}
        
       
        <RelatedArticle data={data2}/>
        <Footer/>
    </>
  )
}

export default Page
