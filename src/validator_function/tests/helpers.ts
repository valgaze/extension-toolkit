import { vi } from "vitest";

/**
 * 
 * 
 * ex. usage
```ts 
const fetchMock = new FetchMock();

  beforeEach(() => {
    fetchMock.reset();
    // Add default mock for all tests that need API
    fetchMock.mock("https://jsonplaceholder.typicode.com/posts", {
      status: 200,
      body: {
        id: 1,
        title: "HELLO WORLD",
        body: 'Original text: "hello world"',
        userId: 1,
      },
    });
  });
```
 * 
 * 
 */
export class FetchMock {
  private routes: Map<string, any>;
  private defaultResponse: { status: number; body: any };
  private mockFn: any;

  constructor() {
    this.routes = new Map();
    this.defaultResponse = { status: 404, body: { error: "Not Found" } };
    this.mockFn = vi.fn(this.mockFetch.bind(this));

    // Setup the mock fetch function
    vi.stubGlobal("fetch", this.mockFn);
  }

  // Add a mock response for a specific URL
  mock(url: string, { status = 200, body = {}, headers = {} } = {}) {
    this.routes.set(url, {
      status,
      body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    return this; // Allow chaining
  }

  // Mock implementation of fetch
  async mockFetch(url: string, options: RequestInit = {}) {
    const route = this.routes.get(url) || this.defaultResponse;

    return {
      status: route.status,
      headers: new Headers(route.headers || {}),
      ok: route.status >= 200 && route.status < 300,
      async json() {
        return route.body;
      },
    };
  }

  // Reset all mocks
  reset() {
    this.routes.clear();
    this.mockFn.mockClear();
  }

  // Verify a specific URL was called
  expectCalled(url: string, times = 1) {
    const calls = this.mockFn.mock.calls.filter(
      (call: any[]) => call[0] === url
    );
    if (calls.length !== times) {
      throw new Error(
        `Expected ${url} to be called ${times} times but was called ${calls.length} times`
      );
    }
  }

  // Get call history for a URL
  getCallsTo(url: string) {
    return this.mockFn.mock.calls.filter((call: any[]) => call[0] === url);
  }
}
