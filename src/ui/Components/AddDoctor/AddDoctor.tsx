import AddDcotorDay from "../AddDcotorDay/AddDcotorDay"
import CalendarComponent from "../Calendar/Calendar"
import SelectPage from "../SelectDoctor/SelectDoctor"
import s from "./AddDoctor.module.css"

function AddDoctor() {
    return (
        <div className={s.addDoctor}>
            <h1 className={s.addDoctor_title}>Дата приема</h1>
            <div className={s.addDoctor_container}>
                <section className={s.calender_main}>
                    <h2 className={s.info_title}>Выбрать дату:</h2>
                    <div className={s.calendar}>
                        <CalendarComponent />
                    </div>
                </section>
                <div className={s.addDoctor_actions}>
                    <h3 className={s.selectDoctor_title}>Выбрать врача:</h3>
                    <div className={s.actions_container}>
                        <SelectPage />
                        <AddDcotorDay />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoctor