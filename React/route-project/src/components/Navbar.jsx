import { NavLink } from "react-router-dom"

const Navbar = () => {
    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title:'Login',
            path:'/login'
        }
    ]
    return (
        <>
            
            <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                    <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        className="mr-2"
                    >
                        <circle cx="50" cy="50" r="40" fill="#1D4ED8" />
                        <text x="50%" y="50%" textAnchor="middle" stroke="#ffffff" strokeWidth="1px" dy=".3em" fontSize="20" fill="#ffffff">E-Shop</text>
                    </svg>
                    <span className="text-xl font-bold text-blue-600">E-Shop</span>
                    </div>
                </div>
                <div className='w-[40%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar