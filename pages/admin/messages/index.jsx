import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';
var qs = require('qs');

const Admin = () => {

const [error, setError] = useState(null);

    const DATA_URL = "https://api.markazcity.in/messages.php";
const [messages, setMessages] = useState(null);
    const getData = async () => {
        fetch(DATA_URL,
          {
            method: 'POST', 
            body:
            qs.stringify({
                "api": 'c24106bb093954188b2883e807d3bd8040cb96a9',
              })
            ,
            headers: { 
              'Accept': 'application/json',
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          }
          }
          )
        .then(response => response.json())
        .then(data =>{
         
          if(data.status==="success"){
            setMessages(data.data);
          }
          else if(data.status==="nomessages"){
            setMessages([]);
          }else {
            setError("Auth Error");
            
          }
        });
      }


useEffect(() => {
    getData();
},[])


    return (
        <AdminLayout title="Messages">
          {
              messages!=null?messages.length>0?(
                <div>
                    {
                        messages.map((msg)=>{
                            return  msg.message.length>1?
                            (
                                <div
                                key={msg.id}
                                className="bg-gray-100 rounded my-2 px-4 py-2"
                                >
                                    <span className="bg-violet-700 bg-opacity-25 text-violet-700 px-2 py-1 rounded inline-block my-2">
                                    {msg.name} 
                                    </span>
                                   
                                    <a className="italic text-gray-500 block mb-2"
                                    href={`mailto:${msg.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    > {msg.email}</a>
                                   <hr />

<p className="pt-3">
{msg.message}
</p>

                                </div>
                            ):(<span></span>)
                        })
                    }
                </div>
            ):(
                  <div>No messages</div>
              ):(
                  <div>Loading..</div>
              )
          }
            
        </AdminLayout>
    );
}
 
export default Admin;