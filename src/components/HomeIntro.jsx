import i1 from '../../public/assets/i1.png';
// import Image from 'next/image';
const HomeIntro = () => {
    return(<>
        <div className="mt-12 px-64 text-white " >
            <div className='mx-auto pt-64 h-[600px]' style={{
                background: `url(${i1.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center center'
                // backgroundSize: 'cover',

                // height: '741px',
                // width: '736px',
            }}>
              <p className='text-5xl w-3/5 text-center tracking-wide text-white mx-auto'>Building the Next Genration of Web3 Solution</p>
            </div>
            
        </div>
        {/* <div className='absolute w-full top-[50%] '>
            <div className='text-white mx-auto'></div>
            
        </div> */}

    </>)
}
export default HomeIntro;