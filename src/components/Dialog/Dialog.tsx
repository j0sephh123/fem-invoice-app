import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogDemo = () => (
  <Dialog.Portal>
    <Dialog.Overlay className="DialogOverlay" />
    <Dialog.Content className="DialogContent">
      <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
      <Dialog.Description className="DialogDescription">
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div
        style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
      >
        <button className="Button green">Save changes</button>
      </div>
      <Dialog.Close asChild>
        <button className="IconButton" aria-label="Close">
          close
        </button>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
);

export default DialogDemo;
