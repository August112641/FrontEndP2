export interface User {
  id: number,
  email: String,
  password: String
  playlistid: number,
}

export interface Users{
  user: Object
}

export interface Users2{
  Users1 : User[]
}