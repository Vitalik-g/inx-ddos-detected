const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()

function execCommand(res,command){
    ssh.connect({
        host: '23.22.208.152',
        username: 'ec2-user',
        privateKeyPath: '/home/acronis/.ssh/inx_coloudflare'
      }).then(()=>{
          ssh.execCommand('./under_attack.sh '+ command, { cwd:'/home/ec2-user' }).then(function(result) {
              res.send(result.stdout)
              console.error(result.stderr)
          })
      })
}

module.exports.execCommand = execCommand