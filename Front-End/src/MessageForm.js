import MessageSend from "./MessageSend.js"
/** @jsx jsx */
import { jsx } from "@emotion/core"

const MessageForm = ({ addMessage }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    addMessage({
      content: data.get("content"),
      author: "david",
      creation: Date.now()
    })
    e.target.elements.content.value = ""
  }
  return (
    <form css={MessageSend.form} onSubmit={onSubmit}>
      <input type="input" name="content" css={MessageSend.content} />
      <input type="submit" value="Send" css={MessageSend.send} />
    </form>
  )
}

export default { MessageForm }
