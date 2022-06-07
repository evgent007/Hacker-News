import GetComent from "./GetComent"

export default function Coments({ com }) {
  return (
    <ul>
      {com &&
        com.map(c => (
          <li key={c}>
            <GetComent com={c} />
          </li>
        ))}
    </ul>
  )
}