# gatsby-plugin-readingtime-contentful

Adds a medium-like reading time estimate to your Gatsby Contentful content. Powered by [`reading-time`](https://github.com/ngryman/reading-time).

## Installation

Install

```bash
yarn add gatsby-plugin-readingtime-contentful
```

```js
// gatsby-config.js
  ...
  plugins: [
    'gatsby-plugin-readingtime-contentful',
     ...
  ],
```

## Usage

### Example query

Where `content` is a rich text field.

```jsx
export const query = graphql`
query MagazineArticles {
  allContentfulArticle{
    edges {
      node {
        title
        locale: node_locale
        createdAt
        content {
          json
          fields {
            readingTime {
              text
              minutes
              time
              words
            }
          }
        }
      }
    }
  }
}

`;
```

### Fields

There are 4 available fields within `readingTime`:

- `text`: '1 min read',
- `minutes`: 1,
- `time`: 60000, (_milliseconds_)
- `words`: 200