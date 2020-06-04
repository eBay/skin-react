# SkinBreadcrumb

### SkinBreadcrumb Usage

```react
<SkinBreadcrumb id="breadcrumbs-heading" onClick={console.log} a11yText="breadcrumbs">
   <SkinBreadcrumbItem>Hello</SkinBreadcrumbItem>
   <SkinBreadcrumbItem>Hello 2</SkinBreadcrumbItem>
 </SkinBreadcrumb>
```

### SkinBreadcrumb Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11yText` | String | No | no | 

### SkinBreadcrumb Events

HTML Element Events

Event | Description | Data
--- | --- | ---
`onClick` | click breadcrumb items | `{ el }`

# SkinBreadcrumbItem

### SkinBreadcrumbItem Usage

```react
   <SkinBreadcrumbItem>Hello</SkinBreadcrumbItem>
```

### SkinBreadcrumbItem Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isLast` | boolean | No | no | 
`href` | String | No | no | Used to create anchor element


### SkinBreadcrumbItem Events

HTML Anchor Element Events

HTML Button Element Events


**Note:** If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`. Alternatively you can manually `preventDefault` the provided `originalEvent` on the `SkinBreadcrumb` event.
