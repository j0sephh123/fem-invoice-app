import React, { PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import classes from './EditInvoiceDialog.module.css';

const EditInvoiceDialog = ({ children }: PropsWithChildren) => (
  <Dialog.Portal>
    <Dialog.Overlay className={classes.DialogOverlay}>
      <Dialog.Content className={classes.DialogContent}>{children}</Dialog.Content>
    </Dialog.Overlay>
  </Dialog.Portal>
);

export default EditInvoiceDialog;
