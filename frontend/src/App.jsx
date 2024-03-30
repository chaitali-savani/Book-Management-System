import React, { useEffect ,useState} from 'react'
import Login from './components/login';
import './css/styles.css';

export default function App() {
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[]);
  return (
    <div style={{padding:"50px"}}>
      <Login />
      {/* <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.user_id}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
            </tr>
         ))}
        </tbody>
      </table> */}
    </div>
  )
}
