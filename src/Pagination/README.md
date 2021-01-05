# Pagination

## Pagination Usage

```react
 <Pagination a11yText="Pagination" onChangePage={console.log}>
  <PageItem>
    {name}
  </PageItem>
</Pagination>
```

## Pagination Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`initialPage` | number | No | no | 
`pageSize` | number | No | no | 
`onChangePage` | function | No | no | 
`silentMountOnChangePage` | boolean | No | no | 
`a11yText` | string | No | yes | 
`prevHref` | string | No | no | 
`nextHref` | string | No | no | 


## PageItem Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isCurrent` | boolean | No | no | 
