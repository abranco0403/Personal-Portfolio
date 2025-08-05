import image404 from "../assets/404.png"

const errorPage = () => {
    <div className="w-screen flex flex-col gap-4 bg-gradient-to-r from-customBlue to-customBlack md:flex-row md:justify-between">
        <img src={image404} alt="Error 404" />
    </div>
}
export default errorPage;