const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "https://localhost:3000/"
const clientId= "834ac3a117b642e193540691642c1c20"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const getTokenFromURL = () =>{
  return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
    let parts = item.split("=");
    initial[parts[0]]= decodeURIComponent(parts[1]);
    return initial;
  },{});
};//For example, if the URL hash is #access_token=abc123&expires_in=3600, calling getTokenFromUrl() would return { access_token: "abc123", expires_in: "3600" }.

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join( "%20" )}&response_type=token&show_dialog=true`;

