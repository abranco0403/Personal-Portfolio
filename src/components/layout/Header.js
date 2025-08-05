import { Title } from '../pages/Title';
import { Navbar } from '../layout/Navbar';
import { SocialMedias } from '../pages/SocialMedias';


export const Header = () => {
  return (
    <header className="w-full pt-[46px] pb-[96px] px-[24px] md:h-screen md:w-1/2 md:max-h-screen md:fixed md:py-20">
      <div className="h-full flex flex-col justify-between items-start md:ps-[96px]">
        <div>
          <Title />
          <Navbar />
        </div>
        <div>
          <SocialMedias />
        </div> 
      </div>
    </header>
  );
};

