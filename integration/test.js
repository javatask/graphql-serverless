import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const query = `query Test { state }`;
  const url = `${__ENV.GRAPHQL_URL}/graphql`;
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ query });

  const res = http.post(url, body, { headers });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response contains state': (r) => r.body.includes('state'),
  });
}