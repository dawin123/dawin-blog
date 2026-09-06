## About The Project

Personal site with blog section built in.

### Built With

-   [NextJS](https://nextjs.org/)
-   [React Bootstrap](https://react-bootstrap.github.io/)
-   [Contentful](https://www.contentful.com/)

## Getting Started

### Prerequisites
-   npm
    ```sh
    npm install npm@latest -g
    ```

or

-   yarn

```sh
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/dawin123/dawin-blog.git
    ```
2. Install packages
    ```sh
    yarn
    ```

### Running local server

```sh
 CONTENTFUL_SPACE_ID=<space_id> CONTENTFUL_ACCESS_TOKEN=<access_token> yarn dev
```

## Contentful cache revalidation

Published Contentful changes refresh the site without a Vercel deployment. Configure
a Contentful webhook for the production environment with this URL:

```
https://<production-domain>/api/revalidate
```

Enable request verification in **Contentful → Settings → Webhooks → Settings** and
store the generated signing secret as `CONTENTFUL_WEBHOOK_SIGNING_SECRET` in Vercel's
Production environment variables. Enable the webhook for Entry and Asset `publish`,
`unpublish`, and `delete` events only. Do not enable save or auto-save events.
