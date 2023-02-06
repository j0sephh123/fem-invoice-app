# Summary

This challenge is from [FrontEndMentor](https://www.frontendmentor.io)

# Additional components to install

https://www.radix-ui.com/docs/primitives/components/dialog

## https://github.com/wojtekmaj/react-calendar

# Folder structure ideas
1. abstractions?
Import 3rd party libraries and create an abstraction around them
For example Calendar lib.
An exception would be `react-click-away-listener`, since its API seems straightforward enough and abstracting it seems pointless.

2. primitives/custom - these are the custom ones that are created from scratch - obviously simple ones

3. icons - still think that no matter how much logic is used, icons should be separate

4. pages - definitely separate

5. utility ones - such as Conditional wrapper and Flex?

6. form - not sure if they should be separate from the other types?
Do we actually need to separate form?

7. sections - Header, GoBack

8. repeatables - InvoiceCard

9. composables - still our own, but created using other components from our own? Not sure if it makes sense, but still I really want to try it. 

10. dialogs/modals - should they be in utility ones (5?)


7. **GoBack**
7. **Header**
7. **Invoices**
7. **Sidebar**
8. **InvoiceCard**
10. **EditInvoiceDialog**