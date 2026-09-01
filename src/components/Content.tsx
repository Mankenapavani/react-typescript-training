interface ContentProps {
  message: string
}

function Content({ message }: ContentProps) {
  return <p>{message}</p>
}

export default Content