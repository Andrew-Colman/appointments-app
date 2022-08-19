# Onesight Appointments

# Overview:

## frontend:

-   React.js / Next.js
-   Typescript ✔️
-   Chakra-ui ✔️
-   Tailwindcss ✔️
-   Redux (toolkit) store ✔️
-   React context for appointments shared state ✔️
-   Axios (custom instance) ✔️
-   react-hook-form (with validation) ✔️
-   calendar library: `react-big-calendar`

## backend:

-   serverless (next api)
-   auth (github provider)

## db:

-   mongodb
-   prisma

# Running:

```sh
#install
yarn
# or: npm i

# config the db:
npx prisma generate
npx prisma db push

# start
yarn dev

```

## configuration (required)

rename `.env.local` to `.env`

and set the properly environment variables

```env
HOST_API_URL='http://localhost:3000/api/'

NEXTAUTH_URL='http://localhost:3000/'
NEXTAUTH_SECRET='token_secret'

GITHUB_ID='github_id'
GITHUB_SECRET='github_secret'
DATABASE_URL='mongodb+srv://<user>:<password>@<host>/<db>?retryWrites=true&w=majority'
```

> learn to create your auth provider keys here:

> https://docs.github.com/developers/apps/building-oauth-apps/creating-an-oauth-app

---

## structure

-   `features/` <- core app features (state slice, api, components, etc)
-   `components/` <- reusable components
-   `hooks/` <- reusable hooks
-   `store/` <- redux store (state management)
-   `pages/` <- app pages (server-side/static rendered)
-   `pages/api` <- next.js serverless api routes
-   `styles/` <- global styles like: chakra global styles, tailwindcss styles
-   `services` <- custom http client, db connectors
-   `utils/` <- utility scripts like: test-utils, mocks setup, ...
