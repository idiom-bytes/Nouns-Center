import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';
import Subheader from '../components/Subheader';
import Title from '../components/Title';
import axios from 'axios';
import { formatUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

/*
 * Proposals for which data won't be calculated
 *
 * Set the proposals where DAO staked ETH in Lido, for example
 */
const excludedProposals = [13, 18, 22, 30, 31, 43, 44, 49, 52, 85, 107, 114, 125];

const twentytwoNotionPage = 'ac22114a6c004bafa500e2d824e32dc3';
export async function getStaticProps() {
  let data = [];

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${twentytwoNotionPage}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String('No data was found!');
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {}

  return {
    props: {
      grantsData: data,
    },
  };
}
const funding = [
  {
    source: 'Small Grants',
    range: '0.1 - 0.5',
    totalEth: 0,
    recipients: 0,
    recipientType: 'projects',
    distributed: 'given to',
    link: '/funding/smallgrants',
    linkText: 'Request a grant',
    tagline:
      'Creators who have been given a grant from OceanNouns DAO or received retroactive funding for proliferating OceanNouns.',
    textColor: 'text-[#028940]',
    bgColor: 'bg-[#028940]',
    img: 'sml.png',
  },
  {
    source: 'Prop House',
    range: '0.5 - 1.0',
    totalEth: 0,
    recipients: 0,
    recipientType: 'winners',
    distributed: 'awarded to ',
    link: '/funding/prophouse',
    linkText: 'Submit prop',
    tagline:
      'Submit proposals to prop.house. Each round has a specified ETH amount, and the community votes on who wins.',
    textColor: 'text-blue-base',
    bgColor: 'bg-blue-base',
    img: 'med.png',
  },
  {
    source: 'Proposals',
    range: '1.0 - 5.0',
    totalEth: 0,
    recipients: 0,
    recipientType: 'props',
    distributed: 'across',
    link: '/funding/proposals',
    linkText: 'Learn more',
    tagline:
      'Resources allocated for the long-term growth of the OceanNouns project. Larger in scope and undergo more scrutiny.',
    textColor: 'text-[#E5284A]',
    bgColor: 'bg-[#E5284A]',
    img: 'lg.png',
  },
];

const Funding = () => {
  const [totalProposalEthSpent, setTotalProposalEthSpent] = useState(undefined);
  const [totalProposals, setTotalProposals] = useState(undefined);

  async function getEthSpentOnProposals() {
    let totalSpent = 0;

    const data = await axios({
      url: 'https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        query: `
          query{
            proposals(orderBy: startBlock, orderDirection: asc) {
              id
              values
              status
            }
          }`,
      },
    });

    const props = data.data.data.proposals;

    props.forEach(prop => {
      if (!excludedProposals.includes(parseInt(prop.id)) && prop.status === 'EXECUTED') {
        prop.values.forEach(value => {
          totalSpent = totalSpent + parseFloat(formatUnits(BigNumber.from(value)));
        });
      }
    });

    // filter passed props
    const executedProps = props.filter(prop => prop.status === 'EXECUTED');
    // subtract excluded, passed props
    setTotalProposals(executedProps.length - excludedProposals.length);

    // Round the number for better look
    totalSpent = Math.round(totalSpent);

    setTotalProposalEthSpent(totalSpent);

    return totalSpent;
  }

  useEffect(() => {
    getEthSpentOnProposals();
  }, []);

  return (
    <>
      <PageHeader>
        <Header title="Funding | OceanNouns Center" />
        <Title title="Funding" />

        <Subheader body="Looking to get funding for an OceanNouns project? There are many ways to go about doing so! Below you can compare the different avenues. It's important to take in to consideration project scope and timeline." />
      </PageHeader>

      <PageContent>
        <dl className="mt-5 grid grid-cols-1 flex-col rounded-xl overflow-hidden sm:shadow-none md:grid-cols-3 xs:gap-8 sm:gap-4">
          {funding.map(item => (
            <div key={item.recipients}>
              <a href={item.link} className="cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/funding/${item.img}`} alt={item.img} />
              </a>

              <div className="relative bg-white py-5 px-4 pb-16 sm:pt-6 sm:px-5 xs:shadow-sm sm:shadow-none xs:rounded-lg  overflow-hidden sm:divide-x divide-white ">
                <dt className={`text-nouns text-2xl tracking-wide pb-4 ${item.textColor}`}>
                  {item.source}
                </dt>

                <dd className="mt-1 flex flex-col justify-between items-baseline md:block lg:flex font-extrabold">
                  <div className="items-baseline text-4xl">{item.range}Ξ </div>

                  <div className="pt-3 text-sm flex flex-col gap-1">
                    <div>
                      <span className={`${item.bgColor} text-white px-1 py-px rounded-md`}>
                        {item.source === 'Proposals'
                          ? totalProposals && totalProposals
                          : item.recipients}{' '}
                        {item.recipientType}
                      </span>{' '}
                      funded
                    </div>
                    <div>
                      <span className={`${item.bgColor} text-white px-1 py-px rounded-md`}>
                        {item.source === 'Proposals'
                          ? totalProposalEthSpent &&
                            totalProposalEthSpent.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })
                          : item.totalEth.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}
                        {/* Ξ */} eth
                      </span>{' '}
                      spent
                    </div>
                    <span className="font-normal text-black pt-4">{item.tagline}</span>{' '}
                  </div>
                </dd>

                <div
                  className={`absolute hover:bg-opacity-80 transition cursor-pointer bottom-0 inset-x-0
                     rounded-b-xl ${item.bgColor} px-4 py-3 sm:px-5`}
                >
                  <div className="text-sm ">
                    <a href={item.link} className="font-medium text-white">
                      {' '}
                      {item.linkText} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </PageContent>
    </>
  );
};

export default Funding;
