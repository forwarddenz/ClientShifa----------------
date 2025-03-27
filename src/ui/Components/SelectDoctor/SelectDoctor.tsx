import classNames from "classnames"
import { DoctorContext, selectedDoctorType } from "../../Contexts/DoctorContext"
import s from "./SelectDoctor.module.css"
import { useContext } from "react"

const state = {
    doctors: [
        {
            "name": "Гирфанов Салават Рамилевич",
            "description": "Главный врач клиники, врач - травматолог-ортопед",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/girfanov-500x550.jpg"
        },
        {
            "name": "Никитин Максим Андреевич",
            "description": "Врач - травматолог-ортопед",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/docs16-1-500x550.jpg"
        },
        {
            "name": "Глубокий Алексей Николаевич",
            "description": "Врач-нейрохирург, невролог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2023/12/img_4407-e1702720805647-500x550.jpg"
        },
        {
            "name": "Вахламова Ольга Александровна",
            "description": "Врач-педиатр",
            "url": "https://shifaclinic.ru/wp-content/uploads/2023/04/vakhlamova-500x550.jpg"
        },
        {
            "name": "Хачатрян Дмитрий Степанович",
            "description": "Врач флеболог, сосудистый хирург",
            "url": "https://shifaclinic.ru/wp-content/uploads/2023/11/attachment-2-e1699202775535-500x550.png"
        },
        {
            "name": "Григорьев Дмитрий Андриянович",
            "description": "Врач-рентгенолог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2023/02/grigorev-500x550.jpg"
        },
        {
            "name": "Бахтиарова Маргарита Александровна",
            "description": "Врач - пульмонолог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/bahtiarova-500x550.jpg"
        },
        {
            "name": "Малишевский Семен Григорьевич",
            "description": "Врач - кардиолог, терапевт, врач функциональной диагностики",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/malishevskiy-500x550.jpg"
        },
        {
            "name": "Самитов Оскар Шевкатович",
            "description": "Врач - невролог высшей категории, Кандидат медицинских наук",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/samitov-500x550.jpg"
        },
        {
            "name": "Лазарева Елена Валерьевна",
            "description": "Врач акушер-гинеколог, репродуктолог, маммолог, детский гинеколог, гинеколог-эндокринолог, врач узи",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/lazareva-500x550.jpg"
        },
        {
            "name": "Алкурди Ирина Петровна",
            "description": "Врач - акушер-гинеколог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/docs7-1-500x550.jpg"
        },
        {
            "name": "Хуснутдинов Иршат Маратович",
            "description": "Врач - хирург, травматолог - ортопед",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/docs6-1-500x550.jpg"
        },
        {
            "name": "Негодяев Виталий Александрович",
            "description": "Врач - терапевт",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/negodyaev-500x550.jpg"
        },
        {
            "name": "Мельникова Ольга Андреевна",
            "description": "Врач - оториноларинголог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/melnikova-1-500x550.jpg"
        },
        {
            "name": "Эгамов Манучехр Аюбович",
            "description": "Врач УЗИ, уролог, хирург",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/egamov-500x550.jpg"
        },
        {
            "name": "Белова Ольга Анатольевна",
            "description": "Врач - дерматовенеролог",
            "url": "https://shifaclinic.ru/wp-content/uploads/2022/12/belova-500x550.jpg"
        }
    ]
}

function SelectPage() {
    const context = useContext(DoctorContext)

    if (!context) {
        return <div>DoctorContext.Provider is missing</div>
    }

    const { setSelectedDoctor, selectedDoctor } = context

    const changeSelectedDoctor = (doctorData: selectedDoctorType) => {
        setSelectedDoctor(doctorData)
    }

    return (
        <div className={s.selectDoctor}>
            <div className={s.doctors}>
                <div className={s.table}>
                    {
                        state.doctors.map((doctor, index) => (
                            <div key={index} className={classNames(
                                s.doctor,
                                { [s.doctor_active]: doctor.name == selectedDoctor.name }
                            )} onClick={() => changeSelectedDoctor(doctor)}>
                                <img src={doctor.url} alt="doctor-img" className={s.doctor_img} />
                                <div className={s.doctor_info}>
                                    <h4 className={s.doctor_name}>{doctor.name}</h4>
                                    <p className={s.docot_desc}>{doctor.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default SelectPage