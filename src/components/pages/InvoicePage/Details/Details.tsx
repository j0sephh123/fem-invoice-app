import { Invoice } from "@/types";
import classes from "./Details.module.css";

type Props = {
  invoice: Invoice;
};

export default function Details({
  invoice: {
    id,
    description,
    senderAddress: { street, city, postCode, country },
    createdAt,
    clientName,
    clientEmail,
    paymentDue,
    clientAddress: {
      city: clientCity,
      country: clientCountry,
      postCode: clientPostCode,
      street: clientStreet,
    },
  },
}: Props) {
  return (
    <div className={classes.Details}>
      <div className={classes.row1}>
        <div className={classes.idAndDescription}>
          <div className={classes.id}>{id}</div>
          <div className={classes.description}>{description}</div>
        </div>
        <div className={classes.senderAddress}>
          <div>{street}</div>
          <div>{city}</div>
          <div>{postCode}</div>
          <div>{country}</div>
        </div>
      </div>

      <div className={classes.row2}>
        <div className={classes.createdAt}>{createdAt}</div>
        <div className={classes.clientName}>{clientName}</div>
        <div className={classes.clientEmail}>{clientEmail}</div>
      </div>

      <div className={classes.row3}>
        <div className={classes.paymentDue}>{paymentDue}</div>
        <div className={classes.clientAddress}>
          <div>{clientStreet}</div>
          <div>{clientCity}</div>
          <div>{clientPostCode}</div>
          <div>{clientCountry}</div>
        </div>
      </div>
    </div>
  );
}
