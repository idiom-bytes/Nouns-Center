import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import PageHeader from '../components/Layout/PageHeader';
import PageContent from '../components/Layout/PageContent';
import Subheader from '../components/Subheader';
import Button from '../components/common/Button';
import Table from '../components/groups/Table';

const communitiesNotionLink = 'cb3cd6437dd04150a7e1923ce4b6f0c4';

export async function getStaticProps() {
  let data = [];

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${communitiesNotionLink}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String('No data was found!');
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {}

  return {
    props: {
      groups: data,
    },
  };
}

const Groups = ({ groups }) => {
  return (
    <>
      <PageHeader>
        <Header title="Groups | OceanNouns Center" />
        <Title title="Groups" />

        <Subheader
          title="Looking for a community?"
          body="A list of all the groups in the OceanNouns universe including their description and Discord invite link. Don't see your group here? Add it to the backlog, and we'll get it up as soon as possbile."
        />
        {/* <Button text="Add your group" link="https://www.addressform.io/f/groups" /> */}
      </PageHeader>

      <PageContent>
        <Table groups={groups} />
      </PageContent>
    </>
  );
};

export default Groups;
