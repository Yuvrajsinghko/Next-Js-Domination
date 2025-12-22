import Hello from "../../component/Hello"


const Home = () => {
  console.log("serverside component")
  return (
    <div className="text-7xl">heheh
      <Hello />
    </div>
  )
}

export default Home