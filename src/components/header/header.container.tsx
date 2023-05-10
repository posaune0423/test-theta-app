import { FunctionComponent } from 'react'
import { Header as HeaderComponent } from './header'

export type Props = {
  handler: () => void
  mode: boolean
}

export const Header: FunctionComponent<Props> = (props) => {
  return <HeaderComponent handler={props.handler} mode={props.mode} />
}
