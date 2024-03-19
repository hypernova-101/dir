import Loading from "@/components/Loading"
import FileList from "@/components/FileList"
import { Suspense } from "react"

function WritePage() {
  return (
    <div className="p-4 text-white">
      <h1 className="text-center text-black font-extrabold text-5xl mb-4">Files</h1>
       <Suspense fallback={<Loading/>}>
          <FileList/> 
        </Suspense>
    </div>
  )
}

export default WritePage