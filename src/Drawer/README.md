# Drawer

## Drawer Usage

```react
<Drawer
    open
    a11yClosetext = "Close Drawer"
    onExpanded={ handleExpand }>

        <h1>Hello World</h1>

</Drawer>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`expanded` | Boolean | No | No | Whether the drawer is expanded to full height or max 50%
`open` | Boolean | Yes | No | Whether drawer is open.
`noHandle` | Boolean | Yes | No | Whether handle will be shown or not.
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.
`a11yHandleText` | String | No | Yes | A11y text for draggable handle

## Events

Event | Data | Description
--- | --- | ---
`onShow` |  | drawer opened
`onClose` |  | drawer closed. Triggered also when user drags down on handle (touch only) when dialog is not expanded
`onExpanded` |  | drawer expanded to full page height. Event is triggered on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded
`onCollapsed` |  | drawer collapsed back to max 50%. Event is triggered on drags do
