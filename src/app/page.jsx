import { Estacionamiento } from '@/comoponentes/estacionamiento'
import { Linea } from '@/comoponentes/linea'
import { Centro } from '@/comoponentes/centro'
import { Division } from '@/comoponentes/division'
export default function Home() {
  
  return (
    <div className='fondo'>
      <section>
      </section>
      <aside className='aside'>
        <Division clase="left"/>
        <Centro/>
        <Division clase="right"/>
      </aside>
    </div>
  )
}
