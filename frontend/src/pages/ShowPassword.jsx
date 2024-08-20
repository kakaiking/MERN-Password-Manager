import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner'

const ShowPassword = () => {
  const [password, setPassword] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/passwords/${id}`)
      .then((response) => {
        setPassword(response.data);
        setLoading(false)
      })
      .catch((error => {
        console.log(error);
        setLoading(false)
      }))
  }, [])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1>Show book</h1>
      {loading ? (
        <Spinner/>
      ): (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{password._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{password.website}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{password.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{password.password}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(password.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last update Time</span>
            <span>{new Date(password.updatedAt).toString()}</span>
          </div>

        </div>
      )}
    </div>
  )
}

export default ShowPassword

