import { useState, createContext, ReactNode, FC } from "react"

export type selectedDoctorType = {
    name: string,
    description: string,
    url: string
}

interface SelectedDoctor {
    selectedDoctor: selectedDoctorType,
    setSelectedDoctor: (doctor: selectedDoctorType) => void
}

export const DoctorContext = createContext<SelectedDoctor | undefined>(undefined)

interface DoctorProviderProps {
    children: ReactNode
}

export const DoctorProvider: FC<DoctorProviderProps> = ({ children }) => {
    const [selectedDoctor, setSelectedDoctor] = useState<selectedDoctorType>({
        name: "Гирфанов Салават Рамилевич",
        description: "Главный врач клиники, врач - травматолог-ортопед",
        url: "https://shifaclinic.ru/wp-content/uploads/2022/12/girfanov-500x550.jpg"
    })

    return (
        <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
            {children}
        </DoctorContext.Provider>
    );
}