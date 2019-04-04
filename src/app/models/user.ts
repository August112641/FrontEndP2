export interface User {
  id: number,
  email: String,
  password: String
  playlistId: String,
}

export interface Users{
  user: Object
}

export interface Users2{
  Users1 : User[]
}