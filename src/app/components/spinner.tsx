interface IProps {
  visible: boolean
}

export default function Spinner({ visible }: IProps) {
  return visible ?
    <div className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-brand-secondary"></div>
    </div>
    : null
}