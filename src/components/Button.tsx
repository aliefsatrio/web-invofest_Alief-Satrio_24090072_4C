interface buttonProps {
  title: string;
}

const Button: React.FC<buttonProps> = ({ title }) => {
  return (
    <button
      className="
      relative 
      px-6 py-3 
      overflow-hidden 
      border 
      border-[#8b2c4a] 
      bg-[#8b2c4a] 
      text-white 
      rounded-lg
      transition-all
      
      before:absolute
      before:right-0
      before:top-0
      before:h-24
      before:w-12
      before:translate-x-20
      before:rotate-6
      before:bg-white
      before:opacity-10
      before:duration-700
      
      hover:before:-translate-x-56
      "
    >
      <span className="relative z-10">
        {title}
      </span>
    </button>
  );
};

export default Button;