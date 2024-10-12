import { Link } from "react-router-dom"
import logo from "../assets/midnightcraving.webp"
import About from "./About"
import { useRecoilValue } from "recoil"
import { isauthuser } from "../atoms/usersauth"
import { Button } from "./ui/button"
const Header = () => {
    const isuser = useRecoilValue(isauthuser)
    console.log(isuser)
    const arr = ["M", "N", "C"]
    return (
        <div className="flex flex-row justify-between items-center bg-gray-100 rounded-lg" >
            <Link to={"/"}><div className=" flex flex-row"><img src={logo} alt="mnc" className="rounded-full h-10" />
                <div className="sm:flex sm:justify-center sm:items-center sm:pb-2 hidden ">
                    {arr.map((x, index) => {
                        return (
                            <span key={index} className="text-2xl hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">{x}</span>
                        )
                    })

                    }
                </div>
            </div></Link>
            <div>
            </div>
            <div className="sm:hidden text-xl font-serif">
                <p> Mid Night Craving</p>
            </div>
            <div className="flex flex-row">
                <div className=" sm:flex sm:flex-row sm:gap-6 sm:p hidden flex-row"> <div className="text-xl hover:underline underline-offset-4 duration-100"><About></About></div>
                    <Link to={"/restaurant"}> <div className="text-xl  hover:underline underline-offset-4 duration-100">Restaurant</div></Link>
                    <Link to={"/cart"}><div className="text-xl  hover:underline underline-offset-4 duration-100">Cart</div></Link>
                    <Link to={"/admin/das"}><div className="text-xl  hover:underline underline-offset-4 duration-100">Dashboard</div></Link>

                </div> <div className="sm:pl-6">
                    {isuser ? <Button className="bg-dj hover:bg-manav">Login</Button> : <Button className="bg-dj hover:bg-manav">Logout</Button>}
                </div></div>


        </div>
    )
}
export default Header