import makeServiceWorkerEnv from 'service-worker-mock';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbox: any;
  }
}

describe('Service worker', () => {
  const CacheFirstMock = jest
    .fn()
    .mockImplementation((args) => args)
    .mockName('CacheFirst');

  const NetworkFirstMock = jest
    .fn()
    .mockImplementation((args) => args)
    .mockName('NetworkFirst');

  const StaleWhileRevalidateMock = jest
    .fn()
    .mockImplementation((args) => args)
    .mockName('StaleWhileRevalidate');

  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    Object.defineProperty(window, 'workbox', {
      writable: true,
      value: {
        setConfig: jest.fn(),
        strategies: {
          CacheFirst: CacheFirstMock,
          NetworkFirst: NetworkFirstMock,
          StaleWhileRevalidate: StaleWhileRevalidateMock,
        },
        routing: {
          registerRoute: jest.fn().mockName('registerRoute'),
        },
      },
    });

    jest.resetModules();
  });

  describe('Workbox config', () => {
    it('should enabled debug, if env dev', () => {
      require('./sw.js');
      expect(window.workbox.setConfig).toHaveBeenLastCalledWith({ debug: true });
    });
  });

  describe('Register resource', () => {
    it('should register main', () => {
      require('./sw.js');
      const registerRouteMock = window.workbox.routing.registerRoute;

      expect(registerRouteMock.mock.calls).toContainEqual([
        '/',
        new CacheFirstMock({ cacheName: 'main' }),
      ]);
    });

    it('should register images', () => {
      require('./sw.js');
      const registerRouteMock = window.workbox.routing.registerRoute;

      expect(registerRouteMock.mock.calls).toContainEqual([
        /\.(?:png|gif|jpg|svg|ico)$/,
        new CacheFirstMock({ cacheName: 'images-cache' }),
      ]);

      ['png', 'gif', 'jpg', 'svg', 'ico'].forEach((exp) => {
        expect(/\.(?:png|gif|jpg|svg|ico)$/.test(`http://test/file.${exp}`)).toBeTruthy();
      });
    });

    it('should register js and css', () => {
      require('./sw.js');
      const registerRouteMock = window.workbox.routing.registerRoute;

      expect(registerRouteMock.mock.calls).toContainEqual([
        /\.(?:js|css)$/,
        new CacheFirstMock({ cacheName: 'static-resources' }),
      ]);

      ['js', 'css'].forEach((exp) => {
        expect(/\.(?:js|css)$/.test(`http://test/file.${exp}`)).toBeTruthy();
      });
    });

    it('should register yandex fonts', () => {
      require('./sw.js');
      const registerRouteMock = window.workbox.routing.registerRoute;

      expect(registerRouteMock.mock.calls).toContainEqual([
        /(http|https):\/\/yastatic.net\/*/,
        new CacheFirstMock({ cacheName: 'yandex-fonts' }),
      ]);

      expect(
        /(http|https):\/\/yastatic.net\/*/.test('http://yastatic.net/test/font.wolf2'),
      ).toBeTruthy();
    });

    it('should register api settings', () => {
      require('./sw.js');
      const registerRouteMock = window.workbox.routing.registerRoute;

      expect(registerRouteMock.mock.calls).toContainEqual([
        `${process.env.REACT_APP_API_URL}settings`,
        new NetworkFirstMock({
          cacheName: 'api-settings',
          cacheableResponse: { statuses: [0, 200] },
        }),
      ]);
    });
  });
});
