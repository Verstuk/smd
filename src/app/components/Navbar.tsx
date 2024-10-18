import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3 py-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          className="p-1 bg-transparent w-[200px] outline-none"
          placeholder="Поиск"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
            <Image src="/message.png" alt="" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative">
            <Image src="/announcement.png" alt="" width={20} height={20}/>
            <div className="absolute -top-3 -right-3 w-4 h-4 flex 
            justify-center items-center bg-red-500 rounded-full text-white text-[9px]">21</div>
        </div>
        <div className="flex flex-col">
            <span className="text-sm leading-3 font-medium">Иванов И.И.</span>
            <span className="text-xs text-gray-500 text-right">Администратор</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
