/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header';
import PageContent from '../../components/Layout/PageContent';
import PageHeader from '../../components/Layout/PageHeader';
import Title from '../../components/Title';
import Button from '../../components/common/Button';
import Subheader from '../../components/Subheader';
import Link from '../../components/Link';
import Status from '../../components/common/Status';
import TextContent from '../../components/Layout/TextContent';

const props = [
  {
    title: 'DAO Residency',
    href: 'https://nouns.wtf/vote/17',
    description:
      'Fund a designer, engineer, and community lead in residency to help push forward new projects.',
    date: 'Nov 28, 2021',
    imageUrl: 'https://pbs.twimg.com/media/FJcno3EWUAUNAhj?format=jpg&name=large',
    author: {
      name: 'Brian',
      href: 'https://twitter.com/pbrianandj',
      imageUrl: 'https://pbs.twimg.com/profile_images/1556491192480608256/HdVUUIeg_400x400.png',
    },
  },

  {
    title: 'Nouns Marketplace',
    href: 'https://nouns.wtf/vote/46',
    description: 'Create a marketplace for Nouns and their extension projects.',
    date: 'April 2, 2022',
    imageUrl: 'https://jacob.energy/img/hyper.png',
    author: {
      name: 'Jacob',
      href: 'https://twitter.com/js_horne',
      imageUrl: 'https://pbs.twimg.com/profile_images/1558913916486426625/lgv0PBh__400x400.jpg',
    },
  },
  {
    title: "Children's Book",
    href: 'https://nouns.wtf/vote/83',
    description:
      'Create an illustrated book that will open a path to the traditional publishing world for Nouns.',
    date: 'May 26, 2022',
    imageUrl:
      'https://cdn.discordapp.com/attachments/979401162358931596/979401735648997496/unknown.png',
    author: {
      name: 'Brandon Mighty',
      href: 'https://twitter.com/brandonmighty',
      imageUrl: 'https://pbs.twimg.com/profile_images/1511768684276109316/vBfvqz3y_400x400.jpg',
    },
  },
];

