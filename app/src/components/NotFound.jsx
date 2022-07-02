import whiteFlat from '../assets/images/whiteFlat.png';

const NotFound = () => {
    return (
        <div className=' h-96 px-14 text-center sm:flex sm:justify-around sm:items-center  dark:text-white/80'>
            <img className=' h-80 mx-auto sm:mx-0 lg:h-96' src={whiteFlat} alt="white flat" />
            <h1 className=' text-2xl'>Country didn´t found. <br/> Enter the correct name or go to some of the regions.</h1>
        </div>
    )
};

export default NotFound;