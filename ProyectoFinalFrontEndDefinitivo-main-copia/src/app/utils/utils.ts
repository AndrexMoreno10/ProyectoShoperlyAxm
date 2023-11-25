export class Utils {
  static getRole(): string {
    const usuario = localStorage.getItem('user')
    console.log(usuario)
    if (usuario) {

      return usuario
    }
    else {
      return ''
    }
  }

  static isRole(role: boolean): boolean{
    const usuario = JSON.parse(localStorage.getItem('user')!)
    
    if (usuario) {
      return usuario.isAdmin == role
    }
    else {
      return false
    }

  }
}
