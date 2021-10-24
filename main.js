/*       // variáveis let e const
      let accept = true
      let user = {
        name: 'Erik Martins',
        phone: 123456789
      }
      //alert(user.name) */
/*       function showMeSomething() {
        alert(links.instagram)
      } */
const linksSocialMedia = {
  github: 'GodWolf277',
  youtube: 'channel/UCCCYcu61gkj87yhOYdRdLwA',
  facebook: 'ErikMartins277',
  instagram: 'erikmartins50',
  linkedin: 'in/erikmartinsbr/'
}
//showMeSomething(link.github)
function changeSocialMediaLinks() {
  /*         for (let i = 0; i <= 10; i++) {
          alert(i)
        } */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    /* li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` */
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
  //document.getElementById('userName').textContent = 'Lucas'
  //userName.textContent = 'Nara Martins'
}
// i = i + 1
// i++
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/* //ARROW FUNCTIONS
function nomeDaFuncao(args){
  //code
}
//função anônima
args => {

}

nomeDaFuncao() */
