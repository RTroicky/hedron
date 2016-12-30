import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Page, Row, Column } from '../src';

storiesOf('Layouts', module)
  .add('Column Sizes (xs)', () => (
    <Page debug>
      <p>
        These columns have only have the xs property set.
      </p>
      <Row><Column xs={1} /></Row>
      <Row><Column xs={2} /></Row>
      <Row><Column xs={3} /></Row>
      <Row><Column xs={4} /></Row>
      <Row><Column xs={5} /></Row>
      <Row><Column xs={6} /></Row>
      <Row><Column xs={7} /></Row>
      <Row><Column xs={8} /></Row>
      <Row><Column xs={9} /></Row>
      <Row><Column xs={10} /></Row>
      <Row><Column xs={11} /></Row>
      <Row><Column xs={12} /></Row>
    </Page>
  ))
  .add('Column Sizes (sm)', () => (
    <Page debug>
      <p>
        These columns have only have the sm property set.
      </p>
      <Row><Column sm={1} /></Row>
      <Row><Column sm={2} /></Row>
      <Row><Column sm={3} /></Row>
      <Row><Column sm={4} /></Row>
      <Row><Column sm={5} /></Row>
      <Row><Column sm={6} /></Row>
      <Row><Column sm={7} /></Row>
      <Row><Column sm={8} /></Row>
      <Row><Column sm={9} /></Row>
      <Row><Column sm={10} /></Row>
      <Row><Column sm={11} /></Row>
      <Row><Column sm={12} /></Row>
    </Page>
  ))
  .add('Column Sizes (md)', () => (
    <Page debug>
      <p>
        These columns have only have the md property set.
      </p>
      <Row><Column md={1} /></Row>
      <Row><Column md={2} /></Row>
      <Row><Column md={3} /></Row>
      <Row><Column md={4} /></Row>
      <Row><Column md={5} /></Row>
      <Row><Column md={6} /></Row>
      <Row><Column md={7} /></Row>
      <Row><Column md={8} /></Row>
      <Row><Column md={9} /></Row>
      <Row><Column md={10} /></Row>
      <Row><Column md={11} /></Row>
      <Row><Column md={12} /></Row>
    </Page>
  ))
  .add('Column Sizes (lg)', () => (
    <Page debug>
      <p>
        These columns have only have the lg property set.
      </p>
      <Row><Column lg={1} /></Row>
      <Row><Column lg={2} /></Row>
      <Row><Column lg={3} /></Row>
      <Row><Column lg={4} /></Row>
      <Row><Column lg={5} /></Row>
      <Row><Column lg={6} /></Row>
      <Row><Column lg={7} /></Row>
      <Row><Column lg={8} /></Row>
      <Row><Column lg={9} /></Row>
      <Row><Column lg={10} /></Row>
      <Row><Column lg={11} /></Row>
      <Row><Column lg={12} /></Row>
    </Page>
  ))
  .add('Column Shift (xs)', () => (
    <Page debug>
      <p>
        These columns have no set size, only an xsShift property.
        They automatically flex based on the amount of room left.
      </p>
      <Row><Column xsShift={0} /></Row>
      <Row><Column xsShift={1} /></Row>
      <Row><Column xsShift={2} /></Row>
      <Row><Column xsShift={3} /></Row>
      <Row><Column xsShift={4} /></Row>
      <Row><Column xsShift={5} /></Row>
      <Row><Column xsShift={6} /></Row>
      <Row><Column xsShift={7} /></Row>
      <Row><Column xsShift={8} /></Row>
      <Row><Column xsShift={9} /></Row>
      <Row><Column xsShift={10} /></Row>
      <Row><Column xsShift={11} /></Row>
    </Page>
  ))
  .add('Column Shift (sm)', () => (
    <Page debug>
      <p>
        These columns have no set size, only an smShift property.
        They automatically flex based on the amount of room left.
      </p>
      <Row><Column smShift={0} /></Row>
      <Row><Column smShift={1} /></Row>
      <Row><Column smShift={2} /></Row>
      <Row><Column smShift={3} /></Row>
      <Row><Column smShift={4} /></Row>
      <Row><Column smShift={5} /></Row>
      <Row><Column smShift={6} /></Row>
      <Row><Column smShift={7} /></Row>
      <Row><Column smShift={8} /></Row>
      <Row><Column smShift={9} /></Row>
      <Row><Column smShift={10} /></Row>
      <Row><Column smShift={11} /></Row>
    </Page>
  ))
  .add('Column Shift (md)', () => (
    <Page debug>
      <p>
        These columns have no set size, only an mdShift property.
        They automatically flex based on the amount of room left.
      </p>
      <Row><Column mdShift={0} /></Row>
      <Row><Column mdShift={1} /></Row>
      <Row><Column mdShift={2} /></Row>
      <Row><Column mdShift={3} /></Row>
      <Row><Column mdShift={4} /></Row>
      <Row><Column mdShift={5} /></Row>
      <Row><Column mdShift={6} /></Row>
      <Row><Column mdShift={7} /></Row>
      <Row><Column mdShift={8} /></Row>
      <Row><Column mdShift={9} /></Row>
      <Row><Column mdShift={10} /></Row>
      <Row><Column mdShift={11} /></Row>
    </Page>
  ))
  .add('Column Shift (lg)', () => (
    <Page debug>
      <p>
        These columns have no set size, only an lgShift property.
        They automatically flex based on the amount of room left.
      </p>
      <Row><Column lgShift={0} /></Row>
      <Row><Column lgShift={1} /></Row>
      <Row><Column lgShift={2} /></Row>
      <Row><Column lgShift={3} /></Row>
      <Row><Column lgShift={4} /></Row>
      <Row><Column lgShift={5} /></Row>
      <Row><Column lgShift={6} /></Row>
      <Row><Column lgShift={7} /></Row>
      <Row><Column lgShift={8} /></Row>
      <Row><Column lgShift={9} /></Row>
      <Row><Column lgShift={10} /></Row>
      <Row><Column lgShift={11} /></Row>
    </Page>
  ));