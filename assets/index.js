var cpuhText = ''
function cpuHUpdate() {
    let loadMax = 20
    let data = JSON.parse(this.responseText)
    console.log(data);
    let cpuH = ''
    data.map((server)=>{
        if(server.values > loadMax){
            cpuH += server.name + ', '
        }
    })
    let text = ''
    if(cpuH != ''){
        text = `Наразі наступні сервера мають навантаження більше ${loadMax} `+cpuH
    }else{
        text =`Наразі на всіх серверах CPU Utilisation (nodes) в межах значення ${loadMax}`
    }
    cpuhText = text
    cpuhUpdate(text)
}
function cpuhUpdate(text){
    $('#cpuh').text(text)
}
$("#reload-cpu").on('click',()=>{reloadCpu()})

function reloadCpu(){
    const req = new XMLHttpRequest();
    req.addEventListener("load", cpuHUpdate);
    req.open("GET", "/grafana");
    req.send();
}
function sshDdos(event){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", '/ssh-ddos', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            $("#ssh-response").text(xhr.responseText)
            
        }
    }
    xhr.send("data="+event);
}
function sshCache(event){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", '/ssh-cache', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            $("#ssh-response").text(xhr.responseText)
            
        }
    }
    xhr.send("data="+event);
}

reloadCpu()
$('#ssh-status').on('click',()=>{sshDdos('status')})
$('#ssh-enable').on('click',()=>{
    sshDdos('enable');
    $('#textareas-noc-and-devops').removeClass('hidden')
    $('#textarea-noc-support').val('@channel email inoc@inx.co received a message about ddos, cloudflare changed its status to "under_attack"')
    $('#textarea-devops').val('Привіт\r\nНа нашу почту прийшло повідомлення про ддос\r\nВже переключив cloudflare в статус under_attack \r\n'+cpuhText)
})
$('#ssh-disable').on('click',()=>{
    sshDdos('disable')
    $('#textarea-noc-support').val('I`ll change Cloudflare status to "medium" to see if the attack is complete')
})
$('#ssh-cache-clear').on('click',()=>{
    sshCache('clear')
})
$('#time-detect').text(`${new Date().getHours()}:${new Date().getMinutes()}`)

var blinkTimer
$(document).on('click',()=>{
    $('body').removeClass('blink-bg')
})