# Breadcrumb

### Breadcrumb Usage

```react
<Breadcrumb id="breadcrumbs-heading" onClick={console.log} a11yText="breadcrumbs">
   <BreadcrumbItem>Hello</BreadcrumbItem>
   <BreadcrumbItem>Hello 2</BreadcrumbItem>
 </Breadcrumb>
```

### Breadcrumb Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11yText` | String | No | no | 

### Breadcrumb Events

HTML Element Events

Event | Description | Data
--- | --- | ---
`onClick` | click breadcrumb items | `{ el }`

# BreadcrumbItem

### BreadcrumbItem Usage

```react
   <BreadcrumbItem>Hello</BreadcrumbItem>
```

### BreadcrumbItem Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isLast` | boolean | No | no | 
`href` | String | No | no | Used to create anchor element


### BreadcrumbItem Events

HTML Anchor Element Events

HTML Button Element Events


**Note:** If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`. Alternatively you can manually `preventDefault` the provided `originalEvent` on the `Breadcrumb` event.
