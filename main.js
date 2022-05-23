const links_social_media = {
  github: 'guiihtto',
  youtube: 'UCAIOVkXXl9cPYCJsrEf7Y4g',
  instagram: 'guiihhenriq',
  facebook: 'guilherme.guiih.h',
  twitter: 'guiihtto'
}
function change_links_social_media() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}
change_links_social_media()

function get_github_user() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_image.src = data.avatar_url
      user_name_text.textContent = data.login
    })
}
get_github_user()

// textContent é uma função que meche na DOM
// Arrow Functions argumentos => {}     Função anonima
// é a versão simplificada de           não se executa usando nomedafuncao()
// function nomedafuncao(argumentos){}
