import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    return NextResponse.json({
        Contact: [
            {
                name: 'Đoàn Phú Bình',
                email: 'yes@mail.com',
            },
            {
                name: 'Nguyễn Đình Đăng Nguyên',
                email: 'no@mail.com',
            }
        ],
    });
}   