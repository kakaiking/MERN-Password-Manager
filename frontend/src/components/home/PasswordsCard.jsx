import PasswordSingleCard from "./PasswordSingleCard";

const PasswordsCard = ({ passwords }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {passwords.map((item) => (
        <PasswordSingleCard key={ item._id } password={item}/>
      ))}
    </div>
  );
};

export default PasswordsCard;
