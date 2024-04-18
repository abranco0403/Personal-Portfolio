import { Link } from 'react-router-dom';
export const AboutMe = () => {
  return (
    <div className="w-full max-w-[80rem] mx-auto mt-[120px] md:mt-[398px] lg:mt-0">
      <div className="px-[38px] py-[100px] lg:flex lg:gap-[40px]">
        <div className="lg:w-1/2">
            <h2 className="font-sans text-[30px] font-bold uppercase leading-[30px] mb-[15px] md:mb-[35px] md:text-[36px]">About me</h2>
            <p className="text-[14px] text-stone-500 leading-[24px] mb-[30px] md:text-[15px] md:mb-[25px]">
                Currently leading design at Atlassian on the Growth team as an IC Director. 
                Before that, I worked at Statsig as Head of Design, Director. 
                My career started at Facebook where I successfully launched highly impactful product features, 
                reaching one of the fastest promotion track and exceptional ratings at the company.
            </p>

            <p className="text-[14px] text-stone-500 leading-[24px] mb-[30px] md:text-[15px] md:mb-[25px]">
                I first got into design when I decided to pursue Master's in HCI degree at Georgia Institute of Technology. 
                From then on, my passion towards design had sparked greatly which allowed me to spend countless days and nights 
                improving my skills and knowledge.
            </p>

            <p className="text-[14px] text-stone-500 leading-[24px] mb-[30px] md:text-[15px] md:mb-[25px]">
                In addition to my day-to-day work, I love writing about my personal and professional experiences on Medium and 
                regularly share my additional fun work on Dribbble. Also, I've been actively engaging in various speaking opportunities 
                that allowed me to share my journey throughout my career.
            </p>

            <Link to="\" className="text-[16px] leading-[24px]font-semibold">Connect with me on LinkedIn</Link>
        </div>
        <div className="md:w-4/5 lg:w-1/2">
            <h2 className="font-sans text-[30px] font-bold uppercase leading-[36px] pb-[30px] mt-[68px] border-b border-slate-300 md:text-[36px] md:mt-[84px] lg:mt-0">
                Experience
            </h2>
            
            <div className="mt-[20px]">
                <h4 className="font-sans text-[13px] leading-[20px] capitalize text-amber-300 mb-[6px] md:text-[14px]">
                    February 2024 — Current
                </h4>
                <h3 className="font-sans text-[15px] leading-[20px] capitalize font-bold mb-[9px] md:text-[16px]">
                    DIRECTOR IC, PRODUCT DESIGN/ <span className="text-stone-600 font-thin">Atlassian</span>
                </h3>
                <p className="font-sans text-[13px] leading-[20px] capitalize text-stone-500 pb-[17px] border-b border-slate-300 md:text-[14px]">
                    As a Director-level Designer on the Growth team, 
                    I report directly to VP, Head of Design to lead various t
                    ypes of strategic growth design work across the company
                </p>
            </div>

            <div className="mt-[20px]">
                <h4 className="font-sans text-[13px] leading-[20px] capitalize text-amber-300 mb-[6px] md:text-[14px]">
                    February 2024 — Current
                </h4>
                <h3 className="font-sans text-[15px] leading-[20px] capitalize font-bold mb-[9px] md:text-[16px]">
                    DIRECTOR IC, PRODUCT DESIGN/ <span className="text-stone-600 font-thin">Atlassian</span>
                </h3>
                <p className="font-sans text-[13px] leading-[20px] capitalize text-stone-500 pb-[17px] border-b border-slate-300 md:text-[14px]">
                    As a Director-level Designer on the Growth team, 
                    I report directly to VP, Head of Design to lead various t
                    ypes of strategic growth design work across the company
                </p>
            </div>

            <div className="mt-[20px]">
                <h4 className="font-sans text-[13px] leading-[20px] capitalize text-amber-300 mb-[6px] md:text-[14px]">
                    February 2024 — Current
                </h4>
                <div>
                <h3 className="font-sans text-[15px] leading-[20px] capitalize font-bold mb-[9px] md:text-[16px]">
                    DIRECTOR IC, PRODUCT DESIGN/ <span className="text-stone-600 font-thin">Atlassian</span>
                </h3>
                </div>
                
                <p className="font-sans text-[13px] leading-[20px] capitalize text-stone-500 pb-[17px] border-b border-slate-300 md:text-[14px]">
                    As a Director-level Designer on the Growth team, 
                    I report directly to VP, Head of Design to lead various t
                    ypes of strategic growth design work across the company
                </p>
            </div>

            <div className="mt-[20px]">
                <h4 className="font-sans text-[13px] leading-[20px] capitalize text-amber-300 mb-[6px] md:text-[14px]">
                    February 2024 — Current
                </h4>
                <div>
                <h3 className="font-sans text-[15px] leading-[20px] capitalize font-bold mb-[9px] md:text-[16px]">
                    DIRECTOR IC, PRODUCT DESIGN/ <span className="text-stone-600 font-thin">Atlassian</span>
                </h3>
                </div>
                
                <p className="font-sans text-[13px] leading-[20px] capitalize text-stone-500 pb-[17px] border-b border-slate-300 md:text-[14px]">
                    As a Director-level Designer on the Growth team, 
                    I report directly to VP, Head of Design to lead various t
                    ypes of strategic growth design work across the company
                </p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

