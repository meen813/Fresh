import Link from "next/link"


export default function Home() {
  let name = 'park';

  return (
    <div>
      <h4 style={{ color:'red', fontSize:'30px'}} className="title">Apple Fresh</h4>
      <p className="title-sub">By dev {name}</p>
    </div>
  )
}

