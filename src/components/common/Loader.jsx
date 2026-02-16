export const BarLoader = () => {
  return (
    <div className="flex gap-1">
      <div className="h-12 w-2 bg-customYellow animate-barAnimation [animation-delay:-0.5s]" />
      <div className="h-12 w-2 bg-customYellow animate-barAnimation [animation-delay:-0.25s]" />
      <div className="h-12 w-2 bg-customYellow animate-barAnimation [animation-delay:-0.125s]" />
      <div className="h-12 w-2 bg-customYellow animate-barAnimation [animation-delay:-0.0625s]" />
      <div className="h-12 w-2 bg-customYellow animate-barAnimation" />
    </div>
  );
};

const Loader = () => {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className="w-full h-screen grid place-content-center bg-gradient-to-r from-customBlue to-customBlack px-4 py-24"
    >
      <BarLoader />
    </div>
  );
};

export default Loader;
