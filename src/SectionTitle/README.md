# SectionTitle

## SectionTitle Usage

```react
<SectionTitle aria-label=" SectionTitle">
    <Icon name="menu" />
</SectionTitle>
```

## ebay-section-title Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`ctaText` | String | No | No | URL text. Optional content to be displayed next to title. `href` is required when using this attribute.
`href` | String | No | No | URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.
`size` | String | No | No | "small", "large", or "giant" (default: medium)
`title` | ReactNode | No | No | The main title content to be displayed. Title tag is required when using other sub-tags.
`subtitle` | ReactNode | No | No | The subtitle content to be displayed
`info` | ReactNode | No | No | Placeholder for `<infotip>` component
`overflow` | ReactNode | No | No | Placeholder for `<menu-button>` component



## SectionCTA Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`title` | any | No | no | 
`href` | string | No | no | 
`iconName` | IconName | No | no | 
`iconProps` | object | No | no | 
