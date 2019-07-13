const access_token = 'EAAGvbFeKWf8BAHx0gzux3ZC3PxxOMuCSumlTrXF2dJgJz0eckDkg7pObUcWzEj1tsn4XjAkw7Frw96ZC5qiLJKDsvdeElbpdTXhROeDntjNdmZB6ayZAAyyGp0M1fjURIU7J5sIxPZCxvZCcFBzcOxoMCSBgu5UMd2A6hqcmLJbz76iZCv0RoDR';

var FB=require('fb');

FB.setAccessToken(access_token);
 
var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});