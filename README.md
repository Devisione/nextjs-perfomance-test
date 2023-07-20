
          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
/          \   |  |\  \ |  (‾)  |
/ __________ \  |__| \__\ \_____/ .io

execution: local
script: k6.js
output: -it

scenarios: (100.00%) 1 scenario, 200 max VUs, 1m30s max duration (incl. graceful stop):
* default: 10000 iterations shared among 200 VUs (maxDuration: 1m0s, gracefulStop: 30s)


     ✓ is status 200

     checks.........................: 100.00% ✓ 10000     ✗ 0
     data_received..................: 283 MB  9.7 MB/s
     data_sent......................: 800 kB  28 kB/s
     http_req_blocked...............: avg=19.77µs  min=0s       med=0s       max=4ms    p(90)=0s       p(95)=0s
     http_req_connecting............: avg=7.2µs    min=0s       med=0s       max=3ms    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=577.8ms  min=328.51ms med=554.92ms max=1.39s  p(90)=654.18ms p(95)=704.37ms
       { expected_response:true }...: avg=577.8ms  min=328.51ms med=554.92ms max=1.39s  p(90)=654.18ms p(95)=704.37ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 10000
     http_req_receiving.............: avg=161.27µs min=0s       med=0s       max=1.07ms p(90)=503.2µs  p(95)=516.29µs
     http_req_sending...............: avg=23.12µs  min=0s       med=0s       max=1ms    p(90)=0s       p(95)=10.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=577.62ms min=328.51ms med=554.72ms max=1.39s  p(90)=654.08ms p(95)=704.01ms
     http_reqs......................: 10000   344.20506/s
     iteration_duration.............: avg=577.91ms min=329.01ms med=554.96ms max=1.39s  p(90)=654.37ms p(95)=704.37ms
     iterations.....................: 10000   344.20506/s
     vus............................: 37      min=37      max=200
     vus_max........................: 200     min=200     max=200
