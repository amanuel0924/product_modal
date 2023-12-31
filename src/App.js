import headPhone from "./assets/headphone.png"
function App() {
  return (
    <div className=" flex w-full h-screen justify-center items-center bg-slate-100">
      <div className=" bg-white shadow-2xl flex flex-col p-6 m-3 space-y-10 md:space-y-0 md:space-x-10 md:flex-row rounded-lg md:m-0 md:p-16">
        <div>
          <img
            src={headPhone}
            alt="headphone"
            className=" w-60 mx-auto duration-200  hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default App
