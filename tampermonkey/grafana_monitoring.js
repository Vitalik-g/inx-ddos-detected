// ==UserScript==
// @name         Grafana CPU pods monitoring
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://monitoring.inx.co/d/*/noc-dashbord?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inx.co
// @grant        none
// ==/UserScript==

( function() {
    setInterval(async ()=>{
        let range = 0.3 //minutes
        let nowto = (Date.now()).toString()
        let nowfrom = (Date.now() - 1000*(60*range) ).toString()
        let isoto = (new Date(Date.now()).toISOString()).toString()
        let isoFrom = (new Date(Date.now() - 1000*(60*range) ).toISOString()).toString()



        try{
            const response = await fetch("https://monitoring.inx.co/api/ds/query", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-grafana-org-id": "1"
            },
            "referrer": "https://monitoring.inx.co/d/a87fb0d919ec0ea5f6543124e16c42f5/noc-dashbord?orgId=1&refresh=1d&from=now-5m&to=now&viewPanel=28",
            "referrerPolicy": "same-origin",
            "body": "{\"queries\":[{\"datasource\":{\"uid\":\"prometheus\",\"type\":\"prometheus\"},\"expr\":\"(instance:node_cpu_utilisation:rate5m * 100)\",\"instant\":false,\"interval\":\"\",\"intervalFactor\":2,\"legendFormat\":\"{{instance}}\",\"queryType\":\"timeSeriesQuery\",\"refId\":\"A\",\"exemplar\":false,\"requestId\":\"28A\",\"utcOffsetSec\":7200,\"datasourceId\":1,\"intervalMs\":15000,\"maxDataPoints\":800}],\"range\":{\"from\":\""+isoFrom+"\",\"to\":\""+isoto+"\",\"raw\":{\"from\":\""+isoFrom+"\",\"to\":\""+isoto+"\"}},\"from\":\""+nowfrom+"\",\"to\":\""+ nowto+"\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        const json = await response.json();
        console.log(json);

        let info = []

        json.results.A.frames.map((server)=>{
            console.log(server.data.values[1][server.data.values[1].length-1]);
            info.push({
                values: server.data.values[1][server.data.values[1].length-1],
                name: server.schema.name
            })
        })
        console.log(info);

        fetch('http://localhost:1325/grafana/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:info})
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))

        }catch(error){
            console.log(error)
        }
    },10000)






})();