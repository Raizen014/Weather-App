interface Props {
  message: string
}

export default function Error({ message }: Props) {
  return (
    <div className="text-red-500 mt-6 text-center font-semibold">
      {message}
    </div>
  )
}
