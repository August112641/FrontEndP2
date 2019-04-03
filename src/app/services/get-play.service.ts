import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Playlist } from '../models/playList'
import { TrackJson } from '../models/tacksJson';


const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer '+'BQC9p9yPhztBb_amNSqb80dqiz3_mg8Fu7SnxA41PThMfr1xMmSsnCFqoZNmDQsBy5z3JMSb_i2BrBXVkMbxngTOcKEkLqBzLvXZk5yWUBz5Hc4s7CKAKI9BZexIUxun1QJoogUvZf_tiSj44nhkDhIBwHS_mUBC426kCGGc06WbSeyOE3zRfFbqq9k781QIiPtuuyjaW_i9q7bmp5e0IiwtVQ',
  'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class GetPlayService {
  private searchUrl = 'https://api.spotify.com/v1/search?q='
  private creatUrl = 'https://api.spotify.com/v1/users/1244653463/playlists'
  private baseUrl = 'https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp';
  private addUrl = 'https://api.spotify.com/v1/playlists/'
  private loginUrl = 'https://accounts.spotify.com/authorize?client_id=de0fd359d4704084a2fd54a4a5798e9c&response_type=code&redirect_uri=http://localhost:8888/callback&scope=user-read-private%20user-read-email&state=34fFs29kd09'
  //private logU =     'https://accounts.spotify.com/authorize?client_id=de0fd359d4704084a2fd54a4a5798e9c&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email'
  private wUrl=  'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email'
  //private implicitUrl = 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&redirect_uri=http://localhost:4200/callback&scope=user-read-private%20user-read-email&response_type=token&state=sdsfca'
                  
  constructor(private http: HttpClient) { }

    

    private data: Playlist = {
      
        name: "ListenIn",
        description: "name",
        public: false
    
        
      
    };

    getConfigResponse(): Observable<HttpResponse<AccessCode>> {
      return this.http.get<AccessCode>(
        this.wUrl, { observe: 'response' });
    }

    login():Observable<AccessCode>{
      return this.http.post<AccessCode>(this.wUrl,httpOptions);
    }

    logins(){
      this.http.get(this.loginUrl);
    }
    addTrack(playlist:string, track:string ) : Observable<Track>{
      return this.http.post<Track>(this.addUrl+playlist+"/tracks?uris=spotify:track:"+track,"", httpOptions);
    }

    

   newPlaylist() : Observable<Playlist>{

    return this.http.post<Playlist>(this.creatUrl, this.data, httpOptions);

   }

    getSomething() {
      return this.http.get(this.baseUrl, httpOptions);
    }

    // search(query:string){
    //   return this.http.get(this.searchUrl+query+'&type=track&limit=1',httpOptions);

    // }
    // search(query:string):Observable<Tracks3>{
    //   return this.http.get<Tracks3>(this.searchUrl+query+'&type=track&limit=1',httpOptions);
      
    // }
    // search(query:string):Observable<Item>{
    //   return this.http.get<Item>(this.searchUrl+query+'&type=track&limit=1',httpOptions);
    // }
    
    search(query:string):Observable<TrackJson>{
        return this.http.get<TrackJson>(this.searchUrl+query+'&type=track&limit=1',httpOptions);
      }

   getTrack(id: string ):Observable<Track>{
     return this.http.get<Track>(this.baseUrl, httpOptions);
   }


}
