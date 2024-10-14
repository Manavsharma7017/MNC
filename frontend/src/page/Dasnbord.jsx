import banner from "../assets/banner.webp"
const Dashbord = () => {
    return (
        <div className="w-screen h-screen">
            <img src={banner} alt="MNC" className="sm:w-screen sm:h-screen p-2 min-h-96 max-w-screen absolute  overflow-hidden" />
            <div className="group relative sm:w-screen sm:h-screen min-h-96 max-w-screen flex flex-row justify-center items-center"> <Link to={"/restaurant"}> <Button className="mt-24 bg-dj hover:bg-manav shadow-md rounded-md"> Go to Restaurant</Button></Link></div>

        </div>
    )
}
export default Dashbord