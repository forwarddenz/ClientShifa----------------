import AddAppointment from "../AddAppointment/AddAppointment"
import AppointmentList from "../AppointmentList/AppointmentList"
import s from "./Appointment.module.css"
import doctorImage from "../../assets/doctor-img.png"
import { Link } from "react-router-dom"

function Appointment() {
  return (
    <div className={s.appointment}>
      <div className={s.appointment_menu}>
        <div className={s.doctor}>
          <img src={doctorImage} alt="doctor-img" />
          <div className={s.doctor_info}>
            <h3 className={s.doctor_name}>Гирфанов Салават Рамилевич</h3>
            <p className={s.docot_desc}>Главный врач клиники, врач - травматолог-ортопед</p>
          </div>
        </div>
        <Link to="/" className={s.appointment_exit}>&times;</Link>
      </div>
      <div className={s.appointmentBlocks}>
        <AddAppointment />
        <AppointmentList />
      </div>
    </div>
  )
}

export default Appointment