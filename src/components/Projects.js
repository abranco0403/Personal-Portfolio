import project01 from '../assets/project_01.png';
import project02 from '../assets/project_02.png';
import project03 from '../assets/project_03.png';
import project04 from '../assets/project_04.png';


export const Projects = () => {
  return (
    <div className="w-full max-w-[80rem] mx-auto mt-[40px] md:mt-[85px]">
      <div className="px-[30px] md:px-[38px]">
        {/* Project #01 */}
        <div className="mb-[84px] lg:flex lg:gap-[15px]">
            <img className="lg:w-1/2 lg:pe-[40px] lg:pb-[40px]" src={project01} alt="" />
            <div className="mt-[28px] lg:w-1/2 lg:mt-0">
                <h3 className="font-sans text-[20px] leading-[24px] uppercase font-bold mb-[15px] md:mb-[35px]">Project #</h3>
                <p className="text-[15px] leading-[24px] text-stone-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <p className="text-[15px] leading-[24px] text-stone-500 mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <div className="mt-[20px]">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 1</a> |
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 2</a>
                </div>
            </div>
        </div>

        {/* Project #02 */}
        <div className="mb-[84px] lg:flex lg:gap-[15px]">
            <img className="lg:w-1/2 lg:pe-[40px] lg:pb-[40px]" src={project02} alt="" />
            <div className="mt-[28px] lg:mt-0">
                <h3 className="font-sans text-[20px] leading-[24px] uppercase font-bold mb-[15px] md:mb-[35px]">Project #</h3>
                <p className="text-[15px] leading-[24px] text-stone-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <p className="text-[15px] leading-[24px] text-stone-500 mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <div className="mt-[20px]">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 1</a> |
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 2</a>
                </div>
            </div>
        </div>

        {/* Project #03 */}
        <div className="mb-[84px] lg:flex lg:gap-[15px]">
            <img className="lg:w-1/2 lg:pe-[40px] lg:pb-[40px]" src={project03} alt="" />
            <div className="mt-[28px] lg:mt-0">
                <h3 className="font-sans text-[20px] leading-[24px] uppercase font-bold mb-[15px] md:mb-[35px]">Project #</h3>
                <p className="text-[15px] leading-[24px] text-stone-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <p className="text-[15px] leading-[24px] text-stone-500 mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <div className="mt-[20px]">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 1</a> |
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 2</a>
                </div>
            </div>
        </div>

        {/* Project #04 */}
        <div className="mb-[50px] lg:flex lg:gap-[15px]">
            <img className="lg:w-1/2 lg:pe-[40px] lg:pb-[40px]" src={project04} alt="" />
            <div className="mt-[28px] lg:mt-0">
                <h3 className="font-sans text-[20px] leading-[24px] uppercase font-bold mb-[15px]">Project #</h3>
                <p className="text-[15px] leading-[24px] text-stone-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <p className="text-[15px] leading-[24px] text-stone-500 mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio, veniam corporis necessitatibus laboriosam ipsum 
                    voluptates eligendi eaque aliquid, eum culpa vel quisquam deserunt 
                    commodi velit atque deleniti impedit! Asperiores laboriosam autem modi 
                    quod earum culpa in! Nulla praesentium vitae magnam quos. A architecto 
                    eum sunt fugit autem reprehenderit illo aliquam.
                </p>

                <div className="mt-[20px]">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 1</a> |
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[24px] text-amber-400">link 2</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
