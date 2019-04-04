export interface User {
  id: number,
  Email: String,
  Password: String
  playlistid: number,
}

export interface Users{
  user: Object
}

export interface Users2{
  Users1 : User[]
}