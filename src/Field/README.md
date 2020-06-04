# SkinField

## SkinField Usage

```react
<SkinField isBlock>
  <SkinFieldLabel htmlFor={`field-confirmation`} isStacked>
    Field
  </SkinFieldLabel>
  <SkinFieldControl>
    <SkinTextbox id={`field-confirmation`}  />
  </SkinFieldControl>
  <SkinFieldDescription id={`field-confirmation-descripiton`} color="confirmation">
    <span>Field description</span>
  </SkinFieldDescription>
</SkinField>

```

## SkinField Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isBlock` | boolean | No | no | 
`isFluid` | boolean | No | no | 
`isAlignTop` | boolean | No | no | 
`isTable` | boolean | No | no | 
`label` | string | No | no | 

## SkinField Events

HTML Span Element Events

HTML Div Element Events


## FieldControl Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isBlock` | boolean | No | no | 
`isFluid` | boolean | No | no | 


## FieldDescription Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`color` | any | No | no | 
`isBlock` | boolean | No | no | 

## FieldLabel Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isEnd` | boolean | No | no | 
`isStacked` | boolean | No | no | 

