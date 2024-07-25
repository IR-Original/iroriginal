import { Button, IconButton } from "@mui/material";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
// import { usePathname } from "next/navigation";
import { PiUsers } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import NavLink from "./NavLink";
import LogoutBtn from "./LogoutBtn";
import { BiCommentAdd } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
import { useUserContext } from "../contexts/user";
import SidebarLink from "./SideBarLink";

const menuItems = [];

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  const { userPages } = useUserContext();

  return (
    <aside
      className={`side-bar ${isOpen ? "right-0" : "-right-[300px]"} lg:right-0`}
    >
      <div className="content p-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between lg:justify-center items-center mb-10">
              <Logo />
              <IconButton className="lg:hidden" onClick={() => onClose()}>
                <IoMdClose />
              </IconButton>
            </div>

            <ul>
              {/* <li>
                <Link
                  onClick={onClose}
                  to={"/"}
                  className={`flex items-center gap-2 rounded-md mb-2 py-2 px-4 ${
                    pathname === "/" && "bg-blue-800 text-white"
                  }`}
                >
                  <PiUsers />
                  کاربران
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClose}
                  to={"/add-sms-category"}
                  className={`flex items-center gap-2 rounded-md mb-2 py-2 px-4 ${
                    pathname === "/add-sms-category" && "bg-blue-800 text-white"
                  }`}
                >
                  <BiCommentAdd />
                  افزودن دسته بندی پیامک
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClose}
                  to={"/send-sms"}
                  className={`flex items-center gap-2 rounded-md mb-2 py-2 px-4 ${
                    pathname === "/send-sms" && "bg-blue-800 text-white"
                  }`}
                >
                  <RiMailSendLine />
                  ارسال پیامک
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClose}
                  to={"/all-sent-messages"}
                  className={`flex items-center gap-2 rounded-md mb-2 py-2 px-4 ${
                    pathname === "/all-sent-messages" &&
                    "bg-blue-800 text-white"
                  }`}
                >
                  <RiMailSendLine />
                  پیام های ارسال شده
                </Link>
              </li> */}

              {userPages?.map((page) => (
                <SidebarLink key={page.id} {...page} />
              ))}
            </ul>
          </div>

          <div>
            <LogoutBtn />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
