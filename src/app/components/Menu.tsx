import Link from "next/link";
import Image from "next/image";

const menuItems = [
    {
        title: 'ГЛАВНАЯ',
        items: [
            {
                icon:"/home.png",
                label:"Главная",
                href:"/",
            },
            {
                icon:"/teacher.png",
                label:"Преподаватели",
                href:"/teachers",
            },
            {
                icon:"/student.png",
                label:"Студенты",
                href:"/students",
            },
            {
                icon:"/parent.png",
                label:"Родители",
                href:"/parents",
            },
            {
                icon:"/parent.png",
                label:"Группы",
                href:"/classes",
            },
            {
                icon:"/lesson.png",
                label:"Предметы",
                href:"/lessons",
            },
            {
                icon:"/exam.png",
                label:"Зачеты",
                href:"/exams",
            },
            {
                icon:"/assignment.png",
                label:"Задания",
                href:"/assignments",
            },
            {
                icon:"/attendance.png",
                label:"Посещаемость",
                href:"/attendance",
            },
            {
                icon:"/calendar.png",
                label:"События",
                href:"/events",
            },
            {
                icon:"/message.png",
                label:"Оповещения",
                href:"/messages",
            },
            {
                icon:"/announcement.png",
                label:"Объявления",
                href:"/announcements",
            },
        
        ],
    },
    {
        title: 'ПРОЧЕЕ',
        items: [
            {
                icon:"/profile.png",
                label:"Профиль",
                href:"/profile",
            },
            {
                icon:"/setting.png",
                label:"Настройки",
                href:"/settings",
            },
            {
                icon:"/logout.png",
                label:"Выход",
                href:"/logout",
            },

        ],
    }

]

const Menu = () => {
    return ( 
        <div className="mt-4 text-sm">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                    {i.items.map((item) => (
                      <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-1 text-gray-700 py-2">
                      <Image src={item.icon} alt="" width={20} height={20} />
                      <span className="hidden lg:block">{item.label}</span>
                      </Link>
                    ))}
                </div>
            ))}
        </div>
     );
};
 
 
export default Menu;