/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {Category} from '../../.storybook/util/stories-hierarchy';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import StoryBook from '../../.storybook/util/story-setup';
import {Tabs, Tab} from './skin-tab';
const story: any = {
  title: Category.SKINDS6,
  component: Tab,
  decorators: [withKnobs, withInfo]
};

const defaultProps = {};
const list = [1, 2, 3];
const TabContentStorybook = (props) => (
  <>
    <h3>{props.header}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda culpa est nisi porro quae quidem ratione
      repellendus, temporibus. Assumenda atque dolor dolorem eligendi eveniet ipsam modi necessitatibus quos ut?
    </p>
  </>
);
export const _Tab = () => {
  return (
    <div>
      <h2>Default Tabs </h2>
      <Tabs>
        <Tab title="Tab 1">
          <TabContentStorybook header={`Panel 1 Content`} />
        </Tab>
        <Tab title="Tab 2">
          <TabContentStorybook header={`Panel 2 Content`} />
        </Tab>
        <Tab title="Tab 3">
          <TabContentStorybook header={`Panel 3 Content`} />
        </Tab>
      </Tabs>

      <br />
      <br />
      <br />
      <h2>Fake Tabs </h2>
      <Tabs isFake>
        <Tab title="Tab 1" href="#">
          <TabContentStorybook header={`Panel 1 Content`} />
        </Tab>
        <Tab title="Tab 2" href="#" selected>
          <TabContentStorybook header={`Panel 2 Content`} />
        </Tab>
        <Tab title="Tab 3" href="#">
          <TabContentStorybook header={`Panel 3 Content`} />
        </Tab>
      </Tabs>
    </div>
  );
};
export default story;
