import fs from "fs/promises";
import Link from "next/link";

async function FileList() {

    const files = await fs.readdir("files", { recursive: true });

    return (
    <div className="p-4 rounded-2xl bg-indigo-400">
        { files.map((file, i) => {
            return <File name={file} key={i}/>
        }) }
    </div>
  )
}

function File({ name }: { name: string }) {
    return (
        <div className="flex justify-between items-center bg-indigo-300 rounded-2xl mt-4 p-4">
            <h1 className="text-white text-2xl font-bold">{name}</h1>
            <Link 
                href={`edit/${name}`}
                className="bg-indigo-500 py-2 px-4 rounded-2xl font-bold"
            >
                Edit
            </Link>
        </div>
    )
}

export default FileList