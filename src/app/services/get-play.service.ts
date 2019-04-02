import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Type } from '@angular/compiler';
import { Playlist } from '../models/playList'


const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer '+'BQDO1lHv8SMG3tLk_FEVNEfeZRuFv6MylSKC3YRfUJpwiE7sEDX9DLGYqmbdmKl_eDm-g-hPvOxq7co_mDeVyyWwtjvoZTyx7-H5pcGq1lmflOZSQetROfRDoQu2KopjdgvoU9FkTGjijBBdsgT-K_qYIAb3dv84OLXPLMo20x5_OA0298EVDvs5culNfsGt1Rd_mrPrZodJIic8VI8QlSqHtg',
  'Content-Type':'application/json'})};
var util = "";


const loginHeader = {
  headers: new HttpHeaders({'Authorization':'Access-Control-Allow-Origin'})
};
@Injectable({
  providedIn: 'root'
})
export class GetPlayService {
  private searchUrl = 'https://api.spotify.com/v1/search?q='
  private creatUrl = 'https://api.spotify.com/v1/users/1244653463/playlists'
  private baseUrl = 'https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp';
  private addUrl = 'https://api.spotify.com/v1/playlists/'
  private loginUrl = 'https://accounts.spotify.com/authorize?client_id=de0fd359d4704084a2fd54a4a5798e9c&response_type=code&redirect_uri=http://localhost:8888/callback&scope=user-read-private%20user-read-email&state=34fFs29kd09'
  private logU =     'https://accounts.spotify.com/authorize?client_id=de0fd359d4704084a2fd54a4a5798e9c&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email'
  private wUrl=  'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email'
  private implicitUrl = 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&redirect_uri=http://localhost:4200/callback&scope=user-read-private%20user-read-email&response_type=token&state=sdsfca'
                          // https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
  constructor(
    private http: HttpClient
   ) { }

    private log = btoa("username:password");

    private data: Playlist = {
      
        name: "Anugular Playlist",
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

    getSomething(){
      return this.http.get(this.baseUrl, httpOptions);
    }

    // search(query:string){
    //   return this.http.get(this.searchUrl+query+'&type=track&limit=1',httpOptions);

    // }
    search(query:string):Observable<Tracks3>{
      return this.http.get<Tracks3>(this.searchUrl+query+'&type=track&limit=1',httpOptions);
      
    }

   getTrack(id: string ):Observable<Track>{
     return this.http.get<Track>(this.baseUrl, httpOptions);
   }
}
