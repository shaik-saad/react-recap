import Card from './Card'
import './App.css'

function App() {
  
  const cardOneData = {
    title: "Code with bugs needs to be debugged",
    image: "https://images.pexels.com/photos/2756843/pexels-photo-2756843.jpeg",
    tags: ["code", "bugs", "debug"],
    author: "Hitesh Chaudhary",
    social: "chaicode"
  }

  const cardTwoData = {
    title: "THINK BIG!",
    image: "https://images.pexels.com/photos/1144281/pexels-photo-1144281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["think", "dream", "sayNoToComfortZone"],
    author: "Shaik Saadullah",
    social: "shaik.saadullah"
  }
  return (
    <>
      <h1 className='p-4 rounded mb-5 bg-cyan-600'>Reusable Components using Props & Tailwind</h1>
      <div className="flex items-center flex-col">
        <Card cardData={cardOneData} />
        <Card cardData={cardTwoData} />
      </div>
    </>
  )
}

export default App
