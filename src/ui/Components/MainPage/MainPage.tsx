import Appointment from "../Appointment/Appointment"
import CalendarComponent from "../Calendar/Calendar"
import { Outlet, Route, Routes } from "react-router-dom"
import Doctors from "../Doctors/Doctors"
import s from "./MainPage.module.css"

function MainPage() {  
  return (
    <main className={s.mainpage}>
      <h1 className={s.mainpage_title}>Главная страница</h1>
      <div className={s.mainpage_container}>
        <section className={s.calender_main}>
          <h2 className={s.info_title}>Выбрать дату:</h2>
          <div className={s.calendar}>
            <CalendarComponent />
          </div>
        </section>
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="appointments" element={<Appointment />} />
        </Routes>
      </div>
      <Outlet />
    </main>
  )
}

export default MainPage