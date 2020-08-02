# Stepper

## Stepper Usage

```react
<Stepper
    open
    a11yClosetext = "Close Stepper"
    >

        <h1>Hello World</h1>

</Stepper>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether drawer is open.
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`onShow` |  | drawer opened
`onClose` |  | drawer closed
