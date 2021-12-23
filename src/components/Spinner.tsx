import { Spin, SpinProps } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

type SpinnerProps = SpinProps & {
  iconSize?: number
}

export const Spinner = ({ iconSize, ...rest }: SpinnerProps) => {
  const spin = <LoadingOutlined style={{ fontSize: iconSize }} spin />

  return <Spin indicator={spin} {...rest} />
}
