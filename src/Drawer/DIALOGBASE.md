# DialogBase

## DialogBase Usage

```react
<DialogBase
    open
    a11yClosetext = "Close DialogBase"
    onCloseBtnClick={ handleCloseBtnClick }>

        <h1>Hello World</h1>

</DialogBase>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`tag`  | 'div' or 'span' | No | No | ---
`open` | Boolean | Yes | No | Whether drawer is open.
`type` | String | No | No | Can be "" / "" / ""
`classPrefix` | String | No | No | "" (default) / modifies the base prefix for all Skin classes in the component
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`windowClass` | String | No | No | "" (default) / modifies the base prefix for all Skin classes in the component
`header` | String | No | No | element placeholder
`footer` | String | No | No | element placeholder
`isModal` | Boolean | No | No | Whether drawer is model.
`top` | --- | --- | --- | ---
`buttonPosition` | --- | --- | --- | ---
`a11yCloseText`| String | No | Yes | A11y text for close button and mask.
`baseEl` | String | No | No | modify the tag be "div" (default) / "" / ""
`transitionEl` | String | No | No | modify the tag be "div" (default) / "" / ""

## Events

`onCloseBtnClick` | --- | --- | --- | ---
