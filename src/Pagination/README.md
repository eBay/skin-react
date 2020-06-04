# SkinPagination

## SkinPagination Usage

```react
 <SkinPagination a11yText="SkinPagination" onChangePage={console.log}>
  <SkinPageItem>
    {name}
  </SkinPageItem>
</SkinPagination>
```

## SkinPagination Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`initialPage` | number | No | no | 
`pageSize` | number | No | no | 
`onChangePage` | function | No | no | 
`silentMountOnChangePage` | boolean | No | no | 
`a11yText` | string | No | yes | 
`prevHref` | string | No | no | 
`nextHref` | string | No | no | 


## SkinPageItem Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isCurrent` | boolean | No | no | 
