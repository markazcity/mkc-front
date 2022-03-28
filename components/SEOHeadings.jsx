const SEOHeading = () => {

const headings = 
    ['Markaz Knowledge City',
     'Markaz City', 'Knowledge City', 
     'Markaz', 'Markaz Law College', 'Law College', 
     'Kerala', 'Unani', 'Markaz Unani Hospital', 
     'Markaz Unani Medical College', 
     'Fezinn Hotel', 'Tigris Valley', 
     'Landmark Village', 'WIRAS', 'Cultural Center', 
     'Markaz Cultural Center', 'Jamia Markaz', 
     'Markaz Saqafathi Ssunniyya', 'Markaz', 'Knowledge', 
     'Kaithapoyil', 'Kozhikode', 'Calicut', 'Markaz Ihram', 
     'Hakeem Azhari', 'Aboobacker Musliyar', 'AP Usthad', 
     'Sunni', 'Best places in India', 
     'Best place in Kerala', 'Thamarassery', 
     'Churam', 'Wayanad', 'Habitus', 'Hillsinai', 
     'Which City is called the City of Dreams', 
     '10 Largest Mosque in India  Which is the largest mosque in India', 
     'Which is the largest mosque in Kerala',
     'Best college in Kerala','Best college for Law in India Kerala','Best college for Medical in India Kerala',
     'List of Government and Private Unani Colleges in India', 
     'List of Government and Private Unani Colleges in Kerala', 
     'markaz knowledge city website',
     'knowledge city website',
     'markaz website'
    ]
;

    return (
        <div style={{maxHeight:'0px', overflow: 'hidden'}}>
{
    headings.map((heading, index) => (<h1 key={index}>{heading}</h1>))
}
        </div>
    );
}
 
export default SEOHeading;