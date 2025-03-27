import s from "./AddDcotorDay.module.css"
import { useState, ChangeEvent, useContext } from "react"
import { DateContext } from "../../Contexts/DateContext"
import { DoctorContext } from "../../Contexts/DoctorContext"

function AddDcotorDay() {
    const [time, setTime] = useState({
        startMinutes: "",
        startHours: "",
        endMinutes: "",
        endHours: ""
    })

    const context_date = useContext(DateContext)
    const context_doctor = useContext(DoctorContext)

    if (!context_date) {
        return <div>DateContext.Provider is missing!</div>
    }

    if (!context_doctor) {
        return <div>DoctorContext.Provider is missing!</div>
    }

    const { selectedDate } = context_date
    const { selectedDoctor } = context_doctor


    const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setTime({
            ...time,
            [name]: value.slice(0, 2)
        })
    }

    return (
        <div className={s.addDoctorDay}>
            <div className={s.doctor}>
                <img src={selectedDoctor.url} alt="doctor-img" className={s.doctor_img} />
                <div className={s.doctor_info}>
                    <h3 className={s.doctor_name}>{selectedDoctor.name}</h3>
                    <p className={s.docot_desc}>{selectedDoctor.description}</p>
                </div>
            </div>
            <div className={s.addDoctorDay_form}>
                <p className={s.date}>Дата: <span>{selectedDate.toLocaleDateString()}</span></p>
                <p className={s.time_text}>Время: </p>
                <div className={s.addDoctorDay_inputs}>
                    <span>С</span>
                    <input type="number" className={s.time} placeholder="00" name="startHours" value={time.startHours} onChange={handleTimeChange} />
                    <span>:</span>
                    <input type="number" className={s.time} placeholder="00" name="startMinutes" value={time.startMinutes} onChange={handleTimeChange} />
                    <span>до</span>
                    <input type="number" className={s.time} placeholder="00" name="endHours" value={time.endHours} onChange={handleTimeChange} />
                    <span>:</span>
                    <input type="number" className={s.time} placeholder="00" name="endMinutes" value={time.endMinutes} onChange={handleTimeChange} />
                </div>
                <button className={s.addDoctorDay_btn}>Добавить</button>
            </div>
        </div>
    )
}

export default AddDcotorDay