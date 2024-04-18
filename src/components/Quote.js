import quoteImg from '../assets/white_quotes.png';

export const Quote = () => {
  return (
    <div className="w-full max-w-[100rem] mt-[84px] bg-orange mx-auto">
      <div className="px-[38px] py-[40px] md:px-[46px] md:py-[80px] lg:px-[195px] lg:py-[85px]">
        <div className="w-full flex flex-col md:flex lg:flex-row lg:justify-center">
            <img src={quoteImg} alt="white quotes" className="w-[32px] h-[32px] me-[48px] md:mb-[20px]" />
            <p className="text-[16px] leading-[28px] text-white md:text-[18px] md:leading-[30px] lg:w-2/3">
                As a designer, I take a very pragmatic and data-informed approach to problem solving. 
                I like to understand key business goals, metrics that the team cares about and ultimately 
                thinking how they shape the roadmap and the reasons/purposes behind my initiatives. 
                I know how to be scrappy and flexible but I also know when to button up and really think 
                through the design solutions. My strengths lies on working across multiple projects, executing 
                on high quality designs quickly and working collaboratively with cross-functional partners. 
                I love growing the product, impacting the business and have passion for craft. 
            </p>
        </div>
        
      </div>
    </div>
  )
}
