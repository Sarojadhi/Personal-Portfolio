const Home = () => {
  return (
    <>

      <div className="flex items-center justify-center min-h-screen px-10">

        <div className="w-1/2 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmU1DFvyB4YSVo4Z4Joil8oNljjjPh53AB6A&s"
            alt="Your Photo"
            className="rounded-xl w-96 h-auto shadow-lg"
          />
        </div>


        <div className="w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4">Hi <span className='text-green-900'>Everyone</span> , I am <span className='text-red-400'>Saroj</span></h1>
          <p className="text-lg text-gray-700">
            I am currently working on a <span className='text-blue-900 text-2xl font-bold'>Frontend
            </span> project. I love building beautiful,
            interactive UIs with
            modern technologies like
            <span className='font-bold text-amber-300-800'> React, Tailwind CSS, and JavaScript</span>
            . I'm passionate about solving problems and delivering great user experiences.
          </p>
        </div>
      </div>


      <div className="m-10 p-8 max-w-4xl bg-gradient-to-br from-amber-200 to-amber-300 shadow-xl rounded-2xl flex flex-col justify-center">
        <h4 className="text-3xl font-bold text-cyan-800 mb-6 border-b-9 border-cyan-700 pb-2">
          ABOUT ME :
        </h4>

        <pre className="bg-white p-6 rounded-xl text-sm leading-relaxed text-gray-800 font-mono overflow-x-auto shadow-inner">
          <code >
            {`const portfolio = {
  Name: "SAROJ ADHIKARI",
  title: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  projects: [
    {
      Name: "react-LoginForm",
      description: "A web app that gives user to submit form .",
      link: "https://github.com/Sarojadhi/react-LoginForm"
    },
    {
      Name: "testiomonial-slider-project",
      description: "simple project . ",
      link: "https://github.com/Sarojadhi/testiomonial-slider-project-"
    }
  ],
  contact: {
    email: "sarojadh1111@gmail.com",
    github: "https://github.com/Sarojadhi" 
  }
};`
            }

            
          </code>
        </pre>
      </div>
      <div className="m-10 p-10 container mx-auto border-2 rounded-2xl">
        <p className='text-3xl font-bold m-1 p-2'>skills : </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYM3Ip8rQjt13NAHXYtbgBxJZoHuhn4QCgg&s" alt="Html logo" className="w-24 h-24 object-cover rounded" />
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-n6zk98qLLE1nO95Wq0hqTL56O4ob2QJt2w&s" alt="css logo" className="w-24 h-24 object-cover rounded" />
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvXPKaiUD_nueZ-2jiRDEnXrPaaw4LF_wgA&s" alt="js logo" className="w-24 h-24 object-cover rounded" />
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DbBdGqAn-XNoEcK5T9ZalCyFn77vEeg7-Q&s" alt="react js logo" className="w-24 h-24  rounded" />
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzP_D_QVPRixDapCj2SLwTpmB6c0loqZTiNw&s" alt="bootstrap logo " className="w-24 h-24 object-cover rounded" />
          </div>

          <div className="flex justify-center items-center bg-gray-100 p-4 rounded shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3bdB2mF_lV_8xbogyHbjKM7MW_fXIjVVLA&s" alt="Node js" className="w-24 h-24 object-cover rounded" />
          </div>
        </div>
      </div>


    </>
  )
}

export default Home


