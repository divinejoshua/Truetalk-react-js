import { FieldValue, Timestamp } from "firebase/firestore";

interface IMessageBody {
    messageBody     : string,
    receiver?        : string,
    createdAt       : Timestamp | FieldValue,
    messageId       : string
}

export default IMessageBody;