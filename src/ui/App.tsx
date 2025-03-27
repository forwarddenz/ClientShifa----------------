import { useEffect } from 'react'
import s from './App.module.css'
import MainPage from './Components/MainPage/MainPage'
import SideBar from './Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import AddDoctor from './Components/AddDoctor/AddDoctor'

function App() {

  useEffect(() => {
    // @ts-ignore
    window.electron.subscribeStatistics((stats) => console.log(stats))
  }, [])

  return (

    <div className='app'>
      <div className={s.container}>
        <SideBar />
        <Routes>
          <Route path='/*' element={<MainPage />} />
          <Route path='/add' element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
