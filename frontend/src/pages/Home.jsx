import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import PasswordsCard from '../components/home/PasswordsCard';
import PasswordsTable from '../components/home/PasswordsTable';

const Home = () => {

  const [passwords, setPasswords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card')

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/passwords')
      .then((response) => {
        setPasswords(response.data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, []);

  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="border-2  border-black bg-blue-400 hover:bg-red-300 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}>
          Card View
        </button>
        <button
          className="border-2  border-black bg-blue-400 hover:bg-red-300 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}>
          Table View
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Password List </h1>
        <Link to='/passwords/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      <div className='relative rounded-xl t-0 b-0 l-0 r-0 h-auto min-h-[343px]'>
        {loading ? (
          <Spinner />
        ) :
          showType === 'card' ? (<PasswordsCard passwords={passwords} />) : (<PasswordsTable passwords={passwords} />)
        }
      </div>
      <div className="absolute b-0 w-full ml-[-16px] mb-[-206px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.8" d="M0,256L13.3,229.3C26.7,203,53,149,80,133.3C106.7,117,133,139,160,149.3C186.7,160,213,160,240,165.3C266.7,171,293,181,320,176C346.7,171,373,149,400,160C426.7,171,453,213,480,234.7C506.7,256,533,256,560,256C586.7,256,613,256,640,261.3C666.7,267,693,277,720,256C746.7,235,773,181,800,154.7C826.7,128,853,128,880,149.3C906.7,171,933,213,960,240C986.7,267,1013,277,1040,261.3C1066.7,245,1093,203,1120,197.3C1146.7,192,1173,224,1200,208C1226.7,192,1253,128,1280,106.7C1306.7,85,1333,107,1360,144C1386.7,181,1413,235,1427,261.3L1440,288L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg>
      </div>
    </div>

  )
}

export default Home
