import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Title from '../components/Title';
import { NotionRenderer } from 'react-notion';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';

const introToNounsNotionPage = '7cb92d7ffa2a4e5ca9973dbeba0e63ae';

export async function getStaticProps() {
  let data = [];

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${introToNounsNotionPage}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String('No data was found!');
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {}

  return {
    props: {
      docsData: data,
    },
  };
}

const Intro = ({ docsData }) => {
  return docsData ? (
    <>
      <PageHeader>
        <Header title="Intro | OceanNouns" />
        <Title title="Intro" />

        <Subheader
          title="A Brief Introduction to OceanNouns"
          body="If you ever wanted to know what OceanNouns is all about, this is a great place to start."
        />
      </PageHeader>

      <PageContent>
        <div className="introNouns">
          <NotionRenderer blockMap={docsData} />
        </div>
      </PageContent>
    </>
  ) : (
    <></>
  );
};
export default Intro;
