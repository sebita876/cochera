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
        <Division clase="left" id="123"/>
        <Centro id="12323"/>
        <Division clase="right" id="12"/>
      </aside>
    </div>
  )
}
