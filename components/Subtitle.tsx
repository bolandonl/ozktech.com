import classnames from 'classnames'

interface Props {
  title: string | JSX.Element
  className?: string
}

function Subtitle({ title, className }: Props) {
  return (
    <div
      className={classnames('text-2xl dark:text-white flex justify-left font-semibold', className)}
    >
      {title}
    </div>
  )
}

export default Subtitle
