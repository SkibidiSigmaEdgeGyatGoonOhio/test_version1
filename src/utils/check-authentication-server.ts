import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import dayjs from "dayjs"

const CheckAuthentication = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session){
        throw new Error("Not authenticated")
    }else{
        if(session.user.status !== "active" && session.user.status === "free_trial" && dayjs().diff(dayjs(session.user.createdAt), "day") > 14){
            throw new Error("Trial ended")
        }
    }
}

export default CheckAuthentication