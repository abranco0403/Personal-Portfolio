import { Header } from '../components/layout/Header';
import { Main } from '../components/Main';

const Home = () => {
  return (
    <div>
      <div className='w-screen flex flex-col gap-4 bg-[#0C0C0C] md:flex-row md:justify-between'>
        <Header />
        <Main />
      </div>
    </div>
  )
}
export default Home;
