import Link from 'next/link';
import Img from 'next/image';
import Logo from './logo.png';

export default function Navbar() {
    return (
        <nav>
            <Img src={Logo} alt='Logo' width={200} quality={100} />
            <div className="flex justify-center my-8">
                <Link href="/" className="mr-4">
                    <button className="btn-default">Home</button>
                </Link>
                <Link href="/intro">
                    <button className="btn-primary">View Giới thiệu</button>
                </Link>
                <Link href="/intro/contact" className="ml-4">
                    <button className="btn-secondary">View Liên hệ</button>
                </Link>
            </div>
        </nav>
    );
}