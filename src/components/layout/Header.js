import { Title } from '../Title';
import { Navbar} from '../Navbar';
import { SocialMedias } from '../SocialMedias';


export const Header = () => {
  return (
    <div>
        {/* LEFT SIDE */}
        <div className = 'w-full pt-[46px] pb-[96px] px-[24px] md:h-screen md:w-1/2 md:max-h-screen md:fixed md:py-20'>
            <div className='h-full flex flex-col justify-between align-items-center md:ps-[96px]'>
                <div>
                    <Title />
                    <Navbar />
                </div>
                <div>
                  <SocialMedias />
                </div> 
            </div>
        </div>
    </div>
  )
}
