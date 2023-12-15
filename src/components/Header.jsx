import face from '/src/assets/images/troll-face.png'
const Header = () => {
  return (
    <header className="header flex text-white py-2 items-center gap-2 bg-gradient-to-r mx-3 my-2 rounded-md from-purple-800 to-purple-950">
        <img src={face} alt="troll face" className='w-[100px] ml-2'/>
        <h2 className='text-xl font-bold'>
            Meme Generator
        </h2>
        <p className='absolute right-10 text-lg'>React course-Project 3</p>
    </header>
  )
}

export default Header