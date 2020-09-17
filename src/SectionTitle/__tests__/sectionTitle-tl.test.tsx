/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Aaron Nance
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import SkinSectionTitle, {SkinSectionCTA} from '../skin-section-title';

const justTitle = {
  title: 'Title'
};
const titleAndSubtitle = {
  title: 'Title',
  subtitle: 'Subtitle'
};
const cta = {};
let component;
let container;

afterEach(cleanup);

describe('Given a section title with only a title', () => {
  beforeEach(async () => {
    component = {container} = await render(<SkinSectionTitle {...justTitle} />);
  });

  it('renders properly', async () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Given a section with a subtitle', () => {
  beforeEach(async () => {
    component = {container} = await render(<SkinSectionTitle {...titleAndSubtitle} />);
  });

  it('renders properly', async () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Given a section with a subtitle and CTA', () => {
  beforeEach(async () => {
    component = {container} = await render(
      <SkinSectionTitle {...titleAndSubtitle}>
        <SkinSectionCTA href="http://ebay.com" title="See All" iconName="arrow-right-bold" />
      </SkinSectionTitle>
    );
  });

  it('renders properly', async () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Given a section with a subtitle and CTA with no text', () => {
  beforeEach(async () => {
    component = {container} = await render(
      <SkinSectionTitle {...titleAndSubtitle}>
        <SkinSectionCTA href="http://ebay.com" iconName="arrow-right-bold" />
      </SkinSectionTitle>
    );
  });

  it('renders properly', async () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});

/* Left these here to remind me these Marko cases need to be handled.
  it('renders with title tag', async () => {
  it('renders with info', async () => {
  it('renders with overflow', async () => {
  it('renders with large size', async () => {
*/
