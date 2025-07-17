import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/drizzle/index";
// import dayjs from "dayjs";
// import { polar, checkout, webhooks } from "@polar-sh/better-auth";
// import { Polar } from "@polar-sh/sdk";
import { nextCookies } from "better-auth/next-js";

// const polarClient = new Polar({
//     accessToken: process.env.POLAR_ACCESS_TOKEN,
//     server: 'sandbox'
// });

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    advanced: {
        database: {
            generateId: false,
        },
    },
    user: {
        additionalFields: {
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
            //     defaultValue: dayjs().toDate()
            // },
            // tutorial: {
            //     type: "boolean",
            //     input: true,
            //     required: false,
            //     defaultValue: true
            // }
        }
    },

    plugins: [
        nextCookies(),
        // polar({
        //     client: polarClient,
        //     createCustomerOnSignUp: true,
        //     use: [
        //         checkout({
        //             products: [
        //                 {
        //                     productId: "910ea0ff-862c-4a96-bff5-5ed29c0b627c", // ID of Product from Polar Dashboard
        //                     slug: "saas" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
        //                 }
        //             ],
        //             successUrl: process.env.WEBSITE_URL + "/success?checkout_id={CHECKOUT_ID}",
        //             authenticatedUsersOnly: true
        //         }),
        //         // webhooks({
        //         //     secret: process.env.POLAR_WEBHOOK_SECRET as string,

        //         //     onOrderCreated: async (order) => {
        //         //         console.log(order);
        //         //     }
        //         // })
        //     ],
        // }),
    ],

    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        },
    },


});


// type Session = typeof auth.$Infer.Session