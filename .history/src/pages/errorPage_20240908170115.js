import image404 from "../assets/404.png"

const errorPage = () => {
    <div className="w-screen flex flex-col gap-4 bg-gradient-to-r from-customBlue to-customBlack md:flex-row md:justify-between">
        <img src={image404} alt="Error 404" />
        <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl text-gray-700">Something went wrong.</p>
        <p className="mt-4 text-gray-500">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Go to Homepage</a>
      </div>
    </div>
}
export default errorPage;