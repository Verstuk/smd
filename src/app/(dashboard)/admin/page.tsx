import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
    return ( 
        <div className="p-4 flex flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3">
            {/* USER CARD */}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="студент"/>
                <UserCard type="преподаватель"/>
                <UserCard type="родитель"/>
                <UserCard type="персонал"/>
            </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3"></div>
            

        </div>
     );
}
 
export default AdminPage;