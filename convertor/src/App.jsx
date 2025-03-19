import { useState } from "react"
import InputBox from "./Components/MyinputBox"
import countryList from "./assets/info"
import { CurrencyData } from "./hooks/CurrencyData"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)



  const currencyData = CurrencyData(from)
  const options = Object.keys(currencyData)
  console.log(options);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
    console.log(currencyData);

    console.log(options);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat " style={{ backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, }}>
      <div className="w-full  justify-center items-center  ">
        <div className="text-base sm:text-lg md:text-[2vw] lg:text-[3vw] flex flex-wrap justify-center px-4 bg-black/25 w-full  p-4 text-white ">Global Currency Convertor</div>
        <div className="w-fit  mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30">
          <form className="mx-2 my-2" onSubmit={(e) => {

            e.preventDefault()
            convert()
          }}>

            <div className="w-full mb-1">
              <InputBox

                label="FROM"
                inputAmount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                flagImgSrc={`https://flagsapi.com/${countryList[from]}/flat/64.png `}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox

                label="TO"
                inputAmount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}

                flagImgSrc={`https://flagsapi.com/${countryList[to]}/flat/64.png `}
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>


          </form>
        </div>
      </div>

    </div>
  )

}

export default App