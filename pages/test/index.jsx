import Head from "next/head"
// import { GetServerSideProps } from "next"


export default function Test({datas}){
    return(
        <>  
           <Head>
        <title>
        Sure, I'd be happy to help! Can you please tell me a bit more about the website? What is its purpose and what kind of content will it feature? Also, do you have any specific keywords or themes in mind that you'd like me to consider for the title?
        </title>
        <meta name="description" content="Sun Lyhuor page Sure, I'd be happy to help! Can you please tell me a bit more about the website? What is its purpose and what kind of content will it feature? Also, do you have any specific keywords or themes in mind that you'd like me to consider for the title?" />
        <meta name='robots' content='index' />
      </Head>
            { 
                datas && datas.map((d , i)=>(
                    <div key={i} >
                        <h1 title={d.title} >{d.title}</h1>
                    </div>
                ))
            }
        </>
    )
}

export function getServerSideProps(){
    const datas = [
        {
            title:"Hello Guajshdjkahsdjhasjhdjakshdjhasjhdkjashjkdsay",
            des:"sjkhdjahsjdjasdhjkashdjhaskjhdjsahdjkashkjd"
        }
    ]

    return {
        props:{
            datas
        }
    }
    
}
