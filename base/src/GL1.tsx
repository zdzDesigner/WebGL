import { useRef, type FormEvent } from "react"

export function GL1() {
  const canvas = useRef(null)
  console.log({ canvas })
  return (
    <div className="api-tester">
      <canvas ref={canvas} />
    </div>
  )
}
