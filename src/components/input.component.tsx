// Input component

export interface InputProps {
    id: string
    label: string
    name?: string
    formatter: Formatter // TODO: create a Formatter type
    type?: string
}

const Input = ({
    id,
    label,
    name = id,
    formatter = Iso.id(), // TODO: Check ISO type
    type = "text"
}: InputProps) => {
    // TODO: add component body
}

export default Input