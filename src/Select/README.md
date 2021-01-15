# Select

_**For Mobile only**_

The `<Select>` is used to create a native `<select>` form element with default browser styling.

## Select Tag

### Select Usage

When no selected option is specified:

```react
<select name="formFieldName">
    <option value="1" />Option 1</option>
    <option value="2" />Option 2</option>
    <option value="3" />Option 3</option>
</select>
```

When a selected option is specified:

```react
<Select name="formFieldName">
    <option value="1" />Option 1</option>
    <option value="2" selected />Option 2</option>
    <option value="3" />Option 3</option>
</Select>
```

### Select Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`borderless` | No | Boolean | No | whether button has borders

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `select` tag. Be sure to include typical HTML attributes for the `select` tag, like `name`.

### select Events

Event | Data |  Description
--- | --- | ---
`change` | `{ el, index, selected }` | option selected
---

## Option Tag

### Option Usage

```react
<option value="1"/>Option 1</option>
```

### Option Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`children` | ReactNode | No | No | text to use in the option
`selected` | Boolean | Yes | No | whether or not the option is selected (**Note:** use the root `select` element's `selected` property to set this property)
`value` | String | Yes | Yes | used for the `value` attribute of the native `<option>`
