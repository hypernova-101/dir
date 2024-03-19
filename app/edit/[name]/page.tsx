import fs from "fs/promises";

async function FileEditPage({ params }: { params: { name: string }}) {
    
    const content = await fs.readFile(`files/${params.name}`);
    const data = Buffer.from(content).toString("utf8");

    return (
    <div>
        <form className="flex justify-center mt-4"> 
            <textarea
                name="area"
                cols={30}
                rows={10}
                className="border border-black rounded-2xl p-4">
                    { data }
            </textarea>
        </form>
    </div>
  )
}

export default FileEditPage