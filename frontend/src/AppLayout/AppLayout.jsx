import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="h-screen w-screen">
            <main> <Header></Header>
                <Outlet></Outlet></main>

        </div>
    )
}
export default AppLayout