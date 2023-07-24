import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
    const { user, isLoading } = useAppSelector((state) => state.user);

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <Link to="/profile">
                    {user?.name} <span className="bg-white rounded-full px-[7px]">Profile</span>
                </Link>
            ),
        },
        {
            key: "4",
            danger: true,
            label: "LogOut",
        },
    ];
    return (
        <div>
            <nav className="mx-auto block w-full rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div>
                    <div className="container mx-auto flex items-center justify-between text-gray-900">
                        <Link
                            to="/"
                            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                        >
                            <img
                                className="mr-2 h-10"
                                src={logo}
                                alt="Book Finder Logo"
                                loading="lazy"
                            />
                            <span className="font-bold text-xl dark:text-neutral-500">
                                Book Finder
                            </span>
                        </Link>
                        <ul className="hidden items-center gap-6 lg:flex">
                            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <a className="flex items-center" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <a className="flex items-center" href="#">
                                    All Books
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <a className="flex items-center" href="#">
                                    Blocks
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <a className="flex items-center" href="#">
                                    Docs
                                </a>
                            </li>
                        </ul>
                        <div>
                            {user?.email ? (
                                <Dropdown
                                    menu={{ items }}
                                    placement="bottomRight"
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Avatar
                                            className="cursor-pointer"
                                            size="large"
                                            src={user?.photoUrl}
                                        />
                                    </a>
                                </Dropdown>
                            ) : (
                                <>
                                    <NavLink to="/login" className="mr-2">
                                        <Button type="primary" danger>
                                            Login
                                        </Button>
                                    </NavLink>
                                    <NavLink to="/register">
                                        <Button type="primary" danger>
                                            Register
                                        </Button>
                                    </NavLink>
                                </>
                            )}
                        </div>
                        <button
                            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                            data-collapse-target="navbar"
                        >
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div
                        className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                        data-collapse="navbar"
                    >
                        <div className="container mx-auto pb-2">
                            <ul className="mt-2 mb-4 flex flex-col gap-2">
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Account
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Blocks
                                    </a>
                                </li>
                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                    <a className="flex items-center" href="#">
                                        Docss
                                    </a>
                                </li>
                            </ul>
                            <button
                                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
