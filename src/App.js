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
        <div className="flex flex-col space-y-6 ">
          <div className="flex flex-col mb-4 items-center space-y-3 text-center md:items-start md:text-left">
            <p className=" max-w-fit bg-black text-white rounded-full  px-3 py-1 text-sm">
              Free Shipping
            </p>
            <div className=" max-w-sm text-2xl font-medium md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className="flex flex-col space-y-3 mb-4 text-center md:text-left">
              <p className=" line-through ">$799</p>
              <p className=" text-5xl font-bold">$599</p>
              <p className="text-gray-400 text-sm font-light ">
                On the other hand, we denounce with righteous indignation and
                dislike men
              </p>
              <div className="group">
                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 shadow-md transition duration-200 border-b-8 border-blue-700 rounded-lg
                group-hover:bg-blue-500 group-hover:border-t-8 group-hover:border-b-0 group-hover:border-blue-800 group-hover:shadow-lg"
                >
                  <div className=" duration-150 ">Buy now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
