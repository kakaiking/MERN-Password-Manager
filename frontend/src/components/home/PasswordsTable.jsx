import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const PasswordsTable = ({ passwords }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Website</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Email</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Password</th>
              <th className='border border-slate-600 rounded-md '>Operations</th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((password,index) => (
              <tr key={password._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {password.website}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {password.email}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {password.password}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/passwords/details/${password._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800'/>
                    </Link>
                    <Link to={`/passwords/edit/${password._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600'/>
                    </Link>
                    <Link to={`/passwords/delete/${password._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600'/>
                    </Link>
                  </div>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
  )
}

export default PasswordsTable
