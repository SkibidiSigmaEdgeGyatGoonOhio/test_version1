export default async function Intro() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-6xl font-bold">Giới thiệu</h1>
            </div>
        </div>
    );
}