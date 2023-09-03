import './styles/notification.css'
import { FC } from "react";

interface  Props {
    message: string;
    type: string;
}

export const Notification:FC<Props> = ({ message, type }) => {
  return (
    <div className={`componentNotification ${type} `}>
        <p>{message}</p>
    </div>
  )
}