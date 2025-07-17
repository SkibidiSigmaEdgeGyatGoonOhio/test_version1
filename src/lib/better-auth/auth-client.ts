import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins"
// import dayjs from "dayjs"
// import { polarClient } from "@polar-sh/better-auth"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.WEBSITE_URL,

    plugins: [inferAdditionalFields({
        user: {
            role: {
                type: "string",
                input: false,
                required: false
            },
            // status: {
            //     type: "string",
            //     input: false,
            //     required: false
            // },
            // trial_progress: {
            //     type: "date",
            //     input: false,
            //     required: false,
            //     default: dayjs().toDate()
            // },
            // tutorial: {
            //     type: "boolean",
            //     input: true,
            //     required: false,
            //     default: true
            // }
        }
    }),
        // polarClient()
    ]
})