import { notifications } from "../links";
import { activities } from "../links";

const Notification = ({notificationsOpen}) => {
  return (
    <div className={`xl:w-64 md:w-[166px] w-64 border-l border-white/10 p-6 fixed top-0 h-screen right-0 bg-[#1C1C1C]/90 z-10 focus:opacity-0 ${notificationsOpen ? 'w-64': 'w-0'}`}>
      <h3 className="text-white font-medium text-lg">Notifications</h3>
      <ul className="mt-5 space-y-4">
        {notifications.map(notification => (
          <li key={notification.id}>
            <a href="/" className="text-white hover:text-gray-300 flex items-center">
              <div className="bg-[#E3F5FF] text-black text-xl p-1 rounded-lg">{notification.icon}</div>
              <div className="text-sm truncate">
                <p className="ml-3">{notification.title}</p>
                <p className="text-xs text-white/40 ml-3 ">{notification.para}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-white font-medium text-lg md:mt-8">Activities</h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 border-dotted mt-5 ml-4 ">
        {activities.map(activity => (
          <li className="mb-4">
            <span className="absolute flex items-center justify-center rounded-full -left-3">
              <img src={activity.img} alt="Activity image" />
            </span>
            <div className="ml-6">
              <p className="text-sm">{activity.detail}</p>
              <p className="text-xs text-white/40">{activity.para}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Notification;
