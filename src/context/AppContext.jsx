import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    flag: 'https://flagcdn.com/w40/bd.png',
    name: 'Bangladesh',
    code: 'BD',
  })
  const [selectedLang, setSelectedLang] = useState('EN')
  const [selectedCurrency, setSelectedCurrency] = useState('TK')

  // Currency conversion rates (TK base)
  const exchangeRates = {
    TK: 1,
    USD: 0.0091,
    EUR: 0.0084,
    GBP: 0.0072,
  }

  const convertPrice = (priceInTK) => {
    const rate = exchangeRates[selectedCurrency] || 1
    const converted = priceInTK * rate
    return selectedCurrency === 'TK'
      ? `TK ${Math.round(converted).toLocaleString()}`
      : `${selectedCurrency} ${converted.toFixed(2)}`
  }

  return (
    <AppContext.Provider value={{
      selectedCountry, setSelectedCountry,
      selectedLang, setSelectedLang,
      selectedCurrency, setSelectedCurrency,
      convertPrice,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)