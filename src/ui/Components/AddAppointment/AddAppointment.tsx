import { ChangeEvent, useState } from "react"
import s from "./AddAppointment.module.css"

function AddAppointment() {
  const [name, setName] = useState<string>("")
  const [phone, SetPhone] = useState<string>("")
  const [comment, SetComment] = useState<string>("")
  const [time, setTime] = useState({
    hour: "",
    minute: ""
  })

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    SetPhone(event.target.value)
  }

  const handleCommentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    SetComment(event.target.value)
  }

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setTime({
      ...time,
      [name]: value.slice(0, 2)
    })
  }

  return (
    <section className={s.addappointment}>
      <div className={s.addappointment_top}>
        <input type="text" className={s.input_name} placeholder="ФИО..." value={name} onChange={handleNameInput} />
        <input type="tel" className={s.input_phone} placeholder="Номер телефона..." value={phone} onChange={handlePhoneInput}/>
        <div className={s.time}>
          <input type="number" name="input1" className={s.input_time} placeholder="00" onChange={handleTimeChange} value={time.hour} />
          <span className={s.separator}>:</span>
          <input type="number" name="input2" className={s.input_time} placeholder="00" onChange={handleTimeChange} value={time.minute} />
        </div>
      </div>
      <div className={s.addappointment_bottom}>
        <textarea name="text" className={s.input_comment} placeholder="Коментарий..." value={comment} onChange={handleCommentInput}></textarea>
        <button className={s.addappointment_btn}>Добавить</button>
      </div>
    </section>
  )
}

export default AddAppointment