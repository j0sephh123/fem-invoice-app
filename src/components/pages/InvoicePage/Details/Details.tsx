import { Invoice } from "@/types";
import clsx from "clsx";
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
          <div className={clsx(classes.description, classes.label)}>
            {description}
          </div>
        </div>
        <div className={classes.senderAddress}>
          <div className={classes.label}>{street}</div>
          <div className={classes.label}>{city}</div>
          <div className={classes.label}>{postCode}</div>
          <div className={classes.label}>{country}</div>
        </div>
      </div>

      <div className={classes.row2}>
        <div className={classes.createdAt}>
          <div className={classes.label}>Invoice Date</div>
          <div>{createdAt}</div>
        </div>
        <div className={classes.clientName}>
          <div className={classes.label}>Bill To</div>
          <div>{clientName}</div>
        </div>
        <div className={classes.clientEmail}>
          <div className={classes.label}>Sent to</div>
          <div>{clientEmail}</div>
        </div>
      </div>

      <div className={classes.row3}>
        <div className={classes.paymentDue}>
          <div className={classes.label}>Payment Due</div>
          <div>{paymentDue}</div>
        </div>
        <div className={classes.clientAddress}>
          <div className={classes.label}>{clientStreet}</div>
          <div className={classes.label}>{clientCity}</div>
          <div className={classes.label}>{clientPostCode}</div>
          <div className={classes.label}>{clientCountry}</div>
        </div>
        <div />
      </div>
    </div>
  );
}
