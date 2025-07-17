import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-6xl font-bold">Trang chủ</h1>
        </div>
      </div>
    </main>
  );
}
