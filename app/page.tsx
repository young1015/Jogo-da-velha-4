"use client"

import Image from 'next/image'
import Header from './components/Header'

export default function Home() {

  let jogador = "X"
  let tabela = ["", "", "", "", "", "", "", "", ""]

  function marcar(indice: number) {

    if (tabela[indice] != "") {
      return
    }

    tabela[indice] = jogador

    if (jogador == "X") {
      jogador = "O"
    } else {
      jogador = "X"
    }
    render()
  }

  function render() {

    let tds = document.querySelectorAll("td")

    tds.forEach((td, indice) => {
      td.innerHTML = tabela[indice]
    })


  }

  return (
    <>
      <Header></Header>
      <table className='text-white text-6xl text-center flex justify-center mt-20'>
        <tbody>
          <tr>
            <td onClick={()=> marcar(0)} className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
              {tabela[0]}
            </td>
            <td onClick={()=> marcar(1)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[1]}
            </td>
            <td onClick={()=> marcar(2)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[2]}
            </td>
          </tr>
          <tr>
            <td onClick={()=> marcar(3)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[3]}
            </td>
            <td onClick={()=> marcar(4)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[4]}
            </td>
            <td onClick={()=> marcar(5)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[5]}
            </td>
          </tr>
          <tr>
            <td onClick={()=> marcar(6)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[6]}
            </td>
            <td onClick={()=> marcar(7)}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[7]}
            </td>
            <td onClick={()=> marcar(8  )}  className='border-2 h-[100px] w-[100px] hover:bg-slate-600 transition duration-500'>
            {tabela[8]}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )

}
