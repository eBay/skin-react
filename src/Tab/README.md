# Tabs

## Tabs Usage

```react
<Tabs>
    <Tab title="Tab 1">
      <TabContentStorybook header={`Panel 1 Content`} />
    </Tab>
    <Tab title="Tab 2">
      <TabContentStorybook header={`Panel 2 Content`} />
    </Tab>
    <Tab title="Tab 3">
      <TabContentStorybook header={`Panel 3 Content`} />
    </Tab>
</Tabs>
```

## Tabs Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`id` | string | No | no |  
`isFake` | Boolean | No | No | Whether to use link behavior for tab headings

## Tab Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`title` | string | No | no |  used to populate tab header
`size` | String | No | No | Can be "regular" / "large". Default "regular"
`children` | ReactNode | No | no |  tab content 






