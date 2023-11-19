# Store Frontend

![Next.js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript.js](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase Auth](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

## Setup

Below steps will guide you, how to set up your project locally. To get a local copy up and running follow these simple example steps.

1. Install pnpm

```
npm i -g pnpm
```

2. Clone repo locally.

```
git clone https://github.com/sub1120/store-client.git
```

3. Install dependencies

```
pnpm i
```

4. Add .env.local file with following variables

```
NEXT_PUBLIC_API_URL=<BACKEND-API-URL>
NEXT_PUBLIC_FIREBASE_API_KEY=<FIREBASE-API-KEY>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<FIREBASE-AUTH-DOMAIN>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<FIREBASE-PROJECT-ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<FIREBASE-STORAGE-BUCKET>
NEXT_PUBLIC_FIREBASE_SENDER_ID=<FIREBASE-SENDER-ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<FIREBASE-APP-ID>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<FIREBASE-MEASUREMENT-ID>
```

Please use your own credentials.

5. Run project locally

```
pnpm dev
```
