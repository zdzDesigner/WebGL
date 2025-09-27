import { useRef, type FormEvent, useLayoutEffect, useEffect } from "react"

export function GL1() {
  const gl_VERTEX_SHADER = 0x8b31
  const gl_COLOR_BUFFER_BIT = 0x4000

  const blink = (ctx: WebGLRenderingContext) => {
    const time_seconds = Date.now() / 1000
    const oscillating_value = 0.5 * (1 + Math.sin(2 * Math.PI * time_seconds))
    const bcg = [oscillating_value, 0.5, 1, 1]
    ctx.clearColor(bcg[0]!, bcg[1]!, bcg[2]!, bcg[3]!)
    ctx.clear(gl_COLOR_BUFFER_BIT)
    requestAnimationFrame(() => {
      // console.log("xxx")
      blink(ctx)
    })
  }

  const canvas = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    console.log({ canvas })
    const ctx = canvas.current?.getContext("webgl")
    console.log({ ctx })
    ctx?.createShader(gl_VERTEX_SHADER)
    blink(ctx!)
  })
  useEffect(() => {
    // console.log({ canvas })
    // const ctx = canvas.current!.getContext("webgl")
    // console.log({ ctx })
  })

  return (
    <div className="api-tester">
      <canvas ref={canvas} />
    </div>
  )
}
