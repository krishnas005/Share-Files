"use client";

import React, { useState, useEffect } from 'react';
import FilePreview from './FilePreview';
import UploadProgressBar from './UploadProgressBar';

function UploadForm({ uploadBtnClick, progress, url }) {
    const [file, setFile] = useState(null);
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploadStarted, setUploadStarted] = useState(false);

    useEffect(() => {
        const shortenUrl = async (longUrl) => {
            setLoading(true);
            const apiUrl = 'https://srtn-me-url-shortener.p.rapidapi.com/api/shorten';
            const data = new FormData();
            data.append('description', 'File URL');
            data.append('url', longUrl);

            const options = {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': 'bc7f830d68msh6e7d71c94132fd9p1fdfecjsnf7d37d5599a5',
                    'x-rapidapi-host': 'srtn-me-url-shortener.p.rapidapi.com'
                },
                body: data
            };

            try {
                const response = await fetch(apiUrl, options);
                const result = await response.text();
                console.log(result)
                setShortUrl(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            shortenUrl(url);
        }
    }, [url]);

    const onFileSelect = (file) => {
        if (file && file.size > 2000000) {
            alert("Size is greater than 2 MB");
            return;
        }
        setFile(file);
    };

    const handleUploadClick = () => {
        setUploadStarted(true);
        uploadBtnClick(file);
    };

    const resetForm = () => {
        setFile(null);
        setShortUrl('');
        setLoading(false);
        setUploadStarted(false);
        window.location.reload(); // Reloads the page to reset the form
    };

    return (
        <div className='mt-10 text-center'>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-12 h-12 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 md:text-2xl text-lg text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or <strong className="text-blue-500">drag</strong> and <strong className="text-blue-500">drop</strong></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => onFileSelect(event.target.files[0])} />
                </label>
            </div>
            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
            {!uploadStarted && (
                <button
                    disabled={!file || loading}
                    className="px-5 py-2 mt-4 bg-blue-500 text-white rounded-full disabled:bg-gray-500"
                    onClick={handleUploadClick}
                >
                    Upload
                </button>
            )}
            {progress > 0 && <UploadProgressBar progress={progress} />}
            {loading ? <p>Loading...</p> : (progress === 100 && shortUrl ? <p className="mt-4 text-blue-500">{shortUrl}</p> : null)}
            <button
                className="px-5 py-2 mt-4 bg-red-500 text-white rounded-full"
                onClick={resetForm}
            >
                Reset
            </button>
        </div>
    );
}

export default UploadForm;
