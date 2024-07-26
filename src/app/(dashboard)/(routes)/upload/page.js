"use client";

import UploadForm from "@/components/UploadForm";
import { app } from "@/firebaseConfig";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function Page() {

    const [url, setUrl] = useState();
    const storage = getStorage(app);
    const [progress, setProgress] = useState();
    const uploadFile = (file) => {
        const spaceRef = ref(storage, 'file-upload/' + file?.name);
        const uploadTask = uploadBytesResumable(spaceRef, file, file.type);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            setProgress(progress)
            progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at: ', downloadURL)
                setUrl(downloadURL)
            })
        })
    }
    return (
        <div className="p-5 px-8 md:px-28">
            <h2 className="text-[20px] text-center m-5">Start <strong className='text-blue-500'>Uploading</strong> File and <strong className='text-blue-500'>Share</strong> it</h2>
            <UploadForm progress={progress} uploadBtnClick={(file) => uploadFile(file)} url={url}/>
        </div>
    )
}