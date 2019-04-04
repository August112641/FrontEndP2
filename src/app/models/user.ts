export interface User {
    id: number,
    email: string,
    password: string,
    playlistId: string
  }
  
  export interface Users{
    user: Object
  }
  
  export interface Users2{
    Users1 : User[]
  }