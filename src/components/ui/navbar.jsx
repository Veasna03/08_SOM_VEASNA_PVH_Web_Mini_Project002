export default function NavBarPage(){
    return (
        <>
        
        <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
  <div className="flex-1 flex justify-between items-center">
  <a href="#" className="text-xl">
    Workspace &nbsp; &nbsp; HRD design
</a>
  </div>
  <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
    <svg
      className="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>
  <input className="hidden" type="checkbox" id="menu-toggle" />
  <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          <a className="md:p-4 py-3 px-0 block" href="#">
          <svg
  className="w-6 h-6 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 14 20"
>
  <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
</svg>

          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
            <h2>Monster</h2>
            <a>monster@gmail.com</a>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

        </>
    )
}