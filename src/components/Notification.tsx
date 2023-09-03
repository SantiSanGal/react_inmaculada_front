import { FC } from "react";

interface  Props {
    message: string;
}

export const Notification:FC<Props> = ({ message }) => {
  return (
    <div className="componentNotification">
        {message}
    </div>
  )
}