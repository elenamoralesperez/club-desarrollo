import Link from "next/link"

const header = () => {
    return (
    <div>
        <Link href="/">Home</Link>
        <br></br>
        <Link href="/about">About</Link>
        <br></br>
        <Link href="/contact">Contact</Link>
        <br></br>
    </div>
    )
}

export default header