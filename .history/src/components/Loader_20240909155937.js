const Loader = () => {
    return (
      <div className="w-full h-screen grid place-content-center bg-gradient-to-r from-customBlue to-customBlack px-4 py-24">
        <BarLoader />
      </div>
    );
};
  
export const BarLoader = () => {
    return (
        <div className="flex gap-1 animate-staggerAnimation">
        <div className="h-12 w-2 bg-customYellow animate-barAnimation [animation-delay:-0.3s]" />
        <div className="h-12 w-2 bg-customYellow animate-barAnimation" />
        <div className="h-12 w-2 bg-customYellow animate-barAnimation" />
        <div className="h-12 w-2 bg-customYellow animate-barAnimation" />
        <div className="h-12 w-2 bg-customYellow animate-barAnimation" />
        </div>
    );
};

export default Loader;