interface ColoredButton  {
  name: string;
}




export const ColoredButton = ({name}: ColoredButton) => {
  return (

    <button className="bg-[#7C3AED] rounded-xl h-12.5 w-40 hover:bg-purple-700"> 
        <span className="text-white">{name}</span>
    </button>
  )
}