const proposals = () => {
  return (
    <>
      <PageHeader>
        <Header title="Proposals | OceanNouns" />
        <Title title="Funding: Proposals" />

        <Subheader
          title="For Projects needing 0-5Ξ"
          body="Resources allocated for the long-term growth of the OceanNouns project. All proposals currently go through the same process."
        />
      </PageHeader>

      <PageContent>
        <div>
          <TextContent title="Overview">
            <p>
              This guide will walk you through the steps creating an OceanNouns DAO proposal. If
              you&apos;re unsure if opening a proposal is the correct path to take for your idea to
              receive funding, please refer back to this guide to make sure you&apos;re
              in the correct place. If your idea is still in a nascent stage or the details
              haven&apos;t been fleshed out, you can get feedback in the #proposal-ideas channel in the {' '}
              <Link text="OceanNouns Discord" url="https://discord.gg/TnXjkR5" leavesPage={true} />
              .
            </p>
          </TextContent>

          <TextContent title="Sponsorship">
            <p>
              Only OceanNoun owners (OceanNouners) can submit official proposals to the DAO for funding. If
              you don&apos;t own an OceanNoun yourself then you&apos;ll have to get a sponsor to open the
              proposal for you. You can connect with an OceanNouner sponsor either by waiting on feedback
              on your Discourse post or networking in the Discord.

              If you have raised less than 5Ξ for your project through OceanNouns, you are elligible to apply.
            </p>
          </TextContent>

          <TextContent title="How to write a prop">
            <p>
              In OceanNouns there are 2 type of proposals that can be submitted. <b>Nounish</b> proposals
              focus on proliferating OceanNouns, bringing more OceanNouners to the ecosystem, helping
              to improve the quantity and quality of proposals. <b>Oceanish</b> proposals focus on proliferating
              the Ocean Protocol stack, building new dapps, algorithms, and web3 native lego blocks.
            </p>
            
            <img
              className="border-2 mt-3 rounded-xl p-2 bg-white shadow-md"
              src="/assets/nounish_oceanish.jpg"
              alt="proposal_gradient"
            />

            <p>Your proposal should effectively communicate:</p>
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6">What is the project</li>
              <li className="ml-6">Will it proliferate OceanNouns, or the Ocean Stack?</li>
              <li className="ml-6">How much funding you&apos;ll need</li>
              <li className="ml-6">How the funds break down</li>
              <li className="ml-6">What are the success metrics</li>
            </ul>

            <p>
              It would be wise to keep this information at the very beginning, potentially in a{' '}
              <b>&quot;TLDR section&quot;</b>. It is common for proposals to become very long as
              people write out all the implementation details so, for the sake of the reviewers,
              having this <em>baseline info</em> easily available is appreciated. Think &quot;if
              they don&apos;t read the full proposal, what do they <b>need</b> to know?&quot; Each proposal
              should clearly communicated their idea with a simple overview, a timeline with milestones,
              and a cost breakdown.
            </p>
          </TextContent>

          <TextContent title="Post on Discourse">
            <p>
              Once you have all the details nailed down you will be able to post your proposal on our Discourse server, a
              forum for OceanNouns proposal ideas. At the top click the <b>&quot;+ New Topic&quot;</b>{' '}
              button and post your idea. Be sure to prefix the title with{' '}
              <b>&quot;Proposal: &quot;</b> so that it stands out as a proposal request when others
              are sifting through the entire list. Then, copy/paste your content (copy &amp; images)
              below. Feel free to save your progress and come back later. One note, Discourse
              doesn&apos;t give editing privileges to new accounts until they&apos;ve been active
              for a while so if you submit your post and made a mistake you won&apos;t be able to
              change anything, but you can specify in the comments what was wrong.
            </p>

            <img
              className="border-2 mt-3 rounded-xl p-2 bg-white shadow-md"
              src="/funding/discourse.png"
              alt="discourse"
            />
          </TextContent>

          <TextContent title="Getting Feedback">
            <p>
              This is the refinement period. All proposals undergo budget &amp; impact scrutiny so
              don&apos;t be surprised if yours receives some. It&apos;s the &quot;refining
              fire&quot; that prepares your proposal for the voting period. If your proposal is
              defeated for something obvious or avoidable but you weren&apos;t made aware of it
              beforehand that would&apos;ve been a shame. So take feedback seriously, be prepared to
              push back as well, and ultimately know that criticism isn&apos;t a bad thing. If
              you&apos;re open, take the feedback and modify the proposal before going on-chain with
              it. The aim is to make sure the proposal proliferates OceanNouns effectively based off the
              proposed execution and funds requested.
            </p>
          </TextContent>

          <TextContent title="Voting Timeline">
            <p>
              Once your proposal is submitted it will undergo the <em>&quot;Voting Week&quot;</em>{' '}
              which will be a minimum of 7 days. When the proposal goes up its status becomes{' '}
              <Status status="pending" bgColor="bg-[#4965f0]" />. This is a 2-day window where the
              proposal is public but not able to be voted on. Usually more discussion around the
              prop happens during this time. After those couple days, its status changes to{' '}
              <Status status="active" bgColor="bg-[#4965f0]" /> and OceanNoun holders can vote on it for
              the next 3 days. Barring cancellation or a veto, the proposal will either have{' '}
              <Status status="succeeded" bgColor="bg-[#43b369]" /> or been{' '}
              <Status status="defeated" bgColor="bg-[#e40536]" />. If it succeeds, it will then have
              to be manually queued by connecting your wallet to the offial OceanNouns website, finding
              the prop, and clicking the <b>&quot;Queue Proposal ⌐◨-◨&quot;</b> button. Anyone can
              do this and it will cost some gas. Then the status will be changed to{' '}
              <Status status="queued" bgColor="bg-black" /> and after 2 final days it will be{' '}
              <Status status="executed" bgColor="bg-[#43b369]" /> and you can consider the this
              peroid over, payment will have begun, and the building can begin.
            </p>
            <img className="pt-6 " src="/funding/governance.jpeg" alt="timeline" />
          </TextContent>
        </div>
      </PageContent>
    </>
  );
};

export default proposals;
