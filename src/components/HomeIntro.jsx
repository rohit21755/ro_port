import i1 from '../../public/assets/i1.png';
// import Image from 'next/image';
const HomeIntro = () => {
    return(<>
        <div className="mt-12 px-64">
            <div className='mx-auto w-[705px] h-[728px]' style={{
                background: `url(${i1.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height: '741px',
                // width: '736px',
            }}>
              
            </div>
        </div>

    </>)
}
export default HomeIntro;