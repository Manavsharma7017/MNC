import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="h-screen w-screen">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}
export default AppLayout