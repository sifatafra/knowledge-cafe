import dp from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between  mx-20 my-8 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={dp} alt="" />
        </div>


    );
};

export default Header;