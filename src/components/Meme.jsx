/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const Meme = () => {
  const [memes,setMemes] = useState([])
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "",
    name: "",
  });

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(payload => setMemes(payload.data.memes))
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const random = Math.floor(Math.random() * memes.length);
    setMeme((prev) => ({
      ...prev,
      url: memes[random].url,
      name: memes[random].name,
    }));
  }
  return (
    <main>
      <form
        className=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-container grid grid-cols-2 items-center gap-9 m-3">
          <input
            type="text"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
            placeholder="Top Text"
            className=" indent-1 ring-2 ring-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <input
            value={meme.bottomText}
            onChange={handleChange}
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            className=" indent-1 ring-2 ring-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <button
            type="submit"
            className=" focus:ring-4 focus:ring-purple-300 bg-gradient-to-l col-span-2 text-white text-xl from-purple-600 to-purple-900 p-2 rounded-md"
          >
            Get a new meme image 🖼️
          </button>
        </div>
      </form>
      {meme && (
        <div className="w-[40vw] relative mx-auto my-2 gap-2 flex flex-col justify-center items-center">
          <h1
            style={{ WebkitTextStroke: "2px black" }}
            className="text-center font-extrabold absolute top-3 text-white uppercase text-3xl"
          >
            {meme.topText}
          </h1>
          {meme.url.length > 0 && (
            <img src={meme.url} alt="meow" className="my-2 mx-auto h-[400px]" />
          )}
          <h1
            style={{ WebkitTextStroke: "2px black" }}
            className="text-center font-extrabold absolute bottom-3 text-white uppercase text-3xl "
          >
            {meme.bottomText}
          </h1>
        </div>
      )}
      <div className="grid grid-cols-3 my-2 mx-auto w-fit"></div>
    </main>
  );
};

export default Meme;
