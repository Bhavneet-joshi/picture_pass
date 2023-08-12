import {RiSlideshow3Fill} from 'react-icons/ri';
import React, {useEffect, useState} from 'react';
import {TbMovie} from 'react-icons/tb';
import {useParams, Link} from 'react-router-dom';
import {FaPlay} from 'react-icons/fa';
import Slider from 'react-slick';
import {
  AiOutlineSearch, AiOutlineLeft, AiFillCaretDown, AiFillHome, AiFillStar, AiOutlineMenu, AiFillPlayCircle,
} from 'react-icons/ai';

export default function SoloMovie(props) {
  const [movie, setmovie] = useState([]);
  const [language, setlanguage] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);
  const [type, setType] = useState([]);
  const [company, setCompany] = useState([]);
  const {id} = useParams();
  const URL = `https://api.themoviedb.org/3/${props.url}/${id}?api_key=6cb47492a1b8e813721571c6352d2ea2`;

  const settingCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],};


  const RazerPay = () => {
    const options = {
      key: 'rzp_test_LbEFtvrkEXed8c',
      amount: 399 * 100,
      currency: 'INR',
      name: 'picture',
      description: 'Movie Purchase on Rental',
      image: '../logo.png',
      handler: () => {
        alert('Payment Done');
      },
      theme: {color: '#DC2626'},
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setmovie(jsonData);
        setType(jsonData.genres);
        setlanguage(jsonData.spoken_languages);
        setCompany(jsonData.production_companies);
        const crewResponse = await fetch(`https://api.themoviedb.org/3/${props.url}/${id}/credits?api_key=6cb47492a1b8e813721571c6352d2ea2`);
        const crewData = await crewResponse.json();
        setMovieCrew(crewData.crew);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const LgSize = () => (
    <>
      <div className="flex justify-around py-4  bg-dark_grey-700 ">
        <div className="flex gap-2">
          <img src="../logo.png" className="w-12" alt="" />
          <div className="flex ">
            <div className="bg-white py-3 px-2 rounded-l">
              <AiOutlineSearch />
            </div>
            <input type="search" name="" className="w-96 rounded-r outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex text-white cursor-pointer py-2">
            <p>Bathinda</p>
            <div className="py-1">
              <AiFillCaretDown />
            </div>
          </div>
          <button className="bg-red-600 rounded p-2 px-4 text-white">Sign in</button>
          <div className=" text-white cursor-pointer py-3">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div className="text-white bg-dark_grey-800  m-auto pb-2 px-72 py-2">
        <Link className="text-white px-2" to="/">Home</Link>
        <Link className="text-white px-2" to="/plays">Plays</Link>
        <Link className="text-white px-2" to="/tvShow">Tv Shows</Link>
        <Link className="text-white px-2" to="/movies">Movies</Link>
      </div>

      <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}} className=" bg-right bg-cover   mx-20  rounded ">
        <div className="flex text-white py-20 " style={{background: 'linear-gradient(to right, black 25%, rgba(0, 0, 0, 0.5),black '}}>
          <div className="px-52 flex ">
            <Link to={movie.homepage} key={movie.id} className="relative w-3/4 cursor-pointer flex justify-center ">
              <div className="absolute flex top-1/2 py-1 px-2 rounded" style={{background: 'rgba(0,0,0,0.7)'}}>
                <div className="mt-1 mr-1">
                  <FaPlay />
                </div>
                <span>Trailer</span>
              </div>
              <img className="m-4 rounded"
            style={{ width: "calc(100% - 2rem)" }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </Link>
            <div className="mx-10 ">
              {props.type === 'tv' ? (
                <>
                  <div className="font-bold text-2xl ">{movie.name}</div>
                  <div className="my-2 text-gray-400">{movie.overview}</div>
                  <div>
                    S
                    {movie.number_of_seasons}
                    , Ep
                    {movie.number_of_episodes}
                  </div>
                </>
              ) :
                (
                  <>
                    <div className="font-bold text-2xl ">{movie.original_title}</div>
                    <div className="my-2 text-gray-400">{movie.overview}</div>
                    <div>
                      {movie.runtime}
                      m ,
                      {' '}
                      {movie.release_date}
                    </div>
                  </>
                )}
              <div>
                {' '}
                {type.map((type) => `${type.name}` + ', ')}
              </div>
              <div>
                {' '}
                {language.map((language) => `${language.english_name}` + ', ')}
              </div>
              <div className="font-bold flex text-2xl py-3">
                <div className=" pr-2 text-3xl  text-red-600 "><AiFillStar /></div>
                {movie.popularity}
                <span className="text-gray-500 text-sm px-2 pt-2">
                  {' '}
                  {movie.vote_count / 1000}
                  K Votes
                </span>
              </div>
              <button className="bg-red-600 text-white px-14 py-2 rounded" onClick={RazerPay}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
  const MdSize = () => (
    <>
      <div className=" flex bg-dark_grey-800 p-3 font-bold text-xl  text-white">
        <div className="mt-1 mr-1">
          <AiOutlineLeft />
        </div>
        <div>{props.type === 'tv' ? movie.name : movie.original_title}</div>
      </div>
      <Link to={movie.homepage} key={movie.id}>
        <div className=" bg-center  bg-cover relative rounded mx-10 mt-5 text-white h-44" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}}>
          <div className=" flex justify-center rounded  h-44" style={{background: 'rgba(0,0,0,0.5)'}}>
            <div className="flex absolute top-1/2">
              <div className="mt-1 mr-1">
                <FaPlay />
              </div>
              <span>Trailer</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="font-bold flex mx-10 text-2xl py-2">
        <div className=" pr-2 text-3xl  text-red-600 "><AiFillStar /></div>
        {movie.popularity}
        <span className="text-gray-500 text-sm px-2 pt-2">
          {' '}
          {movie.vote_count / 1000}
          K Votes
        </span>
      </div>
      <div className="mx-10 ">
        {props.type === 'tv' ? (
          <>
            <div className=" text-gray-500">{movie.overview}</div>
            <div className="text-dark_grey-800 font-semibold">
              S
              {movie.number_of_seasons}
              , Ep
              {movie.number_of_episodes}
            </div>
            <div className="text-dark_grey-800 ">{type.map((type) => `${type.name}` + ', ')}</div>
          </>
        ) :
          (
            <>
              <div className="my-1 text-gray-500 ">{movie.overview}</div>
              <div className="text-dark_grey-800  font-semibold">
                {movie.runtime}
                m .
                {' '}
                {type.map((type) => `${type.name}` + ', ')}
              </div>
            </>
          )}
        <p className="p-2 text-white my-1 bg-dark_grey-700  rounded">
          {' '}
          {language.map((language) => `${language.english_name}` + ', ')}
        </p>
      </div>
      <div className="z-10 fixed w-full bottom-0 bg-white pb-2 rounded-t">
        <button className="bg-red-600 text-white py-2 mb-2  w-full rounded " onClick={RazerPay}>Book Now</button>
        <div className=" flex justify-around">
          <Link to="/">
            <div className="text-black text-3xl">
              <AiFillHome />
            </div>
            <p className="text-black">Home</p>
          </Link>
          <Link to="/plays">
            <div className="text-black text-3xl">
              <AiFillPlayCircle />
            </div>
            <p className="text-black">Plays</p>
          </Link>
          <Link to="/tvShow">
            <div className="text-black  text-3xl mx-2">
              <RiSlideshow3Fill />
            </div>
            <p className="text-black">Tv Shows</p>
          </Link>
          <Link to="/movies">
            <div className="text-black text-3xl mx-2">
              <TbMovie />
            </div>
            <p className="text-black">Movies</p>
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="sm:block lg:hidden">
        <MdSize />
      </div>
      <div className="lg:block hidden">
        <LgSize />
      </div>
      <div className="mx-10 my-10 ">
        <h1 className="text-3xl font-bold">Top offers for you</h1>
        <div className=" inline-flex gap-2 bg-yellow-100 my-2 border-yellow-200 px-10 py-4  border-dashed">
          <img src="../logo.png" className="w-10 h-10" alt="" />
          <div className="">
            <p className="text-xl">10% off on movie munchies!</p>
            <p className="text-gray-500">Tap to view details</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl mx-10">Production Companies</h1>
        <div className="flex flex-wrap justify-around my-10 mx-auto ">
          {company.map((type) => (
            type.logo_path === null ? '' : (
              <div className="text-center">
                <img className="w-14 m-auto" src={`https://image.tmdb.org/t/p/w500${type.logo_path}`} alt="" />
                <p className="mt-3 ">{type.name}</p>
                <p className="text-gray-500 ">{type.origin_country}</p>
              </div>
            )
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl mx-10">Crew Members</h1>
        <div className="flex flex-wrap justify-around my-10 mx-auto">
          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
            <Slider {...settingCast}>
              {movieCrew.map((crewMember) => (
                <div key={crewMember.id}>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
                        alt="cast and crew members"
                        className="w-full h-full rounded-full object-center object-cover"
                      />
                    </div>
                    <h1 className="text-xl text-gray-800">{crewMember.name}</h1>
                    <h5 className="text-sm text-gray-500">as {crewMember.job}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="my-8">
            <hr />
          </div>
          
        </div>
      </div>
      
    </>
  );
}
