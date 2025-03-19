import React from "react"

function InputBox({
    label,
    flagImgSrc,
    inputAmount,
    selectCurrency,
    currencyOptions = [],
    className = "",
    onAmountChange,
    onCurrencyChange


}) {

    return (
        <div className={`bg-black/20 p3 rounded-lg text-sm flex ${className}`}>
            <div className="w-full">
                <label htmlFor="" className="text-white mb-2 inline-block ">
                    {label}
                </label>
                <input
                    type="numbeer"
                    className="outline-stone-100 w-full bg-transparent py-1.5 border-slate-500 text-lg text-white"
                    placeholder="Amount"
                    value={inputAmount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className=" flex w-1/2 flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full ">Currency Type</p>
                <img src={flagImgSrc} alt="" className="w-1/2 rounded-lg" />
                <select
                    className="rounded-lg px-1 py-1 bg-transparent cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => {

                        return <option key={currency} value={currency}>
                            {currency}
                        </option>
                    })}
                </select>
            </div>
        </div>
    )

}


export default InputBox;