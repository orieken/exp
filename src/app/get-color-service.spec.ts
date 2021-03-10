import { GetColorService } from './color-service.map';

describe('GetColorService', () => {
  it('returns NullColorService if key not found', () => {
    const container = GetColorService('reed');
    expect(container?.name).toEqual('NullColorService');
  });

  it(`returns RedColorService for 'Red'`, () => {
    const container = GetColorService('Red');
    expect(container?.name).toEqual('RedColorService');
  });
});
