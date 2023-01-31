const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()

function execCommand(res){
    ssh.connect({
        host: conf.sshIP,
        username: conf.sshUser,
        privateKeyPath: conf.sshKey
      }).then(()=>{
          ssh.execCommand('./purge_cache.sh', { cwd:'/home/ec2-user' }).then(function(result) {
              res.send(result.stdout)
              console.error(result.stderr)
          })
      })
}

module.exports.execCommand = execCommand