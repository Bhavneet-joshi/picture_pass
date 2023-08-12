import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

import LanguageList from '../components/Languagelist.js';

export default function Pagetemplate(props) {
    const [images, setImages] = useState([]);
    const URL = `https://api.themoviedb.org/3/${props.url}?api_key=e830e91cc2557fa699699b520137053e`;
    const [selectedLanguage, setSelectedLanguage] = useState(''); // Track selected language
    const onTop = () =>
        document.documentElement.scrollTop = 0;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              selectedLanguage
                ? `${URL}&with_original_language=${selectedLanguage}`
                : URL
            );
            const jsonData = await response.json();
            const movies = jsonData.results;
            setImages(movies);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [selectedLanguage , URL ]);
    return (
        <div className='mx-16 my-10 flex'>
            <div className='border-red-600 lg:w-5/6 lg:block md:hidden sm:hidden hidden  '>
                <h1 className='font-bold text-2xl text-red-600'>Filters</h1>
                <div className="grid divide-y divide-neutral-200 max-w-xl ml-5 mt-8">
                    <div className="pb-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className=' text-red-600'>Languages</span>
                                <span className="transition group-open:rotate-180 text-red-600">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex gap-2">
                            <LanguageList
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
              />
                            </div>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className=' text-red-600'>Genres</span>
                                <span className="transition group-open:rotate-180 text-red-600">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex gap-2 flex-wrap">
                                <span value="Action" className='cursor-pointer border p-1 mt-1 inline text-red-600'>Action</span>
                                <span value="Drama" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Drama</span>
                                <span value="Adventure" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Adventure</span>
                                <span value="Comedy" className='cursor-pointer border p-1  mt-1 inline text-red-600'>Comedy</span>
                            </div>
                        </details>
                    </div>
                </div>
            </div>


            <div className="py-4 flex flex-wrap">
  {images.length === 0 ? ( // Check if no images found
    <p className="text-red-600 font-bold">
      No movies or TV shows found for the selected language.
    </p>
  ) : (
    // If images are found, map and display them
    images.map((image) => {
      return (
        <Link to={props.type === "tv" ? `/tv/${image.id}` : `/movies/${image.id}`} onClick={onTop} className='sm:px-5 px-2 md:w-52 lg:w-64 sm:w-44 w-40 mx-auto  outline-none mt-5 ' key={image.id}>
                                <img className='lg:h-72 lg:w-64  rounded-t cursor-pointer' src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} alt="" />
                                <div className='bg-slate-950 rounded-b text-white p-2 gap-1 flex '>
                                    <div className=' py-1 text-green-600 text-xl'>
                                        <AiFillStar />
                                    </div>
                                    {image.popularity}
                                </div>
                                {props.type === "tv" ?
                                    <>
                                        <h1 className='font-bold cursor-pointer'>{image.name}</h1>
                                        <div className='flex gap-2'>
                                            <h2 className=' cursor-pointer'>{image.first_air_date}</h2>
                                            <p className='cursor-pointer text-gray-500'>({image.original_language})</p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <h1 className='font-bold cursor-pointer'>{image.original_title}</h1>
                                        <h2 className=' cursor-pointer'>{image.release_date}</h2>
                                    </>
                                }
                            </Link>
      );
    })
  )}
</div>
        </div>
    )
}
