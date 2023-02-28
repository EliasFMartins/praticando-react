import { Card } from '../Card/Card'
import style from './SideBar.module.css'

export function SideBar (){
  return (
    <div className={style.side}>
      <Card/>
      
    </div>
  )
}