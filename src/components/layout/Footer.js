export const Footer = () => {
  return (
    <footer>
      <div className="w-full mt-[128px] md:w-2/3">
        <p className="font-sans text-sm capitalize text-white text-opacity-60 pb-[17px]">
          Design inspired by Brittany Chiang’s portfolio. Built by me in{" "}
          <span className="font-bold text-white text-opacity-100">
            Visual Studio Code
          </span>{" "}
          using{" "}
          <span className="font-bold text-white text-opacity-100">React</span>{" "}
          and{" "}
          <span className="font-bold text-white text-opacity-100">
            Tailwind CSS
          </span>
          , and deployed on{" "}
          <span className="font-bold text-white text-opacity-100">Netlify</span>.
        </p>
      </div>
    </footer>
  );
};
