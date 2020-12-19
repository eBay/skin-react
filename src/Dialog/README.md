# Dialog

## Dialog Usage

```react
<Dialog
    open
    a11yClosetext = "Close Dialog"
    >
        <h1>Hello World</h1>
</Dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether drawer is open.
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`onShow` |  | dialog opened
`onClose` |  | dialog closed.
