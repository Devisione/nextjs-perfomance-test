import http from 'k6/http';
import { check } from 'k6';

export const options = {
    scenarios: {
        default: {
            executor: "shared-iterations",
            vus: 200,
            iterations: 10000,
            maxDuration: "1m"
        },
    }
};

export default function () {
    const res =  http.get('http://localhost:3000');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
}