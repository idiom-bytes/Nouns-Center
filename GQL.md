# Nouns.Center

CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);

CREATE TABLE [IF NOT EXISTS] Ideas (
  id serial PRIMARY KEY,
  title VARCHAR ( 50 ) UNIQUE NOT NULL,
  description VARCHAR ( 50 ) NOT NULL,
  submittedBy VARCHAR ( 50 ) NOT NULL,
  date DATETIME NOT NULL,
  votes INT,
  liked BOOLEAN,
  isAdmin BOOLEAN 
);

## lib
===============================
db/
admins.ts
hasura.ts
=> add address

login.ts
=> https://hasura.io/jwt/claims

signUser.ts
/api/login/

ne.ts
=> jwt

groups.tsx
=> notion 68f80b714b8e49b29c43527fd5ebe0e8

## Pages
===============================
pages/api/
ideas.tsx
=> ideas => GQL Hasura
=> likes_by_address => GQL Hasura
=> ideas_likes => GQL Hasura

funding.tsx
=> eth_spent_on_proposal => nouns-subgraph 


pages/assets/
=> Connects to various assets such as all of the Nouns traits in a package

pages/dev/
dev[id].tsx
resources.json
=> Nouns Protocol
=> Github Org
=> Nouns Frontend Stream
=> various resources i.e. notion, etc...

pages/funding/proposals.tsx
=> Proposals from PropHouse

pages/funding/smallgrants.tsx
=> notion 68f80b714b8e49b29c43527fd5ebe0e8

pages/history/index.tsx
=> history.json

pages/ideas/index.tsx
=> GQL

pages/projects/index.tsx
=> projects.json
=> get it from ocean airtable

pages/subdaos/index.tsx
=> subdaos.json

pages/talent/index.tsx
=> talent.json

pages/traits/index.tsx
=> traits.json
=> need to upload all images as png into public/traits/

/pages/dev.tsx
/pages/faq.tsx
/pages/funding.tsx
/pages/groups.tsx
=> notion hook
/pages/intro.tsx
=> notion hook
/pages/learn.tsx
=> youtube links to various learning resources
/pages/podcast
=> link to nouns podcast

/utils/talent-form-data/
=> TALENT_FORM_ID => Link talent form

./utils.ts
=> https://api.cloudnouns.com/v1/pfp?ref=nounscenter&utm_source=${idx}
=> what repo is responsible for this



## Nouns Monorepo
===============================
=> nouns-api - only used for metadata, because everything is deployed, this is unused.
