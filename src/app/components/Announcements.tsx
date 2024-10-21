"use client";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between pt-5">
        <h1 className="text-2xl font-semibold">Объявления</h1>
        <span className="text-xs text-gray-400">смотреть все</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1" >01.01.2023</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit. Voluptatum doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaPurpleLight p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1" >01.01.2023</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit. Voluptatum doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1" >01.01.2023</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit. Voluptatum doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque doloremque</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
