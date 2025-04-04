export default function Slidebarpage(){
    return (
         <>
        
        <button
  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-blue-500 bg-gray-700 hover:text-white focus:outline-none"
  aria-expanded="false"
  aria-controls="team-dropdown"
>
  <div className="flex items-center">
    <svg
      className="h-5 w-5 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    Team
  </div>
  <svg
    className="ml-2 h-5 w-5 transform transition-transform duration-200"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
</button>




         </>
    );
}