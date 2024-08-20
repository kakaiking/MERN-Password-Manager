import React, { useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const EditPassword = () => {
  const [website, setWebsite] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/passwords/${id}`)
      .then((response) =>{
        setLoading(false);
        setWebsite(response.data.website);
        setEmail(response.data.email);
        setPassword(response.data.password);
        
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred. Please Check Console');
        console.log(error);
      })
  }, [])

  const handleEditPassword = () => {
    const data = {
      website, 
      email, 
      password
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/passwords/${id}`, data)
      .then(() => {
        setLoading(true);
        enqueueSnackbar('Password Edited Successfully', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check Console');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">Edit Password</h1>
      { loading ? <Spinner/> : '' }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Website</label>
          <input
            type='text'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditPassword}> Save</button>
      </div>
    </div>
  )
}

export default EditPassword
