import CreateForm from "./create";

export default function CreatecContact() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-6xl font-bold">Tạo liên hệ</h1>
            </div>
            <CreateForm />
        </div>
    );
}