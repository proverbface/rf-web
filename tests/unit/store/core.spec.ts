import core from '../../../src/store/modules/core';
import MockAdapter from 'axios-mock-adapter';
import { http } from '@/api/http';
import { itemAxios } from '@/api/http/items.api';

const publicMockData = require('../../../public/api/data.json');

const commit = jest.fn();
const context = {
  commit,
};
const payload = { organizationId: '123123123', interactionId: '123sdgsdgh' };

describe('store set public info', () => {
  const thingApiMock = new MockAdapter(http);
  const itemApiMock = new MockAdapter(itemAxios);

  beforeEach(() => {
    thingApiMock.resetHistory();
    itemApiMock.resetHistory();
    commit.mockReset();
  });

  it('set public info with view count when there are interactions', async () => {
    thingApiMock.onGet('/api/data.json').reply(200, publicMockData);
    itemApiMock.onGet('/TEST-P15-0000A-A9').reply(200, {
      id: 'TEST-P15-0000A-A9',
      viewCount: 1000,
    });
    await core.actions.setPublicInfo(context, payload);
    expect(commit).nthCalledWith(1, 'SET_API_ON');
    publicMockData.info.viewCount = 1000;
    expect(commit).nthCalledWith(2, 'SET_PUBLIC_INFO', publicMockData);
  });

  it('set public info without view count when getting item fails', async () => {
    thingApiMock.onGet('/api/data.json').reply(200, publicMockData);
    itemApiMock.onGet('/TEST-P15-0000A-A9').reply(400);
    await core.actions.setPublicInfo(context, payload);
    expect(commit).nthCalledWith(1, 'SET_API_ON');
    expect(commit).nthCalledWith(2, 'SET_PUBLIC_INFO', publicMockData);
  });

  it('set public info without view count when there is no interactions', async () => {
    publicMockData.interactions = [];
    thingApiMock.onGet('/api/data.json').reply(200, publicMockData);

    await core.actions.setPublicInfo(context, payload);
    expect(commit).toHaveBeenCalledWith('SET_API_ON');
    expect(commit).toHaveBeenCalledWith('SET_PUBLIC_INFO', publicMockData);
  });
});
