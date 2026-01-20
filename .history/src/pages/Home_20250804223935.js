import { Header } from '../components/layout/Header';
import { Main } from '../components/layout/Main';

const Home = () => {
  return (
    <div>
      <div className='w-screen flex flex-col gap-4 bg-gradient-to-r from-customBlue to-customBlack md:flex-row md:justify-between'>
        <Header />
        <Main />
      </div>
    </div>
  )
}
export default Home;
