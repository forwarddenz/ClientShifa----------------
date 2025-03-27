import s from "./AppointmentList.module.css"

function AppointmentList() {
  return (
    <table className={s.appointmentlist}>
      <thead>
        <tr>
          <th className={s.time}>Время</th>
          <th className={s.name}>ФИО</th>
          <th className={s.comment}>Комментарий</th>
          <th className={s.phone}>Номер</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={s.time}>8:00-8:20</td>
          <td className={s.name}>Илларионов Б.Н.</td>
          <td className={s.comment}>Иммобилизация гипсовыми повязками и ортезирование</td>
          <td className={s.phone}>+79123456789</td>
          <td className={s.delete_cell}><span className={s.delete_btn}>&times;</span></td>
        </tr>
      </tbody>
    </table>
  )
}

export default AppointmentList