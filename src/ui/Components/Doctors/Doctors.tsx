import s from "./Doctors.module.css"
import doctorImage from "../../assets/doctor-img.png"
import { useContext } from "react";
import { DateContext } from "../../Contexts/DateContext";
import { Link } from "react-router-dom";

function Doctors() {
    const context = useContext(DateContext)

    if (!context) {
        return <div>DateContext.Provider is missing!</div>;
    }

    const { selectedDate } = context;

    return (
        <section className={s.interactive}>
            <p className={s.date}>{selectedDate.toLocaleDateString()}</p>
            <div className={s.doctors}>
                <div className={s.table}>
                    {
                        Array(7).fill(0).map((_, index) => (
                            <Link key={index} to="appointments" className={s.doctor}>
                                <img src={doctorImage} alt="doctor-img" />
                                <div className={s.doctor_info}>
                                    <h4 className={s.doctor_name}>Гирфанов Салават Рамилевич</h4>
                                    <p className={s.docot_desc}>Главный врач клиники, врач - травматолог-ортопед</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Doctors