import axios from "axios";
import { useEffect, useState } from "react"

export default function useData(username) {
    const [data, setdata] = useState("");
    const [loding, setloding] = useState(true);
    useEffect(() => {
        if (!username) {
            return
        }
        const cal = async () => {
            try {
                const responce = await axios.post("http://localhost:3000/api/v1/user/otp", { username });
                setloding(false);
                setdata(responce.data.message)
            } catch (e) {
                setloding(false);
                setdata("Can not send OTP")
            }
        }
        cal()
    }, [username])
    return [data, loding]
}