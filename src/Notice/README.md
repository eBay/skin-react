# SkinNotice

## SkinNotice Usage

```react
<SkinNotice
  title={notice.title}
  variant={notice.color as NoticeVariant}
  id={`page-notice-${index}`}
  a11yText={`page notice ${index}`}
  iconName={notice.icon as IconName}
  content={<p>{notice.color} message</p>}
  hidden={hidden}
  key={index}
>
    <Button variant="secondary" className="btn--transparent" aria-label="Read More Button">
      Continue
    </Button>
</SkinNotice>
```


## SkinNotice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | NoticeType | No | No | "inline", "section", or "page" (default)
`variant`  | String | No | No | "attention" (default for "page" and "inline"), "confirmation" "information", or "celebration" (page notice only).  The default for "section" type will render with grey background and no icon
`a11yText` | String | No | Yes | adding description for the notice for a11y users
`hidden` | Boolean | Yes | No | whether the widget is hidden or not.
`title` | String | No | Yes |
`conent` | ReactNode | No | Yes |
`iconName` | IconName | No | Yes |
