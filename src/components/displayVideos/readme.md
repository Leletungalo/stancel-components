# display-video



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type     | Default               |
| --------- | --------- | ----------- | -------- | --------------------- |
| `heading` | `heading` |             | `string` | `"This is a heading"` |
| `id`      | `id`      |             | `string` | `undefined`           |


## Dependencies

### Depends on

- [video-and-note](../videoAndNotesUpload)
- [delete-videos](../delete-videos)
- [loading-spiner](../loading-spiner)

### Graph
```mermaid
graph TD;
  display-video --> video-and-note
  display-video --> delete-videos
  display-video --> loading-spiner
  style display-video fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
