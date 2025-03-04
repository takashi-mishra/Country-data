import { useEffect,useState } from 'react';
import axios from 'axios';
import '../Component/Navbar.css'


const About = () => {

  const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

if (loading) {
  return <h1 id='title'>Loading...</h1>;
}

if (error) {
  return <h1 id='title'>Error occurred: {error.message}</h1>;
}
 


  return (
    <>
    <h2 id='title'>About-Us-List</h2>
    <div id="card-container">

    {data.map(item => (
  <div id="card" key={item.id || item.key || item.author}>
     <img src={item.download_url} alt={item.author} />
    <h2>Auther name is : {item.author}</h2>
    <h2>Auther width is : {item.width}</h2>
    <h2>Auther height is : {item.height}</h2>
  </div>
))}

    
     

     </div>
    </>
  )
}

export default About
