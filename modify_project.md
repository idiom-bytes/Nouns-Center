# Nouns.Center
This MD will guide you in update Nouns.Center

## Update root pages
===============================
The /pages/ project structure must be updated.
1. There are folders w/ pages
1. There are root pages

Both have to be updated. Some pages have links to: notion pages, nouns-api, youtube, and many others. Some of these urls will only work once your nouns project is deployed and your APIs are up and running. If you are not here yet, you can always reference the original works.

Below are each page, and what you'll need to adjust.

##### intro.tsx
- Start here.
- Copy the Notion pages from LilNouns https://lilnouns.notion.site/lilnouns/Explore-Lil-Nouns-db990658e6ab4cf19121b22642645032 into your own Notion project and modify it to your liking.
- Update url to point to your own Nouns Notion page. Your Nouns page will be loaded into the static props.

##### funding.tsx
- This reads from a second Notion page to load all funding related data.
- This will also read from the nouns subgraph to identify total amount funded

##### groups.tsx
- Use the same Notion pages that were created from LilNouns
- You'll have to create the Groups and Contributor Notion tables
- You can then update the Notion link on top of the page to point towards the Group table
FORM >>> You can create a group form in www.addressform.io to ingest more groups <<< define form fields/parameters could be outlined in a separate readme >>>
- This enables exterior people to submit projects

Example: Group Form
- Name (short string)
- Description (long string)
- Focus (tags)
- Contributors (email addresses list)

##### learn.tsx
- Point towards learning resources. Youtube videos, blog posts, any source of information that will help participants learn about the project.

##### podcast.tsx
- Modify this page inline to modify it. There is no data-binding, so you'll have to update it if needed.

##### dev/faq/media/noun/sponsor/templte/tools.tsx
- Pretty sure I disabled this page from showing. DIY.

## Update content pages
===============================

##### pages/traits/
- You should export all of the traits from your project into 500x500px pngs
- You should plce all of them inside the respective `public/assets/` folder
- You should then update `pages/traits/index.tsx` with the respective information

##### pages/talent/talent form
- You should create a talent form for others to submit community members to the app
FORM >>> You can create a talent form in www.addressform.io to ingest more community members/contributors <<< define form fields/parameters could be outlined in a separate readme >>>
- update `talent-form-data-fetching.js` to update the talent_form
- Potential improvement => move TALENT_FORM_ID to .env
- This enables exterior people to submit talent

Example: Talent Form
- name (short string)
- twitter (long string)
- discord (tags)
- discordId (email address)
- title (short string)
- skills (list)

##### pages/utils/addressform
- Update `addressform-data-fetching-utils.ts` to point ADDRESS_FORM_API_KEY && ADDRESS_FORM_API_BASE_URL to .env file
- Update addressform js file to hook forms together

##### pages/utils/project form
- Update `addressform-data-fetching-utils.ts` to point PROJECT_FORM_ID to .env export file
- This enables exterior people to submit projects

Example: Project Form
title: string
descrtipion: string
creator => Creator(s) : string
url => link : string
image => Thumbnail : string
category => categories : string




## Forms
==============================
Example: Group Form
- Name (short string)
- Description (long string)
- Focus (tags)
- Contributors (email addresses list)

Example: Talent Form
- name (short string)
- twitter (long string)
- discord (tags) - name?
- discordId (email address) - full id
- title (short string)
- skills (list)

Example: Project Form
- title: string
- descrtipion: string
- creator => Creator(s) : string
- url => link : string
- image => Thumbnail : string
- category => categories : string







######
=============================
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
Noun-API.com @ nounapi.png



## Nouns Monorepo
===============================
=> nouns-api - only used for metadata, because everything is deployed, this is unused.




H2O
- 6figs + LPs
- 1.1m into pools + investment into the team
  - 100k into team
  - 1m into pools

What happened
- H2O launched, no traction
- H2O/USDC
- PSDN rewards are gone
- No one is interested in providing liquidity to this pool

- The only have PSDN/ETH now (20-25k)
- H2O/USDC has around 80k (not sure)

The e2e
- i don't know the status of these pools
- trent felt it was the right time and place
- team was excited, they went and did it
- uncomfortably big...
- if both investment and pools have gone to zero, that's it
- alex: i think we have liquidity left in some pools, and that's it

assuming we lost the money
- whatever money is left there, we can use it for something else
- get a plan, and get back to me
- i'll provide the address that injected the funds, and we can go from there
- https://app.h2odata.xyz/#/earn/staking




