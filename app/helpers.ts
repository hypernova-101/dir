import fs from "fs";
import fsPromise from "fs/promises";

export async function handleFileCreation(formData: FormData) {
    const name = formData.get("filename");
    const content = formData.get("filecontent");

    try {
        fs.access("files", fs.constants.F_OK, async (err) => {
            if(err) {
                fs.mkdirSync("files");
            }
            const promise = fsPromise.writeFile(`files/${name}`, `${content}`);
            await promise;
        });;
    
    } catch(error) {
        
    }
}