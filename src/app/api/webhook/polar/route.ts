// import { db } from "@/lib/drizzle";
// import { user } from "@/lib/drizzle/schema";
// import { Webhooks } from "@polar-sh/nextjs";
// import { eq } from "drizzle-orm";

// export const POST = Webhooks({
//   webhookSecret: process.env.POLAR_WEBHOOK_SECRET as string,

//   onOrderCreated: async (order) => {
//     if (order.data.customer.externalId) {
//       await db.update(user).set({
//         status: "active",
//       }).where(eq(user.id, order.data.customer.externalId));
//     }
//   }
// });
