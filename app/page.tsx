import { redirect } from "next/navigation";
import { handleFileCreation } from "./helpers";
import FileList from "@/components/FileList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {

  const createFile = async (formData: FormData) => {
    "use server";
    handleFileCreation(formData);
    redirect("/");
  }

  return (
    <main className="flex flex-col justify-center">
      <form
        action={createFile}
        className="text-white bg-indigo-400 rounded-2xl flex flex-col p-4 m-4"
      >
        <h1 className="text-center text-3xl font-bold mt-4">Create a file</h1>
        <input
          type="text"
          name="filename"
          id="filename"
          className="my-4 p-4 text-black rounded-2xl"
          placeholder="Enter file name"
          required
        />
        <input
          type="text"
          name="filecontent"
          id="filecontent"
          className="mb-4 p-4 text-black rounded-2xl"
          placeholder="Enter file content"
          required
        />
        <button 
          type="submit"
          className="bg-indigo-500 p-4 rounded-2xl text-3xl font-bold hover:bg-indigo-600"
        >
          Create
        </button>
      </form>

      <div className="p-4 text-white">        
        <Suspense fallback={<Loading/>}>
          <FileList/> 
        </Suspense>
      </div>

    </main>
  );
}
