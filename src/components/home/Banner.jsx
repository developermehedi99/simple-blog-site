import bannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-5xl font-bold w-[400px]'>One step closer to your Dream jobs</h1>
                <p className='my-3 text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint odit!</p>

                <button className='bg-blue-400 rounded-md px-5 py-2 font-semibold'>Ger start</button>
            </div>
            <div>
                <img className='max-w-[500px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;