import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from './header'
import Landingpage from './landingpage'
import Containerforwesite from './containerforwesite'
import { gql, ApolloClient, InMemoryCache} from '@apollo/client'
import { Suspense } from 'react'
export const revalidate = 60

const client2 = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cledhq7g34qeb01uf508p9ec8/master",
  cache: new InMemoryCache(),
});

async function getSerbverSideProps2() {
  const { data } = await client2.query({
    query: gql`
    query Posts {
      posts{
        createdAt
        id
        language
        image {
          id
          url
        }
        link
        name
        publishedAt
        updatedAt
      }
    }
    `,
  });

  return {
    props: {
      data
    },
  };
}
const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cleanbmhq290501tb12yb9x0m/master",
  cache: new InMemoryCache(),
});
async function getSerbverSideProps() {
  const { data } = await client.query({
    query: gql`
      query PostTs {
        postTs(first: 100000){
          title
          id
          slug
          body
          img {
            id
            url
          }
          tag
          date
          
        }
      }
    `,
  } );

  return {
    props: {
      data,
    },
  };
}
export default async function Home() {
  
  const f = await getSerbverSideProps()
  const work = await getSerbverSideProps2()

  return (
   <>
             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<Suspense fallback={<div>jhjhj</div>}>
  <Containerforwesite  
c={f} work={work}
/>
</Suspense>

   </>
  )
}
