import Login from "@/components/Login"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Signup from "@/components/Signuo"
const Auth = () => {
    return (
        <div className="mt-36 flex flex-col items-center gap-10">
            <h1 className="text-5xl font-extrabold">
                login / singup
            </h1>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">login</TabsTrigger>
                    <TabsTrigger value="signup">singup</TabsTrigger>
                </TabsList>
                <TabsContent value="login"><Login></Login></TabsContent>
                <TabsContent value="signup"><Signup></Signup></TabsContent>
            </Tabs>

        </div>
    )
}
export default Auth