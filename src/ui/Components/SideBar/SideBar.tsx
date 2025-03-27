import s from "./SideBar.module.css"
import logo from "../../assets/logo.png"
import { NavLink, NavLinkRenderProps, useLocation } from "react-router-dom"

function SideBar() {
  const location = useLocation()

  const isActiveLink = (path: string) => {
    return location.pathname === path
  }

  return (
    <aside className={s.sidebar}>
      <div className={s.logo}>
        <img src={logo} alt="logo" className={s.logo_img} />
      </div>
      <ul className={s.sidebar_menu}>
        <NavLink className={({isActive}: NavLinkRenderProps) => isActive || isActiveLink("/appointments") ? s.sidebar_menu_item_active : s.sidebar_menu_item} to="/"><i className="uil uil-estate"></i>Главная страница</NavLink>
        <NavLink className={({isActive}: NavLinkRenderProps) => isActive ? s.sidebar_menu_item_active : s.sidebar_menu_item} to="/add"><i className="uil uil-user-md"></i>Дата приема</NavLink>
      </ul>
    </aside>
  )
}

export default SideBar