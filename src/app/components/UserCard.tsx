import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-800 font-bold">18-10-2024</span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-3xl font-semibold my-4">1.234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-600">{type}</h2>
    </div>
  );
};

export default UserCard;
