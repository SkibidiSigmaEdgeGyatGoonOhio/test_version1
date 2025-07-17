import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
	// if (!sessionCookie) {
	// 	if (!request.nextUrl.pathname.startsWith("")) {
	// 		return NextResponse.redirect(new URL("", request.url));
	// 	}
	// }
	// else {
	// 	if (request.nextUrl.pathname.startsWith("")) {
	// 		return NextResponse.redirect(new URL("", request.url));
	// 	}
	// }

	return NextResponse.next();
}

export const config = {
	//   runtime: "nodejs",
	matcher: [],
};