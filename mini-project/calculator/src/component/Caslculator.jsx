import React, { useState } from 'react'

export default function Caslculator() {


    let [results, setResults] = useState("")
    let opr = ["+", "-", "÷", "×"]
    let handleClick = (e) => {
        let lastChar = results[results.length - 1]
        let firstChar = results[results, 0]
        let sliceData = results.slice(0, -1)
        if (e.target.innerHTML == "C") {
            setResults("")
        }
        else if (e.target.innerHTML == "=") {
            let finalResult = results.replaceAll("×", "*")
            finalResult = finalResult.replaceAll("÷", "/")
            if (opr.includes(lastChar)) {
                alert("invalid oper...")
            }
            else {
                finalResult = (eval(finalResult).toString())
                setResults(finalResult)
            }
        }
        else if(e.target.innerHTML=="re"){
            setResults(sliceData)
        }
        else {
            let d = e.target.innerHTML


            let finalRes;
            if (opr.includes(d) && opr.includes(lastChar)) {
               
                finalRes = sliceData
            }
            else if (firstChar == "÷" || firstChar == "×") {
                let sData = results.slice(0, 0)
                finalRes = sData

            }
            else {
                finalRes = results
            }


            setResults(finalRes.concat(d))
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gray-700 flex items-center justify-center">

                <div className="bg-gray-800 border-2 border-gray-900 shadow-2xl rounded-lg">

                    <form className="border-b-2 border-gray-900">
                        <input type="text" value={results} className="bg-transparent p-8 rounded-t-lg outline-none focus:bg-gray-700 text-3xl text-right text-white font-mono" />
                    </form>


                    <div className="p-6 text-gray-800 grid grid-cols-4 gap-4 text-xl">
                    <button className="font-mono col-span-1 bg-blue-500 hover:bg-blue-400 rounded-full p-5" onClick={handleClick}>/</button>
                        <button className="font-mono col-span-2 bg-blue-500 hover:bg-blue-400 rounded-full p-5" onClick={handleClick}>C</button>
                        <button className="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" onClick={handleClick}>&divide;</button>

                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>1</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>2</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>3</button>
                        <button className="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" onClick={handleClick}>&times;</button>

                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>4</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>5</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>6</button>
                        <button className="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" onClick={handleClick}>-</button>

                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>7</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>8</button>
                        <button className="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" onClick={handleClick}>9</button>
                        <button className="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" onClick={handleClick}>+</button>

                        <button className="font-mono bg-blue-500 hover:bg-blue-400 rounded-full p-5" onClick={handleClick}>0</button>
                        <button className="font-mono col-span-3 bg-purple-500 hover:bg-purple-400 rounded-full p-5" onClick={handleClick}>=</button>
                    </div>
                </div>

            </div>

        </>
    )
}
