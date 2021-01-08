# Select

## Select Usage

```react
<Select>
    <SelectOption>Started</SelectOption>
    <SelectOption>Shipped</SelectOption>
    <SelectOption current>Transit</SelectOption>
    <SelectOption>Delivered</SelectOption>
</Select>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`direction` | String | No | No | If set to 'column' will render a vertical stepper. 

## Select Item

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | No | Signifies the current step in the stepper. 
`number` | Number | No | No | The number of the step to render.
`type` | String | No | No | Will explicitly set the visible state of the step item.


