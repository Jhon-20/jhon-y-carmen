import { Logout, Monitor } from "iconsax-react"
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const Systems = () => {

  const navigate = useNavigate();

  const objSystem = [
    {
      name: 'SRA Sistema de Regulación de Accesos'
    },
    {
      name: 'SGE Sistema de Gestión de Eventos'
    },
    {
      name: 'SMC Sistemas Maint Control'
    },

  ]
  const logout = () => {
    navigate('/');
  };

  return (
    <div className=" w-full space-y-8">
      <section className="bg-gray-50 min-h-full h-screen px-0 xl:px-10">
        <div className="flex flex-col  px-6 py-8  md:h-screen lg:py-0">
          <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img className="w-[150px]" src={logo} alt="logo" />
              </div>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button onClick={() => logout()} type="button" className="flex justify-center items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Logout size="20" color="#FFFFFF" />
                  Cerrar sesión
                </button>
              </div>
            </div>
          </nav>
          <div className="py-[40px] lg:py-[60px]">

          </div>
          <h1 className="text-3xl font-light">Sistema de Seguridad Integrado de Aenza</h1>
          <div className="flex justify-center gap-8 xl:justify-between flex-wrap  pt-8">
            {
              objSystem.map((item) => (
                <div className="flex flex-col justify-between w-full md:w-[360px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                  <div>
                    <Monitor size="32" color="#0345F5" />
                    <a href="#">
                      <h2 className="mb-2 text-[20px] font-medium  text-gray-900 ">{item.name}</h2>
                    </a>
                  </div>

                  <a href="#" className="flex items-center w-[100px] px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Acceder
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>

                </div>
              ))
            }
          </div>




        </div>
      </section>
    </div>

  )
}

export default Systems