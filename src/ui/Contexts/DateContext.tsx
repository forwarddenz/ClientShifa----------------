import { ReactNode, createContext, useState, FC } from 'react'

export type SelectedDataType = Date

interface DateContextType {
    selectedDate: SelectedDataType,
    setSelectedDate: (date: SelectedDataType) => void
}

export const DateContext = createContext<DateContextType | undefined>(undefined)

interface DataProviderProps {
    children: ReactNode
}

export const DateProvider: FC<DataProviderProps> = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState<SelectedDataType>(new Date())

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    )
}
