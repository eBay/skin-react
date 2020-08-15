# SkinTabs

## SkinTabs Usage

```react
<SkinTabs>
    <SkinTab title="Tab 1">
      <TabContentStorybook header={`Panel 1 Content`} />
    </SkinTab>
    <SkinTab title="Tab 2">
      <TabContentStorybook header={`Panel 2 Content`} />
    </SkinTab>
    <SkinTab title="Tab 3">
      <TabContentStorybook header={`Panel 3 Content`} />
    </SkinTab>
</SkinTabs>
```

## SkinTabs Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`id` | string | No | no |  
`isFake` | Boolean | No | No | Whether to use link behavior for tab headings

## SkinTab Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`title` | string | No | no |  used to populate tab header
`size` | String | No | No | Can be "regular" / "large". Default "regular"
`children` | ReactNode | No | no |  tab content 






