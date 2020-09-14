# Stepper

## Stepper Usage

```react
<Stepper>
    <StepperItem>Started</StepperItem>
    <StepperItem>Shipped</StepperItem>
    <StepperItem current>Transit</StepperItem>
    <StepperItem>Delivered</StepperItem>
</Stepper>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`direction` | String | No | No | If set to 'column' will render a vertical stepper. 

## Stepper Item

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | No | Signifies the current step in the stepper. 
`number` | Number | No | No | The number of the step to render.
`type` | String | No | No | Will explicitly set the visible state of the step item.


