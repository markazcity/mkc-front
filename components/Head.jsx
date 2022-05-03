import Head from 'next/head'

const HeadTag = (props) => {
    return (
        <Head>
<title>{props.title??"Markaz Knowledge City"}</title>
<meta name="title" content={props.title??"Markaz Knowledge City"}/>
<meta name="description" content={props.description??"Markaz Knowledge City is a vision of a new future. It is a collective attempt of multiple actors - scholars, scientists, students, and self-motivated representatives of new thoughts. Apart from being a distinctive space, Markaz Knowledge City is also an idea of differences. - "+props.title}/>

<meta property="og:type" content="website"/>
<meta property="og:url" content={props.url??"https://markazknowledgecity.com"}/>
<meta property="og:title" content={props.title??"Markaz Knowledge City"}/>
<meta property="og:description" content={props.description??"Markaz Knowledge City is a vision of a new future. It is a collective attempt of multiple actors - scholars, scientists, students, and self-motivated representatives of new thoughts. Apart from being a distinctive space, Markaz Knowledge City is also an idea of differences. - "+props.title}/>
<meta property="og:image" content={props.image??"https://markazknowledgecity.com/markazcity.jpg"}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content={props.url??"https://markazknowledgecity.com"}/>
<meta property="twitter:title" content={props.title??"Markaz Knowledge City"}/>
<meta property="twitter:description" content={props.description??"Markaz Knowledge City is a vision of a new future. It is a collective attempt of multiple actors - scholars, scientists, students, and self-motivated representatives of new thoughts. Apart from being a distinctive space, Markaz Knowledge City is also an idea of differences. - "+props.title}/>
<meta property="twitter:image" content={props.image??"https://markazknowledgecity.com/markazcity.jpg"}></meta>
<link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
 
export default HeadTag;